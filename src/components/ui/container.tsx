import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: "default" | "narrow" | "wide";
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, children, size = "default", ...props }, ref) => {
    const sizeClasses = {
      narrow: "max-w-3xl",
      default: "max-w-4xl",
      wide: "max-w-6xl",
    };

    return (
      <div
        ref={ref}
        className={cn("container mx-auto px-6", sizeClasses[size], className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Container.displayName = "Container";

export { Container };
