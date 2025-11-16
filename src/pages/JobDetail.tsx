import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, IndianRupee, Phone, Building2, ArrowLeft } from "lucide-react";
import { jobsData } from "@/data/jobsData";
import { toast } from "sonner";

const JobDetail = () => {
  const { id } = useParams();
  const job = jobsData.find(j => j.id === id);

  if (!job) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Job Not Found</h1>
          <Link to="/jobs">
            <Button>Browse All Jobs</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleApply = () => {
    toast.success("Application submitted! The employer will contact you soon.");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <Link to="/jobs">
          <Button variant="ghost" className="mb-6 text-muted-foreground hover:text-primary">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Jobs
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-8 bg-card border-border">
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-foreground mb-3">{job.title}</h1>
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <Building2 className="h-5 w-5" />
                  <span className="text-lg">{job.company}</span>
                </div>

                <div className="flex flex-wrap gap-4 text-sm mb-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Posted {job.postedDate}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-secondary text-foreground">
                    {job.category}
                  </Badge>
                  <Badge variant="outline" className="border-primary text-primary">
                    {job.payType === "daily" ? "Daily Wage" : "Monthly Salary"}
                  </Badge>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-3">Job Description</h2>
                  <p className="text-muted-foreground leading-relaxed">{job.description}</p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-3">Requirements</h2>
                  <ul className="space-y-2">
                    {job.requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-3">Contact</h2>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="h-5 w-5" />
                    <a href={`tel:${job.contact}`} className="text-primary hover:underline">
                      {job.contact}
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="p-6 bg-card border-border sticky top-24">
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm text-muted-foreground mb-2">Salary/Wage</h3>
                  <div className="flex items-center gap-2">
                    <IndianRupee className="h-6 w-6 text-primary" />
                    <span className="text-3xl font-bold text-primary">{job.pay}</span>
                    <span className="text-muted-foreground">
                      {job.payType === "daily" ? "/day" : "/month"}
                    </span>
                  </div>
                </div>

                <Button 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-12"
                  onClick={handleApply}
                >
                  Apply Now
                </Button>

                <div className="pt-6 border-t border-border">
                  <h3 className="font-semibold text-foreground mb-3">Job Details</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Category:</span>
                      <span className="text-foreground font-medium">{job.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Pay Type:</span>
                      <span className="text-foreground font-medium">
                        {job.payType === "daily" ? "Daily" : "Monthly"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Location:</span>
                      <span className="text-foreground font-medium">{job.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Posted:</span>
                      <span className="text-foreground font-medium">{job.postedDate}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <footer className="py-8 px-4 border-t border-border mt-16">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 KaamSathi. Connecting Nagpur's workforce.</p>
        </div>
      </footer>
    </div>
  );
};

export default JobDetail;
