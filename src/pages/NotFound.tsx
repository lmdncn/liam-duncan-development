import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-background page-transition"
      style={{ backgroundColor: 'hsl(0 0% 100%)', minHeight: '100vh' }}
    >
      <div className="text-center">
        <h1 className="text-6xl font-light text-muted-foreground mb-4">404</h1>
        <h2 className="text-2xl font-normal text-foreground mb-2">Page Not Found</h2>
        <p className="text-lg text-muted-foreground mb-8">
          The page you are looking for doesn't exist
        </p>
        <Button variant="ghost" asChild className="text-primary hover:bg-primary/10 transition-colors">
          <Link to="/">Return Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
