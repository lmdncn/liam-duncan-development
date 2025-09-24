import matter from 'gray-matter';

export interface BlogPostMetadata {
  title: string;
  date: string;
  excerpt: string;
  category: string;
  readTime?: string;
}

export interface BlogPost extends BlogPostMetadata {
  slug: string;
  content: string;
}

// This function will be used to dynamically import and parse markdown files
export const parseBlogPost = (markdownContent: string, slug: string): BlogPost => {
  const { data, content } = matter(markdownContent);
  
  return {
    slug,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    category: data.category,
    readTime: data.readTime,
    content
  };
};

// Utility function to estimate reading time
export const estimateReadingTime = (content: string): string => {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return `${readingTime} min read`;
};

// Function to generate slug from filename
export const generateSlug = (filename: string): string => {
  return filename.replace(/\.md$/, '');
};