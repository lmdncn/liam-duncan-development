/**
 * React Query hooks for hero section data
 */

import { useQuery } from '@tanstack/react-query';
import { heroAPI, type HeroData } from '@/services/api';

/**
 * Hook to fetch hero section data
 */
export const useHeroData = () => {
  return useQuery<HeroData, Error>({
    queryKey: ['hero'],
    queryFn: heroAPI.get,
    staleTime: 10 * 60 * 1000, // 10 minutes - hero content rarely changes
  });
};
