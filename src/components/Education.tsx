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
import { Award, Calendar } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const Education = () => {
  return (
    <Section id="education" variant="alternate">
      <Container>
        <SectionHeader
          title="Education"
          subtitle="Strong foundation in software engineering and computer science"
        />

        <div className="max-w-3xl mx-auto">
          <AnimatedCard index={0} enableHover={false}>
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="overflow-hidden rounded-lg flex-shrink-0 border border-border/50">
                    <img
                      src={`${SITE_CONFIG.basePath}/western-app-icon.png`}
                      alt="Western University icon"
                      className="h-12 w-12 object-cover"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-foreground">
                      Western University
                    </CardTitle>
                    <CardDescription className="text-lg font-medium text-primary mt-1">
                      Bachelor of Engineering Science in Software Engineering
                    </CardDescription>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge className="bg-accent/20 text-accent border-accent/30 flex items-center gap-1">
                        <Award className="h-3 w-3" />
                        Dean's List Award
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  2014 - 2018
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-foreground leading-relaxed">
                Comprehensive 4-year engineering program focusing on software
                development, system design, and engineering principles.
                Recognized for academic excellence with Dean's List honors,
                demonstrating consistent high performance and dedication to
                learning.
              </p>
            </CardContent>
          </AnimatedCard>
        </div>
      </Container>
    </Section>
  );
};

export default Education;
