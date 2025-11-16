import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import CategoryCard from "@/components/CategoryCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Hammer, Car, Wrench, Sparkles, Users, Building2 } from "lucide-react";
import { categories, topCompanies } from "@/data/jobsData";

const Home = () => {
  const categoryIcons = [Hammer, Car, Wrench, Sparkles, Users, Building2];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background opacity-50" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12 space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Find Your Next <span className="text-primary">Opportunity</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connecting workers with employers across Nagpur. Daily wage and monthly jobs at your fingertips.
            </p>
          </div>

          <SearchBar />

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link to="/jobs">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                Find Jobs
              </Button>
            </Link>
            <Link to="/post-job">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold">
                Post a Job
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Popular Categories
            </h2>
            <p className="text-muted-foreground">Browse jobs by category</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <CategoryCard
                key={category.name}
                icon={categoryIcons[index]}
                title={category.name}
                jobCount={category.count}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Top Companies */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Top Companies Hiring
            </h2>
            <p className="text-muted-foreground">Join these leading employers in Nagpur</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topCompanies.map((company) => (
              <Card key={company.name} className="p-6 bg-card border-border hover:border-primary transition-all text-center">
                <div className="space-y-3">
                  <div className="w-16 h-16 mx-auto bg-secondary rounded-full flex items-center justify-center">
                    <Building2 className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{company.name}</h3>
                    <p className="text-sm text-muted-foreground">{company.jobCount} Open Positions</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto">
          <Card className="p-12 bg-gradient-to-r from-card to-secondary border-border text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Whether you're looking for work or hiring, KaamSathi makes it simple and fast.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/jobs">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                  Browse All Jobs
                </Button>
              </Link>
              <Link to="/post-job">
                <Button size="lg" variant="outline" className="border-foreground text-foreground hover:bg-foreground hover:text-background font-semibold">
                  Post Your Job
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 KaamSathi. Connecting Nagpur's workforce.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
