import { useCallback, useRef } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useRoutePreloader } from './useRoutePreloader';
import { prefetchBlogPosts, prefetchBlogPost } from './useBlogData';

export const useSmartPreload = () => {
  const queryClient = useQueryClient();
  const { preloadRoute } = useRoutePreloader();
  const hasPreloadedBlog = useRef(false);
  const preloadedPosts = useRef(new Set<string>());

  const preloadBlogWithData = useCallback(async () => {
    if (!hasPreloadedBlog.current) {
      hasPreloadedBlog.current = true;
      // Preload both route and data simultaneously
      await Promise.allSettled([
        preloadRoute('blog'),
        prefetchBlogPosts(queryClient),
      ]);
    }
  }, [preloadRoute, queryClient]);

  const preloadBlogPostWithData = useCallback(async (slug?: string) => {
    if (slug && !preloadedPosts.current.has(slug)) {
      preloadedPosts.current.add(slug);
      // Preload both route and specific post data
      await Promise.allSettled([
        preloadRoute('blogPost'),
        prefetchBlogPost(queryClient, slug),
      ]);
    }
  }, [preloadRoute, queryClient]);

  return {
    preloadBlogWithData,
    preloadBlogPostWithData,
  };
};