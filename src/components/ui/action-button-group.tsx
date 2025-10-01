import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { cn } from "@/lib/utils";

interface ActionButton {
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  href?: string;
  to?: string; // For internal routing
  variant?: "default" | "outline" | "ghost";
  className?: string;
}

interface ActionButtonGroupProps {
  buttons: ActionButton[];
  mainButton?: ActionButton;
  layout?: "desktop" | "mobile" | "responsive";
  className?: string;
}

const ActionButtonGroup = React.forwardRef<HTMLDivElement, ActionButtonGroupProps>(
  ({ buttons, mainButton, layout = "responsive", className }, ref) => {
    const renderButton = (button: ActionButton, key: string) => {
      const buttonClassName = cn(
        button.variant === "default" 
          ? "group bg-accent text-accent-foreground hover:bg-accent/90 shadow-glow transition-all duration-300 hover:scale-105 hover:shadow-xl font-semibold px-8 py-4 text-lg"
          : "bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20 shadow-glow transition-all duration-300 hover:scale-105 backdrop-blur-sm",
        button.className
      );

      if (button.to) {
        return (
          <Button
            key={key}
            size="lg"
            variant={button.variant || "outline"}
            asChild
            className={buttonClassName}
          >
            <Link to={button.to}>
              {button.icon}
              {button.label}
            </Link>
          </Button>
        );
      }

      if (button.href) {
        return (
          <Button
            key={key}
            size="lg"
            variant={button.variant || "outline"}
            asChild
            className={buttonClassName}
          >
            <a href={button.href} target="_blank" rel="noopener noreferrer">
              {button.icon}
              {button.label}
            </a>
          </Button>
        );
      }

      return (
        <Button
          key={key}
          size="lg"
          variant={button.variant || "outline"}
          className={buttonClassName}
          onClick={button.onClick}
        >
          {button.icon}
          {button.label}
        </Button>
      );
    };

    if (layout === "desktop") {
      return (
        <div ref={ref} className={cn("flex flex-wrap gap-3 justify-center lg:max-w-none max-w-lg", className)}>
          {buttons.map((button, index) => renderButton(button, `button-${index}`))}
          {mainButton && renderButton(mainButton, "main-button")}
        </div>
      );
    }

    if (layout === "mobile") {
      return (
        <div ref={ref} className={cn("flex flex-col gap-3 items-center", className)}>
          {/* First button */}
          {buttons[0] && renderButton(buttons[0], "button-0")}
          
          {/* Middle buttons in a row */}
          {buttons.length > 1 && (
            <div className="flex gap-3">
              {buttons.slice(1).map((button, index) => renderButton(button, `button-${index + 1}`))}
            </div>
          )}
          
          {/* Main button at bottom */}
          {mainButton && renderButton(mainButton, "main-button")}
        </div>
      );
    }

    // Responsive layout - use CSS to handle responsiveness
    return (
      <div ref={ref} className={cn("flex flex-col gap-4 justify-center items-center", className)}>
        {/* Desktop & Tablet: All buttons in one row, then main CTA wraps */}
        <div className="hidden sm:flex flex-wrap gap-3 justify-center lg:max-w-none max-w-lg">
          {buttons.map((button, index) => renderButton(button, `button-${index}`))}
          {mainButton && renderButton(mainButton, "main-button")}
        </div>

        {/* Mobile: Custom stacking - First button top, others in middle, Main CTA bottom */}
        <div className="flex flex-col gap-3 items-center sm:hidden">
          {/* First button */}
          {buttons[0] && renderButton(buttons[0], "button-0")}
          
          {/* Middle buttons in a row */}
          {buttons.length > 1 && (
            <div className="flex gap-3">
              {buttons.slice(1).map((button, index) => renderButton(button, `button-${index + 1}`))}
            </div>
          )}
          
          {/* Main button at bottom */}
          {mainButton && renderButton(mainButton, "main-button")}
        </div>
      </div>
    );
  },
);

ActionButtonGroup.displayName = "ActionButtonGroup";

export { ActionButtonGroup, type ActionButton };