import type {
  PersonalInfo,
  EmailTemplate,
  ResumeConfig,
  SiteConfig,
} from "@/types";

// Personal Information
export const PERSONAL_INFO: PersonalInfo = {
  name: "Liam Duncan",
  title: "Software Engineer",
  description:
    "Full-stack software engineer passionate about leveraging AI to build faster and smarter. From fintech to edtech, I'm experienced leading event-driven microservice architecture, building profitable products, and architecting solutions that process millions in transactions.",
  email: "liammduncan@protonmail.com",
  linkedin: {
    url: "https://www.linkedin.com/in/liamduncan/",
    displayUrl: "linkedin.com/in/liamduncan",
  },
  github: {
    url: "https://github.com/lmdncn",
    displayUrl: "github.com/lmdncn",
  },
  location: "Vancouver, Canada (Open to relocation)",
  availability:
    "Heads down on current projects — but always open to exciting new opportunities and conversations.",
};

// Email Templates
export const EMAIL_TEMPLATES: Record<string, EmailTemplate> = {
  contact: {
    subject: "Saw your website and looking to connect!",
    getMailtoUrl: () =>
      `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(EMAIL_TEMPLATES.contact.subject)}`,
  },
};

// Resume Configuration
export const RESUME_CONFIG: ResumeConfig = {
  filename: "Liam_Duncan_Resume_2025_09.pdf",
  path: "/liam-duncan/Liam_Duncan_Resume_2025_09.pdf",
};

// Site Configuration
export const SITE_CONFIG: SiteConfig = {
  basePath: "/liam-duncan",
};

// SEO Configuration
export const SEO_CONFIG = {
  baseUrl: "https://duncandevelopment.ca/liam-duncan",
  siteName: PERSONAL_INFO.name,
  locale: "en_US",
  themeColor: "#000000",
  twitterCard: "summary_large_image",
  robots: "index, follow",
} as const;

// Social Sharing Images
export const OG_IMAGES = {
  resume: "/resume-screenshot.png",
  blog: "/blog-screenshot.png",
} as const;

// Feature Flags
export const FEATURE_FLAGS = {
  showFeaturedSection: true,
} as const;
