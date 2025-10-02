import React from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface AnimatedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  index?: number;
  animationDelay?: number;
  enableHover?: boolean;
}

const AnimatedCard = React.forwardRef<HTMLDivElement, AnimatedCardProps>(
  ({ className, children, index = 0, animationDelay = 0.1, enableHover = true, ...props }, ref) => {
    const delay = index * animationDelay;

    return (
      <Card
        ref={ref}
        className={cn(
          "animate-fade-in shadow-card bg-gradient-card border-border/50",
          enableHover && "transition-all duration-300 hover:shadow-hover hover:scale-[1.02]",
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
