import { parseBlogPost, generateSlug, estimateReadingTime } from "./markdown";
import type { BlogPost } from "@/types";

/**
 * Sorts blog posts by date (descending: most recent first)
 * @param a - First blog post to compare
 * @param b - Second blog post to compare
 * @returns Comparison result for Array.sort()
 */
const sortBlogPosts = (a: BlogPost, b: BlogPost): number => {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);

  // Sort descending (most recent first)
  return dateB.getTime() - dateA.getTime();
};

// Use Vite's glob import to load all markdown files at build time
const blogModules = import.meta.glob("../content/blog/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

// Parse all blog posts and sort by date (descending)
const allBlogPosts: BlogPost[] = Object.entries(blogModules)
  .map(([path, content]) => {
    const filename = path.split("/").pop() || "";
    const slug = generateSlug(filename);
    const parsedPost = parseBlogPost(content as string, slug);

    // If readTime is not provided in frontmatter, estimate it
    if (!parsedPost.readTime) {
      parsedPost.readTime = estimateReadingTime(parsedPost.content);
    }

    return parsedPost;
  })
  .sort(sortBlogPosts);

/**
 * Retrieves all blog posts sorted by date (descending: most recent first)
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
  return allBlogPosts.find((post) => post.slug === slug);
};

/**
 * Retrieves all blog post slugs for routing purposes
 * @returns Array of all blog post slugs
 */
export const getAllBlogSlugs = (): string[] => {
  return allBlogPosts.map((post) => post.slug);
};
