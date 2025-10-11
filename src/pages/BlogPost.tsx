import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import { useParams, Link } from "react-router";
import { getBlogPostBySlug } from "@/lib/blog";
import SEO from "@/components/SEO";
import { generateBlogPostSEO } from "@/lib/seo";
import { MarkdownArticle } from "@/components/ui/markdown-article";
import { blogMarkdownComponents } from "@/lib/markdown-components";
import { Button } from "@/components/ui/button";

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

  const metaContent = (
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
  );

  // Content processor for image placeholders
  const processContent = (content: string): string => {
    if (!post.images) return content;

    return content.replace(
      /\{\{images\.\w+\}\}/g,
      (match) => {
        const imageKey = match.replace(/\{\{images\.|\}\}/g, "");
        return post.images?.[imageKey] || match;
      }
    );
  };

  return (
    <MarkdownArticle
      title={post.title}
      backButton={{
        to: "/blog",
        label: "Back to Blog"
      }}
      badge={{
        text: post.category
      }}
      meta={metaContent}
      footer={{
        backTo: "/blog",
        backLabel: "More Articles"
      }}
      content={post.content}
      contentProcessor={processContent}
      markdownComponents={blogMarkdownComponents}
      relatedItems={post.relatedPosts}
      relatedConfig={post.relatedPosts ? {
        title: "Related Articles",
        columns: 2,
        basePath: "/blog",
        showIcons: false,
        fullWidthSection: false,
      } : undefined}
    >
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
    </MarkdownArticle>
  );
};

export default BlogPost;
