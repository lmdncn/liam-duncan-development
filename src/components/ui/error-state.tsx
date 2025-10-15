/**
 * Error state component
 * Displays error messages with retry option
 */

import { AlertCircle } from "lucide-react";
import { Button } from "./button";

interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
  className?: string;
}

export const ErrorState = ({
  message = "Something went wrong. Please try again.",
  onRetry,
  className = ""
}: ErrorStateProps) => {
  return (
    <div className={`flex flex-col items-center justify-center py-12 ${className}`}>
      <AlertCircle className="h-12 w-12 text-destructive mb-4" />
      <p className="text-foreground text-center mb-4">{message}</p>
      {onRetry && (
        <Button onClick={onRetry} variant="outline">
          Try Again
        </Button>
      )}
    </div>
  );
};
