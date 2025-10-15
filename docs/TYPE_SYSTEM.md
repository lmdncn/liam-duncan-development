# Type System Documentation

This document describes the type system architecture and best practices for this project.

## Philosophy

**Single Source of Truth**: All data types are defined using Zod schemas in `src/services/schemas.ts`. TypeScript types are inferred from these schemas, ensuring runtime validation matches compile-time types.

## Type Hierarchy

```
Zod Schemas (Runtime Validation)
    ↓ (infer types)
TypeScript Types (Compile-time)
    ↓ (used by)
API Services → Hooks → Components
```

## Core Principles

### 1. Schema-First Development

All data types start as Zod schemas:

```typescript
// ✅ GOOD: Define schema first
export const ExperienceSchema = z.object({
  id: z.string().min(1),
  company: z.string().min(1),
  // ... more fields
});

// Type inferred from schema
export type Experience = z.infer<typeof ExperienceSchema>;
```

```typescript
// ❌ BAD: Don't define separate interface
interface Experience {
  id: string;
  company: string;
}
```

### 2. Type Import Strategy

**Priority:**
1. Import from `@/services/schemas` (preferred)
2. Import from `@/services/api` (for specific API types)
3. Import from `@/types` (legacy, being phased out)

```typescript
// ✅ BEST: Import from schemas
import type { Experience, Project } from '@/services/schemas';

// ✅ GOOD: Import from API if re-exported
import { experiencesAPI } from '@/services/api';

// ⚠️  DEPRECATED: Import from legacy types
import type { Experience } from '@/types';
```

### 3. Type Safety Levels

**Level 1: Runtime + Compile-time (Strictest)**
```typescript
// Zod schema provides both runtime validation and TypeScript types
const ExperienceSchema = z.object({ ... });
type Experience = z.infer<typeof ExperienceSchema>;
```

**Level 2: Compile-time only**
```typescript
// TypeScript interface (no runtime validation)
interface ComponentProps {
  data: Experience[];
}
```

**Level 3: Branded Types (For IDs)**
```typescript
// Future enhancement: Branded types for better type safety
type ExperienceId = string & { __brand: 'ExperienceId' };
```

## Type Definitions

### Base Types

Located in `src/services/schemas.ts`:

#### Reusable Base Schemas
```typescript
const IdSchema = z.string().min(1);
const UrlSchema = z.string().url();
const OrderSchema = z.number().int().positive();
const NonEmptyStringSchema = z.string().min(1);
```

### Data Model Types

All defined in `src/services/schemas.ts`:

#### Experience
```typescript
export const ExperienceSchema = z.object({
  id: IdSchema,
  company: NonEmptyStringSchema,
  position: NonEmptyStringSchema,
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

export type Experience = z.infer<typeof ExperienceSchema>;
export type Experiences = Experience[];
```

#### Project
```typescript
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

export type Project = z.infer<typeof ProjectSchema>;
export type Projects = Project[];
```

#### SkillCategory
```typescript
export const SkillCategorySchema = z.object({
  id: IdSchema,
  title: NonEmptyStringSchema,
  icon: NonEmptyStringSchema,
  skills: z.array(NonEmptyStringSchema).min(1),
  color: SkillColorSchema,
  order: OrderSchema,
});

export type SkillCategory = z.infer<typeof SkillCategorySchema>;
export type SkillCategories = SkillCategory[];
```

### Collection Types

For arrays of data:

```typescript
export type Experiences = Experience[];
export type Projects = Project[];
export type SkillCategories = SkillCategory[];
export type EducationItems = EducationItem[];
export type FeaturedItems = FeaturedItem[];
```

### Readonly Types

For immutable data:

```typescript
export type ReadonlyExperience = Readonly<Experience>;
export type ReadonlyProject = Readonly<Project>;
export type ReadonlySkillCategory = Readonly<SkillCategory>;
```

## Type Usage Patterns

### In API Services

```typescript
// src/services/api/experiences.ts
import type { Experience, Experiences } from '../schemas';

export const experiencesAPI = {
  getAll: async (): Promise<Experiences> => {
    return dataClient.get<Experiences>('experiences');
  },

  getById: async (id: string): Promise<Experience | undefined> => {
    return dataClient.getById<Experience>('experiences', id);
  },
};
```

### In React Query Hooks

```typescript
// src/hooks/useExperiences.ts
import type { Experience, Experiences } from '@/services/schemas';

export const useExperiences = () => {
  return useQuery<Experiences, Error>({
    queryKey: ['experiences'],
    queryFn: experiencesAPI.getAll,
  });
};
```

### In Components

```typescript
// src/components/Experience.tsx
const Experience = () => {
  // Type is inferred from hook return type
  const { data: experiences, isLoading, error } = useExperiences();

  // experiences is typed as Experiences | undefined
  if (!experiences) return null;

  // Now experiences is typed as Experiences
  return <Timeline items={experiences} />;
};
```

### In Component Props

```typescript
// Prefer inline typing over separate interface
const ProjectCard = ({ project }: { project: Project }) => {
  // ...
};

// Or for complex props
interface ProjectCardProps {
  project: Project;
  onSelect?: (id: string) => void;
  className?: string;
}

const ProjectCard = ({ project, onSelect, className }: ProjectCardProps) => {
  // ...
};
```

## Type Guards

For runtime type checking:

```typescript
// Type guard for filtering
function isFeatured(experience: Experience): boolean {
  return experience.featured === true;
}

// Type predicate
function isProject(item: unknown): item is Project {
  return (
    typeof item === 'object' &&
    item !== null &&
    'title' in item &&
    'technologies' in item
  );
}
```

## Generic Types

For reusable patterns:

```typescript
// API response wrapper
type ApiResponse<T> = {
  data: T;
  error?: string;
  meta?: {
    total: number;
    page: number;
  };
};

// Usage
type ExperiencesResponse = ApiResponse<Experiences>;
type ProjectResponse = ApiResponse<Project>;
```

## Error Handling Types

```typescript
// From services/types.ts
export class DataServiceError extends Error {
  constructor(
    message: string,
    public resource: string,
    public originalError?: unknown
  ) {
    super(message);
    this.name = 'DataServiceError';
  }
}
```

## Migration Guide

### From Legacy Types

**Old way:**
```typescript
import type { Experience } from '@/types';
```

**New way:**
```typescript
import type { Experience } from '@/services/schemas';
```

### Adding New Types

1. **Define Zod schema:**
```typescript
// src/services/schemas.ts
export const TestimonialSchema = z.object({
  id: IdSchema,
  name: NonEmptyStringSchema,
  role: NonEmptyStringSchema,
  quote: NonEmptyStringSchema,
  rating: z.number().min(1).max(5),
  order: OrderSchema,
});
```

2. **Infer TypeScript type:**
```typescript
export type Testimonial = z.infer<typeof TestimonialSchema>;
export type Testimonials = Testimonial[];
```

3. **Add to schema map:**
```typescript
// src/services/client.ts
const schemaMap: Record<DataResource, z.ZodType<any>> = {
  // ... existing schemas
  testimonials: TestimonialsSchema,
};
```

4. **Use in API service:**
```typescript
// src/services/api/testimonials.ts
import type { Testimonial, Testimonials } from '../schemas';

export const testimonialsAPI = {
  getAll: async (): Promise<Testimonials> => {
    return dataClient.get<Testimonials>('testimonials');
  },
};
```

## Best Practices

### ✅ DO

1. **Define types from Zod schemas**
   ```typescript
   export const Schema = z.object({ ... });
   export type Type = z.infer<typeof Schema>;
   ```

2. **Use type inference where possible**
   ```typescript
   const { data } = useExperiences(); // Type inferred automatically
   ```

3. **Use NonNullable for required data**
   ```typescript
   type RequiredExperience = NonNullable<Experience>;
   ```

4. **Use const assertions for literal types**
   ```typescript
   const ROLES = ['Engineer', 'Manager'] as const;
   type Role = typeof ROLES[number]; // 'Engineer' | 'Manager'
   ```

5. **Document complex types**
   ```typescript
   /**
    * Represents a work experience with all required metadata
    * @property id - Unique identifier
    * @property company - Company name
    */
   export type Experience = z.infer<typeof ExperienceSchema>;
   ```

### ❌ DON'T

1. **Don't duplicate type definitions**
   ```typescript
   // ❌ BAD
   interface Experience { ... }
   const ExperienceSchema = z.object({ ... });
   ```

2. **Don't use `any`**
   ```typescript
   // ❌ BAD
   const data: any = await fetch();

   // ✅ GOOD
   const data: Experience = await fetch();
   ```

3. **Don't use type assertions without validation**
   ```typescript
   // ❌ BAD
   const exp = data as Experience;

   // ✅ GOOD
   const exp = ExperienceSchema.parse(data);
   ```

4. **Don't mix optional chaining with non-null assertions**
   ```typescript
   // ❌ BAD
   const name = experience?.company!;

   // ✅ GOOD
   const name = experience?.company ?? 'Unknown';
   ```

## Type Checking Commands

```bash
# Type check without building
npx tsc --noEmit

# Build and type check
npm run build

# Watch mode for development
npx tsc --noEmit --watch
```

## Common Type Errors and Solutions

### Error: Type 'X' is not assignable to type 'Y'

**Solution:** Check if the schema definition matches the YAML data structure.

### Error: Property 'X' does not exist on type 'Y'

**Solution:** Ensure the property is defined in the Zod schema and type is properly inferred.

### Error: Argument of type 'X' is not assignable to parameter of type 'Y'

**Solution:** Use type guards or validate with Zod schema before passing.

## Future Enhancements

1. **Branded Types** for IDs
2. **Discriminated Unions** for polymorphic data
3. **Conditional Types** for advanced patterns
4. **Template Literal Types** for dynamic keys
5. **Utility Types** library for common transformations

## Summary

- **Single Source of Truth**: Zod schemas in `services/schemas.ts`
- **Type Inference**: TypeScript types inferred from Zod
- **Runtime Validation**: Automatic via Zod parsing
- **Type Safety**: End-to-end from data to UI
- **Maintainability**: One place to update types

This type system ensures that:
✅ Types match runtime data
✅ Changes propagate automatically
✅ Invalid data is caught at load time
✅ IDE autocomplete works perfectly
✅ Refactoring is safe and easy
