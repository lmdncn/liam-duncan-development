import React from "react";
import { BackButton } from "@/components/ui/back-button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backButton?: {
    to: string;
    label: string;
  };
  badge?: {
    text: string;
    className?: string;
  };
  meta?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

const PageHeader = React.forwardRef<HTMLElement, PageHeaderProps>(
  ({ 
    title, 
    subtitle, 
    backButton, 
    badge, 
    meta, 
    className, 
    children, 
    ...props 
  }, ref) => {
    return (
      <section
        ref={ref}
        className={cn("pt-24 pb-16 bg-gradient-hero", className)}
        {...props}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {backButton && (
              <div className="flex items-center gap-4 mb-8">
                <BackButton to={backButton.to}>
                  {backButton.label}
                </BackButton>
              </div>
            )}

            <div className="text-primary-foreground">
              {badge && meta && (
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                  <Badge className={cn(
                    "bg-accent/20 text-accent border-accent/30 w-fit",
                    badge.className
                  )}>
                    {badge.text}
                  </Badge>
                  <div className="text-sm opacity-90">
                    {meta}
                  </div>
                </div>
              )}
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {title}
              </h1>
              
              {subtitle && (
                <p className="text-xl opacity-90 max-w-3xl leading-relaxed">
                  {subtitle}
                </p>
              )}
              
              {children}
            </div>
          </div>
        </div>
      </section>
    );
  },
);

PageHeader.displayName = "PageHeader";

export { PageHeader };