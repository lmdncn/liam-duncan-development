import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { AnimatedCard } from "@/components/ui/animated-card";
import { LoadingState } from "@/components/ui/loading-state";
import { ErrorState } from "@/components/ui/error-state";
import { Code, Database, Cloud, Wrench, Laptop, Server } from "lucide-react";
import { useSkills } from "@/hooks/useSkills";

// Icon mapping
const iconMap: Record<string, any> = {
  Laptop,
  Server,
  Database,
  Cloud,
  Wrench,
  Code,
};

const Skills = () => {
  const { data: skillCategories, isLoading, error, refetch } = useSkills();

  return (
    <Section id="skills">
      <div className="container mx-auto px-6">
        <SectionHeader title="Technical Skills" />

        {isLoading && <LoadingState message="Loading skills..." />}

        {error && (
          <ErrorState
            message="Failed to load skills data"
            onRetry={() => refetch()}
          />
        )}

        {skillCategories && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {skillCategories.map((category, index) => {
              const IconComponent = iconMap[category.icon] || Code;

              return (
                <AnimatedCard
                  key={category.id}
                  index={index}
                  animationDelay={0.1}
                  enableHover={false}
                  variant="flat"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${category.color.bg} ${category.color.text} ${category.color.border}`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-lg font-semibold text-foreground">
                        {category.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="bg-secondary/80 text-secondary-foreground text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </AnimatedCard>
              );
            })}
          </div>
        )}
      </div>
    </Section>
  );
};

export default Skills;
