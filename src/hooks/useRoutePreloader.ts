import { useCallback } from "react";

type RoutePreloader = () => Promise<unknown>;

interface RoutePreloaders {
  blog: RoutePreloader;
  blogPost: RoutePreloader;
  notFound: RoutePreloader;
}

const routePreloaders: RoutePreloaders = {
  blog: () => import("../pages/Blog"),
  blogPost: () => import("../pages/BlogPost"),
  notFound: () => import("../pages/NotFound"),
};

export const useRoutePreloader = () => {
  const preloadRoute = useCallback((routeName: keyof RoutePreloaders) => {
    const preloader = routePreloaders[routeName];
    if (preloader) {
      preloader().catch((error) => {
        console.warn(`Failed to preload route ${routeName}:`, error);
      });
    }
  }, []);

  const preloadAllRoutes = useCallback(() => {
    Object.keys(routePreloaders).forEach((routeName) => {
      preloadRoute(routeName as keyof RoutePreloaders);
    });
  }, [preloadRoute]);

  return {
    preloadRoute,
    preloadAllRoutes,
  };
};
