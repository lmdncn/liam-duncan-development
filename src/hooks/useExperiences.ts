/**
 * React Query hooks for experiences data
 */

import { useQuery } from '@tanstack/react-query';
import { experiencesAPI } from '@/services/api';
import type { Experience, Experiences } from '@/services/schemas';

/**
 * Hook to fetch all experiences
 */
export const useExperiences = () => {
  return useQuery<Experiences, Error>({
    queryKey: ['experiences'],
    queryFn: experiencesAPI.getAll,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

/**
 * Hook to fetch a specific experience by ID
 */
export const useExperience = (id: string) => {
  return useQuery<Experience | undefined, Error>({
    queryKey: ['experience', id],
    queryFn: () => experiencesAPI.getById(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
  });
};

/**
 * Hook to fetch featured experiences
 */
export const useFeaturedExperiences = () => {
  return useQuery<Experiences, Error>({
    queryKey: ['experiences', 'featured'],
    queryFn: experiencesAPI.getFeatured,
    staleTime: 5 * 60 * 1000,
  });
};
