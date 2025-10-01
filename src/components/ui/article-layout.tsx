import React from "react";
import Navigation from "@/components/Navigation";
import { PageHeader } from "@/components/ui/page-header";
import { BackButton } from "@/components/ui/back-button";
import { cn } from "@/lib/utils";

interface ArticleFooterProps {
  backTo: string;
  backLabel: string;
  className?: string;
}

const ArticleFooter = React.forwardRef<HTMLElement, ArticleFooterProps>(
  ({ backTo, backLabel, className }, ref) => {
    return (
      <footer ref={ref} className={cn("mt-16 pt-8 border-t border-border/20", className)}>
        <div className="flex items-center justify-between">
          <div className="text-muted-foreground italic">
            Thanks for reading
          </div>
          <BackButton
            to={backTo}
            variant="ghost"
            className="text-primary hover:bg-primary/10 transition-colors"
          >
            {backLabel}
          </BackButton>
        </div>
      </footer>
    );
  },
);

ArticleFooter.displayName = "ArticleFooter";

interface ArticleLayoutProps {
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
  children: React.ReactNode;
  footer?: {
    backTo: string;
    backLabel: string;
  };
  className?: string;
}

const ArticleLayout = React.forwardRef<HTMLDivElement, ArticleLayoutProps>(
  ({ 
    title, 
    subtitle, 
    backButton, 
    badge, 
    meta, 
    children, 
    footer,
    className 
  }, ref) => {
    return (
      <div ref={ref} className={cn("min-h-screen bg-background", className)}>
        <Navigation minimalNav />
        
        <PageHeader
          title={title}
          subtitle={subtitle}
          backButton={backButton}
          badge={badge}
          meta={meta}
        />

        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <article className="prose prose-xl max-w-none">
                {children}
              </article>

              {footer && (
                <ArticleFooter 
                  backTo={footer.backTo} 
                  backLabel={footer.backLabel} 
                />
              )}
            </div>
          </div>
        </section>
      </div>
    );
  },
);

ArticleLayout.displayName = "ArticleLayout";

export { ArticleLayout, ArticleFooter };