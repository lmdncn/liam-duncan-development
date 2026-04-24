import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { LoadingState } from "@/components/ui/loading-state";
import { ErrorState } from "@/components/ui/error-state";
import { Code, Database, Cloud, Wrench, Laptop, Server } from "lucide-react";
import { useSkills } from "@/hooks/useSkills";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
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
      <Container>
        <SectionHeader title="Technical Skills" index={5} />

        {isLoading && <LoadingState message="Loading skills..." />}

        {error && (
          <ErrorState
            message="Failed to load skills data"
            onRetry={() => refetch()}
          />
        )}

        {skillCategories && (
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
            {skillCategories.map((category, index) => {
              const IconComponent = iconMap[category.icon] || Code;
              return (
                <div
                  key={category.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.06}s` }}
                >
                  <div className="flex items-center gap-2.5 mb-3">
                    <IconComponent className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                    <h3 className="font-mono text-[11px] tracking-[0.18em] uppercase text-primary font-medium">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-x-3 gap-y-1.5">
                    {category.skills.map((skill, i) => (
                      <span
                        key={`${category.id}-${skill}`}
                        className="text-sm text-muted-foreground font-light"
                      >
                        {skill}
                        {i < category.skills.length - 1 && (
                          <span className="ml-3 text-border">·</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </Container>
    </Section>
  );
};

export default Skills;
