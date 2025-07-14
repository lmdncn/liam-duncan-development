import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Wrench, Laptop, Server } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Laptop,
    skills: ["JavaScript", "TypeScript", "React", "Angular", "HTML/CSS", "Tailwind CSS"],
    color: "bg-blue-500/10 text-blue-600 border-blue-500/20"
  },
  {
    title: "Backend Development", 
    icon: Server,
    skills: ["Node.js", "Python", "Django", "Express.js", "C#", ".NET", "REST APIs", "GraphQL"],
    color: "bg-green-500/10 text-green-600 border-green-500/20"
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Redis", "SQL", "Database Design"],
    color: "bg-purple-500/10 text-purple-600 border-purple-500/20"
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS", "Azure", "Docker", "Kubernetes", "GitLab CI/CD", "Microservices"],
    color: "bg-orange-500/10 text-orange-600 border-orange-500/20"
  },
  {
    title: "Testing & Tools",
    icon: Wrench,
    skills: ["Jest", "Mocha", "Puppeteer", "Git", "Jira", "Confluence"],
    color: "bg-red-500/10 text-red-600 border-red-500/20"
  },
  {
    title: "Specialized",
    icon: Code,
    skills: ["Payment Systems", "Financial Services", "Team Leadership", "System Architecture"],
    color: "bg-indigo-500/10 text-indigo-600 border-indigo-500/20"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="shadow-card hover:shadow-hover transition-all duration-300 hover:scale-[1.02] bg-gradient-card border-border/50 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${category.color}`}>
                    <category.icon className="h-6 w-6" />
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
                      className="bg-secondary/80 text-secondary-foreground hover:bg-secondary transition-colors text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Additional Skills List */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="shadow-card bg-gradient-card border-border/50 animate-fade-in">
            <CardHeader>
              <CardTitle className="text-center text-xl font-semibold text-foreground">
                Additional Technologies & Tools
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div>
                  <strong className="text-foreground">Mobile & Cross-Platform:</strong> React Native, Cordova
                </div>
                <div>
                  <strong className="text-foreground">Integration & APIs:</strong> SendGrid, Salesforce, Intercom, Google APIs
                </div>
                <div>
                  <strong className="text-foreground">Build Tools:</strong> Webpack, Vite, FlywayDB
                </div>
                <div>
                  <strong className="text-foreground">Monitoring:</strong> Raygun, Application Performance Monitoring
                </div>
                <div>
                  <strong className="text-foreground">Platforms:</strong> OpenShift, Sitecore, Amazon Chime SDK
                </div>
                <div>
                  <strong className="text-foreground">Methodologies:</strong> Agile, DevOps, Microservices Architecture
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;