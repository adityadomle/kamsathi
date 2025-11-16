import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Briefcase } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Briefcase className="h-7 w-7 text-primary" />
            <span className="text-2xl font-bold text-foreground">
              Kaam<span className="text-primary">Sathi</span>
            </span>
          </Link>

          <div className="flex items-center space-x-4">
            <Link to="/jobs">
              <Button variant="ghost" className="text-foreground hover:text-primary">
                Find Jobs
              </Button>
            </Link>
            <Link to="/post-job">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Post Job
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
