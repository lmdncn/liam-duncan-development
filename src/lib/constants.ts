// Personal Information
export const PERSONAL_INFO = {
  name: "Liam Duncan",
  title: "Software Engineer",
  description: "Full-stack software engineer passionate about leveraging AI to build faster and smarter. From fintech to edtech, I'm experienced leading event-driven microservice architecture, building profitable products, and architecting solutions that process millions in transactions.",
  email: "liammduncan@protonmail.com",
  linkedin: {
    url: "https://www.linkedin.com/in/liamduncan/",
    displayUrl: "linkedin.com/in/liamduncan"
  },
  location: "Vancouver, Canada (Open to relocation)",
  availability: "Open to remote opportunities worldwide and on-site positions"
};

// Email Templates
export const EMAIL_TEMPLATES = {
  contact: {
    subject: "Saw your website and looking to connect!",
    getMailtoUrl: () => `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(EMAIL_TEMPLATES.contact.subject)}`
  }
};

// Resume Configuration
export const RESUME_CONFIG = {
  filename: "Liam_Duncan_Resume_2025.pdf",
  path: "/liam-duncan-resume/Liam_Duncan_Resume_2025.pdf"
};

// Site Configuration
export const SITE_CONFIG = {
  basePath: "/liam-duncan-resume"
};