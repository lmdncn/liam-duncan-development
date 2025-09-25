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