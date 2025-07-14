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
          <Card className="shadow-card hover:shadow-hover transition-all duration-300 hover:scale-[1.02] bg-gradient-card border-border/50 animate-fade-in">
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
                      <Award className="h-4 w-4 text-accent" />
                      <Badge className="bg-accent/20 text-accent border-accent/30">
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
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Core Subjects</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div>• Software Architecture & Design</div>
                    <div>• Data Structures & Algorithms</div>
                    <div>• Database Systems</div>
                    <div>• Computer Networks</div>
                    <div>• Operating Systems</div>
                    <div>• Web Technologies</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Skills Developed</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div>• Full-Stack Development</div>
                    <div>• System Design</div>
                    <div>• Project Management</div>
                    <div>• Team Collaboration</div>
                    <div>• Problem Solving</div>
                    <div>• Technical Communication</div>
                  </div>
                </div>
              </div>
              
              <div className="pt-4 border-t border-border/50">
                <p className="text-foreground leading-relaxed">
                  Comprehensive 4-year engineering program focusing on software development, 
                  system design, and engineering principles. Recognized for academic excellence 
                  with Dean's List honors, demonstrating consistent high performance and 
                  dedication to learning.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;