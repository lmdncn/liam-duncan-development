import React from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router";
import { SITE_CONFIG } from "@/lib/constants";
import { trackEvent } from "@/utils/analytics";
import type { Experience } from "@/services/schemas";

interface TimelineItemProps {
  title: string;
  position?: string;
  duration: string;
  location: string;
  prevPosition?: string | string[];
  description: string[];
  skills: string[];
  link?: string;
  iconImage?: string;
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
    link,
    iconImage,
    index,
    isLast,
  }, ref) => {
    const isExternal = link?.startsWith("http");

    const content = (
      <div
        className={cn(
          "py-10 group lg:grid lg:grid-cols-12 lg:gap-10",
          !isLast && "border-b border-border",
          link && "cursor-pointer",
        )}
      >
        <div className="lg:col-span-3 mb-4 lg:mb-0 flex flex-row lg:flex-col sm:items-start gap-x-4 gap-y-1">
          <span className="font-mono text-xs tracking-wide text-muted-foreground">
            {duration}
          </span>
          <span className="font-mono text-xs text-muted-foreground/60">
            {location}
          </span>
        </div>

        <div className="lg:col-span-9">
          <div className="flex items-center gap-4 mb-5">
            {iconImage && (
              <img
                src={`${SITE_CONFIG.basePath}${iconImage}`}
                alt={`${title} icon`}
                className="h-9 w-9 rounded object-cover border border-border flex-shrink-0"
              />
            )}
            <div>
              <h3
                className={cn(
                  "text-xl font-bold text-foreground leading-tight transition-colors duration-200",
                  link && "group-hover:text-primary",
                )}
              >
                {title}
                {link && (
                  <span className="ml-2 text-primary text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    →
                  </span>
                )}
              </h3>
              {position && (
                <div className="text-primary font-medium text-sm mt-1">
                  {position}
                </div>
              )}
              {prevPosition && (
                <div className="text-muted-foreground/60 text-xs mt-1 font-mono">
                  Previously:{" "}
                  {Array.isArray(prevPosition)
                    ? prevPosition.join(" · ")
                    : prevPosition}
                </div>
              )}
            </div>
          </div>

          <div className="space-y-2 mb-5">
            {description.map((desc, i) => (
              <div
                key={`${title}-desc-${i}`}
                className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed"
              >
                <span className="w-1 h-1 rounded-full bg-primary mt-[0.55rem] flex-shrink-0" />
                {desc}
              </div>
            ))}
          </div>

          {skills.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {skills.map((skill) => (
                <span
                  key={`${title}-skill-${skill}`}
                  className="font-mono text-[11px] text-muted-foreground/60 bg-secondary px-2 py-0.5 rounded-sm border border-border/50"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    );

    const wrapper = (
      <div
        ref={ref}
        className="animate-fade-in"
        style={{ animationDelay: `${index * 0.05}s` }}
      >
        {content}
      </div>
    );

    if (!link) return wrapper;

    if (isExternal) {
      return (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
          onClick={() => trackEvent("external_link", "experience", title)}
        >
          {wrapper}
        </a>
      );
    }

    return (
      <Link to={link} className="block">
        {wrapper}
      </Link>
    );
  },
);

TimelineItem.displayName = "TimelineItem";

interface TimelineProps {
  items: Experience[];
  className?: string;
}

const Timeline = React.forwardRef<HTMLDivElement, TimelineProps>(
  ({ items, className }, ref) => {
    return (
      <div ref={ref} className={cn("w-full", className)}>
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
            link={item.link}
            iconImage={item.iconImage}
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
