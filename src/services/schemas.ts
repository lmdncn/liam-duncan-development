/**
 * Zod schemas for runtime validation
 * These schemas are the SINGLE SOURCE OF TRUTH for all data types
 * TypeScript types are inferred from these schemas
 */

import { z } from 'zod';

/**
 * Base schemas for reusable patterns
 */
const IdSchema = z.string().min(1);
const UrlSchema = z.string().url();
const OrderSchema = z.number().int().positive();
const NonEmptyStringSchema = z.string().min(1);

/**
 * Experience schema
 * Represents work experience data
 */
export const ExperienceSchema = z.object({
  id: IdSchema,
  company: NonEmptyStringSchema,
  position: NonEmptyStringSchema.optional(),
  duration: NonEmptyStringSchema,
  location: NonEmptyStringSchema,
  prevPosition: z.union([NonEmptyStringSchema, z.array(NonEmptyStringSchema)]).optional(),
  description: z.array(NonEmptyStringSchema).min(1),
  skills: z.array(NonEmptyStringSchema),
  link: UrlSchema.optional(),
  iconImage: z.string().optional(),
  order: OrderSchema.optional(),
  featured: z.boolean().optional(),
});

export const ExperiencesSchema = z.array(ExperienceSchema);

/**
 * Skills color configuration schema
 */
const SkillColorSchema = z.object({
  bg: NonEmptyStringSchema,
  text: NonEmptyStringSchema,
  border: NonEmptyStringSchema,
});

/**
 * Skill category schema
 * Represents a category of technical skills
 */
export const SkillCategorySchema = z.object({
  id: IdSchema,
  title: NonEmptyStringSchema,
  icon: NonEmptyStringSchema,
  skills: z.array(NonEmptyStringSchema).min(1),
  color: SkillColorSchema,
  order: OrderSchema,
});

export const SkillCategoriesSchema = z.array(SkillCategorySchema);

/**
 * Project schema
 * Represents personal or professional projects
 */
export const ProjectSchema = z.object({
  id: IdSchema,
  title: NonEmptyStringSchema,
  year: NonEmptyStringSchema,
  event: NonEmptyStringSchema,
  awards: z.array(NonEmptyStringSchema),
  description: NonEmptyStringSchema,
  technologies: z.array(NonEmptyStringSchema).min(1),
  highlights: z.array(NonEmptyStringSchema).min(1),
  demoUrl: UrlSchema.optional(),
  githubUrl: UrlSchema.optional(),
  order: OrderSchema,
});

export const ProjectsSchema = z.array(ProjectSchema);

/**
 * Education schema
 * Represents educational background
 */
export const EducationItemSchema = z.object({
  id: IdSchema,
  institution: NonEmptyStringSchema,
  degree: NonEmptyStringSchema,
  duration: NonEmptyStringSchema,
  location: NonEmptyStringSchema,
  description: NonEmptyStringSchema,
  honors: z.array(NonEmptyStringSchema).optional(),
  iconImage: z.string().optional(),
  gpa: z.string().optional(),
  order: OrderSchema,
});

export const EducationSchema = z.array(EducationItemSchema);

/**
 * Featured item schema
 * Represents featured content items
 */
export const FeaturedItemSchema = z.object({
  id: IdSchema,
  title: NonEmptyStringSchema,
  description: NonEmptyStringSchema,
  link: z.string().optional(),
  iconImage: z.string().optional(),
  order: OrderSchema,
});

export const FeaturedItemsSchema = z.array(FeaturedItemSchema);

/**
 * Hero data schema
 * Represents hero section configuration
 */
export const HeroDataSchema = z.object({
  rotatingRoles: z.array(NonEmptyStringSchema).min(1),
  headline: NonEmptyStringSchema,
  subheadline: NonEmptyStringSchema,
});

/**
 * TypeScript types inferred from Zod schemas
 * These are the canonical types used throughout the application
 */
export type Experience = z.infer<typeof ExperienceSchema>;
export type SkillCategory = z.infer<typeof SkillCategorySchema>;
export type SkillColor = z.infer<typeof SkillColorSchema>;
export type Project = z.infer<typeof ProjectSchema>;
export type EducationItem = z.infer<typeof EducationItemSchema>;
export type FeaturedItem = z.infer<typeof FeaturedItemSchema>;
export type HeroData = z.infer<typeof HeroDataSchema>;

/**
 * Readonly versions for immutable data
 */
export type ReadonlyExperience = Readonly<Experience>;
export type ReadonlyProject = Readonly<Project>;
export type ReadonlyEducationItem = Readonly<EducationItem>;
export type ReadonlySkillCategory = Readonly<SkillCategory>;
export type ReadonlyFeaturedItem = Readonly<FeaturedItem>;
export type ReadonlyHeroData = Readonly<HeroData>;

/**
 * Array types for collections
 */
export type Experiences = Experience[];
export type Projects = Project[];
export type SkillCategories = SkillCategory[];
export type EducationItems = EducationItem[];
export type FeaturedItems = FeaturedItem[];
