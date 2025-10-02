# Quick Start: Adding Content

## Add a Blog Post

1. Create `src/content/blog/my-new-post.md`
2. Add frontmatter:

```markdown
---
title: "My New Post"
date: "October 2025"
excerpt: "A brief description for the blog listing"
category: "Technology"
readTime: "5 min"
---

Your content here...
```

3. Build and deploy - that's it!

### With Images

```markdown
---
title: "Post with Images"
excerpt: "..."
category: "..."
---

![My Photo](/path/to/photo.jpg)
![Data Chart](/path/to/chart.png)
```

### With Related Posts

```markdown
---
title: "Main Post"
excerpt: "..."
relatedPosts: '[{"slug": "other-post", "title": "Check This Out", "excerpt": "Related content"}]'
---
```

## Add an Experience Article

### Main Article

1. Create `src/content/experience/company/index.md`
2. Add frontmatter:

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

## Section 1
Content here...
```

### Sub-Article

1. Create `src/content/experience/company/technical-deep-dive.md`
2. Add frontmatter:

```markdown
---
title: "Technical Deep Dive"
subtitle: "Architecture and implementation details"
type: "experience"
category: "Software Engineering"
date: "2023"
readTime: "15 min read"
url: "/experience/company/technical-deep-dive"
backButton: '{"to": "/experience/company", "label": "Back to Main Article"}'
---

## Architecture
Details here...
```

## Frontmatter Fields Reference

### Blog Posts

| Field | Required | Type | Example |
|-------|----------|------|---------|
| title | Yes | string | "My Post Title" |
| date | Yes | string | "October 2025" |
| excerpt | Yes | string | "Brief description" |
| category | Yes | string | "Technology" |
| readTime | No | string | "5 min" |
| order | No | number | 1 |
| author | No | string | "Your Name" |
| tags | No | string (comma-sep) | "js, react, ai" |
| image | No | string | "/path/to/og-image.jpg" |
| relatedPosts | No | JSON array | '[{"slug": "...", "title": "...", "excerpt": "..."}]' |
| seoTitle | No | string | "SEO Title" |
| seoDescription | No | string | "SEO Description" |

### Experience Articles

| Field | Required | Type | Example |
|-------|----------|------|---------|
| title | Yes | string | "Project Title" |
| subtitle | No | string | "Subtitle" |
| type | Yes | string | "experience" |
| category | Yes | string | "Category" |
| date | Yes | string | "2020-2024" |
| readTime | Yes | string | "10 min read" |
| seoTitle | Yes | string | "SEO Title" |
| seoDescription | Yes | string | "SEO Desc" |
| url | Yes | string | "/experience/..." |
| backButton | No | JSON object | '{"to": "/", "label": "Back"}' |
| footer | No | JSON object | '{"backTo": "/", "backLabel": "..."}' |
| relatedArticles | No | JSON array | '[{"slug": "...", "title": "...", "description": "...", "icon": "FileText"}]' |

## JSON Format Guide

### Related Posts (Blog)
```markdown
relatedPosts: '[{"slug": "post-slug", "title": "Post Title", "excerpt": "Brief description"}]'
```

### Related Articles (Experience)
```markdown
relatedArticles: '[{"slug": "article-slug", "title": "Article Title", "description": "Brief desc", "icon": "FileText"}]'
```

Icons: `FileText`, `Building`, `CreditCard`, etc. (Lucide icons)

### Back Button / Footer
```markdown
backButton: '{"to": "/destination", "label": "Back Label"}'
footer: '{"backTo": "/destination", "backLabel": "Footer Label"}'
```

## Tips

1. **JSON Strings**: Wrap JSON in single quotes in frontmatter
2. **Escape Quotes**: Use double quotes inside JSON
3. **Image Paths**: Use direct paths in markdown (e.g., `/image.jpg`)
4. **Slugs**: Auto-generated from filename (no need to specify)
5. **Ordering**: Use `order` field in blog posts for custom sorting
6. **Icons**: Must match Lucide icon names exactly

## Testing

```bash
# Build to check for errors
npm run build

# Type check
npx tsc --noEmit

# Dev server
npm run dev
```

Visit:
- Blog posts: `http://localhost:5173/blog/your-post-slug`
- Experience: `http://localhost:5173/experience/company`
- Sub-articles: `http://localhost:5173/experience/company/sub-article`

## Common Patterns

### Images
```markdown
![Image description](/path/to/image.jpg)
```

### Internal Link
```markdown
[Read my other post](/blog/other-post)
```

### External Link
```markdown
[Visit website](https://example.com)
```

### Code Block
````markdown
```javascript
const example = "code here";
```
````

### Blockquote
```markdown
> Important quote or callout
```

That's it! Happy writing! 🚀