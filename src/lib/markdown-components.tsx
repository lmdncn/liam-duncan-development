import { Link } from "react-router";
import type { Components } from "react-markdown";

/**
 * Base markdown component configurations for rendering markdown content
 * These can be composed and customized for different article types
 */

// Shared heading components
export const headingComponents: Partial<Components> = {
  h1: ({ children }) => (
    <h1 className="text-4xl font-bold mt-12 mb-8 text-foreground leading-tight first:mt-0 border-b border-border/20 pb-4">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground leading-tight">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-2xl font-semibold mt-10 mb-5 text-foreground leading-tight">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-xl font-semibold mt-8 mb-4 text-foreground leading-tight">
      {children}
    </h4>
  ),
};

// Shared text components
export const textComponents: Partial<Components> = {
  p: ({ children }) => (
    <p className="mb-6 text-foreground leading-relaxed text-lg font-light">
      {children}
    </p>
  ),
  strong: ({ children }) => (
    <strong className="font-bold text-foreground">
      {children}
    </strong>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-primary/30 pl-8 py-4 italic text-foreground/80 my-8 text-xl font-light">
      {children}
    </blockquote>
  ),
};

// Shared list components
export const listComponents: Partial<Components> = {
  ul: ({ children }) => (
    <ul className="mb-8 space-y-3 list-none">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-8 ml-6 space-y-3 list-decimal">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="text-foreground leading-relaxed text-lg font-light relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-primary before:font-normal">
      {children}
    </li>
  ),
};

// Shared code components
export const codeComponents: Partial<Components> = {
  code: ({ children }) => (
    <code className="bg-secondary/60 text-secondary-foreground px-2 py-1 rounded text-base font-mono">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="bg-secondary/30 p-6 rounded-lg overflow-x-auto mb-8 text-sm border-l-4 border-primary/30">
      {children}
    </pre>
  ),
};

// Shared image component factory
export const createImageComponent = () => {
  return ({ src, alt }: { src?: string; alt?: string }) => {
    // Handle relative paths that need base URL prepended
    const imageSrc = src?.startsWith('/') && !src.startsWith(import.meta.env.BASE_URL)
      ? `${import.meta.env.BASE_URL}${src.substring(1)}`
      : src;

    return (
      <figure className="my-8">
        <img
          src={imageSrc}
          alt={alt || ""}
          className="w-full max-w-3xl mx-auto rounded-lg shadow-lg"
        />
        {alt && (
          <figcaption className="text-center text-sm text-muted-foreground mt-4">
            {alt}
          </figcaption>
        )}
      </figure>
    );
  };
};

// Shared link component factory
export const createLinkComponent = () => {
  return ({ href, children }: { href?: string; children?: React.ReactNode }) => {
    // Handle internal links
    if (href?.startsWith('/')) {
      return (
        <Link
          to={href}
          className="text-primary hover:text-primary/80 transition-colors underline decoration-1 underline-offset-2"
        >
          {children}
        </Link>
      );
    }
    // Handle external links
    return (
      <a
        href={href}
        className="text-primary hover:text-primary/80 transition-colors underline decoration-1 underline-offset-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  };
};

/**
 * Complete markdown component configurations for different article types
 */

// Blog post markdown components (includes all features)
export const blogMarkdownComponents: Components = {
  ...headingComponents,
  ...textComponents,
  ...listComponents,
  ...codeComponents,
  img: createImageComponent(),
  a: createLinkComponent(),
};

// Experience article markdown components (excludes h1, includes h4)
export const experienceMarkdownComponents: Components = {
  h2: headingComponents.h2!,
  h3: headingComponents.h3!,
  h4: headingComponents.h4!,
  ...textComponents,
  ...listComponents,
  img: createImageComponent(),
  a: createLinkComponent(),
};

/**
 * Utility to merge custom components with preset configurations
 */
export const mergeMarkdownComponents = (
  baseComponents: Components,
  customComponents: Partial<Components> = {}
): Components => {
  return {
    ...baseComponents,
    ...customComponents,
  };
};
