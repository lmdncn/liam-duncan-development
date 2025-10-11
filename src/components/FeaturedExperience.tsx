import {
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Container } from "@/components/ui/container";
import { AnimatedCard } from "@/components/ui/animated-card";
import { Building2, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import type { LucideIcon } from "lucide-react";

interface FeaturedItem {
  title: string;
  description: string;
  link?: string;
  icon: LucideIcon;
}

const featuredItems: FeaturedItem[] = [
  {
    title: "My Memoir Of Moves",
    description:
      "When a gig worker's car broke down, their only option was often a payday loan: sky-high interest and a cycle of debt. I led the team that transformed Moves from a scrappy loan provider into a full-service banking platform, building proprietary cash advance and banking systems from the ground up. We processed millions in daily transactions, increased originations and revenue significantly year over year, and proved that financial inclusion and sustainability could coexist by giving overlooked workers access to fair financial services that actually worked for how they earned.",
    link: "/experience/moves",
    icon: Building2,
  },
];

const FeaturedExperience = () => {
  return (
    <Section id="featured-experience">
      <Container>
        <SectionHeader
          title="Featured"
          subtitle="Highlighted projects and roles that showcase technical leadership and innovative solutions"
        />

        <div className="max-w-3xl mx-auto">
          {featuredItems.map((item, index) => {
            const Icon = item.icon;

            const cardContent = (
              <AnimatedCard
                index={index}
                animationDelay={0.2}
                enableHover={!!item.link}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
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
