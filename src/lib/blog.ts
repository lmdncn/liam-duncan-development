import { parseBlogPost, generateSlug, estimateReadingTime } from './markdown';
import type { BlogPost } from '@/types';

// Use Vite's glob import to load all markdown files at build time
const blogModules = import.meta.glob('../content/blog/*.md', { 
  query: '?raw',
  import: 'default',
  eager: true 
});

// Parse all blog posts and sort by date (newest first)
const allBlogPosts: BlogPost[] = Object.entries(blogModules)
  .map(([path, content]) => {
    const filename = path.split('/').pop() || '';
    const slug = generateSlug(filename);
    const parsedPost = parseBlogPost(content as string, slug);
    
    // If readTime is not provided in frontmatter, estimate it
    if (!parsedPost.readTime) {
      parsedPost.readTime = estimateReadingTime(parsedPost.content);
    }
    
    return parsedPost;
  })
  .sort((a, b) => {
    // Sort by order field first (descending: highest numbers first)
    if (a.order !== undefined && b.order !== undefined) {
      return b.order - a.order;
    }
    
    // Posts with order come before posts without order
    if (a.order !== undefined && b.order === undefined) {
      return -1;
    }
    if (a.order === undefined && b.order !== undefined) {
      return 1;
    }
    
    // Both posts have no order, fall back to date sorting (newest first)
    // Parse dates in format "September 2025" or "September 24, 2025"
    const parseDate = (dateStr: string): Date => {
      // Handle formats like "September 2025" and "September 24, 2025"
      if (dateStr.includes(',')) {
        return new Date(dateStr);
      } else {
        // For "September 2025" format, assume first of the month
        return new Date(`${dateStr} 1`);
      }
    };
    
    const dateA = parseDate(a.date);
    const dateB = parseDate(b.date);
    return dateB.getTime() - dateA.getTime();
  });

/**
 * Retrieves all blog posts sorted by date (newest first)
 * @returns Array of all blog posts with metadata
 */
export const getAllBlogPosts = (): BlogPost[] => {
  return allBlogPosts;
};

/**
 * Retrieves a specific blog post by its slug
 * @param slug - The unique identifier for the blog post
 * @returns The blog post if found, undefined otherwise
 */
export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return allBlogPosts.find(post => post.slug === slug);
};

/**
 * Retrieves all blog post slugs for routing purposes
 * @returns Array of all blog post slugs
 */
export const getAllBlogSlugs = (): string[] => {
  return allBlogPosts.map(post => post.slug);
};