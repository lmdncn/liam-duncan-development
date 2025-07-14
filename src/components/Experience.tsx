import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

const experiences = [
  {
    company: "Float",
    position: "Software Developer",
    duration: "2025",
    location: "floatfinancial.com",
    description: [
      "Optimized Django endpoints, cutting response times by 50%+ via query tuning and logic refactoring.",
      "Developed services for a payment system that disbursed over $100m, improving extensibility."
    ],
    skills: ["Django", "Python", "Performance Optimization", "Payment Systems"]
  },
  {
    company: "Career Break",
    position: "World Traveler",
    duration: "2024",
    location: "Global",
    description: [
      "I took a year-long career break to achieve a long-planned goal, travelling around the world. During this time, I visited four continents and over 15 countries. This experience provided valuable global insights and renewed energy."
    ],
    skills: ["Cultural Awareness", "Adaptability", "Global Perspective"]
  },
  {
    company: "Moves",
    position: "Engineering Technical Lead & Manager",
    duration: "2021 - 2024",
    location: "movesfinancial.com",
    prevPosition: "Senior Software Developer (2021)",
    description: [
      "Led Moves' banking vertical team and owned the app and system that supports banking functionality.",
      "Architected and developed dozens of microservices that processed millions of dollars of members' funds leveraging distributed event streaming and Unit banking as a service.",
      "Successfully constructed cash advance products, increasing their gross margin by over 200 points.",
      "Assembled a cohesive and productive engineering team - received 4.8/5 on manager feedback reports."
    ],
    skills: ["React Native", "Node.js", "Express.js", "Redis", "MongoDB", "Redis Streams", "MongoDB CDCs", "Team Leadership"]
  },
  {
    company: "Konrad",
    position: "Senior Software Developer",
    duration: "2020 - 2021",
    location: "konrad.com",
    prevPosition: "Software Developer (2018 - 2020)",
    description: [
      "Swiftly promoted to senior by displaying knowledge, productivity and leadership.",
      "Led in the architecture and construction of a collection of applications as part of a multi-million dollar custom e-commerce solution.",
      "Worked on a set of big data microservices in the financial sector, processing millions of transactions, implementing graph theory and machine learning to determine validity and detect fraud.",
      "Consulted on the improvement of a progressive hybrid web app for the sales department of a financial client.",
      "Created and maintained CI/CD pipelines and highly scalable containerized deployment environments across multiple projects.",
      "Conduct interviews as part of the company's hiring team and mentor developers through weekly meetings, review sessions, and pair programming."
    ],
    skills: ["React", "Apollo", "NestJs", "GraphQL", "PostgreSQL", "Jest", "Puppeteer", "Node.js", "Express", "FlywayDB", "Mocha", "Chai", "Webpack", "Cordova", "GitLab CI/CD", "Kubernetes", "Openshift", "Docker"]
  },
  {
    company: "BrainStation",
    position: "Software Developer",
    duration: "2018 - 2020",
    location: "brainstation.io",
    description: [
      "Worked with a team developing and maintaining a suite of LMS, CRM, and CMS applications used in the training of over 100k professionals.",
      "Built a videotelephony web application to host online classrooms, replacing Zoom.",
      "Developed the marketing website improving reach, lead conversion rate, and data collection.",
      "Constructed analytical tools mining data that are now part of the sales team's daily practices.",
      "Introduced new features implementing API integrations.",
      "Employed DevOps practices and Agile methodologies alongside the usage of Gitlab, Jira, Confluence, Zeplin, Figma, AWS, and Raygun."
    ],
    skills: ["React", "Redux", "C#", ".NET", "SQL", "Amazon Chime SDK", "SendGrid", "Salesforce", "Intercom", "Google APIs", "AWS"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A journey through innovative companies, leading teams, and building scalable solutions
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="relative mb-12 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-full bg-border hidden md:block"></div>
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-4 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-card hidden md:block"></div>
              
              <Card className="md:ml-16 shadow-card hover:shadow-hover transition-all duration-300 hover:scale-[1.02] bg-gradient-card border-border/50">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
                        {exp.company}
                        <ExternalLink className="h-4 w-4 text-muted-foreground" />
                      </CardTitle>
                      <CardDescription className="text-lg font-medium text-primary mt-1">
                        {exp.position}
                      </CardDescription>
                      {exp.prevPosition && (
                        <CardDescription className="text-sm text-muted-foreground">
                          Previously: {exp.prevPosition}
                        </CardDescription>
                      )}
                    </div>
                    <div className="flex flex-col sm:items-end gap-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {exp.description.map((desc, descIndex) => (
                      <li key={descIndex} className="text-foreground leading-relaxed flex items-start gap-2">
                        <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                    {exp.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary"
                        className="bg-secondary/80 text-secondary-foreground hover:bg-secondary transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;