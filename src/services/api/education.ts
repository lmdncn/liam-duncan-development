/**
 * Education API service
 * Provides methods to fetch education data
 */

import { dataClient } from '../client';

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  location: string;
  description: string;
  honors?: string[];
  iconImage?: string;
  order: number;
}

export const educationAPI = {
  /**
   * Get all education items
   */
  getAll: async (): Promise<EducationItem[]> => {
    return dataClient.get<EducationItem[]>('education');
  },

  /**
   * Get a specific education item by ID
   */
  getById: async (id: string): Promise<EducationItem | undefined> => {
    return dataClient.getById<EducationItem>('education', id);
  },
};
