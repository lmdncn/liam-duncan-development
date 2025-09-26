import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { useParams, Link } from "react-router";
import ReactMarkdown from "react-markdown";
import { getBlogPostBySlug } from "@/lib/blog";
import SEO from "@/components/SEO";
import { generateBlogPostSEO } from "@/lib/seo";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

  const post = slug ? getBlogPostBySlug(slug) : undefined;
  const seoData = post ? generateBlogPostSEO(post) : null;

  if (!slug || !post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-light text-muted-foreground mb-4">
            404
          </h1>
          <h2 className="text-2xl font-normal text-foreground mb-2">
            Not Found
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            The article you are looking for doesn't exist
          </p>
          <Button
            variant="ghost"
            asChild
            className="text-primary hover:bg-primary/10 transition-colors"
          >
            <Link to="/blog">Return to Blog</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {seoData && (
        <SEO
          title={seoData.title}
          description={seoData.description}
          image={seoData.image}
          url={seoData.url}
          type={seoData.type}
          article={seoData.article}
        />
      )}
      <Navigation />

      {/* Header */}
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link to="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Link>
              </Button>
            </div>

            <div className="text-primary-foreground">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                <Badge className="bg-accent/20 text-accent border-accent/30 w-fit">
                  {post.category}
                </Badge>
                <div className="flex items-center gap-4 text-sm opacity-90">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">{post.title}</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Article Content */}
            <article className="prose prose-xl max-w-none">
              <ReactMarkdown
                components={{
                  h1: ({ node, ...props }) => (
                    <h1
                      className="text-4xl font-bold mt-12 mb-8 text-foreground leading-tight first:mt-0 border-b border-border/20 pb-4"
                      {...props}
                    />
                  ),
                  h2: ({ node, ...props }) => (
                    <h2
                      className="text-3xl font-bold mt-12 mb-6 text-foreground leading-tight"
                      {...props}
                    />
                  ),
                  h3: ({ node, ...props }) => (
                    <h3
                      className="text-2xl font-semibold mt-10 mb-5 text-foreground leading-tight"
                      {...props}
                    />
                  ),
                  p: ({ node, ...props }) => (
                    <p
                      className="mb-6 text-foreground leading-relaxed text-lg font-light"
                      {...props}
                    />
                  ),
                  ul: ({ node, ...props }) => (
                    <ul className="mb-8 space-y-3 list-none" {...props} />
                  ),
                  ol: ({ node, ...props }) => (
                    <ol
                      className="mb-8 ml-6 space-y-3 list-decimal"
                      {...props}
                    />
                  ),
                  li: ({ node, ...props }) => (
                    <li
                      className="text-foreground leading-relaxed text-lg font-light relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-primary before:font-normal"
                      {...props}
                    />
                  ),
                  strong: ({ node, ...props }) => (
                    <strong className="font-bold text-foreground" {...props} />
                  ),
                  code: ({ node, ...props }) => (
                    <code
                      className="bg-secondary/60 text-secondary-foreground px-2 py-1 rounded text-base font-mono"
                      {...props}
                    />
                  ),
                  pre: ({ node, ...props }) => (
                    <pre
                      className="bg-secondary/30 p-6 rounded-lg overflow-x-auto mb-8 text-sm border-l-4 border-primary/30"
                      {...props}
                    />
                  ),
                  blockquote: ({ node, ...props }) => (
                    <blockquote
                      className="border-l-4 border-primary/30 pl-8 py-4 italic text-foreground/80 my-8 text-xl font-light"
                      {...props}
                    />
                  ),
                }}
              >
                {post.content}
              </ReactMarkdown>
            </article>

            {/* Article Footer */}
            <footer className="mt-16 pt-8 border-t border-border/20">
              <div className="flex items-center justify-between">
                <div className="text-muted-foreground italic">
                  Thanks for reading
                </div>
                <Button
                  variant="ghost"
                  asChild
                  className="text-primary hover:bg-primary/10 transition-colors"
                >
                  <Link to="/blog">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    More Articles
                  </Link>
                </Button>
              </div>
            </footer>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
