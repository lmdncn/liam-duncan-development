import { Button } from "@/components/ui/button";
import { Download, BookOpen, X, Menu } from "lucide-react";
import { Link } from "react-router";
import { useDownloadResume } from "@/hooks/useDownloadResume";
import type { NavItem } from "@/types";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  navItems: NavItem[];
  scrolled: boolean;
  handleNavigation: (href: string) => void;
}

const MobileMenu = ({
  isOpen,
  setIsOpen,
  navItems,
  scrolled,
  handleNavigation,
}: MobileMenuProps) => {
  const { downloadResume } = useDownloadResume();

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="sm"
        className="md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X
            className={`h-6 w-6 ${
              scrolled ? "text-foreground" : "text-primary-foreground"
            }`}
          />
        ) : (
          <Menu
            className={`h-6 w-6 ${
              scrolled ? "text-foreground" : "text-primary-foreground"
            }`}
          />
        )}
      </Button>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border/50 animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1">
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
                asChild
                className="w-full bg-accent/10 text-accent border-accent/30 hover:bg-accent hover:text-accent-foreground transition-all duration-300 mb-2"
              >
                <Link to="/blog">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Read My Blog!
                </Link>
              </Button>
            </div>
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
    </>
  );
};

export default MobileMenu;
