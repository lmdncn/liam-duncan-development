import { useParams, Navigate } from "react-router";
import { getExperienceArticleBySlug } from "@/lib/experience";
import { ArticleLayout } from "@/components/ui/article-layout";
import SEO from "@/components/SEO";
import ReactMarkdown from "react-markdown";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { FileText, Building, CreditCard } from "lucide-react";
import { Link } from "react-router";

const ExperienceArticle = () => {
  const { slug, subSlug } = useParams();
  
  // Construct the full slug based on the URL structure
  const fullSlug = subSlug ? `${slug}/${subSlug}` : slug;
  
  const article = getExperienceArticleBySlug(fullSlug || "");

  if (!article) {
    return <Navigate to="/404" replace />;
  }

  // Icon mapping for related articles
  const iconMap: Record<string, React.ComponentType<any>> = {
    FileText,
    Building,
    CreditCard,
  };

  return (
    <>
      <SEO
        title={article.seoTitle}
        description={article.seoDescription}
        image="/og-image.jpg" // You may want to make this configurable
        url={article.url}
      />
      <ArticleLayout
        title={article.title}
        subtitle={article.subtitle}
        backButton={article.backButton}
        footer={article.footer}
      >
        <div className="prose prose-lg max-w-none">
          <ReactMarkdown
            components={{
              img: ({ src, alt }) => {
                // Handle relative paths that need base URL prepended
                const imageSrc = src?.startsWith('/') && !src.startsWith(import.meta.env.BASE_URL)
                  ? `${import.meta.env.BASE_URL}${src.substring(1)}`
                  : src;

                return (
                  <figure className="my-8">
                    <img
                      src={imageSrc}
                      alt={alt || ""}
                      className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
                    />
                    {alt && (
                      <figcaption className="text-center text-sm text-muted-foreground mt-4">
                        {alt}
                      </figcaption>
                    )}
                  </figure>
                );
              },
              h2: ({ children }) => (
                <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground leading-tight">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-2xl font-semibold mt-12 mb-5 text-foreground leading-tight">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="mb-6 text-foreground leading-relaxed text-lg font-light">
                  {children}
                </p>
              ),
              ul: ({ children }) => (
                <ul className="mb-8 space-y-3 list-none">
                  {children}
                </ul>
              ),
              li: ({ children }) => (
                <li className="text-foreground leading-relaxed text-lg font-light relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-primary before:font-normal">
                  {children}
                </li>
              ),
              strong: ({ children }) => (
                <strong className="font-bold text-foreground">
                  {children}
                </strong>
              ),
              a: ({ href, children }) => {
                // Handle internal links
                if (href?.startsWith('/')) {
                  return (
                    <Link 
                      to={href} 
                      className="text-primary hover:text-primary/80 transition-colors underline decoration-1 underline-offset-2"
                    >
                      {children}
                    </Link>
                  );
                }
                // Handle external links
                return (
                  <a 
                    href={href}
                    className="text-primary hover:text-primary/80 transition-colors underline decoration-1 underline-offset-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {children}
                  </a>
                );
              },
            }}
          >
            {article.content}
          </ReactMarkdown>
        </div>

        {/* Related Articles Section - only show if relatedArticles exist */}
        {article.relatedArticles && article.relatedArticles.length > 0 && (
          <section className="py-16 mt-16 bg-muted/30 border-t border-border/20 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-2">The story isn't over</h3>
                  <p className="text-muted-foreground">Explore the technical architecture and pivotal decisions that shaped Moves:</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {article.relatedArticles.map((relatedArticle) => {
                    const IconComponent = iconMap[relatedArticle.icon] || FileText;
                    const linkTo = article.slug === 'moves' 
                      ? `/experience/moves/${relatedArticle.slug}`
                      : `/experience/${relatedArticle.slug}`;
                    
                    return (
                      <Link key={relatedArticle.slug} to={linkTo}>
                        <Card className="hover:shadow-md transition-shadow bg-background/50 border-border/50 h-full">
                          <CardContent className="p-6">
                            <div className="flex items-center gap-3 mb-3">
                              <IconComponent className="h-4 w-4 text-muted-foreground" />
                              <CardTitle className="text-lg font-medium">{relatedArticle.title}</CardTitle>
                            </div>
                            <CardDescription className="text-sm leading-relaxed">
                              {relatedArticle.description}
                            </CardDescription>
                          </CardContent>
                        </Card>
                      </Link>
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
};

export default ExperienceArticle;