import type { BlogPost } from '@/types/blog';
import { SEO_CONFIG } from '@/lib/constants';
import { generateBlogPostSVG } from '@/lib/ogImageGenerator';

export const generateBlogPostImage = (post: BlogPost): string => {
  // If post has a custom image, use that
  if (post.image) {
    return post.image.startsWith('http') ? post.image : `/images/blog/${post.image}`;
  }
  
  // Generate dynamic SVG image based on post metadata
  return generateBlogPostSVG(post);
};

export const generateBlogPostSEO = (post: BlogPost) => {
  const publishedTime = formatDateForISO(post.date);
  
  return {
    title: post.title,
    description: post.excerpt,
    image: generateBlogPostImage(post),
    url: `/blog/${post.slug}`,
    type: 'article' as const,
    article: {
      author: post.author || SEO_CONFIG.siteName,
      publishedTime,
      section: post.category,
      tag: post.tags || [post.category],
    }
  };
};

export const formatDateForISO = (dateString: string): string => {
  const date = dateString.includes(',') 
    ? new Date(dateString)
    : new Date(`${dateString} 1`); // For "September 2025" format
  
  return date.toISOString();
};