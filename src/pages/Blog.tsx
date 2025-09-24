import Navigation from "@/components/Navigation";
import BlogCard, { BlogPost } from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

// This will be replaced with dynamic loading from markdown files
const SAMPLE_POSTS: BlogPost[] = [
  {
    slug: "building-with-ai-tools",
    title: "Building Scalable Applications with AI Tools",
    date: "January 2025",
    excerpt: "My experience integrating Claude Code, GitHub Copilot, and other AI tools into development workflows. From faster prototyping to production deployments, here's what I've learned.",
    category: "Technical",
    readTime: "8 min read"
  },
  {
    slug: "lessons-from-fintech",
    title: "Lessons from Building Fintech at Scale",
    date: "December 2024", 
    excerpt: "Reflections on architecting payment systems that process millions in transactions. Event-driven architecture, data consistency, and the importance of monitoring in financial applications.",
    category: "Engineering",
    readTime: "12 min read"
  },
  {
    slug: "career-break-insights",
    title: "What I Learned During My Year-Long Career Break",
    date: "November 2024",
    excerpt: "Taking time off to travel the world taught me more than just cultural insights. Here are the professional lessons I gained from stepping away from code.",
    category: "Career",
    readTime: "6 min read"
  }
];

const Blog = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/')}
                className="text-primary-foreground hover:bg-primary-foreground/10"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Resume
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
            {SAMPLE_POSTS.map((post, index) => (
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