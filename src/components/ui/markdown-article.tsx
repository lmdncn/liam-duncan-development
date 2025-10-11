import React from "react";
import ReactMarkdown from "react-markdown";
import { ArticleLayout } from "./article-layout";
import { AnimatedCard } from "./animated-card";
import { CardContent, CardHeader, CardTitle } from "./card";
import { ArrowRight } from "lucide-react";
import type { Components } from "react-markdown";

export interface RelatedItem {
  slug: string;
  title: string;
  description?: string;
  excerpt?: string;
  icon?: string;
}

export interface MarkdownArticleProps {
  // Article metadata
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
  footer?: {
    backTo: string;
    backLabel: string;
  };

  // Content
  content: string;
  contentProcessor?: (content: string) => string;
  markdownComponents: Components;

  // Related items section
  relatedItems?: RelatedItem[];
  relatedConfig?: {
    title: string;
    description?: string;
    columns?: 2 | 3;
    basePath: string;
    showIcons?: boolean;
    iconMap?: Record<string, React.ComponentType<any>>;
    fullWidthSection?: boolean;
  };

  // SEO
  children?: React.ReactNode; // For SEO component
}

const MarkdownArticle = React.forwardRef<HTMLDivElement, MarkdownArticleProps>(
  ({
    title,
    subtitle,
    backButton,
    badge,
    meta,
    footer,
    content,
    contentProcessor,
    markdownComponents,
    relatedItems,
    relatedConfig,
    children: seoComponent,
  }, ref) => {
    // Process content if processor is provided
    const processedContent = contentProcessor ? contentProcessor(content) : content;

    // Determine grid columns class based on item count and configuration
    // Responsive breakpoints: mobile (1 col) → tablet (2 cols) → desktop (2 or 3 cols based on config)
    const getGridColsClass = () => {
      const itemCount = relatedItems?.length || 0;
      const columns = relatedConfig?.columns || 2;

      // Single item: centered with max width matching other page sections
      if (itemCount === 1) {
        return "sm:grid-cols-1 max-w-3xl mx-auto";
      }

      // Two items: always 2 columns on tablet+, centered if needed
      if (itemCount === 2) {
        return "sm:grid-cols-2";
      }

      // Three or more items: responsive grid based on configuration
      if (columns === 3) {
        // 3-column layout: mobile(1) → tablet(2) → desktop(3)
        return "sm:grid-cols-2 lg:grid-cols-3";
      }

      // 2-column layout: mobile(1) → tablet/desktop(2)
      return "sm:grid-cols-2";
    };

    return (
      <>
        {seoComponent}
        <ArticleLayout
          ref={ref}
          title={title}
          subtitle={subtitle}
          backButton={backButton}
          badge={badge}
          meta={meta}
          footer={footer}
        >
          <div className="prose prose-lg max-w-none">
            <ReactMarkdown components={markdownComponents}>
              {processedContent}
            </ReactMarkdown>
          </div>

          {/* Related items section - only show if relatedItems exist */}
          {relatedItems && relatedItems.length > 0 && relatedConfig && (
            <section
              className={
                relatedConfig.fullWidthSection
                  ? "py-16 mt-16 bg-primary/5 border-t border-border/20 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen"
                  : "mt-16 pt-8 border-t border-border/20"
              }
            >
              <div className={relatedConfig.fullWidthSection ? "container mx-auto px-6" : ""}>
                <div className={relatedConfig.fullWidthSection ? "max-w-7xl mx-auto" : ""}>
                  {relatedConfig.fullWidthSection ? (
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-semibold text-foreground mb-2">
                        {relatedConfig.title}
                      </h3>
                      {relatedConfig.description && (
                        <p className="text-muted-foreground">{relatedConfig.description}</p>
                      )}
                    </div>
                  ) : (
                    <h3 className="text-2xl font-semibold text-foreground mb-6">
                      {relatedConfig.title}
                    </h3>
                  )}

                  <div className={`grid grid-cols-1 ${getGridColsClass()} gap-6`}>
                    {relatedItems.map((item, index) => {
                      const itemDescription = item.description || item.excerpt;
                      const IconComponent = item.icon && relatedConfig.iconMap
                        ? relatedConfig.iconMap[item.icon]
                        : null;

                      return (
                        <a
                          key={item.slug}
                          href={`${import.meta.env.BASE_URL}${relatedConfig.basePath}/${item.slug}`.replace(/\/+/g, '/')}
                          className="block"
                        >
                          <AnimatedCard
                            index={index}
                            animationDelay={0.1}
                            enableHover={true}
                            variant="elevated"
                          >
                            <CardHeader>
                              <div className="flex items-center gap-3">
                                {IconComponent && relatedConfig.showIcons && (
                                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                                    <IconComponent className="h-5 w-5 text-primary" />
                                  </div>
                                )}
                                <CardTitle className="text-lg font-medium leading-snug flex-1">
                                  {item.title}
                                </CardTitle>
                              </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                              {itemDescription && (
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                  {itemDescription}
                                </p>
                              )}
                              <div className="flex items-center gap-2 text-primary font-medium text-sm">
                                Read More
                                <ArrowRight className="h-4 w-4" />
                              </div>
                            </CardContent>
                          </AnimatedCard>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>
          )}
        </ArticleLayout>
      </>
    );
  }
);

MarkdownArticle.displayName = "MarkdownArticle";

export { MarkdownArticle };
