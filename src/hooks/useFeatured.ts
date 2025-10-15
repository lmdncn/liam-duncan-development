/**
 * React Query hooks for featured content data
 */

import { useQuery } from '@tanstack/react-query';
import { featuredAPI } from '@/services/api';
import type { FeaturedItem, FeaturedItems } from '@/services/schemas';

/**
 * Hook to fetch all featured items
 */
export const useFeatured = () => {
  return useQuery<FeaturedItems, Error>({
    queryKey: ['featured'],
    queryFn: featuredAPI.getAll,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

/**
 * Hook to fetch a specific featured item by ID
 */
export const useFeaturedItem = (id: string) => {
  return useQuery<FeaturedItem | undefined, Error>({
    queryKey: ['featured', id],
    queryFn: () => featuredAPI.getById(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
  });
};
