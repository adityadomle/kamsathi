export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  category: string;
  payType: "daily" | "monthly";
  pay: string;
  postedDate: string;
  description: string;
  requirements: string[];
  contact: string;
}

export const jobsData: Job[] = [
  {
    id: "1",
    title: "Construction Worker",
    company: "Nagpur Builders Ltd",
    location: "Dharampeth, Nagpur",
    category: "Construction",
    payType: "daily",
    pay: "600",
    postedDate: "2 days ago",
    description: "Looking for experienced construction workers for residential building project. Must have basic knowledge of construction work and ability to work in team.",
    requirements: ["Physical fitness", "Basic construction knowledge", "Team player"],
    contact: "9876543210"
  },
  {
    id: "2",
    title: "Delivery Driver",
    company: "Express Logistics",
    location: "Sitabuldi, Nagpur",
    category: "Driver",
    payType: "monthly",
    pay: "15000",
    postedDate: "1 day ago",
    description: "Need experienced driver for delivery services. Must have valid license and good knowledge of Nagpur roads.",
    requirements: ["Valid driving license", "Good road knowledge", "Punctual"],
    contact: "9876543211"
  },
  {
    id: "3",
    title: "Plumber",
    company: "Fix-It Services",
    location: "Sadar, Nagpur",
    category: "Plumber",
    payType: "daily",
    pay: "800",
    postedDate: "3 days ago",
    description: "Experienced plumber required for residential and commercial plumbing work. Should have own basic tools.",
    requirements: ["2+ years experience", "Own tools", "Problem-solving skills"],
    contact: "9876543212"
  },
  {
    id: "4",
    title: "Office Cleaner",
    company: "Clean & Fresh Co.",
    location: "CA Road, Nagpur",
    category: "Cleaner",
    payType: "monthly",
    pay: "10000",
    postedDate: "1 week ago",
    description: "Looking for dedicated cleaner for office premises. Morning shift from 6 AM to 10 AM.",
    requirements: ["Punctual", "Attention to detail", "Trustworthy"],
    contact: "9876543213"
  },
  {
    id: "5",
    title: "Kitchen Helper",
    company: "Royal Restaurant",
    location: "Pratap Nagar, Nagpur",
    category: "Helper",
    payType: "monthly",
    pay: "12000",
    postedDate: "4 days ago",
    description: "Kitchen helper needed for busy restaurant. Will assist in food preparation, cleaning, and other kitchen tasks.",
    requirements: ["Hardworking", "Basic hygiene knowledge", "Team player"],
    contact: "9876543214"
  },
  {
    id: "6",
    title: "Painter",
    company: "Rainbow Paints",
    location: "Manish Nagar, Nagpur",
    category: "Construction",
    payType: "daily",
    pay: "700",
    postedDate: "5 days ago",
    description: "Experienced painter required for residential painting projects. Should know various painting techniques.",
    requirements: ["3+ years experience", "Knowledge of painting techniques", "Own brushes"],
    contact: "9876543215"
  }
];

export const categories = [
  { name: "Construction", count: 245 },
  { name: "Driver", count: 189 },
  { name: "Plumber", count: 132 },
  { name: "Cleaner", count: 156 },
  { name: "Helper", count: 203 },
  { name: "Electrician", count: 98 }
];

export const topCompanies = [
  { name: "Nagpur Builders Ltd", jobCount: 23 },
  { name: "Express Logistics", jobCount: 18 },
  { name: "Fix-It Services", jobCount: 15 },
  { name: "Clean & Fresh Co.", jobCount: 12 }
];
