import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  readFileSync,
  readdirSync,
  mkdirSync,
  writeFileSync,
  existsSync,
} from "node:fs";
import matter from "gray-matter";

import { SEO_CONFIG, OG_IMAGES } from "../src/lib/constants";
import { BLOG_PAGE_SEO } from "../src/lib/pageMeta";
import { generateBlogPostSEO } from "../src/lib/seo";
import type { BlogPost } from "../src/types/blog";
import type { ExperienceArticle } from "../src/types/experience";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const distDir = path.join(projectRoot, "dist");
const blogContentDir = path.join(projectRoot, "src", "content", "blog");
const experienceContentDir = path.join(projectRoot, "src", "content", "experience");
const templatePath = path.join(distDir, "index.html");

if (!existsSync(distDir)) {
  console.error(
    "✖️  Prerender failed: dist directory not found. Run `npm run build` first.",
  );
  process.exit(1);
}

if (!existsSync(templatePath)) {
  console.error("✖️  Prerender failed: dist/index.html missing.");
  process.exit(1);
}

const baseHtml = readFileSync(templatePath, "utf8");

type RouteMeta = {
  path: string;
  title: string;
  description: string;
  image?: string;
  url: string;
  type?: "website" | "article";
  article?: ReturnType<typeof generateBlogPostSEO>["article"];
};

const escapeHtml = (value: string): string =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const replaceTag = (
  html: string,
  pattern: RegExp,
  replacement: string,
): string => {
  if (pattern.test(html)) {
    return html.replace(pattern, replacement);
  }
  return html;
};

const insertAfter = (html: string, marker: RegExp, content: string): string => {
  const match = html.match(marker);
  if (!match) {
    return html;
  }
  const index = match.index! + match[0].length;
  return html.slice(0, index) + content + html.slice(index);
};

const ensureDirectory = (dirPath: string) => {
  if (existsSync(dirPath)) {
    return;
  }
  mkdirSync(dirPath, { recursive: true });
};

const parseBlogPosts = (): BlogPost[] => {
  if (!existsSync(blogContentDir)) {
    return [];
  }

  const files = readdirSync(blogContentDir).filter((file) =>
    file.endsWith(".md"),
  );
  const posts: BlogPost[] = files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const filePath = path.join(blogContentDir, file);
    const raw = readFileSync(filePath, "utf8");
    const { data, content } = matter(raw);

    return {
      slug,
      title: (data.title as string) || "Untitled",
      date: (data.date as string) || "",
      excerpt: (data.excerpt as string) || "",
      category: (data.category as string) || "Uncategorized",
      readTime: data.readTime as string | undefined,
      order: data.order !== undefined ? Number(data.order) : undefined,
      author: data.author as string | undefined,
      image: data.image as string | undefined,
      tags: Array.isArray(data.tags)
        ? (data.tags as string[])
        : typeof data.tags === "string"
          ? data.tags
              .split(",")
              .map((tag) => tag.trim())
              .filter(Boolean)
          : undefined,
      content,
    };
  });

  // Sort posts by order field only (no date parsing)
  posts.sort((a, b) => {
    if (a.order !== undefined && b.order !== undefined) {
      return b.order - a.order;
    }
    if (a.order !== undefined) return -1;
    if (b.order !== undefined) return 1;
    return 0; // maintain original order for posts without order field
  });

  return posts;
};

const parseExperienceArticles = (): ExperienceArticle[] => {
  if (!existsSync(experienceContentDir)) {
    return [];
  }

  const articles: ExperienceArticle[] = [];

  // Recursively find all .md files in the experience directory
  const findMarkdownFiles = (dir: string, basePath: string = ""): void => {
    const entries = readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      const relativePath = path.join(basePath, entry.name);

      if (entry.isDirectory()) {
        findMarkdownFiles(fullPath, relativePath);
      } else if (entry.isFile() && entry.name.endsWith(".md")) {
        const raw = readFileSync(fullPath, "utf8");
        const { data, content } = matter(raw);

        // Generate slug based on file structure
        let slug: string;
        if (entry.name === "index.md") {
          // For index.md files, use the parent directory name
          slug = basePath;
        } else {
          // For other files, combine directory and filename (without .md)
          const filename = entry.name.replace(/\.md$/, "");
          slug = basePath ? `${basePath}/${filename}` : filename;
        }

        articles.push({
          slug,
          title: (data.seoTitle as string) || (data.title as string) || "Untitled",
          description: (data.seoDescription as string) || (data.subtitle as string) || "",
          url: (data.url as string) || `/experience/${slug}`,
          content,
        });
      }
    }
  };

  findMarkdownFiles(experienceContentDir);
  return articles;
};

const buildHtml = (template: string, meta: RouteMeta): string => {
  const image = meta.image ?? OG_IMAGES.resume;
  const fullTitle =
    meta.title === SEO_CONFIG.siteName
      ? meta.title
      : `${meta.title} | ${SEO_CONFIG.siteName}`;
  const fullUrl = `${SEO_CONFIG.baseUrl}${meta.url}`;
  const fullImage =
    image.startsWith("http") || image.startsWith("data:")
      ? image
      : `${SEO_CONFIG.baseUrl}${image}`;
  const description = meta.description || "";
  const ogType = meta.type ?? "website";

  let html = template;

  // Remove problematic modulepreload links with data URLs for static pages
  html = html.replace(
    /<link rel="modulepreload" href="data:[^"]*"[^>]*>[\r\n]?\s*/g,
    "",
  );

  // Remove any scripts that might be causing CSP issues
  html = html.replace(
    /<script[^>]*src="[^"]*commons\.bundle\.js[^"]*"[^>]*>[\s\S]*?<\/script>/gi,
    "",
  );

  html = replaceTag(
    html,
    /<title>.*?<\/title>/,
    `<title>${escapeHtml(fullTitle)}</title>`,
  );
  html = replaceTag(
    html,
    /<meta name="description" content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${escapeHtml(description)}" />`,
  );
  html = replaceTag(
    html,
    /<meta property="og:title" content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${escapeHtml(fullTitle)}" />`,
  );
  html = replaceTag(
    html,
    /<meta property="og:description" content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${escapeHtml(description)}" />`,
  );
  html = replaceTag(
    html,
    /<meta property="og:type" content="[^"]*"\s*\/?>/,
    `<meta property="og:type" content="${escapeHtml(ogType)}" />`,
  );
  html = replaceTag(
    html,
    /<meta property="og:url" content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${escapeHtml(fullUrl)}" />`,
  );
  html = replaceTag(
    html,
    /<meta property="og:image" content="[^"]*"\s*\/?>/,
    `<meta property="og:image" content="${escapeHtml(fullImage)}" />`,
  );

  if (html.includes('meta property="og:image:alt"')) {
    html = replaceTag(
      html,
      /<meta property="og:image:alt" content="[^"]*"\s*\/?>/,
      `<meta property="og:image:alt" content="${escapeHtml(meta.title)}" />`,
    );
  } else {
    html = insertAfter(
      html,
      /<meta property="og:image"[^>]*>/,
      `\n    <meta property="og:image:alt" content="${escapeHtml(meta.title)}" />`,
    );
  }

  html = replaceTag(
    html,
    /<meta name="twitter:title" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:title" content="${escapeHtml(fullTitle)}" />`,
  );
  html = replaceTag(
    html,
    /<meta name="twitter:description" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:description" content="${escapeHtml(description)}" />`,
  );
  html = replaceTag(
    html,
    /<meta name="twitter:image" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:image" content="${escapeHtml(fullImage)}" />`,
  );

  if (html.includes('meta name="twitter:image:alt"')) {
    html = replaceTag(
      html,
      /<meta name="twitter:image:alt" content="[^"]*"\s*\/?>/,
      `<meta name="twitter:image:alt" content="${escapeHtml(meta.title)}" />`,
    );
  } else {
    html = insertAfter(
      html,
      /<meta name="twitter:image"[^>]*>/,
      `\n    <meta name="twitter:image:alt" content="${escapeHtml(meta.title)}" />`,
    );
  }

  if (html.includes('rel="canonical"')) {
    html = replaceTag(
      html,
      /<link rel="canonical" href="[^"]*"\s*\/?>/,
      `<link rel="canonical" href="${escapeHtml(fullUrl)}" />`,
    );
  } else {
    html = insertAfter(
      html,
      /<meta name="author"[^>]*>/,
      `\n    <link rel="canonical" href="${escapeHtml(fullUrl)}" />`,
    );
  }

  const articleMeta =
    meta.type === "article" && meta.article
      ? ["author", "publishedTime", "modifiedTime", "section", "tag"].flatMap(
          (key) => {
            const value = meta.article?.[key as keyof typeof meta.article];
            if (!value) return [];
            if (Array.isArray(value)) {
              return value.map(
                (item) =>
                  `<meta property="article:${key.replace(/([A-Z])/g, "-$1").toLowerCase()}" content="${escapeHtml(item)}" />`,
              );
            }
            return [
              `<meta property="article:${key.replace(/([A-Z])/g, "-$1").toLowerCase()}" content="${escapeHtml(value)}" />`,
            ];
          },
        )
      : [];

  if (articleMeta.length > 0) {
    const insertion = `\n    ${articleMeta.join("\n    ")}`;
    html = insertAfter(html, /<meta property="og:locale"[^>]*>/, insertion);
  }

  return html;
};

const routes: RouteMeta[] = [];

routes.push({
  path: "blog",
  title: BLOG_PAGE_SEO.title,
  description: BLOG_PAGE_SEO.description,
  image: BLOG_PAGE_SEO.image,
  url: BLOG_PAGE_SEO.url,
  type: BLOG_PAGE_SEO.type,
});

const blogPosts = parseBlogPosts();
blogPosts.forEach((post) => {
  const seo = generateBlogPostSEO(post);
  routes.push({
    path: path.join("blog", post.slug),
    title: seo.title,
    description: seo.description,
    image: seo.image,
    url: seo.url,
    type: seo.type,
    article: seo.article,
  });
});

const experienceArticles = parseExperienceArticles();
experienceArticles.forEach((article) => {
  routes.push({
    path: path.join("experience", article.slug),
    title: article.title,
    description: article.description,
    image: OG_IMAGES.resume,
    url: article.url,
    type: "article",
  });
});

routes.forEach((route) => {
  const outputDir = path.join(distDir, route.path);
  ensureDirectory(outputDir);

  const html = buildHtml(baseHtml, route);
  writeFileSync(path.join(outputDir, "index.html"), html, "utf8");
  console.log(`   → prerendered /${route.path}`);
});

console.log("✅  Social meta prerendering complete.");
