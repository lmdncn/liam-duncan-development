import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  title: string;
  position: string;
  duration: string;
  location: string;
  prevPosition?: string | string[];
  description: string[];
  skills: string[];
  index: number;
  isLast: boolean;
}

const TimelineItem = React.forwardRef<HTMLDivElement, TimelineItemProps>(
  ({ 
    title, 
    position, 
    duration, 
    location, 
    prevPosition, 
    description, 
    skills, 
    index, 
    isLast 
  }, ref) => {
    return (
      <div
        ref={ref}
        className="relative mb-12 animate-fade-in"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        {/* Timeline line */}
        {!isLast && (
          <div className="absolute left-6 top-16 w-0.5 h-full bg-border hidden md:block"></div>
        )}

        {/* Timeline dot */}
        <div className="absolute left-4 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-card hidden md:block"></div>

        <Card className="md:ml-16 shadow-card bg-gradient-card border-border/50">
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  {title}
                </CardTitle>
                <CardDescription className="text-lg font-medium text-primary mt-1">
                  {position}
                </CardDescription>
                {prevPosition && (
                  <div className="space-y-1">
                    {Array.isArray(prevPosition) ? (
                      prevPosition.map((pos, index) => (
                        <CardDescription
                          key={index}
                          className="text-sm text-muted-foreground"
                        >
                          Previously: {pos}
                        </CardDescription>
                      ))
                    ) : (
                      <CardDescription className="text-sm text-muted-foreground">
                        Previously: {prevPosition}
                      </CardDescription>
                    )}
                  </div>
                )}
              </div>
              <div className="flex flex-col sm:items-end gap-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {duration}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  {location}
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-2">
              {description.map((desc, descIndex) => (
                <li
                  key={descIndex}
                  className="text-foreground leading-relaxed flex items-start gap-2"
                >
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  {desc}
                </li>
              ))}
            </ul>
            {skills.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                {skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="bg-secondary/80 text-secondary-foreground"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    );
  },
);

TimelineItem.displayName = "TimelineItem";

interface TimelineProps {
  items: Array<{
    company: string;
    position: string;
    duration: string;
    location: string;
    prevPosition?: string | string[];
    description: string[];
    skills: string[];
  }>;
  className?: string;
}

const Timeline = React.forwardRef<HTMLDivElement, TimelineProps>(
  ({ items, className }, ref) => {
    return (
      <div ref={ref} className={cn("max-w-4xl mx-auto", className)}>
        {items.map((item, index) => (
          <TimelineItem
            key={index}
            title={item.company}
            position={item.position}
            duration={item.duration}
            location={item.location}
            prevPosition={item.prevPosition}
            description={item.description}
            skills={item.skills}
            index={index}
            isLast={index === items.length - 1}
          />
        ))}
      </div>
    );
  },
);

Timeline.displayName = "Timeline";

export { Timeline, TimelineItem };