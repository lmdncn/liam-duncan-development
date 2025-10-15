/**
 * Hero section API service
 * Provides methods to fetch hero section data
 */

import { dataClient } from '../client';
import type { HeroData } from '../schemas';

export const heroAPI = {
  /**
   * Get hero section data
   */
  get: async (): Promise<HeroData> => {
    return dataClient.get<HeroData>('hero');
  },
};
