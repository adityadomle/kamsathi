import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface SearchBarProps {
  onSearch?: (query: string, location: string, category: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const handleSearch = () => {
    // This will be connected to actual search functionality
    if (onSearch) {
      onSearch("", "", "");
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 p-4 bg-card rounded-xl border border-border shadow-lg">
        <div className="md:col-span-4 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Job title or keyword"
            className="pl-10 bg-background border-border focus:border-primary"
          />
        </div>
        
        <div className="md:col-span-3 relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Nagpur"
            className="pl-10 bg-background border-border focus:border-primary"
          />
        </div>
        
        <div className="md:col-span-3">
          <Select>
            <SelectTrigger className="bg-background border-border focus:border-primary">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="construction">Construction</SelectItem>
              <SelectItem value="driver">Driver</SelectItem>
              <SelectItem value="plumber">Plumber</SelectItem>
              <SelectItem value="cleaner">Cleaner</SelectItem>
              <SelectItem value="helper">Helper</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="md:col-span-2">
          <Button 
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium"
            onClick={handleSearch}
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
