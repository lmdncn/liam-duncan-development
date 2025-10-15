/**
 * Featured content API service
 * Provides methods to fetch featured items/experiences
 */

import { dataClient } from '../client';
import type { LucideIcon } from 'lucide-react';

export interface FeaturedItem {
  id: string;
  title: string;
  description: string;
  link?: string;
  icon?: LucideIcon;
  iconImage?: string;
  order: number;
}

export const featuredAPI = {
  /**
   * Get all featured items
   */
  getAll: async (): Promise<FeaturedItem[]> => {
    return dataClient.get<FeaturedItem[]>('featured');
  },

  /**
   * Get a specific featured item by ID
   */
  getById: async (id: string): Promise<FeaturedItem | undefined> => {
    return dataClient.getById<FeaturedItem>('featured', id);
  },
};
