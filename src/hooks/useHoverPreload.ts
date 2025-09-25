import { useCallback, useRef } from 'react';
import { useSmartPreload } from './useSmartPreload';
import { useRoutePreloader } from './useRoutePreloader';

type PreloadableRoute = 'blog' | 'blogPost' | 'notFound';

export const useHoverPreload = (routeName: PreloadableRoute, slug?: string) => {
  const { preloadBlogWithData, preloadBlogPostWithData } = useSmartPreload();
  const { preloadRoute } = useRoutePreloader();
  const hasPreloaded = useRef(false);

  const handleMouseEnter = useCallback(() => {
    if (!hasPreloaded.current) {
      hasPreloaded.current = true;
      
      if (routeName === 'blog') {
        preloadBlogWithData();
      } else if (routeName === 'blogPost' && slug) {
        preloadBlogPostWithData(slug);
      } else {
        preloadRoute(routeName);
      }
    }
  }, [preloadBlogWithData, preloadBlogPostWithData, preloadRoute, routeName, slug]);

  const handleFocus = useCallback(() => {
    if (!hasPreloaded.current) {
      hasPreloaded.current = true;
      
      if (routeName === 'blog') {
        preloadBlogWithData();
      } else if (routeName === 'blogPost' && slug) {
        preloadBlogPostWithData(slug);
      } else {
        preloadRoute(routeName);
      }
    }
  }, [preloadBlogWithData, preloadBlogPostWithData, preloadRoute, routeName, slug]);

  return {
    onMouseEnter: handleMouseEnter,
    onFocus: handleFocus,
  };
};