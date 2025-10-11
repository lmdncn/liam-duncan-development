import React from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface AnimatedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  index?: number;
  animationDelay?: number;
  enableHover?: boolean;
  variant?: "default" | "elevated" | "flat";
}

const AnimatedCard = React.forwardRef<HTMLDivElement, AnimatedCardProps>(
  ({ className, children, index = 0, animationDelay = 0.1, enableHover = true, variant = "default", ...props }, ref) => {
    const delay = index * animationDelay;

    const variantClasses = {
      default: "shadow-card bg-gradient-card border-border/50",
      elevated: "bg-card border-border dark:bg-card/95",
      flat: "bg-gradient-card border-border/50",
    };

    return (
      <Card
        ref={ref}
        className={cn(
          "animate-fade-in",
          variantClasses[variant],
          enableHover && "transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer",
          className,
        )}
        style={{ animationDelay: `${delay}s` }}
        {...props}
      >
        {children}
      </Card>
    );
  },
);

AnimatedCard.displayName = "AnimatedCard";

export { AnimatedCard };
