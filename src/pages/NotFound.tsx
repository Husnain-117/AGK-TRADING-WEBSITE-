import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home, Search, FileQuestion } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/50">
      <div className="text-center px-4 max-w-2xl mx-auto">
        <div className="mb-8 flex justify-center">
          <div className="p-6 bg-primary/10 rounded-full">
            <FileQuestion className="h-24 w-24 text-primary" />
          </div>
        </div>
        <h1 className="mb-4 text-7xl font-bold text-primary">404</h1>
        <h2 className="mb-4 text-3xl font-bold text-foreground">Page Not Found</h2>
        <p className="mb-8 text-xl text-muted-foreground">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" variant="default">
            <Link to="/" className="gap-2">
              <Home size={18} />
              Return to Home
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/contact" className="gap-2">
              <Search size={18} />
              Contact Support
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
