export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  category: string;
  wageType: 'daily' | 'monthly';
  wage: string;
  description: string;
  requirements: string[];
  postedDate: string;
  contactPhone?: string;
}

export const jobsData: Job[] = [
  {
    id: '1',
    title: 'Construction Worker',
    company: 'Sharma Construction',
    location: 'Delhi',
    category: 'Construction',
    wageType: 'daily',
    wage: '₹500-700',
    description: 'Looking for experienced construction workers for residential building project. Must have basic knowledge of cement work and brick laying.',
    requirements: ['2+ years experience', 'Physical fitness required', 'Basic cement work knowledge'],
    postedDate: '2025-01-20',
    contactPhone: '+91 98765 43210'
  },
  {
    id: '2',
    title: 'Kitchen Helper',
    company: 'Raj Restaurant',
    location: 'Mumbai',
    category: 'Restaurant',
    wageType: 'monthly',
    wage: '₹15,000-18,000',
    description: 'Need kitchen helper for busy restaurant. Duties include cleaning, food preparation assistance, and maintaining kitchen hygiene.',
    requirements: ['Food handling experience preferred', 'Willingness to work in shifts', 'Basic hygiene knowledge'],
    postedDate: '2025-01-19',
    contactPhone: '+91 87654 32109'
  },
  {
    id: '3',
    title: 'Painter',
    company: 'Colors & Co',
    location: 'Bangalore',
    category: 'Painting',
    wageType: 'daily',
    wage: '₹600-800',
    description: 'Experienced painter needed for residential and commercial painting projects. Must know different painting techniques.',
    requirements: ['3+ years painting experience', 'Own basic tools preferred', 'Knowledge of different paint types'],
    postedDate: '2025-01-18',
    contactPhone: '+91 76543 21098'
  },
  {
    id: '4',
    title: 'Shop Assistant',
    company: 'General Store Pvt',
    location: 'Chennai',
    category: 'Retail',
    wageType: 'monthly',
    wage: '₹12,000-15,000',
    description: 'Looking for shop assistant to help with customer service, inventory management, and daily shop operations.',
    requirements: ['Basic math skills', 'Customer service experience', 'Local language fluency'],
    postedDate: '2025-01-17',
    contactPhone: '+91 65432 10987'
  },
  {
    id: '5',
    title: 'Electrician',
    company: 'Power Solutions',
    location: 'Pune',
    category: 'Electrical',
    wageType: 'daily',
    wage: '₹700-900',
    description: 'Licensed electrician needed for residential electrical work. Must be able to handle wiring, repairs, and installations.',
    requirements: ['Electrical license required', '5+ years experience', 'Safety certification preferred'],
    postedDate: '2025-01-16',
    contactPhone: '+91 54321 09876'
  },
  {
    id: '6',
    title: 'Cleaner',
    company: 'Clean Tech Services',
    location: 'Kolkata',
    category: 'Cleaning',
    wageType: 'monthly',
    wage: '₹10,000-12,000',
    description: 'Office cleaning staff needed for corporate building. Must maintain cleanliness and follow hygiene protocols.',
    requirements: ['Previous cleaning experience', 'Punctual and reliable', 'Basic hygiene knowledge'],
    postedDate: '2025-01-15',
    contactPhone: '+91 43210 98765'
  },
  {
    id: '7',
    title: 'Plumber',
    company: 'Fix-It Services',
    location: 'Hyderabad',
    category: 'Plumbing',
    wageType: 'daily',
    wage: '₹800-1000',
    description: 'Experienced plumber needed for residential and commercial plumbing work. Must handle pipe installations, repairs, and maintenance work.',
    requirements: ['Plumbing experience required', 'Own tools preferred', 'Knowledge of modern fixtures'],
    postedDate: '2025-01-14',
    contactPhone: '+91 32109 87654'
  },
  {
    id: '8',
    title: 'Security Guard',
    company: 'Safe Guard Security',
    location: 'Delhi',
    category: 'Security',
    wageType: 'monthly',
    wage: '₹18,000-22,000',
    description: 'Night shift security guard needed for residential complex. Must be alert, responsible, and able to handle emergency situations.',
    requirements: ['Previous security experience', 'Night shift availability', 'Physical fitness required'],
    postedDate: '2025-01-13',
    contactPhone: '+91 21098 76543'
  },
  {
    id: '9',
    title: 'Delivery Boy',
    company: 'Quick Delivery Co',
    location: 'Mumbai',
    category: 'Delivery',
    wageType: 'monthly',
    wage: '₹16,000-20,000',
    description: 'Delivery executive needed for food and package delivery. Must have own vehicle and know local routes well.',
    requirements: ['Own two-wheeler required', 'Valid driving license', 'Local area knowledge'],
    postedDate: '2025-01-12',
    contactPhone: '+91 10987 65432'
  },
  {
    id: '10',
    title: 'Mechanic',
    company: 'Auto Repair Shop',
    location: 'Pune',
    category: 'Mechanic',
    wageType: 'daily',
    wage: '₹700-900',
    description: 'Auto mechanic needed for car and motorcycle repairs. Must have experience with engine work and general maintenance.',
    requirements: ['3+ years mechanic experience', 'Knowledge of various vehicle types', 'Own basic tools'],
    postedDate: '2025-01-11',
    contactPhone: '+91 09876 54321'
  },
  {
    id: '11',
    title: 'Tailor',
    company: 'Fashion Point',
    location: 'Jaipur',
    category: 'Tailoring',
    wageType: 'monthly',
    wage: '₹14,000-18,000',
    description: 'Experienced tailor needed for clothing alterations and custom stitching. Must be skilled in both hand and machine sewing.',
    requirements: ['Tailoring experience required', 'Machine operation skills', 'Attention to detail'],
    postedDate: '2025-01-10',
    contactPhone: '+91 98765 43210'
  },
  {
    id: '12',
    title: 'Carpenter',
    company: 'Wood Works Ltd',
    location: 'Bangalore',
    category: 'Carpentry',
    wageType: 'daily',
    wage: '₹600-800',
    description: 'Skilled carpenter needed for furniture making and repair work. Must be able to work with different types of wood and tools.',
    requirements: ['Carpentry experience required', 'Knowledge of wood types', 'Own hand tools preferred'],
    postedDate: '2025-01-09',
    contactPhone: '+91 87654 32109'
  },
  {
    id: '13',
    title: 'Waiter',
    company: 'Grand Hotel',
    location: 'Chennai',
    category: 'Restaurant',
    wageType: 'monthly',
    wage: '₹13,000-16,000',
    description: 'Waiter needed for busy hotel restaurant. Must have good communication skills and be able to work in fast-paced environment.',
    requirements: ['Restaurant experience preferred', 'Good communication skills', 'Willingness to work shifts'],
    postedDate: '2025-01-08',
    contactPhone: '+91 76543 21098'
  },
  {
    id: '14',
    title: 'Gardener',
    company: 'Green Spaces',
    location: 'Kolkata',
    category: 'Gardening',
    wageType: 'monthly',
    wage: '₹11,000-14,000',
    description: 'Gardener needed for maintaining residential and commercial gardens. Must know plant care, watering, and basic landscaping.',
    requirements: ['Gardening experience required', 'Knowledge of plants', 'Physical fitness for outdoor work'],
    postedDate: '2025-01-07',
    contactPhone: '+91 65432 10987'
  },
  {
    id: '15',
    title: 'Driver',
    company: 'City Cab Services',
    location: 'Delhi',
    category: 'Driving',
    wageType: 'monthly',
    wage: '₹20,000-25,000',
    description: 'Professional driver needed for taxi service. Must have clean driving record and good knowledge of city routes.',
    requirements: ['Valid driving license', 'Clean driving record', 'City route knowledge', '5+ years driving experience'],
    postedDate: '2025-01-06',
    contactPhone: '+91 54321 09876'
  },
  {
    id: '16',
    title: 'Mason',
    company: 'Build Right Construction',
    location: 'Ahmedabad',
    category: 'Construction',
    wageType: 'daily',
    wage: '₹550-750',
    description: 'Experienced mason needed for brick laying and concrete work. Must be skilled in construction techniques and safety protocols.',
    requirements: ['Masonry experience required', 'Knowledge of construction safety', 'Physical strength required'],
    postedDate: '2025-01-05',
    contactPhone: '+91 43210 98765'
  },
  {
    id: '17',
    title: 'Barber',
    company: 'Style Cut Salon',
    location: 'Mumbai',
    category: 'Beauty',
    wageType: 'monthly',
    wage: '₹15,000-20,000',
    description: 'Skilled barber needed for men\'s salon. Must be proficient in various haircut styles and grooming services.',
    requirements: ['Barber training certificate', 'Experience with modern styles', 'Customer service skills'],
    postedDate: '2025-01-04',
    contactPhone: '+91 32109 87654'
  },
  {
    id: '18',
    title: 'Welder',
    company: 'Metal Works Factory',
    location: 'Pune',
    category: 'Welding',
    wageType: 'daily',
    wage: '₹800-1200',
    description: 'Certified welder needed for metal fabrication work. Must be skilled in arc welding and safety procedures.',
    requirements: ['Welding certification required', 'Safety training completed', 'Experience with different metals'],
    postedDate: '2025-01-03',
    contactPhone: '+91 21098 76543'
  },
  {
    id: '19',
    title: 'Cashier',
    company: 'Super Market Chain',
    location: 'Bangalore',
    category: 'Retail',
    wageType: 'monthly',
    wage: '₹14,000-17,000',
    description: 'Cashier needed for busy supermarket. Must be good with numbers and have basic computer skills for POS system.',
    requirements: ['Basic math skills', 'Computer literacy', 'Customer service experience', 'Cash handling experience'],
    postedDate: '2025-01-02',
    contactPhone: '+91 10987 65432'
  },
  {
    id: '20',
    title: 'Housekeeping Staff',
    company: 'Clean Home Services',
    location: 'Chennai',
    category: 'Cleaning',
    wageType: 'monthly',
    wage: '₹12,000-15,000',
    description: 'Housekeeping staff needed for residential cleaning services. Must maintain high standards of cleanliness and hygiene.',
    requirements: ['Cleaning experience preferred', 'Attention to detail', 'Reliable and trustworthy'],
    postedDate: '2025-01-01',
    contactPhone: '+91 09876 54321'
  }
];

export const categories = [
  'All Categories',
  'Construction',
  'Restaurant',
  'Painting',
  'Retail',
  'Electrical',
  'Cleaning',
  'Plumbing',
  'Mechanic',
  'Security',
  'Delivery',
  'Tailoring',
  'Carpentry',
  'Gardening',
  'Driving',
  'Beauty',
  'Welding'
];

export const locations = [
  'All Locations',
  'Delhi',
  'Mumbai',
  'Bangalore',
  'Chennai',
  'Pune',
  'Kolkata',
  'Hyderabad',
  'Ahmedabad',
  'Jaipur'
];