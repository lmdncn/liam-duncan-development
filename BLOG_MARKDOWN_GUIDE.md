# Enhanced Blog Markdown Guide

The blog system now supports rich content including images, related posts, and enhanced metadata. Here's how to use the new features:

## Basic Frontmatter (Existing Features)

```markdown
---
title: "Your Post Title"
date: "September 2025"
excerpt: "A brief description of your post"
category: "AI & Engineering"
readTime: "5 min"
order: 2
author: "Your Name"
tags: "ai, engineering, development"
---
```

## New Enhanced Features

### 1. Images Support

You can now reference multiple images in your frontmatter and use them throughout your content:

```markdown
---
title: "My Post with Images"
date: "October 2025"
excerpt: "A post demonstrating image support"
category: "Technology"
images: '{"hero": "/src/assets/images/hero.jpg", "diagram": "/src/assets/images/diagram.png", "screenshot": "/src/assets/images/screenshot.jpg"}'
---

## My Content

Here's an image using standard markdown:
![Alt text for accessibility](/path/to/image.jpg)

Or reference from frontmatter:
![System Architecture]({{images.diagram}})

Images will automatically be styled with:
- Rounded corners and shadow
- Centered layout
- Figcaption from alt text
- Responsive sizing (max-w-3xl)
```

### 2. Related Posts

Link to related blog posts that will appear at the end of your article:

```markdown
---
title: "My Main Post"
relatedPosts: '[{"slug": "related-post-1", "title": "Related Article", "excerpt": "Brief description"}, {"slug": "another-post", "title": "Another Post", "excerpt": "More details"}]'
---
```

### 3. SEO Enhancements

Override default SEO values:

```markdown
---
title: "My Post"
excerpt: "Short excerpt for cards"
seoTitle: "Longer, more descriptive SEO title"
seoDescription: "A more detailed description optimized for search engines"
---
```

### 4. Internal and External Links

Both internal and external links are now properly handled:

```markdown
Check out my [other article](/blog/other-post) for more details.

Read more on [external site](https://example.com).
```

## Complete Example

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

The landscape of web development is changing rapidly...

## The New Workflow

![AI Development Workflow]({{images.workflow}})

With AI-powered tools, we can now...

Check out my thoughts on [becoming an AI Agent Manager](/blog/devs-are-dead-my-rebirth-as-an-ai-agent-manager).
```

## Markdown Features Supported

- **Headings**: H1-H6 with custom styling
- **Paragraphs**: Spaced and styled for readability
- **Lists**: Both ordered and unordered with custom bullets
- **Bold/Italic**: Standard markdown formatting
- **Code**: Inline `code` and code blocks with syntax styling
- **Blockquotes**: Styled with left border
- **Links**: Internal (React Router) and external (new tab)
- **Images**: With figure/figcaption support

## Image Placeholder Syntax

Use `{{images.keyName}}` to reference images defined in frontmatter:
- Images must be in the `images` field as JSON
- Use the key name to reference them
- Great for managing multiple images in one place

## Tips

1. **JSON in Frontmatter**: Complex objects like `images` and `relatedPosts` must be valid JSON strings
2. **Image Paths**: Use relative paths from src (e.g., `/src/assets/images/...`) or absolute URLs
3. **Tags**: Comma-separated list automatically parsed to array
4. **Related Posts**: Must reference existing blog post slugs
5. **Alt Text**: Always provide alt text for images for accessibility

## Migration from Old Posts

Your existing blog posts work as-is! New features are optional:
- No `images` field = no image replacement
- No `relatedPosts` = no related section
- Missing `seoTitle` = uses `title`
- Missing `seoDescription` = uses `excerpt`