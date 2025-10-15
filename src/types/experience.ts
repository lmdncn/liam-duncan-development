/**
 * Experience and project related types
 *
 * DEPRECATED: These types are now defined in @/services/schemas
 * This file re-exports them for backwards compatibility
 *
 * Migrate to importing directly from '@/services/schemas' instead
 */

// Re-export from schemas (single source of truth)
export type {
  Experience,
  Project,
  EducationItem as Education,
  SkillCategory as Skill,
} from '@/services/schemas';

// Experience article types (still defined here - these are for markdown content, not YAML data)
export interface BackButton {
  to: string;
  label: string;
}

export interface Footer {
  backTo: string;
  backLabel: string;
}

export interface RelatedArticle {
  slug: string;
  title: string;
  description: string;
  icon: string;
}

export interface ExperienceImages {
  [key: string]: string;
}

export interface ExperienceMetadata {
  title: string;
  subtitle?: string;
  type: string;
  category: string;
  date: string;
  readTime: string;
  seoTitle: string;
  seoDescription: string;
  url: string;
  backButton?: BackButton;
  footer?: Footer;
  relatedArticles?: RelatedArticle[];
  images?: ExperienceImages;
}

export interface ExperienceArticle extends ExperienceMetadata {
  slug: string;
  content: string;
}

// Legacy component props (deprecated - prefer using types from schemas directly)
export interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export interface ProjectCardProps {
  project: Project;
  index: number;
}

export interface EducationCardProps {
  education: Education;
  index: number;
}

export interface SkillCategoryProps {
  skill: Skill;
  index: number;
}

export interface ExperienceArticleCardProps {
  article: ExperienceArticle;
}
