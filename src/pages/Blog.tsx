import Navigation from "@/components/Navigation";
import BlogCard from "@/components/BlogCard";
import { PageHeader } from "@/components/ui/page-header";
import { getAllBlogPosts } from "@/lib/blog";
import SEO from "@/components/SEO";
import { BLOG_PAGE_SEO } from "@/lib/pageMeta";

const Blog = () => {
  const blogPosts = getAllBlogPosts();

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={BLOG_PAGE_SEO.title}
        description={BLOG_PAGE_SEO.description}
        image={BLOG_PAGE_SEO.image}
        url={BLOG_PAGE_SEO.url}
        type={BLOG_PAGE_SEO.type}
      />
      <Navigation minimalNav />

      <PageHeader
        title="Blog"
        subtitle="Thoughts on software engineering, AI tools, career development, and lessons learned from building scalable applications."
        backButton={{
          to: "/",
          label: "Back to Resume"
        }}
      />

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
