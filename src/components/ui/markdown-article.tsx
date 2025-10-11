import React from "react";
import ReactMarkdown from "react-markdown";
import { ArticleLayout } from "./article-layout";
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
    const getGridColsClass = () => {
      const itemCount = relatedItems?.length || 0;
      if (!relatedConfig?.columns) return "md:grid-cols-2";

      // For 3 column layout
      if (relatedConfig.columns === 3) {
        if (itemCount === 1) return "md:grid-cols-1 max-w-md mx-auto";
        if (itemCount === 2) return "md:grid-cols-2 max-w-3xl mx-auto";
        return "md:grid-cols-3";
      }

      // For 2 column layout
      if (itemCount === 1) return "md:grid-cols-1 max-w-md mx-auto";
      return "md:grid-cols-2";
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
                  ? "py-16 mt-16 bg-muted/30 border-t border-border/20 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen"
                  : "mt-16 pt-8 border-t border-border/20"
              }
            >
              <div className={relatedConfig.fullWidthSection ? "container mx-auto px-6" : ""}>
                <div className={relatedConfig.fullWidthSection ? "max-w-6xl mx-auto" : ""}>
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
                    {relatedItems.map((item) => {
                      const itemDescription = item.description || item.excerpt;

                      return (
                        <a
                          key={item.slug}
                          href={`${import.meta.env.BASE_URL}${relatedConfig.basePath}/${item.slug}`.replace(/\/+/g, '/')}
                          className="block"
                        >
                          <div className="hover:shadow-md transition-shadow bg-background/50 border border-border/50 rounded-lg p-6 h-full">
                            <h4 className="text-lg font-medium mb-3 leading-snug">{item.title}</h4>
                            {itemDescription && (
                              <p className="text-sm leading-relaxed text-muted-foreground">
                                {itemDescription}
                              </p>
                            )}
                          </div>
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
