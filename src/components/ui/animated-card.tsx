import React from "react";
import { Card, CardProps } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface AnimatedCardProps extends CardProps {
  children: React.ReactNode;
  index?: number;
  animationDelay?: number;
}

const AnimatedCard = React.forwardRef<HTMLDivElement, AnimatedCardProps>(
  ({ className, children, index = 0, animationDelay = 0.1, ...props }, ref) => {
    const delay = index * animationDelay;

    return (
      <Card
        ref={ref}
        className={cn(
          "animate-fade-in shadow-card bg-gradient-card border-border/50",
          "transition-all duration-300 hover:shadow-hover hover:scale-[1.02]",
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
