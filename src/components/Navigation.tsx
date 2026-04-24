import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import NavigationLogo from "./Navigation/NavigationLogo";
import NavigationItems from "./Navigation/NavigationItems";
import MobileMenu from "./Navigation/MobileMenu";
import { scrollToAnchor } from "@/lib/utils";
import type { NavItem } from "@/types";

const DESKTOP_NAV_ITEMS: NavItem[] = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const MOBILE_NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  ...DESKTOP_NAV_ITEMS,
];

interface NavigationProps {
  minimalNav?: boolean;
}

const Navigation = ({ minimalNav = false }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isFullNav = !minimalNav;

  useEffect(() => {
    if (!isFullNav) {
      setScrolled(false);
      return;
    }
    const handleScroll = () => {
      const next = window.scrollY > 50;
      setScrolled((prev) => (prev === next ? prev : next));
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isFullNav]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const handleNavigation = (href: string): void => {
    if (!isFullNav) return;
    scrollToAnchor(href);
    setIsOpen(false);
  };

  const navSurfaceClass = isFullNav && scrolled
    ? "bg-background/92 backdrop-blur-lg border-b border-border/60"
    : "bg-transparent";

  return (
    <nav className={`${isFullNav ? "fixed" : "absolute"} top-0 left-0 right-0 z-50 transition-all duration-300 ${navSurfaceClass}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <NavigationLogo />
          {isFullNav && (
            <>
              <NavigationItems navItems={DESKTOP_NAV_ITEMS} handleNavigation={handleNavigation} />
              <MobileMenu
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                navItems={MOBILE_NAV_ITEMS}
                handleNavigation={handleNavigation}
              />
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
