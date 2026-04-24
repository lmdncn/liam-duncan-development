import { Button } from "@/components/ui/button";
import { Download, BookOpen } from "lucide-react";
import { Link } from "react-router";
import { useDownloadResume } from "@/hooks/useDownloadResume";
import type { NavItem } from "@/types";

interface NavigationItemsProps {
  navItems: NavItem[];
  handleNavigation: (href: string) => void;
}

const NavigationItems = ({ navItems, handleNavigation }: NavigationItemsProps) => {
  const { downloadResume } = useDownloadResume();

  if (!navItems.length) return null;

  return (
    <div className="hidden md:flex items-center gap-7">
      {navItems.map((item) => (
        <button
          key={item.label}
          onClick={() => handleNavigation(item.href)}
          className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 group"
        >
          {item.label}
          <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
        </button>
      ))}

      <div className="flex items-center gap-2 pl-5 border-l border-border">
        <Button
          size="sm"
          variant="ghost"
          asChild
          className="text-muted-foreground hover:text-foreground hover:bg-secondary text-sm font-medium gap-1.5 rounded-sm"
        >
          <Link to="/blog">
            <BookOpen className="h-3.5 w-3.5" />
            Blog
          </Link>
        </Button>
        <Button
          size="sm"
          className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-medium gap-1.5 rounded-sm"
          onClick={downloadResume}
        >
          <Download className="h-3.5 w-3.5" />
          Resume
        </Button>
      </div>
    </div>
  );
};

export default NavigationItems;
