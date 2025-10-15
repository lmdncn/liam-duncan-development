# Data Layer Architecture

This document describes the new data layer architecture that separates data from components and makes the codebase CMS-ready.

## Overview

The data layer follows a **service layer pattern** that abstracts data fetching behind a clean API. This allows you to swap between YAML files and a CMS without changing any component code.

## Architecture Diagram

```
Components (Presentation)
    ↓ (use hooks)
React Query Hooks (State Management)
    ↓ (call API services)
API Services (Business Logic)
    ↓ (use data client)
Data Client (Abstraction Layer)
    ↓ (fetch from)
YAML Files / CMS API (Data Source)
    ↓ (validated by)
Zod Schemas (Runtime Validation)
```

## Directory Structure

```
src/
├── content/data/              # YAML data files
│   ├── experiences.yaml       # Work experience data
│   ├── skills.yaml           # Skills categories
│   ├── projects.yaml         # Personal projects
│   ├── education.yaml        # Education history
│   ├── featured.yaml         # Featured content
│   └── hero.yaml             # Hero section content
│
├── services/                 # Data access layer
│   ├── types.ts             # Service layer types
│   ├── schemas.ts           # Zod validation schemas
│   ├── client.ts            # Data client implementations
│   └── api/                 # API service modules
│       ├── experiences.ts
│       ├── skills.ts
│       ├── projects.ts
│       ├── education.ts
│       ├── featured.ts
│       ├── hero.ts
│       └── index.ts
│
├── hooks/                    # React Query hooks
│   ├── useExperiences.ts
│   ├── useSkills.ts
│   ├── useProjects.ts
│   ├── useEducation.ts
│   ├── useFeatured.ts
│   └── useHeroData.ts
│
└── components/               # React components (presentation only)
    ├── Hero.tsx
    ├── Experience.tsx
    ├── Skills.tsx
    ├── Projects.tsx
    ├── Education.tsx
    ├── FeaturedExperience.tsx
    └── ui/
        ├── loading-state.tsx
        └── error-state.tsx
```

## How It Works

### 1. YAML Data Files

Data is stored in YAML files for easy editing:

```yaml
# src/content/data/experiences.yaml
experiences:
  - id: float-financial
    company: Float Financial
    position: Software Developer
    duration: Feb 2025 – Jul 2025
    location: Remote (Canada)
    description:
      - "Modernized a $100M+ payments API..."
    skills:
      - Python
      - Django
    link: https://floatfinancial.com/
    iconImage: /float-app-icon.png
    order: 1
```

### 2. Zod Schemas (Runtime Validation)

Schemas ensure data integrity:

```typescript
// src/services/schemas.ts
export const ExperienceSchema = z.object({
  id: z.string(),
  company: z.string(),
  position: z.string(),
  // ... more fields
});

export const ExperiencesSchema = z.array(ExperienceSchema);
```

### 3. Data Client (Abstraction Layer)

The client loads and validates data:

```typescript
// src/services/client.ts
export class YamlDataClient implements DataClient {
  async get<T>(resource: string): Promise<T> {
    // 1. Load YAML file
    // 2. Parse YAML
    // 3. Validate with Zod
    // 4. Return typed data
  }
}

// Future CMS client (drop-in replacement)
export class CMSDataClient implements DataClient {
  async get<T>(resource: string): Promise<T> {
    // Fetch from CMS API instead
  }
}
```

### 4. API Services (Business Logic)

Services provide domain-specific methods:

```typescript
// src/services/api/experiences.ts
export const experiencesAPI = {
  getAll: async (): Promise<Experience[]> => {
    return dataClient.get<Experience[]>('experiences');
  },

  getById: async (id: string): Promise<Experience | undefined> => {
    return dataClient.getById<Experience>('experiences', id);
  },

  getFeatured: async (): Promise<Experience[]> => {
    const all = await experiencesAPI.getAll();
    return all.filter(exp => exp.featured);
  }
};
```

### 5. React Query Hooks (State Management)

Hooks manage loading, caching, and errors:

```typescript
// src/hooks/useExperiences.ts
export const useExperiences = () => {
  return useQuery<Experience[], Error>({
    queryKey: ['experiences'],
    queryFn: experiencesAPI.getAll,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};
```

### 6. Components (Presentation Only)

Components are now clean and focused:

```typescript
// src/components/Experience.tsx
const Experience = () => {
  const { data: experiences, isLoading, error, refetch } = useExperiences();

  return (
    <Section id="experience">
      <Container>
        {isLoading && <LoadingState message="Loading experience..." />}
        {error && <ErrorState message="Failed to load" onRetry={refetch} />}
        {experiences && <Timeline items={experiences} />}
      </Container>
    </Section>
  );
};
```

## Benefits

### 1. **Separation of Concerns**
- Components only handle presentation
- Hooks manage state and side effects
- Services handle data fetching logic
- Client abstracts data sources

### 2. **CMS Ready**
To switch to a CMS, you only need to:
1. Create `.env` file:
   ```
   VITE_USE_CMS=true
   VITE_CMS_API_URL=https://your-cms.com/api
   VITE_CMS_API_KEY=your-api-key
   ```
2. Done! No component changes needed.

### 3. **Type Safety**
- Zod schemas provide runtime validation
- TypeScript types inferred from schemas
- No type/runtime mismatches

### 4. **Better Developer Experience**
- Easy to test (mock services)
- Clear data flow
- Centralized error handling
- Automatic loading states
- Built-in caching via React Query

### 5. **Maintainability**
- Single source of truth for each data type
- Easy to add new data sources
- Consistent patterns throughout

## Usage Examples

### Adding New Data

1. **Create YAML file:**
```yaml
# src/content/data/testimonials.yaml
testimonials:
  - id: john-doe
    name: John Doe
    role: CEO
    quote: "Great work!"
    order: 1
```

2. **Create Zod schema:**
```typescript
// src/services/schemas.ts
export const TestimonialSchema = z.object({
  id: z.string(),
  name: z.string(),
  role: z.string(),
  quote: z.string(),
  order: z.number(),
});
```

3. **Create API service:**
```typescript
// src/services/api/testimonials.ts
export const testimonialsAPI = {
  getAll: async () => dataClient.get('testimonials'),
};
```

4. **Create hook:**
```typescript
// src/hooks/useTestimonials.ts
export const useTestimonials = () => {
  return useQuery({
    queryKey: ['testimonials'],
    queryFn: testimonialsAPI.getAll,
  });
};
```

5. **Use in component:**
```typescript
const Testimonials = () => {
  const { data, isLoading, error } = useTestimonials();
  // Render...
};
```

### Editing Content

Simply edit the YAML files in `src/content/data/`:

```yaml
# src/content/data/hero.yaml
hero:
  rotatingRoles:
    - Engineer
    - AI Builder
    - Problem Solver
  headline: Your new headline here
  subheadline: Your new subheadline here
```

Changes are validated automatically!

## Migration to CMS

When you're ready to add a CMS (like Contentful, Strapi, or Sanity):

### Option 1: Environment Variable Switch

1. Set environment variables:
```env
VITE_USE_CMS=true
VITE_CMS_API_URL=https://api.contentful.com
VITE_CMS_API_KEY=your-key
```

2. The app automatically switches to `CMSDataClient`

### Option 2: Custom Implementation

Create a custom client:

```typescript
// src/services/clients/contentful-client.ts
export class ContentfulClient implements DataClient {
  async get<T>(resource: string): Promise<T> {
    // Use Contentful SDK
    const entries = await contentful.getEntries({
      content_type: resource
    });
    return entries.items;
  }
}
```

Then update `client.ts`:
```typescript
export const dataClient = new ContentfulClient();
```

## Performance

- **Caching:** React Query caches data for 5-10 minutes
- **Loading States:** Automatic via React Query
- **Error Handling:** Centralized with retry capability
- **Validation:** Only happens once per data load
- **Bundle Size:** YAML files not included in bundle (loaded async)

## Testing

Mock the data client for testing:

```typescript
// tests/mocks/dataClient.ts
export const mockDataClient: DataClient = {
  get: jest.fn(),
  getById: jest.fn(),
};

// In tests
jest.mock('@/services/client', () => ({
  dataClient: mockDataClient
}));
```

## Troubleshooting

### Data not loading?
1. Check browser console for errors
2. Verify YAML syntax is correct
3. Check Zod schema matches YAML structure

### Validation errors?
1. Check error message in console
2. Compare YAML data with Zod schema
3. Ensure all required fields are present

### TypeScript errors?
1. Ensure types are exported from schemas
2. Run `npm run build` to check for issues
3. Check that API services use correct types

## Next Steps

1. ✅ YAML data layer implemented
2. ✅ Zod validation added
3. ✅ React Query hooks created
4. ✅ Components refactored
5. ⏭️ Add tests for data layer
6. ⏭️ Add Storybook for components
7. ⏭️ Integrate with CMS when ready

## Summary

This data layer architecture provides:
- Clean separation between data and presentation
- Type-safe data loading with runtime validation
- Easy migration path to CMS
- Better developer experience
- Improved maintainability

The codebase is now production-ready and CMS-ready! 🎉
