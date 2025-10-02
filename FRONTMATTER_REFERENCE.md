# Frontmatter Reference

Quick reference for frontmatter fields in blog posts and experience articles.

## Blog Posts

**Location**: `src/content/blog/*.md`

### Required Fields
- `title` - Post title (string)
- `date` - Publication date (string, e.g., "October 2025")
- `excerpt` - Brief description for listing pages (string)
- `category` - Post category (string)

### Optional Fields
- `readTime` - Estimated reading time (string, e.g., "5 min")
- `order` - Sort order, lower numbers appear first (number)
- `author` - Author name (string)
- `tags` - Comma-separated tags (string)
- `image` - OG/preview image path (string)
- `relatedPosts` - Related blog posts (JSON array)
- `seoTitle` - SEO title, defaults to `title` (string)
- `seoDescription` - SEO description, defaults to `excerpt` (string)

### Example
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

## Experience Articles

**Location**: `src/content/experience/[company]/index.md` (main) or `[company]/[slug].md` (sub-articles)

### Required Fields
- `title` - Article title (string)
- `type` - Must be `"experience"` (string)
- `category` - Article category (string)
- `date` - Date range or period (string, e.g., "2021-2024")
- `readTime` - Estimated reading time (string, e.g., "12 min read")
- `seoTitle` - SEO title (string)
- `seoDescription` - SEO description (string)
- `url` - Article URL path (string, e.g., "/experience/moves")

### Optional Fields
- `subtitle` - Article subtitle (string)
- `backButton` - Back navigation config (JSON object)
- `footer` - Footer navigation config (JSON object)
- `relatedArticles` - Related experience articles (JSON array)

### Example (Main Article)
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

### Example (Sub-Article)
```markdown
---
title: "The Anti-Payday Loan"
subtitle: "Engineering cash advances that actually work"
type: "experience"
category: "Financial Technology"
date: "2022-2024"
readTime: "15 min read"
seoTitle: "The Anti-Payday Loan - Liam Duncan"
seoDescription: "How we built systems that understand gig income and eliminate predatory lending."
url: "/experience/moves/cash-advances"
backButton: '{"to": "/experience/moves", "label": "Back to My Memoir Of Moves"}'
footer: '{"backTo": "/experience/moves", "backLabel": "Back to My Memoir Of Moves"}'
---

Your content here...
```

## JSON Fields Format

### Related Posts (Blog)
```markdown
relatedPosts: '[{"slug": "post-slug", "title": "Post Title", "excerpt": "Brief description"}]'
```

### Related Articles (Experience)
```markdown
relatedArticles: '[{"slug": "article-slug", "title": "Article Title", "description": "Brief description", "icon": "FileText"}]'
```

Available icons (Lucide): `FileText`, `Building`, `CreditCard`, `Code`, `Database`, etc.

### Navigation Objects
```markdown
backButton: '{"to": "/destination", "label": "Button Text"}'
footer: '{"backTo": "/destination", "backLabel": "Footer Text"}'
```

## Images in Content

Use direct markdown paths:
```markdown
![Image description](/path/to/image.jpg)
```

**Important**:
- No `images` frontmatter field needed
- No template syntax like `{{images.key}}`
- Just use standard markdown image syntax with direct paths
