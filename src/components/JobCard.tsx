import { MapPin, Calendar, IndianRupee } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface JobCardProps {
  id: string;
  title: string;
  company: string;
  location: string;
  category: string;
  payType: "daily" | "monthly";
  pay: string;
  postedDate: string;
}

const JobCard = ({ id, title, company, location, category, payType, pay, postedDate }: JobCardProps) => {
  return (
    <Card className="p-6 bg-card border-border hover:border-primary transition-all group">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex-1 space-y-3">
          <div>
            <Link to={`/job/${id}`}>
              <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                {title}
              </h3>
            </Link>
            <p className="text-muted-foreground">{company}</p>
          </div>

          <div className="flex flex-wrap gap-3 text-sm">
            <div className="flex items-center gap-1 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>{postedDate}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="bg-secondary text-foreground">
              {category}
            </Badge>
            <Badge variant="outline" className="border-primary text-primary">
              {payType === "daily" ? "Daily Wage" : "Monthly Salary"}
            </Badge>
          </div>
        </div>

        <div className="flex flex-col items-end gap-3">
          <div className="text-right">
            <div className="flex items-center gap-1 text-2xl font-bold text-primary">
              <IndianRupee className="h-5 w-5" />
              <span>{pay}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {payType === "daily" ? "per day" : "per month"}
            </p>
          </div>
          
          <Link to={`/job/${id}`} className="w-full md:w-auto">
            <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default JobCard;
