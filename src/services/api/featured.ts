/**
 * Featured content API service
 * Provides methods to fetch featured items/experiences
 */

import { dataClient } from '../client';
import type { FeaturedItem, FeaturedItems } from '../schemas';

export const featuredAPI = {
  /**
   * Get all featured items
   */
  getAll: async (): Promise<FeaturedItems> => {
    return dataClient.get<FeaturedItems>('featured');
  },

  /**
   * Get a specific featured item by ID
   */
  getById: async (id: string): Promise<FeaturedItem | undefined> => {
    return dataClient.getById<FeaturedItem>('featured', id);
  },
};
