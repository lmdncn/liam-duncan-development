import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeader = React.forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ className, title, subtitle, centered = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("mb-16", centered && "text-center", className)}
        {...props}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    );
  },
);

SectionHeader.displayName = "SectionHeader";

export { SectionHeader };
