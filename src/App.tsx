import { useState } from 'react';
import { MapPin, Search, Briefcase, TrendingUp, CheckCircle, Phone, Mail, MapPinIcon, Linkedin, Twitter } from 'lucide-react';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  pay: number;
  wageType: 'daily' | 'monthly';
  category: string;
}

const jobsData: Job[] = [
  { id: 1, title: 'Construction Worker', company: 'Shri Ram Builders', location: 'Mahal', pay: 600, wageType: 'daily', category: 'Construction' },
  { id: 2, title: 'Home Cleaner', company: 'Clean Home Services', location: 'Dharampeth', pay: 8000, wageType: 'monthly', category: 'Cleaner' },
  { id: 3, title: 'Delivery Driver', company: 'Quick Transport', location: 'Sitabuldi', pay: 700, wageType: 'daily', category: 'Driver' },
  { id: 4, title: 'Electrician', company: 'Power Tech Solutions', location: 'Manish Nagar', pay: 12000, wageType: 'monthly', category: 'Electrician' },
  { id: 5, title: 'Painter', company: 'Color Plus', location: 'Jaripatka', pay: 650, wageType: 'daily', category: 'Painter' },
  { id: 6, title: 'Plumber', company: 'Aqua Fix Services', location: 'Mahal', pay: 10000, wageType: 'monthly', category: 'Plumber' },
  { id: 7, title: 'Office Helper', company: 'City Office Complex', location: 'Dharampeth', pay: 7500, wageType: 'monthly', category: 'Helper' },
  { id: 8, title: 'Site Supervisor', company: 'Mega Construction', location: 'Sitabuldi', pay: 800, wageType: 'daily', category: 'Construction' },
  { id: 9, title: 'Auto Driver', company: 'City Auto Stand', location: 'Jaripatka', pay: 600, wageType: 'daily', category: 'Driver' },
  { id: 10, title: 'Helper (Shop)', company: 'Ganesh Kirana Store', location: 'Manish Nagar', pay: 6500, wageType: 'monthly', category: 'Helper' },
  { id: 11, title: 'Mason', company: 'Vishwakarma Builders', location: 'Dharampeth', pay: 750, wageType: 'daily', category: 'Construction' },
  { id: 12, title: 'Warehouse Helper', company: 'Storage Solutions', location: 'Jaripatka', pay: 8500, wageType: 'monthly', category: 'Helper' },
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedWageType, setSelectedWageType] = useState<'all' | 'daily' | 'monthly'>('all');
  const [filtersOpen, setFiltersOpen] = useState(false);

  const locations = ['Mahal', 'Dharampeth', 'Sitabuldi', 'Manish Nagar', 'Jaripatka'];
  const categories = ['Construction', 'Driver', 'Cleaner', 'Painter', 'Helper', 'Plumber', 'Electrician'];

  const filteredJobs = jobsData.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = !selectedLocation || job.location === selectedLocation;
    const matchesCategory = !selectedCategory || job.category === selectedCategory;
    const matchesWageType = selectedWageType === 'all' || job.wageType === selectedWageType;

    return matchesSearch && matchesLocation && matchesCategory && matchesWageType;
  });

  return (
    <div className="min-h-screen bg-[#0C0C0E] text-white font-['Outfit',sans-serif] flex flex-col">
      <header className="bg-gradient-to-b from-[#161619] to-[#0C0C0E] border-b border-gray-800/50 py-6 px-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-[#FACC15] p-2 rounded-lg">
              <Briefcase className="w-5 h-5 text-black" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">KaamSathi</h1>
              <p className="text-xs text-gray-400">Nagpur's Local Job Portal</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <span className="text-gray-400">{filteredJobs.length} Active Jobs</span>
            <button className="bg-[#FACC15] text-black px-6 py-2 rounded font-medium text-sm hover:bg-yellow-300 transition">
              Post Job
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8 w-full flex-1">
        <button
          className="lg:hidden mb-6 text-sm bg-[#FACC15] text-black px-4 py-2.5 rounded font-medium"
          onClick={() => setFiltersOpen(!filtersOpen)}
        >
          {filtersOpen ? 'Hide Filters' : 'Show Filters'}
        </button>

        <div className="flex flex-col lg:flex-row gap-8">
          <aside className={`${filtersOpen ? 'block' : 'hidden'} lg:block w-full lg:w-72 flex-shrink-0`}>
            <div className="bg-gradient-to-b from-[#161619] to-[#0C0C0E] rounded-lg p-6 border border-gray-800/50 sticky top-28">
              <h3 className="text-lg font-bold mb-5 flex items-center gap-2">
                <Search className="w-4 h-4 text-[#FACC15]" />
                Filters
              </h3>

              <div className="mb-5">
                <label className="block text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wide">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                  <input
                    type="text"
                    placeholder="Job title or company..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-[#0C0C0E] border border-gray-700/50 rounded-lg px-3 py-2.5 pl-10 text-sm focus:outline-none focus:border-[#FACC15]/50 transition"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label className="block text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wide">Location</label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full bg-[#0C0C0E] border border-gray-700/50 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#FACC15]/50 transition"
                >
                  <option value="">All Locations</option>
                  {locations.map(loc => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>

              <div className="mb-5">
                <label className="block text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wide">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full bg-[#0C0C0E] border border-gray-700/50 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#FACC15]/50 transition"
                >
                  <option value="">All Categories</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wide">Wage Type</label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedWageType('all')}
                    className={`flex-1 py-2 text-xs font-medium rounded-lg border transition ${
                      selectedWageType === 'all'
                        ? 'bg-[#FACC15] text-black border-[#FACC15]'
                        : 'bg-[#0C0C0E] text-gray-300 border-gray-700/50 hover:border-gray-600'
                    }`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setSelectedWageType('daily')}
                    className={`flex-1 py-2 text-xs font-medium rounded-lg border transition ${
                      selectedWageType === 'daily'
                        ? 'bg-[#FACC15] text-black border-[#FACC15]'
                        : 'bg-[#0C0C0E] text-gray-300 border-gray-700/50 hover:border-gray-600'
                    }`}
                  >
                    Daily
                  </button>
                  <button
                    onClick={() => setSelectedWageType('monthly')}
                    className={`flex-1 py-2 text-xs font-medium rounded-lg border transition ${
                      selectedWageType === 'monthly'
                        ? 'bg-[#FACC15] text-black border-[#FACC15]'
                        : 'bg-[#0C0C0E] text-gray-300 border-gray-700/50 hover:border-gray-600'
                    }`}
                  >
                    Monthly
                  </button>
                </div>
              </div>

              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedLocation('');
                  setSelectedCategory('');
                  setSelectedWageType('all');
                }}
                className="w-full bg-[#FACC15] text-black py-2.5 rounded-lg text-sm font-bold hover:bg-yellow-300 transition"
              >
                Clear Filters
              </button>
            </div>
          </aside>

          <main className="flex-1">
            <div className="mb-8">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h2 className="text-3xl font-bold">Available Jobs in Nagpur</h2>
                  <p className="text-gray-400 mt-2">Find verified local opportunities near you</p>
                </div>
                <div className="bg-gradient-to-br from-[#FACC15] to-yellow-500 text-black px-4 py-2 rounded-lg text-sm font-bold">
                  {filteredJobs.length} Found
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {filteredJobs.map(job => (
                <div
                  key={job.id}
                  className="group bg-gradient-to-br from-[#1a1a1d] to-[#0C0C0E] border border-gray-800/50 rounded-lg p-5 h-44 flex flex-col justify-between hover:border-gray-700 transition"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="font-bold text-lg">{job.title}</h3>
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                    </div>
                    <p className="text-xs text-gray-400 mb-3">{job.company}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-300 bg-[#0C0C0E] w-fit px-2.5 py-1.5 rounded">
                      <MapPin className="w-3.5 h-3.5 text-[#FACC15]" />
                      <span>{job.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-800/30">
                    <div>
                      <div className="text-xl font-bold text-[#FACC15]">₹{job.pay.toLocaleString()}</div>
                      <span className="text-xs text-gray-400">
                        {job.wageType === 'daily' ? 'per day' : 'per month'}
                      </span>
                    </div>
                    <button className="bg-[#FACC15] text-black px-6 py-2 rounded-lg text-sm font-bold hover:bg-yellow-300 transition">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <div className="text-center py-20 text-gray-400">
                <Briefcase className="w-16 h-16 mx-auto mb-4 opacity-30" />
                <p className="text-lg mb-4">No jobs found matching your filters.</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedLocation('');
                    setSelectedCategory('');
                    setSelectedWageType('all');
                  }}
                  className="bg-[#FACC15] text-black px-6 py-2 rounded-lg font-medium hover:bg-yellow-300 transition inline-block"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>

      <footer className="bg-[#0C0C0E] border-t border-gray-800/50 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-[#FACC15] p-2 rounded-lg">
                  <Briefcase className="w-5 h-5 text-black" />
                </div>
                <h4 className="font-bold text-lg">KaamSathi</h4>
              </div>
              <p className="text-sm text-gray-400">Your trusted local job portal in Nagpur connecting workers with opportunities.</p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-[#FACC15] transition">Browse Jobs</a></li>
                <li><a href="#" className="hover:text-[#FACC15] transition">Post a Job</a></li>
                <li><a href="#" className="hover:text-[#FACC15] transition">For Companies</a></li>
                <li><a href="#" className="hover:text-[#FACC15] transition">How It Works</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-[#FACC15] transition">Help Center</a></li>
                <li><a href="#" className="hover:text-[#FACC15] transition">Safety Tips</a></li>
                <li><a href="#" className="hover:text-[#FACC15] transition">Contact Us</a></li>
                <li><a href="#" className="hover:text-[#FACC15] transition">Report Issue</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Contact</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#FACC15]" />
                  <a href="tel:+919999999999" className="hover:text-[#FACC15] transition">+91 9999 999 999</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#FACC15]" />
                  <a href="mailto:support@kaamsathi.com" className="hover:text-[#FACC15] transition">support@kaamsathi.com</a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPinIcon className="w-4 h-4 text-[#FACC15]" />
                  <span>Nagpur, Maharashtra</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800/50 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-gray-500 text-center md:text-left">
                2024 KaamSathi. All rights reserved. Connecting workers with opportunities.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="text-gray-400 hover:text-[#FACC15] transition">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#FACC15] transition">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#FACC15] transition">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
