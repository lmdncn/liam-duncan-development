import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Container } from "@/components/ui/container";
import { AnimatedCard } from "@/components/ui/animated-card";
import { LoadingState } from "@/components/ui/loading-state";
import { ErrorState } from "@/components/ui/error-state";
import { Award, Users, ExternalLink, Calendar } from "lucide-react";
import { useProjects } from "@/hooks/useProjects";
import { trackEvent } from "@/utils/analytics";

const Projects = () => {
  const { data: projects, isLoading, error, refetch } = useProjects();

  return (
    <Section id="projects" variant="alternate">
      <Container>
        <SectionHeader
          title="Personal Portfolio"
          subtitle="Innovative projects that showcase problem-solving skills and technical creativity"
        />

        {isLoading && <LoadingState message="Loading projects..." />}

        {error && (
          <ErrorState
            message="Failed to load projects data"
            onRetry={() => refetch()}
          />
        )}

        {projects && (
          <div className="space-y-8">
            {projects.map((project, index) => (
              <AnimatedCard
                key={project.id || project.title}
                index={index}
                animationDelay={0.2}
                enableHover={!!project.demoUrl}
              >
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="space-y-2">
                      <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
                        {project.title}
                        {project.demoUrl && (
                          <ExternalLink className="h-4 w-4 text-muted-foreground" />
                        )}
                      </CardTitle>
                      <CardDescription className="text-lg font-medium text-primary">
                        {project.event}
                      </CardDescription>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {project.year}
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      {project.awards.map((award, awardIndex) => (
                        <Badge
                          key={awardIndex}
                          className="bg-accent/20 text-accent border-accent/30 flex items-center gap-1"
                        >
                          <Award className="h-3 w-3" />
                          {award}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      Key Highlights
                    </h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <li
                          key={highlightIndex}
                          className="text-muted-foreground flex items-start gap-2"
                        >
                          <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="bg-secondary/80 text-secondary-foreground"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {project.demoUrl && (
                    <div className="pt-4 border-t border-border/50">
                      <Button
                        variant="outline"
                        className="flex items-center gap-2 hover:bg-secondary transition-colors"
                        onClick={() => {
                          trackEvent('project_view', 'portfolio', project.title);
                          window.open(project.demoUrl, "_blank");
                        }}
                      >
                        <ExternalLink className="h-4 w-4" />
                        View Project
                      </Button>
                    </div>
                  )}
                </CardContent>
              </AnimatedCard>
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
};

export default Projects;
