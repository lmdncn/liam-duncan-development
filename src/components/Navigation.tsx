import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavigationLogo from "./Navigation/NavigationLogo";
import NavigationItems from "./Navigation/NavigationItems";
import MobileMenu from "./Navigation/MobileMenu";
import type { NavItem } from "@/types";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Detect if we're on a blog page
  const isOnBlogPage = location.pathname.startsWith('/blog');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { label: "Home", href: "#home" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" }
  ];

  const handleNavigation = (href: string): void => {
    // Always scroll to section if we're on the main page
    if (!isOnBlogPage) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-card border-b border-border/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <NavigationLogo scrolled={scrolled} />
          
          <NavigationItems 
            navItems={navItems}
            scrolled={scrolled}
            isOnBlogPage={isOnBlogPage}
            handleNavigation={handleNavigation}
          />

          <MobileMenu
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            navItems={navItems}
            scrolled={scrolled}
            isOnBlogPage={isOnBlogPage}
            handleNavigation={handleNavigation}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;