import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import { cn } from "@/lib/utils";

interface BackButtonProps {
  to: string;
  children: React.ReactNode;
  variant?: "ghost" | "outline" | "default";
  size?: "sm" | "default" | "lg";
  className?: string;
}

const BackButton = React.forwardRef<HTMLButtonElement, BackButtonProps>(
  ({ to, children, variant = "ghost", size = "sm", className, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        asChild
        className={cn(
          "text-primary-foreground hover:bg-primary-foreground/10",
          className,
        )}
        {...props}
      >
        <Link to={to}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          {children}
        </Link>
      </Button>
    );
  },
);

BackButton.displayName = "BackButton";

export { BackButton };