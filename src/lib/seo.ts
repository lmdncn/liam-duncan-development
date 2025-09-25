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
  let date: Date;
  
  if (dateString.includes(',')) {
    // Handle "September 24, 2025" format
    date = new Date(dateString);
  } else {
    // Handle "September 2025" format - convert to mobile-safe parsing
    const [month, year] = dateString.split(' ');
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                       'July', 'August', 'September', 'October', 'November', 'December'];
    const monthIndex = monthNames.indexOf(month);
    
    if (monthIndex === -1) {
      console.warn(`Invalid month name: ${month}`);
      date = new Date(); // fallback to current date
    } else {
      // Use Date constructor with numeric parameters (mobile-safe)
      date = new Date(parseInt(year), monthIndex, 1);
    }
  }
  
  return date.toISOString();
};