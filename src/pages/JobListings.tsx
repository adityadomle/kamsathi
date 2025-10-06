import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, Search, MapPin, Briefcase, SlidersHorizontal, Grid3x3 as Grid3X3, List, Zap } from 'lucide-react';
import { jobsData, categories, locations, Job } from '../data/jobsData';
import JobCard from '../components/JobCard';

const JobListings: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(jobsData);
  const [showFilters, setShowFilters] = useState(true);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isLoading, setIsLoading] = useState(false);
  
  // Filter states
  const [titleFilter, setTitleFilter] = useState(searchParams.get('title') || '');
  const [locationFilter, setLocationFilter] = useState(searchParams.get('location') || 'All Locations');
  const [categoryFilter, setCategoryFilter] = useState(searchParams.get('category') || 'All Categories');
  const [wageTypeFilter, setWageTypeFilter] = useState('All Types');
  const [sortBy, setSortBy] = useState('newest');

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      filterJobs();
      setIsLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [titleFilter, locationFilter, categoryFilter, wageTypeFilter, sortBy]);

  const filterJobs = () => {
    let filtered = [...jobsData];

    if (titleFilter) {
      filtered = filtered.filter(job => 
        job.title.toLowerCase().includes(titleFilter.toLowerCase()) ||
        job.company.toLowerCase().includes(titleFilter.toLowerCase())
      );
    }

    if (locationFilter && locationFilter !== 'All Locations') {
      filtered = filtered.filter(job => job.location === locationFilter);
    }

    if (categoryFilter && categoryFilter !== 'All Categories') {
      filtered = filtered.filter(job => job.category === categoryFilter);
    }

    if (wageTypeFilter && wageTypeFilter !== 'All Types') {
      filtered = filtered.filter(job => job.wageType === wageTypeFilter.toLowerCase());
    }

    // Sort jobs
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime();
        case 'oldest':
          return new Date(a.postedDate).getTime() - new Date(b.postedDate).getTime();
        case 'salary-high':
          const aWage = parseInt(a.wage.replace(/[^\d]/g, ''));
          const bWage = parseInt(b.wage.replace(/[^\d]/g, ''));
          return bWage - aWage;
        case 'salary-low':
          const aWageLow = parseInt(a.wage.replace(/[^\d]/g, ''));
          const bWageLow = parseInt(b.wage.replace(/[^\d]/g, ''));
          return aWageLow - bWageLow;
        default:
          return 0;
      }
    });

    setFilteredJobs(filtered);
  };

  const clearFilters = () => {
    setTitleFilter('');
    setLocationFilter('All Locations');
    setCategoryFilter('All Categories');
    setWageTypeFilter('All Types');
    setSortBy('newest');
    setSearchParams({});
  };

  const activeFiltersCount = [titleFilter, locationFilter !== 'All Locations' ? locationFilter : '', categoryFilter !== 'All Categories' ? categoryFilter : '', wageTypeFilter !== 'All Types' ? wageTypeFilter : ''].filter(Boolean).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-28">
        {/* Enhanced Header */}
        <div className="mb-12 text-center">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
              🎯 {filteredJobs.length} Jobs Available
            </span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Discover Your Next <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Opportunity</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find the perfect job that matches your skills, location, and career goals from our curated list of opportunities.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Enhanced Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 sticky top-32">
              {/* Filter Header */}
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-3">
                    <SlidersHorizontal className="h-4 w-4 text-white" />
                  </div>
                  Filters
                  {activeFiltersCount > 0 && (
                    <span className="ml-2 bg-blue-100 text-blue-600 text-xs font-bold px-2 py-1 rounded-full">
                      {activeFiltersCount}
                    </span>
                  )}
                </h2>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden text-blue-600 hover:text-blue-800 p-2 rounded-xl hover:bg-blue-50 transition-all duration-200"
                >
                  {showFilters ? 'Hide' : 'Show'}
                </button>
              </div>

              <div className={`space-y-8 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                {/* Search */}
                <div className="space-y-3">
                  <label className="block text-sm font-bold text-gray-900">
                    Job Title or Company
                  </label>
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search jobs..."
                      className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50/50 backdrop-blur-sm transition-all duration-200 hover:bg-white"
                      value={titleFilter}
                      onChange={(e) => setTitleFilter(e.target.value)}
                    />
                  </div>
                </div>

                {/* Location */}
                <div className="space-y-3">
                  <label className="block text-sm font-bold text-gray-900">
                    Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <select
                      className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50/50 backdrop-blur-sm appearance-none cursor-pointer transition-all duration-200 hover:bg-white"
                      value={locationFilter}
                      onChange={(e) => setLocationFilter(e.target.value)}
                    >
                      {locations.map((location) => (
                        <option key={location} value={location}>
                          {location}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Category */}
                <div className="space-y-3">
                  <label className="block text-sm font-bold text-gray-900">
                    Category
                  </label>
                  <div className="relative">
                    <Briefcase className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <select
                      className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50/50 backdrop-blur-sm appearance-none cursor-pointer transition-all duration-200 hover:bg-white"
                      value={categoryFilter}
                      onChange={(e) => setCategoryFilter(e.target.value)}
                    >
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Wage Type */}
                <div className="space-y-3">
                  <label className="block text-sm font-bold text-gray-900">
                    Wage Type
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {['All Types', 'Daily', 'Monthly'].map((type) => (
                      <button
                        key={type}
                        onClick={() => setWageTypeFilter(type)}
                        className={`px-4 py-3 rounded-2xl font-medium transition-all duration-200 ${
                          wageTypeFilter === type
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sort By */}
                <div className="space-y-3">
                  <label className="block text-sm font-bold text-gray-900">
                    Sort By
                  </label>
                  <select
                    className="w-full px-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50/50 backdrop-blur-sm appearance-none cursor-pointer transition-all duration-200 hover:bg-white"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                    <option value="salary-high">Salary: High to Low</option>
                    <option value="salary-low">Salary: Low to High</option>
                  </select>
                </div>

                {/* Clear Filters */}
                <button
                  onClick={clearFilters}
                  className="w-full bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-6 py-4 rounded-2xl hover:from-gray-200 hover:to-gray-300 transition-all duration-300 font-semibold transform hover:scale-105"
                >
                  Clear All Filters
                </button>
              </div>
            </div>
          </div>

          {/* Job Listings */}
          <div className="lg:w-3/4">
            {/* Results Header */}
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-lg border border-white/20 p-6 mb-8">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    {isLoading ? 'Searching...' : `${filteredJobs.length} Jobs Found`}
                  </p>
                  <p className="text-gray-600">
                    {activeFiltersCount > 0 ? `Filtered by ${activeFiltersCount} criteria` : 'Showing all available positions'}
                  </p>
                </div>
                
                {/* View Toggle */}
                <div className="flex items-center space-x-2 bg-gray-100 rounded-2xl p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-3 rounded-xl transition-all duration-200 ${
                      viewMode === 'grid'
                        ? 'bg-white text-blue-600 shadow-md'
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    <Grid3X3 className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-3 rounded-xl transition-all duration-200 ${
                      viewMode === 'list'
                        ? 'bg-white text-blue-600 shadow-md'
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    <List className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Loading State */}
            {isLoading && (
              <div className="flex justify-center items-center py-20">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-spin"></div>
                  <div className="absolute top-2 left-2 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <Zap className="h-6 w-6 text-blue-600 animate-pulse" />
                  </div>
                </div>
              </div>
            )}

            {/* Job Results */}
            {!isLoading && (
              <>
                {filteredJobs.length > 0 ? (
                  <div className={`${
                    viewMode === 'grid' 
                      ? 'grid grid-cols-1 xl:grid-cols-2 gap-8' 
                      : 'space-y-6'
                  }`}>
                    {filteredJobs.map((job, index) => (
                      <div
                        key={job.id}
                        className="animate-fadeInUp"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <JobCard job={job} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-16 text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full mx-auto mb-8 flex items-center justify-center">
                      <Search className="h-12 w-12 text-gray-400" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">No Jobs Found</h3>
                    <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
                      We couldn't find any jobs matching your criteria. Try adjusting your filters or search terms.
                    </p>
                    <button
                      onClick={clearFilters}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-2xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold"
                    >
                      Clear All Filters
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default JobListings;