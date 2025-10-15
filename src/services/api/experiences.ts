/**
 * Experiences API service
 * Provides methods to fetch work experience data
 */

import { dataClient } from '../client';
import type { Experience, Experiences } from '../schemas';

export const experiencesAPI = {
  /**
   * Get all work experiences
   */
  getAll: async (): Promise<Experiences> => {
    return dataClient.get<Experiences>('experiences');
  },

  /**
   * Get a specific experience by ID
   */
  getById: async (id: string): Promise<Experience | undefined> => {
    return dataClient.getById<Experience>('experiences', id);
  },

  /**
   * Get featured experiences
   */
  getFeatured: async (): Promise<Experiences> => {
    const all = await experiencesAPI.getAll();
    return all.filter((exp) => exp.featured === true);
  },
};
