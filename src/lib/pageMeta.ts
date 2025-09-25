import { OG_IMAGES } from './constants';

export const BLOG_PAGE_SEO = {
  title: 'Blog',
  description: 'Thoughts on software engineering, AI tools, career development, and lessons learned from building scalable applications.',
  image: OG_IMAGES.blog,
  url: '/blog' as const,
  type: 'website' as const,
};
