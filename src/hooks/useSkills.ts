/**
 * React Query hooks for skills data
 */

import { useQuery } from '@tanstack/react-query';
import { skillsAPI } from '@/services/api';
import type { SkillCategory, SkillCategories } from '@/services/schemas';

/**
 * Hook to fetch all skill categories
 */
export const useSkills = () => {
  return useQuery<SkillCategories, Error>({
    queryKey: ['skills'],
    queryFn: skillsAPI.getAll,
    staleTime: 10 * 60 * 1000, // 10 minutes - skills rarely change
  });
};

/**
 * Hook to fetch a specific skill category by ID
 */
export const useSkillCategory = (id: string) => {
  return useQuery<SkillCategory | undefined, Error>({
    queryKey: ['skill', id],
    queryFn: () => skillsAPI.getById(id),
    enabled: !!id,
    staleTime: 10 * 60 * 1000,
  });
};
