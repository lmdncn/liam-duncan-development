import React from "react";
import { cn, formatIndex } from "@/lib/utils";

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  index?: number;
  centered?: boolean;
}

const SectionHeader = React.forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ className, title, subtitle, index, centered = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("mb-14 lg:mb-16", centered && "text-center", className)}
        {...props}
      >
        {index !== undefined && (
          <div
            className={cn(
              "flex items-center gap-3 mb-4",
              centered && "justify-center",
            )}
          >
            <div className="h-px w-6 bg-primary flex-shrink-0" />
            <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-primary">
              {formatIndex(index)}
            </span>
          </div>
        )}
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 leading-[1.05] tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p
            className={cn(
              "text-muted-foreground leading-relaxed max-w-2xl",
              centered && "mx-auto",
            )}
          >
            {subtitle}
          </p>
        )}
      </div>
    );
  },
);

SectionHeader.displayName = "SectionHeader";

export { SectionHeader };
