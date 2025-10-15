/**
 * Education API service
 * Provides methods to fetch education data
 */

import { dataClient } from '../client';
import type { EducationItem, EducationItems } from '../schemas';

export const educationAPI = {
  /**
   * Get all education items
   */
  getAll: async (): Promise<EducationItems> => {
    return dataClient.get<EducationItems>('education');
  },

  /**
   * Get a specific education item by ID
   */
  getById: async (id: string): Promise<EducationItem | undefined> => {
    return dataClient.getById<EducationItem>('education', id);
  },
};
