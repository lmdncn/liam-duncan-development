import type { BlogPost } from '@/types/blog';
import { OG_IMAGES, SEO_CONFIG } from '@/lib/constants';

export const generateBlogPostImage = (post: BlogPost): string => {
  if (post.image) {
    return post.image.startsWith('http') ? post.image : `/images/blog/${post.image}`;
  }
  return OG_IMAGES.blog;
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