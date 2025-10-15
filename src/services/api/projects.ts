/**
 * Projects API service
 * Provides methods to fetch project portfolio data
 */

import { dataClient } from '../client';
import type { Project } from '@/types';

export const projectsAPI = {
  /**
   * Get all projects
   */
  getAll: async (): Promise<Project[]> => {
    return dataClient.get<Project[]>('projects');
  },

  /**
   * Get a specific project by ID
   */
  getById: async (id: string): Promise<Project | undefined> => {
    return dataClient.getById<Project>('projects', id);
  },

  /**
   * Get projects by year
   */
  getByYear: async (year: string): Promise<Project[]> => {
    const all = await projectsAPI.getAll();
    return all.filter((project) => project.year === year);
  },
};
