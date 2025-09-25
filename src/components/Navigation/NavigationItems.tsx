import { Button } from "@/components/ui/button";
import { Download, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDownloadResume } from "@/hooks/useDownloadResume";
import type { NavItem } from "@/types";

interface NavigationItemsProps {
  navItems: NavItem[];
  scrolled: boolean;
  isOnBlogPage: boolean;
  handleNavigation: (href: string) => void;
}

const NavigationItems = ({ 
  navItems, 
  scrolled, 
  isOnBlogPage, 
  handleNavigation 
}: NavigationItemsProps) => {
  const navigate = useNavigate();
  const { downloadResume } = useDownloadResume();

  return (
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
  );
};

export default NavigationItems;