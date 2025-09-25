// Common types used across the application

export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  email: string;
  linkedin: {
    url: string;
    displayUrl: string;
  };
  location: string;
  availability: string;
}

export interface EmailTemplate {
  subject: string;
  getMailtoUrl: () => string;
}

export interface ResumeConfig {
  filename: string;
  path: string;
}

export interface SiteConfig {
  basePath: string;
}

// Navigation types
export interface NavItem {
  label: string;
  href: string;
}

// Common animation props
export interface AnimationProps {
  delay?: string;
  duration?: string;
}

// Common button variants
export type ButtonVariant = 
  | "default" 
  | "destructive" 
  | "outline" 
  | "secondary" 
  | "ghost" 
  | "link";

export type ButtonSize = "default" | "sm" | "lg" | "icon";