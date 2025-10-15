/**
 * Zod schemas for runtime validation
 * These schemas validate data loaded from YAML files or API responses
 */

import { z } from 'zod';

/**
 * Experience schema
 */
export const ExperienceSchema = z.object({
  id: z.string(),
  company: z.string(),
  position: z.string(),
  duration: z.string(),
  location: z.string(),
  prevPosition: z.union([z.string(), z.array(z.string())]).optional(),
  description: z.array(z.string()),
  skills: z.array(z.string()),
  link: z.string().url().optional(),
  iconImage: z.string().optional(),
  order: z.number().optional(),
});

export const ExperiencesSchema = z.array(ExperienceSchema);

/**
 * Skills schema
 */
export const SkillCategorySchema = z.object({
  id: z.string(),
  title: z.string(),
  icon: z.string(),
  skills: z.array(z.string()),
  color: z.object({
    bg: z.string(),
    text: z.string(),
    border: z.string(),
  }),
  order: z.number(),
});

export const SkillsSchema = z.array(SkillCategorySchema);

/**
 * Projects schema
 */
export const ProjectSchema = z.object({
  id: z.string(),
  title: z.string(),
  year: z.string(),
  event: z.string(),
  awards: z.array(z.string()),
  description: z.string(),
  technologies: z.array(z.string()),
  highlights: z.array(z.string()),
  demoUrl: z.string().url().optional(),
  githubUrl: z.string().url().optional(),
  order: z.number(),
});

export const ProjectsSchema = z.array(ProjectSchema);

/**
 * Education schema
 */
export const EducationItemSchema = z.object({
  id: z.string(),
  institution: z.string(),
  degree: z.string(),
  duration: z.string(),
  location: z.string(),
  description: z.string(),
  honors: z.array(z.string()).optional(),
  iconImage: z.string().optional(),
  order: z.number(),
});

export const EducationSchema = z.array(EducationItemSchema);

/**
 * Featured items schema
 */
export const FeaturedItemSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  link: z.string().optional(),
  iconImage: z.string().optional(),
  order: z.number(),
});

export const FeaturedSchema = z.array(FeaturedItemSchema);

/**
 * Hero data schema
 */
export const HeroDataSchema = z.object({
  rotatingRoles: z.array(z.string()),
  headline: z.string(),
  subheadline: z.string(),
});

/**
 * Type exports inferred from schemas
 */
export type Experience = z.infer<typeof ExperienceSchema>;
export type SkillCategory = z.infer<typeof SkillCategorySchema>;
export type Project = z.infer<typeof ProjectSchema>;
export type EducationItem = z.infer<typeof EducationItemSchema>;
export type FeaturedItem = z.infer<typeof FeaturedItemSchema>;
export type HeroData = z.infer<typeof HeroDataSchema>;
