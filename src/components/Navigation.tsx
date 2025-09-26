import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import NavigationLogo from "./Navigation/NavigationLogo";
import NavigationItems from "./Navigation/NavigationItems";
import MobileMenu from "./Navigation/MobileMenu";
import type { NavItem } from "@/types";

const PRIMARY_NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" }
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isBlogRoute = location.pathname.startsWith('/blog');
  const shouldRenderPrimaryNav = !isBlogRoute;
  const isStickyNavigation = !isBlogRoute;

  useEffect(() => {
    if (!isStickyNavigation) {
      setScrolled(false);
      return;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isStickyNavigation]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navItems = PRIMARY_NAV_ITEMS;

  const handleNavigation = (href: string): void => {
    if (!shouldRenderPrimaryNav) {
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const isScrolledStyle = isStickyNavigation ? scrolled : false;

  const navPositionClass = isStickyNavigation
    ? 'fixed top-0 left-0 right-0 z-50'
    : 'absolute top-0 left-0 right-0 z-50';

  const scrolledSurfaceClass = 'bg-background/95 backdrop-blur-md shadow-card border-b border-border/50';
  const navSurfaceClass = isStickyNavigation
    ? isScrolledStyle
      ? scrolledSurfaceClass
      : 'bg-transparent'
    : 'bg-transparent';

  return (
    <nav 
      className={`${navPositionClass} transition-all duration-300 ${navSurfaceClass}`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <NavigationLogo scrolled={isScrolledStyle} />

          {shouldRenderPrimaryNav && (
            <NavigationItems 
              navItems={navItems}
              scrolled={isScrolledStyle}
              handleNavigation={handleNavigation}
            />
          )}

          {shouldRenderPrimaryNav && (
            <MobileMenu
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              navItems={navItems}
              scrolled={isScrolledStyle}
              handleNavigation={handleNavigation}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
