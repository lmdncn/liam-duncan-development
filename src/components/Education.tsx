import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Strong foundation in software engineering and computer science
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Card className="shadow-card bg-gradient-card border-border/50 animate-fade-in">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <GraduationCap className="h-8 w-8 text-primary" />
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
                Comprehensive 4-year engineering program focusing on software development, 
                system design, and engineering principles. Recognized for academic excellence 
                with Dean's List honors, demonstrating consistent high performance and 
                dedication to learning.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;