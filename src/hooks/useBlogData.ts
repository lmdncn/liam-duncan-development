import { useQuery, QueryClient } from "@tanstack/react-query";
import {
  getAllBlogPosts,
  getBlogPostBySlug,
  getAllBlogSlugs,
} from "@/lib/blog";
import type { BlogPost } from "@/types";

export const useBlogPosts = () => {
  return useQuery({
    queryKey: ["blogPosts"],
    queryFn: getAllBlogPosts,
    staleTime: Infinity, // Blog posts don't change frequently
    gcTime: Infinity, // Keep in cache indefinitely
  });
};

export const useBlogPost = (slug: string) => {
  return useQuery({
    queryKey: ["blogPost", slug],
    queryFn: () => getBlogPostBySlug(slug),
    staleTime: Infinity,
    gcTime: Infinity,
    enabled: !!slug,
  });
};

export const useBlogSlugs = () => {
  return useQuery({
    queryKey: ["blogSlugs"],
    queryFn: getAllBlogSlugs,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

// Prefetch functions for preloading
export const prefetchBlogPosts = (queryClient: QueryClient) => {
  return queryClient.prefetchQuery({
    queryKey: ["blogPosts"],
    queryFn: getAllBlogPosts,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

export const prefetchBlogPost = (queryClient: QueryClient, slug: string) => {
  return queryClient.prefetchQuery({
    queryKey: ["blogPost", slug],
    queryFn: () => getBlogPostBySlug(slug),
    staleTime: Infinity,
    gcTime: Infinity,
  });
};
