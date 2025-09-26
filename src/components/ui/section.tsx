import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: "default" | "alternate";
  size?: "default" | "compact" | "spacious";
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    { className, children, variant = "default", size = "default", ...props },
    ref,
  ) => {
    const baseClasses = "w-full";

    const variantClasses = {
      default: "bg-background",
      alternate: "bg-secondary/30",
    };

    const sizeClasses = {
      compact: "py-12",
      default: "py-20",
      spacious: "py-32",
    };

    return (
      <section
        ref={ref}
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className,
        )}
        {...props}
      >
        {children}
      </section>
    );
  },
);

Section.displayName = "Section";

export { Section };
