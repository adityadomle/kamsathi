import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const PostJob = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    category: "",
    payType: "",
    pay: "",
    description: "",
    contact: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.title || !formData.company || !formData.location || !formData.category || 
        !formData.payType || !formData.pay || !formData.description || !formData.contact) {
      toast.error("Please fill in all fields");
      return;
    }

    // Simulate job posting
    toast.success("Job posted successfully! Your listing is now live.");
    setTimeout(() => {
      navigate("/jobs");
    }, 1500);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Post a Job</h1>
            <p className="text-muted-foreground">Fill in the details to create your job listing</p>
          </div>

          <Card className="p-8 bg-card border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Job Title */}
              <div className="space-y-2">
                <Label htmlFor="title" className="text-foreground">Job Title *</Label>
                <Input
                  id="title"
                  placeholder="e.g., Construction Worker, Driver"
                  className="bg-background border-border"
                  value={formData.title}
                  onChange={(e) => handleChange("title", e.target.value)}
                />
              </div>

              {/* Company Name */}
              <div className="space-y-2">
                <Label htmlFor="company" className="text-foreground">Company Name *</Label>
                <Input
                  id="company"
                  placeholder="Your company name"
                  className="bg-background border-border"
                  value={formData.company}
                  onChange={(e) => handleChange("company", e.target.value)}
                />
              </div>

              {/* Location */}
              <div className="space-y-2">
                <Label htmlFor="location" className="text-foreground">Location *</Label>
                <Input
                  id="location"
                  placeholder="e.g., Dharampeth, Nagpur"
                  className="bg-background border-border"
                  value={formData.location}
                  onChange={(e) => handleChange("location", e.target.value)}
                />
              </div>

              {/* Category */}
              <div className="space-y-2">
                <Label htmlFor="category" className="text-foreground">Category *</Label>
                <Select value={formData.category} onValueChange={(value) => handleChange("category", value)}>
                  <SelectTrigger className="bg-background border-border">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Construction">Construction</SelectItem>
                    <SelectItem value="Driver">Driver</SelectItem>
                    <SelectItem value="Plumber">Plumber</SelectItem>
                    <SelectItem value="Cleaner">Cleaner</SelectItem>
                    <SelectItem value="Helper">Helper</SelectItem>
                    <SelectItem value="Electrician">Electrician</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Pay Type and Amount */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="payType" className="text-foreground">Pay Type *</Label>
                  <Select value={formData.payType} onValueChange={(value) => handleChange("payType", value)}>
                    <SelectTrigger className="bg-background border-border">
                      <SelectValue placeholder="Select pay type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="daily">Daily Wage</SelectItem>
                      <SelectItem value="monthly">Monthly Salary</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pay" className="text-foreground">Pay Amount (₹) *</Label>
                  <Input
                    id="pay"
                    type="number"
                    placeholder="e.g., 600"
                    className="bg-background border-border"
                    value={formData.pay}
                    onChange={(e) => handleChange("pay", e.target.value)}
                  />
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description" className="text-foreground">Job Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Describe the job role, requirements, and responsibilities..."
                  className="bg-background border-border min-h-[150px]"
                  value={formData.description}
                  onChange={(e) => handleChange("description", e.target.value)}
                />
              </div>

              {/* Contact */}
              <div className="space-y-2">
                <Label htmlFor="contact" className="text-foreground">Contact Number *</Label>
                <Input
                  id="contact"
                  type="tel"
                  placeholder="e.g., 9876543210"
                  className="bg-background border-border"
                  value={formData.contact}
                  onChange={(e) => handleChange("contact", e.target.value)}
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button 
                  type="submit" 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-12"
                >
                  Post Job
                </Button>
              </div>
            </form>
          </Card>

          <p className="text-sm text-muted-foreground text-center mt-6">
            By posting a job, you agree to our terms and conditions.
          </p>
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

export default PostJob;
