/**
 * Experiences API service
 * Provides methods to fetch work experience data
 */

import { dataClient } from '../client';
import type { Experience } from '@/types';

export const experiencesAPI = {
  /**
   * Get all work experiences
   */
  getAll: async (): Promise<Experience[]> => {
    return dataClient.get<Experience[]>('experiences');
  },

  /**
   * Get a specific experience by ID
   */
  getById: async (id: string): Promise<Experience | undefined> => {
    return dataClient.getById<Experience>('experiences', id);
  },

  /**
   * Get featured experiences (if needed in the future)
   */
  getFeatured: async (): Promise<Experience[]> => {
    const all = await experiencesAPI.getAll();
    return all.filter((exp: any) => exp.featured === true);
  },
};
