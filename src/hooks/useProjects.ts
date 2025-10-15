/**
 * React Query hooks for projects data
 */

import { useQuery } from '@tanstack/react-query';
import { projectsAPI } from '@/services/api';
import type { Project } from '@/types';

/**
 * Hook to fetch all projects
 */
export const useProjects = () => {
  return useQuery<Project[], Error>({
    queryKey: ['projects'],
    queryFn: projectsAPI.getAll,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

/**
 * Hook to fetch a specific project by ID
 */
export const useProject = (id: string) => {
  return useQuery<Project | undefined, Error>({
    queryKey: ['project', id],
    queryFn: () => projectsAPI.getById(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
  });
};

/**
 * Hook to fetch projects by year
 */
export const useProjectsByYear = (year: string) => {
  return useQuery<Project[], Error>({
    queryKey: ['projects', 'year', year],
    queryFn: () => projectsAPI.getByYear(year),
    enabled: !!year,
    staleTime: 5 * 60 * 1000,
  });
};
