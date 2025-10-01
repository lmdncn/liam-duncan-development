import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface RotatingTextProps {
  prefix?: string;
  options: string[];
  suffix?: string;
  className?: string;
}

const RotatingText = React.forwardRef<HTMLDivElement, RotatingTextProps>(
  ({ prefix, options, suffix, className }, ref) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
      const interval = setInterval(() => {
        setIsTyping(false);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % options.length);
          setIsTyping(true);
        }, 300);
      }, 2500);

      return () => clearInterval(interval);
    }, [options.length]);

    return (
      <div ref={ref} className={cn("flex items-center justify-center gap-3 min-h-[3rem]", className)}>
        {prefix && <span className="opacity-90 font-medium">{prefix}</span>}
        <span
          className={cn(
            "font-bold text-accent transition-all duration-300",
            isTyping ? "opacity-100 scale-100" : "opacity-0 scale-95"
          )}
        >
          {options[currentIndex]}
        </span>
        {suffix && <span className="opacity-90 font-medium">{suffix}</span>}
        <span
          className={cn(
            "w-1 h-8 bg-accent animate-pulse",
            isTyping ? "opacity-100" : "opacity-0"
          )}
        />
      </div>
    );
  },
);

RotatingText.displayName = "RotatingText";

export { RotatingText };