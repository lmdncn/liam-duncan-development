import { parseExperienceArticle, generateSlug } from "./markdown";
import type { ExperienceArticle } from "@/types/experience";

/**
 * Sorts experience articles by date (newest first)
 * @param a - First experience article to compare
 * @param b - Second experience article to compare
 * @returns Comparison result for Array.sort()
 */
const sortExperienceArticles = (a: ExperienceArticle, b: ExperienceArticle): number => {
  // For now, maintain array order since we don't have complex sorting needs
  return 0;
};

// Use Vite's glob import to load all markdown files at build time
const experienceModules = import.meta.glob("../content/experience/**/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

// Parse all experience articles
const allExperienceArticles: ExperienceArticle[] = Object.entries(experienceModules)
  .map(([path, content]) => {
    const pathParts = path.split("/");
    const filename = pathParts.pop() || "";
    const parentDir = pathParts[pathParts.length - 1] || "";
    
    // Generate slug based on file structure
    // For index.md files, use the parent directory name
    // For other files, use the filename
    const slug = filename === "index.md" ? parentDir : generateSlug(filename);
    const fullSlug = filename === "index.md" ? slug : `${parentDir}/${slug}`;
    
    return parseExperienceArticle(content as string, fullSlug);
  })
  .sort(sortExperienceArticles);

/**
 * Retrieves all experience articles
 * @returns Array of all experience articles with metadata
 */
export const getAllExperienceArticles = (): ExperienceArticle[] => {
  return allExperienceArticles;
};

/**
 * Retrieves a specific experience article by its slug
 * @param slug - The unique identifier for the experience article
 * @returns The experience article if found, undefined otherwise
 */
export const getExperienceArticleBySlug = (slug: string): ExperienceArticle | undefined => {
  return allExperienceArticles.find((article) => article.slug === slug);
};

/**
 * Retrieves all experience article slugs for routing purposes
 * @returns Array of all experience article slugs
 */
export const getAllExperienceArticleSlugs = (): string[] => {
  return allExperienceArticles.map((article) => article.slug);
};

/**
 * Retrieves experience articles by category (e.g., "moves")
 * @param category - The category to filter by
 * @returns Array of experience articles in the specified category
 */
export const getExperienceArticlesByCategory = (category: string): ExperienceArticle[] => {
  return allExperienceArticles.filter((article) => 
    article.slug.startsWith(category) || article.category.toLowerCase().includes(category.toLowerCase())
  );
};