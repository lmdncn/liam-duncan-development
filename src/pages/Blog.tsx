import Navigation from "@/components/Navigation";
import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { getAllBlogPosts } from "@/lib/blog";
import SEO from "@/components/SEO";
import { OG_IMAGES } from "@/lib/constants";

const Blog = () => {
  const blogPosts = getAllBlogPosts();

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Blog"
        description="Thoughts on software engineering, AI tools, career development, and lessons learned from building scalable applications."
        image={OG_IMAGES.blog}
        url="/blog"
      />
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
                <Link to="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Resume
                </Link>
              </Button>
            </div>
            
            <div className="text-center text-primary-foreground">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Blog
              </h1>
              <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
                Thoughts on software engineering, AI tools, career development, and lessons learned from building scalable applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            {blogPosts.map((post, index) => (
              <div 
                key={post.slug}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <BlogCard post={post} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;