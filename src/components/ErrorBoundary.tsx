import React from "react";
import { Button } from "@/components/ui/button";

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error?: Error; resetError: () => void }>;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  resetError = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback;
      return (
        <FallbackComponent
          error={this.state.error}
          resetError={this.resetError}
        />
      );
    }

    return this.props.children;
  }
}

interface ErrorFallbackProps {
  error?: Error;
  resetError: () => void;
}

const DefaultErrorFallback: React.FC<ErrorFallbackProps> = ({
  error,
  resetError,
}) => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="text-center max-w-md mx-auto p-6">
      <h1 className="text-4xl font-bold text-foreground mb-4">Oops!</h1>
      <p className="text-muted-foreground mb-6">
        Something went wrong. Please try refreshing the page or contact support
        if the problem persists.
      </p>
      {process.env.NODE_ENV === "development" && error && (
        <details className="text-left bg-secondary/20 p-4 rounded mb-6">
          <summary className="cursor-pointer font-medium">
            Error Details
          </summary>
          <pre className="mt-2 text-sm overflow-auto">{error.message}</pre>
        </details>
      )}
      <div className="flex gap-4 justify-center">
        <Button onClick={resetError} variant="outline">
          Try Again
        </Button>
        <Button onClick={() => window.location.reload()}>Refresh Page</Button>
      </div>
    </div>
  </div>
);

export default ErrorBoundary;
