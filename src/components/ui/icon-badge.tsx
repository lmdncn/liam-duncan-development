import React from "react";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface IconBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: LucideIcon;
  variant?: "default" | "primary" | "rounded" | "colored";
  size?: "sm" | "md" | "lg";
  colorClass?: string;
}

const IconBadge = React.forwardRef<HTMLDivElement, IconBadgeProps>(
  ({ icon: Icon, variant = "default", size = "md", colorClass, className, ...props }, ref) => {
    const sizeClasses = {
      sm: "p-2",
      md: "p-3",
      lg: "p-4",
    };

    const iconSizes = {
      sm: "h-4 w-4",
      md: "h-6 w-6",
      lg: "h-8 w-8",
    };

    const variantClasses = {
      default: "bg-primary/10 text-primary rounded-lg",
      primary: "bg-primary/10 text-primary rounded-lg",
      rounded: "bg-primary/10 text-primary rounded-full",
      colored: colorClass || "bg-primary/10 text-primary rounded-lg",
    };

    return (
      <div
        ref={ref}
        className={cn(
          sizeClasses[size],
          variantClasses[variant],
          className,
        )}
        {...props}
      >
        <Icon className={iconSizes[size]} />
      </div>
    );
  },
);

IconBadge.displayName = "IconBadge";

export { IconBadge };
