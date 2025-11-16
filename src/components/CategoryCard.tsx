import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  jobCount: number;
}

const CategoryCard = ({ icon: Icon, title, jobCount }: CategoryCardProps) => {
  return (
    <Card className="p-6 bg-card border-border hover:border-primary hover:bg-card-hover transition-all cursor-pointer group">
      <div className="flex flex-col items-center text-center space-y-3">
        <div className="p-4 rounded-full bg-secondary group-hover:bg-primary/10 transition-colors">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground text-lg mb-1">{title}</h3>
          <p className="text-muted-foreground text-sm">{jobCount} Jobs Available</p>
        </div>
      </div>
    </Card>
  );
};

export default CategoryCard;
