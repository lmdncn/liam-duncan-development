import { Button } from "@/components/ui/button";
import { Download, BookOpen, X, Menu } from "lucide-react";
import { Link } from "react-router";
import { useDownloadResume } from "@/hooks/useDownloadResume";
import type { NavItem } from "@/types";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  navItems: NavItem[];
  handleNavigation: (href: string) => void;
}

const MobileMenu = ({ isOpen, setIsOpen, navItems, handleNavigation }: MobileMenuProps) => {
  const { downloadResume } = useDownloadResume();

  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        className="md:hidden text-muted-foreground hover:text-foreground hover:bg-secondary rounded-sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/97 backdrop-blur-lg border-t border-b border-border animate-fade-in">
          <div className="px-6 py-4 space-y-0.5">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavigation(item.href)}
                className="block w-full text-left px-0 py-3 text-foreground/70 hover:text-foreground border-b border-border/40 last:border-0 transition-colors duration-200 font-medium text-sm"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 flex flex-col gap-2">
              <Button
                size="sm"
                variant="ghost"
                asChild
                className="w-full justify-start text-muted-foreground hover:text-foreground hover:bg-secondary gap-2 rounded-sm"
              >
                <Link to="/blog">
                  <BookOpen className="h-4 w-4" />
                  Blog
                </Link>
              </Button>
              <Button
                size="sm"
                className="w-full justify-start bg-primary text-primary-foreground hover:bg-primary/90 gap-2 rounded-sm"
                onClick={downloadResume}
              >
                <Download className="h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
