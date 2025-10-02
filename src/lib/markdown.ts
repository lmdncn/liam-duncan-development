import type { BlogPost, BlogPostMetadata, ParsedFrontmatter } from "@/types";
import type { ExperienceArticle, ExperienceMetadata } from "@/types/experience";

// Simple frontmatter parser
const parseFrontmatter = (markdownContent: string): ParsedFrontmatter => {
  const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/;
  const match = markdownContent.match(frontmatterRegex);

  if (!match) {
    return { data: {}, content: markdownContent };
  }

  const [, frontmatterText, content] = match;
  const data: Record<string, string> = {};

  // Parse YAML-like frontmatter
  frontmatterText.split("\n").forEach((line) => {
    const colonIndex = line.indexOf(":");
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim();
      const value = line
        .substring(colonIndex + 1)
        .trim()
        .replace(/^["']|["']$/g, ""); // Remove quotes
      data[key] = value;
    }
  });

  return { data, content };
};

/**
 * Parses a markdown blog post with frontmatter and returns structured data
 * @param markdownContent - Raw markdown content with frontmatter
 * @param slug - Unique identifier for the blog post
 * @returns Structured blog post object with metadata and content
 */
export const parseBlogPost = (
  markdownContent: string,
  slug: string,
): BlogPost => {
  const { data, content } = parseFrontmatter(markdownContent);

  // Parse complex objects from frontmatter
  const parseObject = (key: string) => {
    try {
      return data[key] ? JSON.parse(data[key]) : undefined;
    } catch {
      return undefined;
    }
  };

  return {
    slug,
    title: data.title || "Untitled",
    date: data.date || "No date",
    excerpt: data.excerpt || "",
    category: data.category || "Uncategorized",
    readTime: data.readTime,
    order: data.order ? parseInt(data.order, 10) : undefined,
    author: data.author,
    image: data.image,
    tags: data.tags ? data.tags.split(",").map((tag: string) => tag.trim()) : undefined,
    images: parseObject("images"),
    relatedPosts: parseObject("relatedPosts"),
    seoTitle: data.seoTitle || data.title,
    seoDescription: data.seoDescription || data.excerpt,
    content,
  };
};

// Utility function to estimate reading time
export const estimateReadingTime = (content: string): string => {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return `${readingTime} min read`;
};

/**
 * Parses a markdown experience article with frontmatter and returns structured data
 * @param markdownContent - Raw markdown content with frontmatter
 * @param slug - Unique identifier for the experience article
 * @returns Structured experience article object with metadata and content
 */
export const parseExperienceArticle = (
  markdownContent: string,
  slug: string,
): ExperienceArticle => {
  const { data, content } = parseFrontmatter(markdownContent);

  // Parse complex objects from frontmatter
  const parseObject = (key: string) => {
    try {
      return data[key] ? JSON.parse(data[key]) : undefined;
    } catch {
      return undefined;
    }
  };

  return {
    slug,
    title: data.title || "Untitled",
    subtitle: data.subtitle,
    type: data.type || "experience",
    category: data.category || "Uncategorized",
    date: data.date || "No date",
    readTime: data.readTime || "5 min read",
    seoTitle: data.seoTitle || data.title || "Untitled",
    seoDescription: data.seoDescription || "",
    url: data.url || `/experience/${slug}`,
    backButton: parseObject("backButton"),
    footer: parseObject("footer"),
    relatedArticles: parseObject("relatedArticles"),
    images: parseObject("images"),
    content,
  };
};

// Function to generate slug from filename
export const generateSlug = (filename: string): string => {
  return filename.replace(/\.md$/, "");
};
