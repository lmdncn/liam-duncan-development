import { Button } from "@/components/ui/button";
import { Download, BookOpen } from "lucide-react";
import { Link } from "react-router";
import { useDownloadResume } from "@/hooks/useDownloadResume";
import { useHoverPreload } from "@/hooks/useHoverPreload";
import type { NavItem } from "@/types";

interface NavigationItemsProps {
  navItems: NavItem[];
  scrolled: boolean;
  handleNavigation: (href: string) => void;
}

const NavigationItems = ({
  navItems,
  scrolled,
  handleNavigation,
}: NavigationItemsProps) => {
  const { downloadResume } = useDownloadResume();
  const blogPreloadProps = useHoverPreload("blog");

  if (!navItems.length) {
    return null;
  }

  return (
    <div className="hidden md:flex items-center space-x-8">
      {navItems.map((item) => (
        <button
          key={item.label}
          onClick={() => handleNavigation(item.href)}
          className={`transition-colors duration-300 hover:text-primary font-medium ${
            scrolled ? "text-foreground" : "text-primary-foreground"
          }`}
        >
          {item.label}
        </button>
      ))}
      <Button
        size="sm"
        variant="outline"
        asChild
        className={`transition-all duration-300 hover:bg-accent hover:text-accent-foreground ${
          scrolled
            ? "bg-accent/10 text-accent border-accent/30"
            : "bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground hover:text-primary"
        }`}
      >
        <Link to="/blog" {...blogPreloadProps}>
          <BookOpen className="mr-2 h-4 w-4" />
          Read My Blog!
        </Link>
      </Button>
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
