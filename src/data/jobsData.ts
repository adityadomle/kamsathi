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
    company: 'Bhole Construction',
    location: 'Mahal, Nagpur',
    category: 'Construction',
    wageType: 'daily',
    wage: '₹500-700',
    description: 'Looking for experienced construction workers for local housing projects around Mahal.',
    requirements: ['2+ years experience', 'Physical fitness', 'Basic cement work knowledge'],
    postedDate: '2025-01-20',
    contactPhone: '+91 98765 11111'
  },
  {
    id: '2',
    title: 'Kitchen Helper',
    company: 'Orange City Restaurant',
    location: 'Dharampeth, Nagpur',
    category: 'Restaurant',
    wageType: 'monthly',
    wage: '₹14,000-17,000',
    description: 'Kitchen helper needed for a busy restaurant in Dharampeth. Must maintain hygiene and assist chef.',
    requirements: ['Experience preferred', 'Shift flexibility', 'Cleanliness'],
    postedDate: '2025-01-19',
    contactPhone: '+91 98765 22222'
  },
  {
    id: '3',
    title: 'Painter',
    company: 'Color House',
    location: 'Manewada, Nagpur',
    category: 'Painting',
    wageType: 'daily',
    wage: '₹600-800',
    description: 'Painter needed for home interiors and exteriors in Manewada area.',
    requirements: ['3+ years experience', 'Knowledge of paint types'],
    postedDate: '2025-01-18',
    contactPhone: '+91 98765 33333'
  },
  {
    id: '4',
    title: 'Shop Assistant',
    company: 'Om General Store',
    location: 'Sadar, Nagpur',
    category: 'Retail',
    wageType: 'monthly',
    wage: '₹12,000-14,000',
    description: 'Shop helper needed for a busy store in Sadar area.',
    requirements: ['Customer interaction skills', 'Basic math'],
    postedDate: '2025-01-17',
    contactPhone: '+91 98765 44444'
  },
  {
    id: '5',
    title: 'Electrician',
    company: 'Vijay Electricals',
    location: 'Wardha Road, Nagpur',
    category: 'Electrical',
    wageType: 'daily',
    wage: '₹700-900',
    description: 'Experienced electrician for home and office wiring near Wardha Road.',
    requirements: ['License', '3+ years experience'],
    postedDate: '2025-01-16',
    contactPhone: '+91 98765 55555'
  },
  {
    id: '6',
    title: 'Cleaner',
    company: 'CleanPro Services',
    location: 'Sitabuldi, Nagpur',
    category: 'Cleaning',
    wageType: 'monthly',
    wage: '₹10,000-12,000',
    description: 'Office cleaning staff required for Sitabuldi commercial area.',
    requirements: ['Experience preferred', 'Punctuality'],
    postedDate: '2025-01-15',
    contactPhone: '+91 98765 66666'
  },
  {
    id: '7',
    title: 'Plumber',
    company: 'FixPro Services',
    location: 'Pratap Nagar, Nagpur',
    category: 'Plumbing',
    wageType: 'daily',
    wage: '₹800-1000',
    description: 'Plumber needed for residential repairs in Pratap Nagar.',
    requirements: ['Experience required', 'Own tools preferred'],
    postedDate: '2025-01-14',
    contactPhone: '+91 98765 77777'
  },
  {
    id: '8',
    title: 'Security Guard',
    company: 'SafeCity Guards',
    location: 'Civil Lines, Nagpur',
    category: 'Security',
    wageType: 'monthly',
    wage: '₹18,000-22,000',
    description: 'Security guard needed for night shifts in Civil Lines residential complexes.',
    requirements: ['Experience', 'Fitness'],
    postedDate: '2025-01-13',
    contactPhone: '+91 98765 88888'
  },
  {
    id: '9',
    title: 'Delivery Boy',
    company: 'QuickDrop Express',
    location: 'Manish Nagar, Nagpur',
    category: 'Delivery',
    wageType: 'monthly',
    wage: '₹15,000-18,000',
    description: 'Delivery executive required for local deliveries around Manish Nagar.',
    requirements: ['Bike and license', 'Area knowledge'],
    postedDate: '2025-01-12',
    contactPhone: '+91 98765 99999'
  },
  {
    id: '10',
    title: 'Mechanic',
    company: 'AutoFix Garage',
    location: 'Jaripatka, Nagpur',
    category: 'Mechanic',
    wageType: 'daily',
    wage: '₹700-900',
    description: 'Auto mechanic needed for car and bike repairs in Jaripatka area.',
    requirements: ['3+ years experience', 'Basic tools'],
    postedDate: '2025-01-11',
    contactPhone: '+91 91234 56789'
  },
  {
    id: '11',
    title: 'Tailor',
    company: 'Elegant Stitch',
    location: 'Ramdaspeth, Nagpur',
    category: 'Tailoring',
    wageType: 'monthly',
    wage: '₹13,000-17,000',
    description: 'Tailor needed for custom clothing and alterations.',
    requirements: ['Machine operation', 'Experience required'],
    postedDate: '2025-01-10',
    contactPhone: '+91 90123 45678'
  },
  {
    id: '12',
    title: 'Carpenter',
    company: 'Nagpur Wood Works',
    location: 'Besa, Nagpur',
    category: 'Carpentry',
    wageType: 'daily',
    wage: '₹600-800',
    description: 'Carpenter needed for furniture work in Besa area.',
    requirements: ['Experience', 'Own tools'],
    postedDate: '2025-01-09',
    contactPhone: '+91 90909 80808'
  },
  {
    id: '13',
    title: 'Waiter',
    company: 'Hotel Aroma',
    location: 'Sitabardi, Nagpur',
    category: 'Restaurant',
    wageType: 'monthly',
    wage: '₹13,000-15,000',
    description: 'Waiter needed for restaurant in Sitabardi.',
    requirements: ['Good communication', 'Shift flexibility'],
    postedDate: '2025-01-08',
    contactPhone: '+91 90000 70707'
  },
  {
    id: '14',
    title: 'Gardener',
    company: 'Green Touch Services',
    location: 'Civil Lines, Nagpur',
    category: 'Gardening',
    wageType: 'monthly',
    wage: '₹11,000-13,000',
    description: 'Gardener needed for bungalow and park maintenance.',
    requirements: ['Plant knowledge', 'Outdoor work fitness'],
    postedDate: '2025-01-07',
    contactPhone: '+91 98888 67676'
  },
  {
    id: '15',
    title: 'Driver',
    company: 'Orange City Cabs',
    location: 'Trimurti Nagar, Nagpur',
    category: 'Driving',
    wageType: 'monthly',
    wage: '₹18,000-22,000',
    description: 'Driver required for local cab service.',
    requirements: ['License', 'City knowledge'],
    postedDate: '2025-01-06',
    contactPhone: '+91 97777 56565'
  },
  {
    id: '16',
    title: 'Mason',
    company: 'BuildRight Works',
    location: 'Hudkeshwar, Nagpur',
    category: 'Construction',
    wageType: 'daily',
    wage: '₹550-750',
    description: 'Mason required for housing projects in Hudkeshwar.',
    requirements: ['Experience', 'Strength'],
    postedDate: '2025-01-05',
    contactPhone: '+91 96666 45454'
  },
  {
    id: '17',
    title: 'Barber',
    company: 'Classic Cuts',
    location: 'Dhantoli, Nagpur',
    category: 'Beauty',
    wageType: 'monthly',
    wage: '₹14,000-18,000',
    description: 'Barber required for men\'s salon in Dhantoli.',
    requirements: ['Experience', 'Modern styles knowledge'],
    postedDate: '2025-01-04',
    contactPhone: '+91 95555 34343'
  },
  {
    id: '18',
    title: 'Welder',
    company: 'Metal Craft',
    location: 'MIDC Hingna, Nagpur',
    category: 'Welding',
    wageType: 'daily',
    wage: '₹800-1000',
    description: 'Welder needed for industrial work in Hingna MIDC area.',
    requirements: ['Certification', 'Safety knowledge'],
    postedDate: '2025-01-03',
    contactPhone: '+91 94444 23232'
  },
  {
    id: '19',
    title: 'Cashier',
    company: 'Mega Mart',
    location: 'Itwari, Nagpur',
    category: 'Retail',
    wageType: 'monthly',
    wage: '₹13,000-15,000',
    description: 'Cashier needed for Mega Mart outlet at Itwari.',
    requirements: ['Cash handling', 'POS knowledge'],
    postedDate: '2025-01-02',
    contactPhone: '+91 93333 12121'
  },
  {
    id: '20',
    title: 'Housekeeping Staff',
    company: 'Sparkle Cleaners',
    location: 'Dharampeth, Nagpur',
    category: 'Cleaning',
    wageType: 'monthly',
    wage: '₹11,000-13,000',
    description: 'Housekeeping staff needed for flats and offices in Dharampeth.',
    requirements: ['Experience preferred', 'Reliable'],
    postedDate: '2025-01-01',
    contactPhone: '+91 92222 01010'
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
  'Mahal, Nagpur',
  'Dharampeth, Nagpur',
  'Sadar, Nagpur',
  'Sitabuldi, Nagpur',
  'Manish Nagar, Nagpur',
  'Trimurti Nagar, Nagpur',
  'Civil Lines, Nagpur',
  'Hudkeshwar, Nagpur',
  'Jaripatka, Nagpur',
  'MIDC Hingna, Nagpur',
  'Besa, Nagpur'
];
