/**
 * Data client implementations
 * This abstraction allows easy switching between YAML files and CMS API
 */

import yaml from 'js-yaml';
import type { DataClient, DataResource } from './types';
import { DataServiceError } from './types';
import {
  ExperiencesSchema,
  SkillCategoriesSchema,
  ProjectsSchema,
  EducationSchema,
  FeaturedItemsSchema,
  HeroDataSchema,
} from './schemas';
import type { z } from 'zod';

/**
 * Schema map for validating different resources
 */
const schemaMap: Record<DataResource, z.ZodType<any>> = {
  experiences: ExperiencesSchema,
  skills: SkillCategoriesSchema,
  projects: ProjectsSchema,
  education: EducationSchema,
  featured: FeaturedItemsSchema,
  hero: HeroDataSchema,
};

/**
 * YAML-based data client
 * Loads data from YAML files using Vite's import.meta.glob
 */
export class YamlDataClient implements DataClient {
  private dataModules: Record<string, () => Promise<{ default: string }>>;
  private cache: Map<string, unknown> = new Map();

  constructor() {
    // Use Vite's glob import to load all YAML files
    this.dataModules = import.meta.glob('../content/data/*.yaml', {
      query: '?raw',
      import: 'default',
    }) as Record<string, () => Promise<{ default: string }>>;
  }

  /**
   * Load and parse a YAML file
   */
  private async loadYaml<T>(resource: DataResource): Promise<T> {
    // Check cache first
    const cached = this.cache.get(resource);
    if (cached) {
      return cached as T;
    }

    try {
      const path = `../content/data/${resource}.yaml`;
      const loader = this.dataModules[path];

      if (!loader) {
        throw new DataServiceError(
          `Resource not found: ${resource}`,
          resource
        );
      }

      const content = await loader();
      const yamlContent = typeof content === 'string' ? content : content.default;
      const parsed = yaml.load(yamlContent) as T;

      // Cache the result
      this.cache.set(resource, parsed);

      return parsed;
    } catch (error) {
      throw new DataServiceError(
        `Failed to load ${resource}`,
        resource,
        error
      );
    }
  }

  async get<T>(resource: string): Promise<T> {
    const data = await this.loadYaml<Record<string, T>>(resource as DataResource);

    // YAML files have a root key (e.g., "experiences", "skills")
    // Extract the array/object from under that key
    const rootKey = Object.keys(data)[0];
    const extractedData = data[rootKey];

    // Validate with Zod schema if available
    const schema = schemaMap[resource as DataResource];
    if (schema) {
      try {
        return schema.parse(extractedData) as T;
      } catch (error) {
        throw new DataServiceError(
          `Validation failed for ${resource}: ${error instanceof Error ? error.message : 'Unknown error'}`,
          resource,
          error
        );
      }
    }

    return extractedData;
  }

  async getById<T>(
    resource: string,
    id: string
  ): Promise<T | undefined> {
    const items = await this.get<T[]>(resource);

    if (!Array.isArray(items)) {
      throw new DataServiceError(
        `Resource ${resource} is not an array`,
        resource
      );
    }

    return items.find((item: any) => item.id === id);
  }

  /**
   * Clear the cache (useful for development)
   */
  clearCache(): void {
    this.cache.clear();
  }
}

/**
 * CMS API client (future implementation)
 * This will replace YamlDataClient when you add a CMS
 */
export class CMSDataClient implements DataClient {
  constructor(private apiUrl: string, private apiKey?: string) {}

  async get<T>(resource: string): Promise<T> {
    try {
      const response = await fetch(`${this.apiUrl}/${resource}`, {
        headers: {
          'Content-Type': 'application/json',
          ...(this.apiKey && { Authorization: `Bearer ${this.apiKey}` }),
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      return response.json();
    } catch (error) {
      throw new DataServiceError(
        `Failed to fetch ${resource} from CMS`,
        resource,
        error
      );
    }
  }

  async getById<T>(
    resource: string,
    id: string
  ): Promise<T | undefined> {
    try {
      const response = await fetch(`${this.apiUrl}/${resource}/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          ...(this.apiKey && { Authorization: `Bearer ${this.apiKey}` }),
        },
      });

      if (response.status === 404) {
        return undefined;
      }

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      return response.json();
    } catch (error) {
      throw new DataServiceError(
        `Failed to fetch ${resource}/${id} from CMS`,
        resource,
        error
      );
    }
  }
}

/**
 * Create and export the data client instance
 * Switch between YAML and CMS based on environment variables
 */
const createDataClient = (): DataClient => {
  const useCMS = import.meta.env.VITE_USE_CMS === 'true';

  if (useCMS) {
    const apiUrl = import.meta.env.VITE_CMS_API_URL;
    const apiKey = import.meta.env.VITE_CMS_API_KEY;

    if (!apiUrl) {
      console.warn('VITE_CMS_API_URL not set, falling back to YAML client');
      return new YamlDataClient();
    }

    return new CMSDataClient(apiUrl, apiKey);
  }

  return new YamlDataClient();
};

export const dataClient = createDataClient();
