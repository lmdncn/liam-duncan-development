import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download, BookOpen } from "lucide-react";
import { useDownloadResume } from "@/hooks/useDownloadResume";
import { PERSONAL_INFO } from "@/lib/constants";
import { useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { downloadResume } = useDownloadResume();
  const navigate = useNavigate();
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

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" }
  ];

  const handleNavigation = (href: string) => {
    if (isOnBlogPage) {
      // If on blog page, navigate back to main page with section hash
      if (href === '#home') {
        navigate('/');
      } else {
        navigate(`/${href}`);
      }
    } else {
      // If on main page, scroll to section
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
          {/* Logo */}
          <div 
            className="font-bold text-xl cursor-pointer transition-colors duration-300 hover:text-primary"
            onClick={() => navigate('/')}
          >
            <span className={scrolled ? 'text-foreground' : 'text-primary-foreground'}>
              {PERSONAL_INFO.name}
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {!isOnBlogPage && (
              <>
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleNavigation(item.href)}
                    className={`transition-colors duration-300 hover:text-primary font-medium ${
                      scrolled ? 'text-foreground' : 'text-primary-foreground'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <Button
                  size="sm"
                  variant="outline"
                  className={`transition-all duration-300 hover:bg-accent hover:text-accent-foreground ${
                    scrolled 
                      ? 'bg-accent/10 text-accent border-accent/30' 
                      : 'bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground hover:text-primary'
                  }`}
                  onClick={() => navigate('/blog')}
                >
                  <BookOpen className="mr-2 h-4 w-4" />
                  Read My Blog!
                </Button>
              </>
            )}
            <Button 
              size="sm"
              className="bg-primary hover:bg-primary/90 shadow-glow transition-all duration-300"
              onClick={downloadResume}
            >
              <Download className="mr-2 h-4 w-4" />
              Resume
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
              {!isOnBlogPage && (
                <>
                  {navItems.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => handleNavigation(item.href)}
                      className="block w-full text-left px-3 py-2 text-foreground hover:text-primary hover:bg-secondary/50 rounded-md transition-colors duration-300 font-medium"
                    >
                      {item.label}
                    </button>
                  ))}
                  <div className="px-3 py-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full bg-accent/10 text-accent border-accent/30 hover:bg-accent hover:text-accent-foreground transition-all duration-300 mb-2"
                      onClick={() => navigate('/blog')}
                    >
                      <BookOpen className="mr-2 h-4 w-4" />
                      Read My Blog!
                    </Button>
                  </div>
                </>
              )}
              <div className="px-3 py-2">
                <Button 
                  size="sm"
                  className="w-full bg-primary hover:bg-primary/90 shadow-glow transition-all duration-300"
                  onClick={downloadResume}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Resume
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