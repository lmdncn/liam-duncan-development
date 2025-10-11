import { useParams, Navigate } from "react-router";
import { getExperienceArticleBySlug } from "@/lib/experience";
import { MarkdownArticle } from "@/components/ui/markdown-article";
import { experienceMarkdownComponents } from "@/lib/markdown-components";
import SEO from "@/components/SEO";
import { FileText, Building, CreditCard } from "lucide-react";

const ExperienceArticle = () => {
  const { slug, subSlug } = useParams();

  // Construct the full slug based on the URL structure
  const fullSlug = subSlug ? `${slug}/${subSlug}` : slug;

  const article = getExperienceArticleBySlug(fullSlug || "");

  if (!article) {
    return <Navigate to="/404" replace />;
  }

  // Icon mapping for related articles
  const iconMap: Record<string, React.ComponentType<any>> = {
    FileText,
    Building,
    CreditCard,
  };

  return (
    <MarkdownArticle
      title={article.title}
      subtitle={article.subtitle}
      backButton={article.backButton}
      footer={article.footer}
      content={article.content}
      markdownComponents={experienceMarkdownComponents}
      relatedItems={article.relatedArticles}
      relatedConfig={article.relatedArticles ? {
        title: "The story isn't over",
        description: "Explore the technical architecture and pivotal decisions that shaped Moves:",
        columns: 3,
        basePath: article.slug === 'moves' ? '/experience/moves' : '/experience',
        showIcons: true,
        iconMap,
        fullWidthSection: true,
      } : undefined}
    >
      <SEO
        title={article.seoTitle}
        description={article.seoDescription}
        image="/og-image.jpg"
        url={article.url}
      />
    </MarkdownArticle>
  );
};

export default ExperienceArticle;
