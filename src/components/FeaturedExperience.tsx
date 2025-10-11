import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Container } from "@/components/ui/container";
import { AnimatedCard } from "@/components/ui/animated-card";
import { IconBadge } from "@/components/ui/icon-badge";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import type { LucideIcon } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

interface FeaturedItem {
  title: string;
  description: string;
  link?: string;
  icon?: LucideIcon;
  iconImage?: string;
}

const featuredItems: FeaturedItem[] = [
  {
    title: "My Memoir of Moves",
    description:
      "My three-year journey leading the team that built Moves Financial's core banking platform and transformed cash advances for gig workers.",
    link: "/experience/moves",
    iconImage: "/moves/moves-app-icon.png",
  },
];

const FeaturedExperience = () => {
  return (
    <Section id="featured-experience" variant="featured">
      <Container>
        <SectionHeader
          title="Featured"
          subtitle="In-depth stories exploring the journey, decisions, and impact behind key projects"
        />

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
              <Link key={item.title} to={item.link} className="block">
                {cardContent}
              </Link>
            ) : (
              <div key={item.title}>{cardContent}</div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

export default FeaturedExperience;
