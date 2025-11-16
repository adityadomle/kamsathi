import { useState } from "react";
import Navbar from "@/components/Navbar";
import JobCard from "@/components/JobCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, Filter } from "lucide-react";
import { jobsData } from "@/data/jobsData";

const JobListings = () => {
  const [filteredJobs, setFilteredJobs] = useState(jobsData);
  const [searchQuery, setSearchQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [payTypeFilter, setPayTypeFilter] = useState("all");

  const handleFilter = () => {
    let filtered = jobsData;

    if (searchQuery) {
      filtered = filtered.filter(job =>
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (locationFilter !== "all") {
      filtered = filtered.filter(job => job.location.includes(locationFilter));
    }

    if (categoryFilter !== "all") {
      filtered = filtered.filter(job => job.category === categoryFilter);
    }

    if (payTypeFilter !== "all") {
      filtered = filtered.filter(job => job.payType === payTypeFilter);
    }

    setFilteredJobs(filtered);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Find Jobs</h1>
          <p className="text-muted-foreground">Explore {jobsData.length} available opportunities</p>
        </div>

        {/* Filters */}
        <div className="bg-card p-6 rounded-xl border border-border mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold text-foreground">Filter Jobs</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="relative lg:col-span-2">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search jobs..."
                className="pl-10 bg-background border-border"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  handleFilter();
                }}
              />
            </div>

            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground z-10" />
              <Select value={locationFilter} onValueChange={(value) => {
                setLocationFilter(value);
                handleFilter();
              }}>
                <SelectTrigger className="pl-10 bg-background border-border">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="Dharampeth">Dharampeth</SelectItem>
                  <SelectItem value="Sitabuldi">Sitabuldi</SelectItem>
                  <SelectItem value="Sadar">Sadar</SelectItem>
                  <SelectItem value="CA Road">CA Road</SelectItem>
                  <SelectItem value="Pratap Nagar">Pratap Nagar</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Select value={categoryFilter} onValueChange={(value) => {
              setCategoryFilter(value);
              handleFilter();
            }}>
              <SelectTrigger className="bg-background border-border">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Construction">Construction</SelectItem>
                <SelectItem value="Driver">Driver</SelectItem>
                <SelectItem value="Plumber">Plumber</SelectItem>
                <SelectItem value="Cleaner">Cleaner</SelectItem>
                <SelectItem value="Helper">Helper</SelectItem>
              </SelectContent>
            </Select>

            <Select value={payTypeFilter} onValueChange={(value) => {
              setPayTypeFilter(value);
              handleFilter();
            }}>
              <SelectTrigger className="bg-background border-border">
                <SelectValue placeholder="Pay Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Pay Types</SelectItem>
                <SelectItem value="daily">Daily Wage</SelectItem>
                <SelectItem value="monthly">Monthly Salary</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Job Listings */}
        <div className="space-y-4">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <JobCard key={job.id} {...job} />
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No jobs found matching your criteria.</p>
            </div>
          )}
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

export default JobListings;
