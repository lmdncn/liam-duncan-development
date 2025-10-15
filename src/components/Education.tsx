import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Container } from "@/components/ui/container";
import { AnimatedCard } from "@/components/ui/animated-card";
import { LoadingState } from "@/components/ui/loading-state";
import { ErrorState } from "@/components/ui/error-state";
import { Award, Calendar } from "lucide-react";
import { useEducation } from "@/hooks/useEducation";
import { SITE_CONFIG } from "@/lib/constants";

const Education = () => {
  const { data: education, isLoading, error, refetch } = useEducation();

  return (
    <Section id="education" variant="alternate">
      <Container>
        <SectionHeader
          title="Education"
          subtitle="Strong foundation in software engineering and computer science"
        />

        {isLoading && <LoadingState message="Loading education..." />}

        {error && (
          <ErrorState
            message="Failed to load education data"
            onRetry={() => refetch()}
          />
        )}

        {education && (
          <div className="max-w-3xl mx-auto">
            {education.map((item, index) => (
              <AnimatedCard key={item.id} index={index} enableHover={false}>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      {item.iconImage && (
                        <div className="overflow-hidden rounded-lg flex-shrink-0 border border-border/50">
                          <img
                            src={`${SITE_CONFIG.basePath}${item.iconImage}`}
                            alt={`${item.institution} icon`}
                            className="h-12 w-12 object-cover"
                          />
                        </div>
                      )}
                      <div>
                        <CardTitle className="text-2xl font-bold text-foreground">
                          {item.institution}
                        </CardTitle>
                        <CardDescription className="text-lg font-medium text-primary mt-1">
                          {item.degree}
                        </CardDescription>
                        {item.honors && item.honors.length > 0 && (
                          <div className="flex items-center gap-2 mt-2">
                            {item.honors.map((honor, honorIndex) => (
                              <Badge
                                key={honorIndex}
                                className="bg-accent/20 text-accent border-accent/30 flex items-center gap-1"
                              >
                                <Award className="h-3 w-3" />
                                {honor}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {item.duration}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </AnimatedCard>
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
};

export default Education;
