/**
 * React Query hooks for education data
 */

import { useQuery } from '@tanstack/react-query';
import { educationAPI, type EducationItem } from '@/services/api';

/**
 * Hook to fetch all education items
 */
export const useEducation = () => {
  return useQuery<EducationItem[], Error>({
    queryKey: ['education'],
    queryFn: educationAPI.getAll,
    staleTime: 10 * 60 * 1000, // 10 minutes - education rarely changes
  });
};

/**
 * Hook to fetch a specific education item by ID
 */
export const useEducationItem = (id: string) => {
  return useQuery<EducationItem | undefined, Error>({
    queryKey: ['education', id],
    queryFn: () => educationAPI.getById(id),
    enabled: !!id,
    staleTime: 10 * 60 * 1000,
  });
};
