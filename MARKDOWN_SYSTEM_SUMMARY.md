# Unified Markdown Content Management System

## Overview

Your portfolio now has a unified, powerful markdown-based content management system that supports both blog posts and experience articles with rich media, navigation, and SEO features.

## Architecture

### Content Structure
```
src/content/
├── blog/                          # Blog posts
│   ├── post-1.md
│   ├── post-2.md
│   └── post-3.md
└── experience/                    # Experience articles
    └── moves/
        ├── index.md               # Main article
        ├── onboarding.md          # Sub-article
        ├── primary-bank.md        # Sub-article
        └── cash-advances.md       # Sub-article
```

### System Components

**1. Type Definitions**
- `types/blog.ts` - Blog post types with image and related post support
- `types/experience.ts` - Experience article types with navigation and images

**2. Content Loaders** (Build-time processing via Vite glob imports)
- `lib/blog.ts` - Loads and parses blog posts
- `lib/experience.ts` - Loads and parses experience articles
- `lib/markdown.ts` - Shared parsing utilities

**3. UI Components**
- `pages/BlogPost.tsx` - Renders blog posts with ReactMarkdown
- `pages/ExperienceArticle.tsx` - Renders experience articles
- `components/ui/article-layout.tsx` - Shared layout component

## Features Comparison

### Blog Posts

#### Before
- ✅ Basic markdown support
- ✅ Frontmatter metadata
- ✅ Standard formatting
- ❌ No image support
- ❌ No related posts
- ❌ Limited SEO control

#### After
- ✅ Enhanced markdown support
- ✅ Rich frontmatter metadata
- ✅ Custom styling for all elements
- ✅ **Image support with placeholders**
- ✅ **Related posts section**
- ✅ **Full SEO control (title, description)**
- ✅ **Internal/external link handling**
- ✅ **Tags parsing**
- ✅ **Figure/figcaption for images**

### Experience Articles

#### Before
- ❌ Hardcoded React components
- ❌ Content mixed with code
- ❌ Difficult to edit
- ❌ No content reusability

#### After
- ✅ **Markdown-based content**
- ✅ **Separated content from code**
- ✅ **Easy editing in MD files**
- ✅ **Hierarchical structure (parent/sub-articles)**
- ✅ **Related articles navigation**
- ✅ **Image management via frontmatter**
- ✅ **Dynamic routing**
- ✅ **Consistent styling**

## Shared Markdown Features

Both systems now support:

### Text Formatting
- Headings (H1-H6) with custom styling
- Paragraphs with optimal line spacing
- Bold and italic text
- Ordered and unordered lists with custom bullets
- Blockquotes with border styling

### Code
- Inline code with background color
- Code blocks with syntax highlighting support
- Preserved formatting

### Links & Images
- Internal links (React Router navigation)
- External links (opens in new tab)
- Images with figure/figcaption
- Alt text support for accessibility
- Responsive image sizing

### Advanced Features
- Image placeholder syntax: `{{images.keyName}}`
- Related content sections
- Custom metadata for SEO
- Navigation controls

## Usage

### Creating a Blog Post

```markdown
---
title: "Your Post Title"
date: "October 2025"
excerpt: "Brief description"
category: "Technology"
readTime: "5 min"
tags: "javascript, react, typescript"
images: '{"hero": "/path/to/hero.jpg", "diagram": "/path/to/diagram.png"}'
relatedPosts: '[{"slug": "related-post", "title": "Related", "excerpt": "..."}]'
---

# Your Content

![Description]({{images.hero}})

Your markdown content here...
```

### Creating an Experience Article

```markdown
---
title: "Project Title"
subtitle: "Project description"
type: "experience"
category: "Software Engineering"
date: "2022-2024"
readTime: "10 min read"
seoTitle: "Full SEO Title"
seoDescription: "Detailed SEO description"
url: "/experience/project"
backButton: '{"to": "/", "label": "Back Home"}'
footer: '{"backTo": "/", "backLabel": "View Portfolio"}'
images: '{"architecture": "/path/to/arch.jpg", "results": "/path/to/results.png"}'
relatedArticles: '[{"slug": "deep-dive", "title": "Deep Dive", "description": "...", "icon": "FileText"}]'
---

## Your Content

![Architecture]({{images.architecture}})

Your markdown content here...
```

## Benefits

### For Content Management
1. **Version Control**: All content in Git
2. **Easy Editing**: Simple markdown editing
3. **No Rebuilds**: Content changes don't require code changes
4. **Consistency**: Unified styling across all content
5. **Reusability**: Shared components and utilities

### For Development
1. **Type Safety**: Full TypeScript support
2. **Build-time Processing**: Fast runtime performance
3. **Code Splitting**: Lazy-loaded routes
4. **DRY Principles**: Shared markdown rendering logic
5. **Extensible**: Easy to add new content types

### For SEO
1. **Custom Metadata**: Per-post SEO optimization
2. **Semantic HTML**: Proper heading hierarchy
3. **Alt Text**: Accessibility-first images
4. **Internal Linking**: Better site structure
5. **Related Content**: Improved engagement

## Future Enhancements

The system is designed to easily support:
- **Projects**: Add `src/content/projects/` following same pattern
- **Case Studies**: Specialized article types
- **Portfolio Items**: Rich media showcases
- **Documentation**: Technical writing with code examples
- **Search/Filtering**: Content indexing and discovery
- **RSS Feeds**: Automatic generation from markdown
- **Table of Contents**: Auto-generated from headings

## Migration Path

### For New Content
1. Create MD file in appropriate directory
2. Add frontmatter with required fields
3. Write content in markdown
4. Reference images via frontmatter
5. Build and deploy

### For Existing Content
- **Blog Posts**: Already working! New features are optional
- **Experience Articles**: Converted from React components to MD
- **Backward Compatibility**: All existing URLs maintained

## Technical Details

### Frontmatter Parsing
- YAML-like key-value pairs
- JSON strings for complex objects
- Automatic type conversion
- Error handling for malformed data

### Image Processing
- Placeholder replacement at render time
- Support for relative and absolute paths
- Lazy loading ready
- Responsive by default

### Routing
- Dynamic routes via React Router
- Nested paths for sub-articles
- 404 handling for missing content
- Smooth navigation without page reloads

### Performance
- Build-time content loading
- Code splitting per route
- Optimized bundle sizes
- Fast client-side navigation

## Summary

You now have a production-ready, unified markdown content management system that:
- ✅ Supports rich media and advanced features
- ✅ Maintains type safety and code quality
- ✅ Provides excellent DX for content editing
- ✅ Delivers optimal performance
- ✅ Scales to additional content types
- ✅ Maintains backward compatibility