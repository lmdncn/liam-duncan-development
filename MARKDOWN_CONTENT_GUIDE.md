# Markdown Content Guide

Complete guide for adding and managing markdown-based content (blog posts and experience articles) in your portfolio.

## Quick Start

### Add a Blog Post

1. Create `src/content/blog/my-post-slug.md`
2. Add frontmatter and content:

```markdown
---
title: "My Post Title"
date: "October 2025"
excerpt: "Brief description for listing pages"
category: "Technology"
readTime: "5 min"
---

Your markdown content here...
```

3. Build and deploy!

### Add an Experience Article

1. Create `src/content/experience/project/index.md`
2. Add frontmatter and content:

```markdown
---
title: "Project Title"
subtitle: "Brief project description"
type: "experience"
category: "Software Engineering"
date: "2020-2024"
readTime: "10 min read"
seoTitle: "Full SEO Title"
seoDescription: "Detailed description for search engines"
url: "/experience/project"
backButton: '{"to": "/", "label": "Back to Portfolio"}'
footer: '{"backTo": "/", "backLabel": "Back to Portfolio"}'
---

## Your Content

Write your experience article here...
```

---

## System Architecture

### Content Structure
```
src/content/
├── blog/                          # Blog posts
│   ├── post-1.md
│   ├── post-2.md
│   └── post-3.md
└── experience/                    # Experience articles
    └── project-name/
        ├── index.md               # Main article
        ├── deep-dive.md           # Sub-article
        └── technical.md           # Sub-article
```

### How It Works

**Build-time Processing**
- Vite glob imports load all `.md` files
- Frontmatter is parsed using custom YAML parser
- Content is separated from metadata
- Types are validated via TypeScript

**Runtime Rendering**
- React Router handles dynamic routes
- ReactMarkdown renders content with custom components
- Images are processed and styled automatically
- Links are handled (internal via React Router, external open in new tab)

**Key Files**
- [lib/markdown.ts](src/lib/markdown.ts) - Frontmatter parsing utilities
- [lib/blog.ts](src/lib/blog.ts) - Blog post loader
- [lib/experience.ts](src/lib/experience.ts) - Experience article loader
- [types/blog.ts](src/types/blog.ts) - Blog type definitions
- [types/experience.ts](src/types/experience.ts) - Experience type definitions

---

## Frontmatter Reference

### Blog Posts

| Field | Required | Type | Description | Example |
|-------|----------|------|-------------|---------|
| `title` | **Yes** | string | Post title | `"My Post Title"` |
| `date` | **Yes** | string | Publication date | `"October 2025"` |
| `excerpt` | **Yes** | string | Short description for listings | `"Brief description"` |
| `category` | **Yes** | string | Post category | `"Technology"` |
| `readTime` | No | string | Estimated reading time | `"5 min"` |
| `order` | No | number | Sort order (lower = first) | `1` |
| `author` | No | string | Author name | `"Liam Duncan"` |
| `tags` | No | string | Comma-separated tags | `"ai, react, typescript"` |
| `image` | No | string | OG/preview image path | `"/og-image.jpg"` |
| `images` | No | JSON object | Named images for content | `'{"hero": "/path.jpg"}'` |
| `relatedPosts` | No | JSON array | Related blog posts | `'[{"slug": "...", "title": "...", "excerpt": "..."}]'` |
| `seoTitle` | No | string | SEO title (defaults to `title`) | `"SEO Optimized Title"` |
| `seoDescription` | No | string | SEO description (defaults to `excerpt`) | `"Detailed SEO description"` |

### Experience Articles

| Field | Required | Type | Description | Example |
|-------|----------|------|-------------|---------|
| `title` | **Yes** | string | Article title | `"My Time at Company"` |
| `subtitle` | No | string | Article subtitle | `"What I built and learned"` |
| `type` | **Yes** | string | Must be `"experience"` | `"experience"` |
| `category` | **Yes** | string | Article category | `"Software Engineering"` |
| `date` | **Yes** | string | Date range or period | `"2020-2024"` |
| `readTime` | **Yes** | string | Estimated reading time | `"10 min read"` |
| `seoTitle` | **Yes** | string | SEO title | `"My Experience at Company"` |
| `seoDescription` | **Yes** | string | SEO description | `"Detailed description..."` |
| `url` | **Yes** | string | Article URL path | `"/experience/company"` |
| `backButton` | No | JSON object | Back navigation config | `'{"to": "/", "label": "Back"}'` |
| `footer` | No | JSON object | Footer navigation config | `'{"backTo": "/", "backLabel": "..."}'` |
| `images` | No | JSON object | Named images for content | `'{"diagram": "/path.jpg"}'` |
| `relatedArticles` | No | JSON array | Related experience articles | `'[{"slug": "...", "title": "...", "description": "...", "icon": "FileText"}]'` |

---

## Markdown Features

Both blog posts and experience articles support rich markdown formatting:

### Text Formatting
```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold text**
*Italic text*
**_Bold and italic_**
```

### Lists
```markdown
- Unordered item 1
- Unordered item 2
  - Nested item

1. Ordered item 1
2. Ordered item 2
   1. Nested item
```

### Links
```markdown
[Internal link](/blog/other-post)
[External link](https://example.com)
```

- Internal links navigate via React Router (no page reload)
- External links open in new tab automatically

### Images

**Standard markdown:**
```markdown
![Alt text for accessibility](/path/to/image.jpg)
```

**Using frontmatter images:**
```markdown
---
images: '{"hero": "/assets/hero.jpg", "diagram": "/assets/diagram.png"}'
---

![Hero image description]({{images.hero}})
![System diagram]({{images.diagram}})
```

Images automatically include:
- Rounded corners and shadow
- Centered layout
- Figcaption from alt text
- Responsive sizing (max-w-3xl)

### Code

**Inline code:**
```markdown
Use `const` for constants
```

**Code blocks:**
````markdown
```javascript
const example = "code here";
function hello() {
  return "world";
}
```
````

### Blockquotes
```markdown
> Important quote or callout text
> Can span multiple lines
```

---

## Advanced Features

### Image Management via Frontmatter

Define images once, reference anywhere:

```markdown
---
title: "My Post"
images: '{"hero": "/src/assets/images/hero.jpg", "chart": "/src/assets/images/chart.png", "screenshot": "/src/assets/images/screenshot.jpg"}'
---

![Hero image]({{images.hero}})

## Section 1

![Data visualization]({{images.chart}})

## Results

![Application screenshot]({{images.screenshot}})
```

**Benefits:**
- Centralized image management
- Easy to update paths
- Clear image inventory
- Type-safe references

### Related Content

**Blog Posts:**
```markdown
---
title: "Main Post"
relatedPosts: '[{"slug": "related-post-slug", "title": "Related Post Title", "excerpt": "Brief description of the related post"}]'
---
```

**Experience Articles:**
```markdown
---
title: "Main Article"
relatedArticles: '[{"slug": "deep-dive", "title": "Technical Deep Dive", "description": "Detailed technical analysis", "icon": "FileText"}]'
---
```

Available icons (Lucide): `FileText`, `Building`, `CreditCard`, `Code`, `Database`, `GitBranch`, etc.

### Navigation Controls (Experience Articles)

**Back Button:**
```markdown
backButton: '{"to": "/", "label": "Back to Portfolio"}'
```

**Footer:**
```markdown
footer: '{"backTo": "/experience", "backLabel": "View All Experience"}'
```

### SEO Optimization

```markdown
---
title: "Short Title"
excerpt: "Brief description for cards"
seoTitle: "Longer, More Descriptive SEO Title - Brand Name"
seoDescription: "A detailed description optimized for search engines that explains exactly what this content covers and why it's valuable."
---
```

- `seoTitle` defaults to `title` if not provided
- `seoDescription` defaults to `excerpt` if not provided

---

## Complete Examples

### Blog Post with All Features

```markdown
---
title: "Building Modern Web Apps with AI"
date: "October 2025"
excerpt: "How AI is transforming web development"
category: "AI & Engineering"
readTime: "8 min"
order: 5
author: "Liam Duncan"
tags: "ai, web-development, react, typescript"
seoTitle: "Building Modern Web Apps with AI: A Complete Guide"
seoDescription: "Learn how AI tools are revolutionizing web development, from code generation to testing and deployment."
images: '{"hero": "/src/assets/images/ai-coding.jpg", "workflow": "/src/assets/images/ai-workflow.png"}'
relatedPosts: '[{"slug": "devs-are-dead-my-rebirth-as-an-ai-agent-manager", "title": "Devs Are Dead", "excerpt": "My journey into AI-first programming"}]'
---

# Building Modern Web Apps with AI

![AI Coding Interface]({{images.hero}})

The landscape of web development is changing rapidly. AI-powered tools are transforming how we build, test, and deploy applications.

## The New Workflow

![AI Development Workflow]({{images.workflow}})

With AI-powered tools, developers can:

- Generate boilerplate code instantly
- Refactor complex systems with confidence
- Write comprehensive tests automatically
- Deploy with intelligent optimization

Check out my thoughts on [becoming an AI Agent Manager](/blog/devs-are-dead-my-rebirth-as-an-ai-agent-manager) for more context.

## Key Takeaways

> The future belongs to those who can effectively collaborate with AI, not those who resist it.

**Learn more:**
- [AI in Practice](https://example.com)
- [My other articles](/blog)
```

### Experience Article with Sub-Articles

**Main Article (`index.md`):**
```markdown
---
title: "My Time at Company"
subtitle: "Building the platform that transformed the industry"
type: "experience"
category: "Software Engineering"
date: "2020-2024"
readTime: "12 min read"
seoTitle: "My Time at Company - Building Industry-Leading Platform"
seoDescription: "My three-year journey leading the team that built Company's core platform and transformed how the industry works."
url: "/experience/company"
backButton: '{"to": "/", "label": "Back to Portfolio"}'
footer: '{"backTo": "/", "backLabel": "Back to Portfolio"}'
images: '{"platform": "/src/assets/images/platform.jpg", "architecture": "/src/assets/images/arch.png"}'
relatedArticles: '[{"slug": "technical-deep-dive", "title": "Technical Deep Dive", "description": "Architecture and implementation details", "icon": "FileText"}, {"slug": "lessons-learned", "title": "Lessons Learned", "description": "Key takeaways from the journey", "icon": "Building"}]'
---

## The Challenge

![Platform Overview]({{images.platform}})

When I joined Company in 2020, they had proven market fit but the platform couldn't scale...

## My Role

I led the team responsible for rebuilding the core platform from the ground up.

## The Solution

![System Architecture]({{images.architecture}})

We designed a microservices architecture that could handle 100x the load...

## Results

- 99.99% uptime
- 50ms average response time
- Processed $10M+ in transactions
- Scaled to 1M+ users

Read more about the [technical implementation](/experience/company/technical-deep-dive).
```

**Sub-Article (`technical-deep-dive.md`):**
```markdown
---
title: "Technical Deep Dive"
subtitle: "Architecture and implementation details"
type: "experience"
category: "Software Engineering"
date: "2023"
readTime: "15 min read"
seoTitle: "Technical Deep Dive - Company Platform Architecture"
seoDescription: "Detailed technical analysis of the architecture, technology choices, and implementation patterns."
url: "/experience/company/technical-deep-dive"
backButton: '{"to": "/experience/company", "label": "Back to Main Article"}'
images: '{"microservices": "/src/assets/images/microservices.png", "database": "/src/assets/images/db-schema.png"}'
---

## Architecture Overview

![Microservices Architecture]({{images.microservices}})

The system consists of 12 microservices...

## Database Design

![Database Schema]({{images.database}})

We used PostgreSQL with...
```

---

## JSON Formatting Guide

Frontmatter uses YAML-like syntax, but complex objects must be valid JSON strings.

### Images
```markdown
images: '{"key1": "/path/to/image1.jpg", "key2": "/path/to/image2.png"}'
```

**Rules:**
- Wrap entire JSON in single quotes
- Use double quotes inside JSON
- No trailing commas
- Valid JSON syntax

### Related Posts (Blog)
```markdown
relatedPosts: '[{"slug": "post-slug", "title": "Post Title", "excerpt": "Brief description"}, {"slug": "another-slug", "title": "Another Title", "excerpt": "More text"}]'
```

### Related Articles (Experience)
```markdown
relatedArticles: '[{"slug": "article-slug", "title": "Article Title", "description": "Brief description", "icon": "FileText"}]'
```

### Navigation Objects
```markdown
backButton: '{"to": "/destination", "label": "Button Text"}'
footer: '{"backTo": "/destination", "backLabel": "Footer Link Text"}'
```

---

## Tips & Best Practices

### Content Organization

1. **Slugs are auto-generated** from filename (e.g., `my-post.md` → `/blog/my-post`)
2. **Use descriptive filenames** with hyphens (not underscores or spaces)
3. **Group related articles** in subdirectories for experience content
4. **Order blog posts** with the `order` field (lower numbers first)

### Images

1. **Use relative paths** from project root: `/src/assets/images/...`
2. **Optimize images** before adding (compress, resize appropriately)
3. **Always include alt text** for accessibility
4. **Use descriptive names** in the `images` object for clarity

### SEO

1. **Write unique titles** for each piece of content
2. **Make excerpts compelling** - they appear in search results
3. **Use descriptive URLs** that reflect content hierarchy
4. **Override SEO fields** when the default title/excerpt isn't optimal

### JSON in Frontmatter

1. **Validate JSON** before committing (use a JSON validator)
2. **Escape quotes properly** - single quotes wrap, double quotes inside
3. **Use an editor** with JSON syntax highlighting
4. **Test locally** before deploying

### Writing Style

1. **Start with context** - help readers understand why they should care
2. **Use headings** to create clear structure
3. **Break up text** with images, lists, and code blocks
4. **Include examples** to illustrate concepts
5. **End with takeaways** or next steps

---

## Testing Your Content

### Local Development
```bash
# Start dev server
npm run dev

# Visit your content
# Blog: http://localhost:5173/blog/your-post-slug
# Experience: http://localhost:5173/experience/your-article
```

### Build Test
```bash
# Check for build errors
npm run build

# Type check
npx tsc --noEmit
```

### Pre-Deployment Checklist

- [ ] All frontmatter fields are valid
- [ ] JSON fields are properly formatted
- [ ] Images load correctly
- [ ] Links work (internal and external)
- [ ] No TypeScript errors
- [ ] Build succeeds
- [ ] Content displays correctly in dev server
- [ ] Related articles/posts are accurate
- [ ] SEO fields are optimized

---

## Troubleshooting

### Frontmatter Not Parsing

**Problem:** Content shows raw frontmatter
**Solution:** Ensure frontmatter is wrapped in `---` on separate lines

```markdown
---
title: "My Title"
---

Content starts here
```

### JSON Parse Errors

**Problem:** `undefined` for images or related content
**Solution:** Validate JSON syntax

```markdown
# Wrong
images: '{"hero": '/path.jpg'}'

# Correct
images: '{"hero": "/path.jpg"}'
```

### Image Placeholders Not Working

**Problem:** `{{images.hero}}` shows literally
**Solution:** Ensure `images` field is valid JSON and key matches

```markdown
images: '{"hero": "/path.jpg"}'

![Alt text]({{images.hero}})
```

### Build Errors

**Problem:** TypeScript or build errors
**Solution:** Check required fields are present and types are correct

```bash
# See detailed error
npx tsc --noEmit

# Check specific file
npm run dev
```

---

## Migration Guide

### Converting Existing React Components to Markdown

**Before (React):**
```tsx
export const MyArticle = () => (
  <div>
    <h1>My Article</h1>
    <img src="/path.jpg" alt="Alt" />
    <p>Content here...</p>
  </div>
);
```

**After (Markdown):**
```markdown
---
title: "My Article"
type: "experience"
category: "Category"
date: "2024"
readTime: "5 min read"
seoTitle: "My Article"
seoDescription: "Description"
url: "/experience/my-article"
images: '{"main": "/path.jpg"}'
---

# My Article

![Alt]({{images.main}})

Content here...
```

### Updating Routes

Experience articles use dynamic routing - no route updates needed!

Blog posts are automatically discovered via glob imports.

---

## Future Enhancements

The system is designed to support:

- **Projects** - Add `src/content/projects/` following same pattern
- **Case Studies** - Specialized article types
- **Table of Contents** - Auto-generated from headings
- **Search** - Content indexing and discovery
- **RSS Feeds** - Automatic generation from markdown
- **Syntax Highlighting** - Code block language detection
- **Embedded Media** - Video, audio, interactive demos

---

## Summary

You now have a unified markdown system that:

✅ Supports both blog posts and experience articles
✅ Provides rich media and advanced features
✅ Maintains type safety and code quality
✅ Delivers excellent editing experience
✅ Ensures optimal performance
✅ Scales to additional content types
✅ Maintains SEO best practices

**Quick links:**
- [lib/markdown.ts](src/lib/markdown.ts) - Parsing logic
- [lib/blog.ts](src/lib/blog.ts) - Blog loader
- [lib/experience.ts](src/lib/experience.ts) - Experience loader
- [types/blog.ts](src/types/blog.ts) - Blog types
- [types/experience.ts](src/types/experience.ts) - Experience types

Happy writing! 🚀
