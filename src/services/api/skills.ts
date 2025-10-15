/**
 * Skills API service
 * Provides methods to fetch skills and skill categories
 */

import { dataClient } from '../client';
import type { SkillCategory, SkillCategories } from '../schemas';

export const skillsAPI = {
  /**
   * Get all skill categories
   */
  getAll: async (): Promise<SkillCategories> => {
    return dataClient.get<SkillCategories>('skills');
  },

  /**
   * Get a specific skill category by ID
   */
  getById: async (id: string): Promise<SkillCategory | undefined> => {
    return dataClient.getById<SkillCategory>('skills', id);
  },
};
