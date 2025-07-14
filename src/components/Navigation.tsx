import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
          {/* Logo */}
          <div 
            className="font-bold text-xl cursor-pointer transition-colors duration-300 hover:text-primary"
            onClick={() => scrollToSection('#home')}
          >
            <span className={scrolled ? 'text-foreground' : 'text-primary-foreground'}>
              Liam Duncan
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`transition-colors duration-300 hover:text-primary font-medium ${
                  scrolled ? 'text-foreground' : 'text-primary-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button 
              size="sm"
              className="bg-primary hover:bg-primary/90 shadow-glow transition-all duration-300"
            >
              Download CV
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className={`h-6 w-6 ${scrolled ? 'text-foreground' : 'text-primary-foreground'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${scrolled ? 'text-foreground' : 'text-primary-foreground'}`} />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border/50 animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2 text-foreground hover:text-primary hover:bg-secondary/50 rounded-md transition-colors duration-300 font-medium"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-3 py-2">
                <Button 
                  size="sm"
                  className="w-full bg-primary hover:bg-primary/90 shadow-glow transition-all duration-300"
                >
                  Download CV
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;