import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

// Sample blog post content - this will be replaced with dynamic loading
const SAMPLE_BLOG_CONTENT: Record<string, {
  title: string;
  date: string;
  category: string;
  readTime: string;
  content: string;
}> = {
  "building-with-ai-tools": {
    title: "Building Scalable Applications with AI Tools",
    date: "January 2025",
    category: "Technical", 
    readTime: "8 min read",
    content: `
# Building Scalable Applications with AI Tools

The landscape of software development has been transformed by AI-powered tools. Over the past year, I've integrated various AI assistants into my workflow, and the productivity gains have been remarkable.

## The Game Changers

### Claude Code
Claude Code has revolutionized how I approach complex refactoring tasks. The ability to understand entire codebases and suggest architectural improvements has saved countless hours of manual analysis.

### GitHub Copilot
For day-to-day coding, Copilot excels at:
- Autocompleting repetitive patterns
- Writing boilerplate code
- Suggesting edge case handling

## Real-World Impact

At my recent role, I used these tools to:
- Migrate a Django API to a more modular architecture
- Build automated data pipelines with proper error handling
- Optimize database queries that improved response times by 50%

## Best Practices

1. **Don't blindly accept suggestions** - Always review and understand the code
2. **Use AI for exploration** - Great for discovering new patterns and approaches
3. **Maintain code quality standards** - AI-generated code still needs proper testing

## The Future

As these tools continue improving, I see them becoming essential for:
- Rapid prototyping
- Legacy code modernization  
- Complex debugging sessions

The key is learning to work *with* AI, not replacing human judgment but augmenting it.
    `
  },
  "lessons-from-fintech": {
    title: "Lessons from Building Fintech at Scale", 
    date: "December 2024",
    category: "Engineering",
    readTime: "12 min read",
    content: `
# Lessons from Building Fintech at Scale

Working on banking infrastructure that processes millions in transactions taught me invaluable lessons about building reliable, secure systems.

## Event-Driven Architecture

One of the most important decisions was adopting event-driven architecture using Redis Streams. This allowed us to:

- **Decouple services** for better maintainability
- **Handle high throughput** without blocking operations  
- **Ensure data consistency** across distributed systems

## The Importance of Monitoring

In fintech, you can't debug issues in production like other applications. Every transaction matters, so we built comprehensive monitoring:

- Real-time transaction tracking
- Automated alerts for anomalies
- Detailed audit trails for compliance

## Security Considerations

Handling financial data requires extreme care:
- End-to-end encryption for all sensitive data
- Multi-factor authentication for admin access
- Regular security audits and penetration testing

## Scaling Challenges

As transaction volume grew, we faced several scaling challenges:

### Database Performance
- Implemented read replicas for reporting queries
- Used connection pooling to handle concurrent requests
- Optimized indexes for frequently accessed data

### Service Communication
- Moved from synchronous to asynchronous communication where possible
- Implemented circuit breakers to handle service failures gracefully
- Used message queues for reliable task processing

## Key Takeaways

1. **Plan for failure** - Every component will fail eventually
2. **Monitor everything** - You can't fix what you can't measure
3. **Security first** - Build security into every layer from day one
4. **Test thoroughly** - Unit tests, integration tests, and chaos engineering

Building fintech applications is challenging but rewarding. The lessons learned apply to any high-stakes, high-scale system.
    `
  },
  "career-break-insights": {
    title: "What I Learned During My Year-Long Career Break",
    date: "November 2024", 
    category: "Career",
    readTime: "6 min read",
    content: `
# What I Learned During My Year-Long Career Break

Taking a year off to travel the world was one of the best decisions I've made for my career. Here's what I learned.

## The Power of Perspective

Stepping away from daily coding gave me a fresh perspective on:
- Technology trends and their real-world impact
- Different approaches to problem-solving across cultures
- The importance of work-life balance

## Technical Skills Don't Rust

I was worried about falling behind, but I discovered:
- Core engineering principles remain constant
- New frameworks are easier to pick up with strong fundamentals  
- The industry moves slower than it seems day-to-day

## Global Technology Landscape

Traveling through different countries showed me:
- How mobile-first development varies by region
- Different approaches to digital payments and fintech
- The global impact of major tech decisions

## Personal Growth

The break taught me:
- **Patience** - Not everything needs to be optimized immediately
- **Communication** - Working with people from different backgrounds
- **Adaptability** - Handling unexpected situations with grace

## Coming Back Stronger

Returning to work, I found myself:
- More focused on meaningful projects
- Better at prioritizing what really matters
- Excited about new challenges and technologies

## Advice for Others

If you're considering a career break:

1. **Plan financially** - Save enough to be comfortable
2. **Stay curious** - Use the time to explore new interests
3. **Document the journey** - The insights are valuable later
4. **Don't overthink it** - Sometimes the best career move is stepping away

The tech industry will always need good engineers. Taking time to grow as a person makes you a better professional too.
    `
  }
};

const BlogPost = () => {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug || !SAMPLE_BLOG_CONTENT[slug]) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
              <Button onClick={() => navigate('/blog')}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const post = SAMPLE_BLOG_CONTENT[slug];

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
                onClick={() => navigate('/blog')}
                className="text-primary-foreground hover:bg-primary-foreground/10"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </div>
            
            <div className="text-primary-foreground">
              <div className="flex items-center gap-4 mb-6">
                <Badge className="bg-accent/20 text-accent border-accent/30">
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
              <h1 className="text-4xl md:text-5xl font-bold">
                {post.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg prose-slate max-w-none">
              <ReactMarkdown
                className="text-foreground leading-relaxed"
                components={{
                  h1: ({node, ...props}) => <h1 className="text-3xl font-bold mt-8 mb-4 text-foreground" {...props} />,
                  h2: ({node, ...props}) => <h2 className="text-2xl font-bold mt-6 mb-3 text-foreground" {...props} />,
                  h3: ({node, ...props}) => <h3 className="text-xl font-semibold mt-4 mb-2 text-foreground" {...props} />,
                  p: ({node, ...props}) => <p className="mb-4 text-foreground leading-relaxed" {...props} />,
                  ul: ({node, ...props}) => <ul className="mb-4 ml-6 space-y-2" {...props} />,
                  ol: ({node, ...props}) => <ol className="mb-4 ml-6 space-y-2" {...props} />,
                  li: ({node, ...props}) => <li className="text-foreground" {...props} />,
                  strong: ({node, ...props}) => <strong className="font-semibold text-foreground" {...props} />,
                  code: ({node, ...props}) => <code className="bg-secondary px-1 py-0.5 rounded text-sm font-mono" {...props} />,
                  pre: ({node, ...props}) => <pre className="bg-secondary p-4 rounded-lg overflow-x-auto mb-4" {...props} />,
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;