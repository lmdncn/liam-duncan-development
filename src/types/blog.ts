// Blog-related type definitions

export interface BlogImages {
  [key: string]: string;
}

export interface RelatedPost {
  slug: string;
  title: string;
  excerpt: string;
}

export interface BlogPostMetadata {
  title: string;
  date: string;
  excerpt: string;
  category: string;
  readTime?: string;
  order?: number;
  author?: string;
  image?: string;
  tags?: string[];
  images?: BlogImages; // Additional images that can be referenced in content
  relatedPosts?: RelatedPost[]; // Related blog posts to show at the end
  seoTitle?: string;
  seoDescription?: string;
}

export interface BlogPost extends BlogPostMetadata {
  slug: string;
  content: string;
}

// Blog component props
export interface BlogCardProps {
  post: BlogPost;
}

// React Markdown component types
export interface MarkdownComponents {
  h1: React.ComponentType<React.HTMLAttributes<HTMLHeadingElement>>;
  h2: React.ComponentType<React.HTMLAttributes<HTMLHeadingElement>>;
  h3: React.ComponentType<React.HTMLAttributes<HTMLHeadingElement>>;
  p: React.ComponentType<React.HTMLAttributes<HTMLParagraphElement>>;
  ul: React.ComponentType<React.HTMLAttributes<HTMLUListElement>>;
  ol: React.ComponentType<React.HTMLAttributes<HTMLOListElement>>;
  li: React.ComponentType<React.HTMLAttributes<HTMLLIElement>>;
  strong: React.ComponentType<React.HTMLAttributes<HTMLElement>>;
  code: React.ComponentType<React.HTMLAttributes<HTMLElement>>;
  pre: React.ComponentType<React.HTMLAttributes<HTMLPreElement>>;
  blockquote?: React.ComponentType<React.HTMLAttributes<HTMLQuoteElement>>;
}

// Frontmatter parsing result
export interface ParsedFrontmatter {
  data: Record<string, string>;
  content: string;
}
