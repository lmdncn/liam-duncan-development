import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: "default" | "alternate" | "featured";
  size?: "default" | "compact" | "spacious";
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    { className, children, variant = "default", size = "default", ...props },
    ref,
  ) => {
    const variantClasses = {
      default: "bg-background",
      alternate: "bg-card",
      featured: "bg-card",
    };

    const sizeClasses = {
      compact: "py-16",
      default: "py-24",
      spacious: "py-36",
    };

    return (
      <section
        ref={ref}
        className={cn(
          "w-full",
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
