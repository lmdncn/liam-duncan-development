/**
 * Skills API service
 * Provides methods to fetch skills and skill categories
 */

import { dataClient } from '../client';

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: string[];
  color: {
    bg: string;
    text: string;
    border: string;
  };
  order: number;
}

export const skillsAPI = {
  /**
   * Get all skill categories
   */
  getAll: async (): Promise<SkillCategory[]> => {
    return dataClient.get<SkillCategory[]>('skills');
  },

  /**
   * Get a specific skill category by ID
   */
  getById: async (id: string): Promise<SkillCategory | undefined> => {
    return dataClient.getById<SkillCategory>('skills', id);
  },
};
