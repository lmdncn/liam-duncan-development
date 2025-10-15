/**
 * Hero section API service
 * Provides methods to fetch hero section data
 */

import { dataClient } from '../client';

export interface HeroData {
  rotatingRoles: string[];
  headline: string;
  subheadline: string;
}

export const heroAPI = {
  /**
   * Get hero section data
   */
  get: async (): Promise<HeroData> => {
    return dataClient.get<HeroData>('hero');
  },
};
