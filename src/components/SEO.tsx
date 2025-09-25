import { Helmet } from 'react-helmet-async';
import { SEO_CONFIG, OG_IMAGES } from '@/lib/constants';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  article?: {
    author?: string;
    publishedTime?: string;
    modifiedTime?: string;
    section?: string;
    tag?: string[];
  };
}

const SEO = ({ 
  title, 
  description, 
  image = OG_IMAGES.resume,
  url,
  type = 'website',
  article 
}: SEOProps) => {
  const fullUrl = url ? `${SEO_CONFIG.baseUrl}${url}` : SEO_CONFIG.baseUrl;
  const fullImageUrl = image.startsWith('http') ? image : `${SEO_CONFIG.baseUrl}${image}`;
  const fullTitle = title === SEO_CONFIG.siteName ? title : `${title} | ${SEO_CONFIG.siteName}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="author" content={SEO_CONFIG.siteName} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content={SEO_CONFIG.siteName} />
      <meta property="og:locale" content={SEO_CONFIG.locale} />

      {/* Article specific tags */}
      {type === 'article' && article && (
        <>
          {article.author && <meta property="article:author" content={article.author} />}
          {article.publishedTime && <meta property="article:published_time" content={article.publishedTime} />}
          {article.modifiedTime && <meta property="article:modified_time" content={article.modifiedTime} />}
          {article.section && <meta property="article:section" content={article.section} />}
          {article.tag && article.tag.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Twitter */}
      <meta name="twitter:card" content={SEO_CONFIG.twitterCard} />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:image:alt" content={title} />

      {/* Additional Meta Tags */}
      <meta name="robots" content={SEO_CONFIG.robots} />
      <meta name="googlebot" content={SEO_CONFIG.robots} />
      <meta name="theme-color" content={SEO_CONFIG.themeColor} />
    </Helmet>
  );
};

export default SEO;