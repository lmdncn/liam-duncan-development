# Content Guide

Complete guide for creating and managing blog posts and experience articles.

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

**Main Article:**

1. Create `src/content/experience/company/index.md`
2. Add frontmatter and content:

```markdown
---
title: "My Time at Company"
subtitle: "What I built and learned"
type: "experience"
category: "Software Engineering"
date: "2020-2024"
readTime: "10 min read"
seoTitle: "My Experience at Company Name"
seoDescription: "Full description for search engines"
url: "/experience/company"
backButton: '{"to": "/", "label": "Back to Portfolio"}'
footer: '{"backTo": "/", "backLabel": "View All Experience"}'
relatedArticles: '[{"slug": "technical-deep-dive", "title": "Technical Deep Dive", "description": "Architecture details", "icon": "FileText"}]'
---

## Your Content

Write your experience article here...
```

**Sub-Article:**

1. Create `src/content/experience/company/technical-deep-dive.md`
2. Link back to main article with `backButton`

---

## Frontmatter Reference

### Blog Posts

**Location**: `src/content/blog/*.md`

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
| `relatedPosts` | No | JSON array | Related blog posts | `'[{"slug": "...", "title": "...", "excerpt": "..."}]'` |
| `seoTitle` | No | string | SEO title (defaults to `title`) | `"SEO Optimized Title"` |
| `seoDescription` | No | string | SEO description (defaults to `excerpt`) | `"Detailed SEO description"` |

**Example:**
```markdown
---
title: "My Blog Post"
date: "October 2025"
excerpt: "A brief description of my post"
category: "Technology"
readTime: "5 min"
order: 1
---

Your content here...
```

### Experience Articles

**Location**: `src/content/experience/[company]/index.md` (main) or `[company]/[slug].md` (sub-articles)

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
| `relatedArticles` | No | JSON array | Related experience articles | `'[{"slug": "...", "title": "...", "description": "...", "icon": "FileText"}]'` |

**Example:**
```markdown
---
title: "My Memoir Of Moves"
subtitle: "My three year journey building the platform"
type: "experience"
category: "Financial Technology"
date: "2021-2024"
readTime: "12 min read"
seoTitle: "My Memoir Of Moves - Liam Duncan"
seoDescription: "My three year journey leading the team that built Moves Financial's core banking platform."
url: "/experience/moves"
backButton: '{"to": "/", "label": "Back to Portfolio"}'
footer: '{"backTo": "/", "backLabel": "Back to Portfolio"}'
relatedArticles: '[{"slug": "onboarding", "title": "The Onboarding Gauntlet", "description": "Overcoming identity verification challenges", "icon": "FileText"}]'
---

Your content here...
```

### JSON Fields Format

**Related Posts (Blog):**
```markdown
relatedPosts: '[{"slug": "post-slug", "title": "Post Title", "excerpt": "Brief description"}]'
```

**Related Articles (Experience):**
```markdown
relatedArticles: '[{"slug": "article-slug", "title": "Article Title", "description": "Brief description", "icon": "FileText"}]'
```

Available icons (Lucide): `FileText`, `Building`, `CreditCard`, `Code`, `Database`, `GitBranch`, etc.

**Navigation Objects:**
```markdown
backButton: '{"to": "/destination", "label": "Button Text"}'
footer: '{"backTo": "/destination", "backLabel": "Footer Text"}'
```

**JSON Rules:**
- Wrap entire JSON in single quotes
- Use double quotes inside JSON
- No trailing commas
- Valid JSON syntax

---

## Markdown Features

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

```markdown
![Alt text for accessibility](/path/to/image.jpg)
```

Images automatically include:
- Rounded corners and shadow
- Centered layout
- Figcaption from alt text
- Responsive sizing (max-w-3xl)

**Tips:**
- Use direct paths in markdown (e.g., `/image.jpg`)
- Optimize images before adding (compress, resize appropriately)
- Always include alt text for accessibility

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

### Navigation Controls (Experience Articles)

**Back Button:**
```markdown
backButton: '{"to": "/", "label": "Back to Portfolio"}'
```

**Footer:**
```markdown
footer: '{"backTo": "/experience", "backLabel": "View All Experience"}'
```

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
relatedPosts: '[{"slug": "devs-are-dead-my-rebirth-as-an-ai-agent-manager", "title": "Devs Are Dead", "excerpt": "My journey into AI-first programming"}]'
---

# Building Modern Web Apps with AI

![AI Coding Interface](/ai-coding.jpg)

The landscape of web development is changing rapidly. AI-powered tools are transforming how we build, test, and deploy applications.

## The New Workflow

![AI Development Workflow](/ai-workflow.png)

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
relatedArticles: '[{"slug": "technical-deep-dive", "title": "Technical Deep Dive", "description": "Architecture and implementation details", "icon": "FileText"}, {"slug": "lessons-learned", "title": "Lessons Learned", "description": "Key takeaways from the journey", "icon": "Building"}]'
---

## The Challenge

![Platform Overview](/platform.jpg)

When I joined Company in 2020, they had proven market fit but the platform couldn't scale...

## My Role

I led the team responsible for rebuilding the core platform from the ground up.

## The Solution

![System Architecture](/architecture.png)

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
---

## Architecture Overview

![Microservices Architecture](/microservices.png)

The system consists of 12 microservices...

## Database Design

![Database Schema](/database-schema.png)

We used PostgreSQL with...
```

---

## Best Practices

### Content Organization

1. **Slugs are auto-generated** from filename (e.g., `my-post.md` → `/blog/my-post`)
2. **Use descriptive filenames** with hyphens (not underscores or spaces)
3. **Group related articles** in subdirectories for experience content
4. **Order blog posts** with the `order` field (lower numbers first)

### Writing Style

1. **Start with context** - help readers understand why they should care
2. **Use headings** to create clear structure
3. **Break up text** with images, lists, and code blocks
4. **Include examples** to illustrate concepts
5. **End with takeaways** or next steps

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

---

## Testing & Troubleshooting

### Local Development

```bash
# Start dev server
npm run dev

# Visit your content
# Blog: http://localhost:8080/blog/your-post-slug
# Experience: http://localhost:8080/experience/your-article
```

### Build Test

```bash
# Check for build errors
npm run build

# Type check
npx tsc --noEmit
```

### Common Issues

**Frontmatter Not Parsing:**
- Ensure frontmatter is wrapped in `---` on separate lines
```markdown
---
title: "My Title"
---

Content starts here
```

**JSON Parse Errors:**
- Validate JSON syntax
```markdown
# Wrong
images: '{"hero": '/path.jpg'}'

# Correct
images: '{"hero": "/path.jpg"}'
```

**Images Not Loading:**
- Verify image path is correct and accessible
- Use direct paths: `![Alt text](/path/to/image.jpg)`

**Build Errors:**
- Check required fields are present
- Ensure types are correct
- Run `npx tsc --noEmit` for detailed errors

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

**Build-time Processing:**
- Vite glob imports load all `.md` files
- Frontmatter is parsed using custom YAML parser
- Content is separated from metadata
- Types are validated via TypeScript

**Runtime Rendering:**
- React Router handles dynamic routes
- ReactMarkdown renders content with custom components
- Images are processed and styled automatically
- Links are handled (internal via React Router, external open in new tab)

**Key Files:**
- `lib/markdown.ts` - Frontmatter parsing utilities
- `lib/blog.ts` - Blog post loader
- `lib/experience.ts` - Experience article loader
- `types/blog.ts` - Blog type definitions
- `types/experience.ts` - Experience type definitions
