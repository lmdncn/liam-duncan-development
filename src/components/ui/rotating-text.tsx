import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const TYPE_SPEED = 70;
const DELETE_SPEED = 40;
const HOLD_AFTER_TYPE = 1600;
const HOLD_AFTER_DELETE = 240;

interface RotatingTextProps {
  prefix?: string;
  options: string[];
  suffix?: string;
  className?: string;
}

const RotatingText = React.forwardRef<HTMLDivElement, RotatingTextProps>(
  ({ prefix, options, suffix, className }, ref) => {
    const optionsKey = options.join("|");
    const [wordIndex, setWordIndex] = useState(0);
    const [text, setText] = useState("");
    const [phase, setPhase] = useState<"typing" | "deleting">("typing");
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
      setWordIndex(0);
      setText("");
      setPhase("typing");
    }, [optionsKey]);

    useEffect(() => {
      if (options.length === 0) return;

      const currentWord = options[wordIndex % options.length] ?? "";

      const schedule = (delay: number, fn: () => void) => {
        timeoutRef.current = setTimeout(fn, delay);
      };

      if (phase === "typing") {
        if (text.length < currentWord.length) {
          schedule(TYPE_SPEED, () =>
            setText(currentWord.slice(0, text.length + 1)),
          );
        } else {
          schedule(HOLD_AFTER_TYPE, () => setPhase("deleting"));
        }
      } else if (text.length > 0) {
        schedule(DELETE_SPEED, () => setText(text.slice(0, -1)));
      } else {
        schedule(HOLD_AFTER_DELETE, () => {
          setWordIndex((i) => (i + 1) % options.length);
          setPhase("typing");
        });
      }

      return () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      };
    }, [text, phase, wordIndex, optionsKey, options]);

    return (
      <div
        ref={ref}
        className={cn("flex items-baseline gap-2", className)}
      >
        {prefix && (
          <span className="font-medium opacity-60">{prefix}</span>
        )}
        <span className="font-bold text-primary inline-flex items-center">
          <span aria-live="polite" className="whitespace-pre">
            {text}
            {"​"}
          </span>
          <span
            className="ml-[3px] inline-block w-[2px] h-[1em] translate-y-[1px] bg-primary animate-caret-blink"
            aria-hidden="true"
          />
        </span>
        {suffix && <span className="opacity-60 font-medium">{suffix}</span>}
      </div>
    );
  },
);

RotatingText.displayName = "RotatingText";

export { RotatingText };
