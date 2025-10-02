// Experience and project related types

export interface Experience {
  company: string;
  position: string;
  duration: string;
  location: string;
  prevPosition?: string | string[];
  description: string[];
  skills: string[];
}

export interface Project {
  title: string;
  year: string;
  event: string;
  awards: string[];
  description: string;
  technologies: string[];
  highlights: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  location: string;
  description?: string[];
  gpa?: string;
  honors?: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

// Component props
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

// Experience article types
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

// Experience article component props
export interface ExperienceArticleCardProps {
  article: ExperienceArticle;
}
