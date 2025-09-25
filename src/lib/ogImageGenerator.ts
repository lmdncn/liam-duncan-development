import type { BlogPost } from '@/types/blog';

/**
 * Generates a branded SVG image for blog post social sharing
 * Creates an OG image with title, category, date, and branding
 */
export const generateBlogPostSVG = (post: BlogPost): string => {
  const { title, category, date, author = "Liam Duncan" } = post;
  
  // Truncate title if too long
  const maxTitleLength = 85;
  const displayTitle = title.length > maxTitleLength ? 
    `${title.substring(0, maxTitleLength)}...` : title;
  
  // Split long titles into multiple lines
  const words = displayTitle.split(' ');
  const lines: string[] = [];
  let currentLine = '';
  
  words.forEach(word => {
    const testLine = currentLine ? `${currentLine} ${word}` : word;
    if (testLine.length > 45 && currentLine) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = testLine;
    }
  });
  if (currentLine) lines.push(currentLine);
  
  // Generate SVG
  const svg = `
    <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#0f0f23;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#1a1a2e;stop-opacity:1" />
        </linearGradient>
        <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#60a5fa;stop-opacity:1" />
        </linearGradient>
      </defs>
      
      <!-- Background -->
      <rect width="1200" height="630" fill="url(#bgGradient)"/>
      
      <!-- Accent line -->
      <rect x="0" y="0" width="1200" height="8" fill="url(#accentGradient)"/>
      
      <!-- Category badge -->
      <rect x="80" y="120" rx="20" ry="20" width="${category.length * 12 + 32}" height="40" 
            fill="rgba(59, 130, 246, 0.2)" stroke="rgba(59, 130, 246, 0.5)" stroke-width="1"/>
      <text x="${80 + 16}" y="143" font-family="system-ui, -apple-system, sans-serif" 
            font-size="18" font-weight="600" fill="#60a5fa">${category}</text>
      
      <!-- Title -->
      ${lines.map((line, index) => 
        `<text x="80" y="${220 + index * 65}" font-family="system-ui, -apple-system, sans-serif" 
               font-size="54" font-weight="700" fill="#ffffff">${line}</text>`
      ).join('')}
      
      <!-- Date -->
      <text x="80" y="${lines.length > 2 ? 450 : 390}" font-family="system-ui, -apple-system, sans-serif" 
            font-size="24" font-weight="400" fill="#9ca3af">${date}</text>
      
      <!-- Author -->
      <text x="80" y="${lines.length > 2 ? 500 : 440}" font-family="system-ui, -apple-system, sans-serif" 
            font-size="20" font-weight="500" fill="#d1d5db">by ${author}</text>
      
      <!-- Blog indicator -->
      <text x="80" y="580" font-family="system-ui, -apple-system, sans-serif" 
            font-size="18" font-weight="400" fill="#6b7280">liamduncan.github.io/liam-duncan-development</text>
            
      <!-- Decorative element -->
      <circle cx="1050" cy="150" r="60" fill="rgba(59, 130, 246, 0.1)" stroke="rgba(59, 130, 246, 0.3)" stroke-width="2"/>
      <circle cx="1050" cy="150" r="35" fill="rgba(59, 130, 246, 0.2)"/>
      <circle cx="1050" cy="150" r="15" fill="#3b82f6"/>
    </svg>
  `.trim();
  
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
};