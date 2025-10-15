import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Container } from "@/components/ui/container";
import { AnimatedCard } from "@/components/ui/animated-card";
import { IconBadge } from "@/components/ui/icon-badge";
import { LoadingState } from "@/components/ui/loading-state";
import { ErrorState } from "@/components/ui/error-state";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { useFeatured } from "@/hooks/useFeatured";
import { SITE_CONFIG } from "@/lib/constants";

const FeaturedExperience = () => {
  const { data: featuredItems, isLoading, error, refetch } = useFeatured();

  return (
    <Section id="featured-experience" variant="featured">
      <Container>
        <SectionHeader
          title="Featured"
          subtitle="In-depth stories exploring the journey, decisions, and impact behind key projects"
        />

        {isLoading && <LoadingState message="Loading featured content..." />}

        {error && (
          <ErrorState
            message="Failed to load featured content"
            onRetry={() => refetch()}
          />
        )}

        {featuredItems && (
          <div className="max-w-3xl mx-auto">
            {featuredItems.map((item, index) => {
              const cardContent = (
                <AnimatedCard
                  index={index}
                  animationDelay={0.2}
                  enableHover={!!item.link}
                  variant="elevated"
                >
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      {item.iconImage ? (
                        <div className="overflow-hidden rounded-lg">
                          <img
                            src={`${SITE_CONFIG.basePath}${item.iconImage}`}
                            alt={`${item.title} icon`}
                            className="h-12 w-12 object-cover"
                          />
                        </div>
                      ) : item.icon ? (
                        <IconBadge icon={item.icon} variant="primary" size="md" />
                      ) : null}
                      <div className="flex-1">
                        <CardTitle className="text-2xl font-bold text-foreground">
                          {item.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-foreground leading-relaxed">
                      {item.description}
                    </p>

                    {item.link && (
                      <div className="flex items-center gap-2 text-primary font-medium">
                        Read Full Story
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    )}
                  </CardContent>
                </AnimatedCard>
              );

              return item.link ? (
                <Link key={item.id} to={item.link} className="block">
                  {cardContent}
                </Link>
              ) : (
                <div key={item.id}>{cardContent}</div>
              );
            })}
          </div>
        )}
      </Container>
    </Section>
  );
};

export default FeaturedExperience;
