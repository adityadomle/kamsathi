import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, MapPin, Briefcase, Users, Award, TrendingUp, Star, BarChart3, Zap, ArrowRight, Play, CheckCircle } from 'lucide-react';
import { categories, locations } from '../data/jobsData';

const Home: React.FC = () => {
  const [searchTitle, setSearchTitle] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchTitle) params.set('title', searchTitle);
    if (searchLocation && searchLocation !== 'All Locations') params.set('location', searchLocation);
    navigate(`/jobs?${params.toString()}`);
  };

  const stats = [
    { icon: Briefcase, label: 'Active Jobs', value: '1,200+', color: 'from-blue-500 to-cyan-500' },
    { icon: Users, label: 'Registered Workers', value: '5,000+', color: 'from-purple-500 to-pink-500' },
    { icon: Award, label: 'Success Rate', value: '89%', color: 'from-green-500 to-emerald-500' },
    { icon: TrendingUp, label: 'Growing Daily', value: '50+', color: 'from-orange-500 to-red-500' }
  ];

  const features = [
    {
      icon: Search,
      title: 'Smart Job Search',
      description: 'Find jobs that match your skills and location preferences with our intelligent search system.'
    },
    {
      icon: Users,
      title: 'Verified Employers',
      description: 'All employers are verified to ensure legitimate job opportunities and fair wages.'
    },
    {
      icon: CheckCircle,
      title: 'Easy Application',
      description: 'Apply to jobs with just one click and get direct contact with employers.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-orange-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-400/10 to-cyan-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Floating Cards */}
          <div className={`absolute top-10 left-10 hidden lg:block transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-all duration-500 hover:scale-105 border border-white/20">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">89%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
          </div>

          <div className={`absolute top-20 right-10 hidden lg:block transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-6 transform -rotate-2 hover:rotate-0 transition-all duration-500 hover:scale-105 border border-white/20">
              <div className="flex items-center space-x-3">
                <Star className="h-6 w-6 text-yellow-500" />
                <div>
                  <div className="text-lg font-bold text-gray-900">Construction Worker</div>
                  <div className="text-sm text-gray-600">₹600-800/day</div>
                </div>
              </div>
            </div>
          </div>

          <div className={`absolute bottom-20 left-20 hidden lg:block transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-6 transform rotate-1 hover:rotate-0 transition-all duration-500 hover:scale-105 border border-white/20">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900">Kitchen Helper</div>
                  <div className="text-sm text-gray-600">Mumbai • Full Time</div>
                </div>
              </div>
            </div>
          </div>

          <div className={`absolute bottom-10 right-20 hidden lg:block transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-6 transform -rotate-1 hover:rotate-0 transition-all duration-500 hover:scale-105 border border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">1,200+</div>
                <div className="text-sm text-gray-600 mb-3">Active Jobs</div>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl mx-auto flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          </div>

          <div className={`absolute top-32 right-32 hidden xl:block transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-6 hover:scale-105 transition-all duration-500 border border-white/20">
              <div className="text-center">
                <div className="text-sm font-bold text-gray-900 mb-3">Top Categories</div>
                <div className="flex space-x-1">
                  <div className="w-3 h-8 bg-gradient-to-t from-pink-300 to-pink-500 rounded-full animate-pulse"></div>
                  <div className="w-3 h-12 bg-gradient-to-t from-blue-300 to-blue-500 rounded-full animate-pulse delay-100"></div>
                  <div className="w-3 h-6 bg-gradient-to-t from-purple-300 to-purple-500 rounded-full animate-pulse delay-200"></div>
                  <div className="w-3 h-16 bg-gradient-to-t from-green-300 to-green-500 rounded-full animate-pulse delay-300"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className={`text-center mb-16 relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce">
                🚀 India's #1 Job Portal for Workers
              </span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-8 text-gray-900 leading-tight">
              Find Your Perfect
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
                Job Match
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Connect with thousands of verified employers across India. Whether you're a skilled worker 
              or a business owner, find the perfect match with our intelligent job platform.
            </p>

            {/* Enhanced Search Bar */}
            <div className="max-w-4xl mx-auto mb-8">
              <form onSubmit={handleSearch} className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-3 flex flex-col md:flex-row items-center gap-4 border border-white/20">
                <div className="flex-1 relative w-full">
                  <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search for jobs, companies, or skills..."
                    className="w-full pl-14 pr-6 py-4 bg-transparent border-none focus:outline-none text-gray-900 placeholder-gray-500 text-lg"
                    value={searchTitle}
                    onChange={(e) => setSearchTitle(e.target.value)}
                  />
                </div>
                
                <div className="relative w-full md:w-64">
                  <MapPin className="absolute left-6 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <select
                    className="w-full pl-14 pr-6 py-4 bg-transparent border-none focus:outline-none text-gray-900 text-lg appearance-none cursor-pointer"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                  >
                    <option value="">Select Location</option>
                    {locations.slice(1).map((location) => (
                      <option key={location} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>
                </div>
                
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-pink-600 text-white px-10 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2 w-full md:w-auto justify-center"
                >
                  <Search className="h-5 w-5" />
                  <span>Search Jobs</span>
                </button>
              </form>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/jobs"
                className="group bg-white/80 backdrop-blur-xl text-gray-700 px-8 py-4 rounded-2xl font-semibold hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2 border border-white/20"
              >
                <Briefcase className="h-5 w-5 group-hover:text-blue-600 transition-colors" />
                <span>Browse All Jobs</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/post-job"
                className="group bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-2xl font-semibold hover:from-emerald-500 hover:to-teal-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2"
              >
                <Users className="h-5 w-5" />
                <span>Hire Workers</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Stats Section */}
      <section className="py-20 bg-white/50 backdrop-blur-xl border-y border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center group cursor-pointer transition-all duration-500 delay-${index * 100}`}
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${stat.color} rounded-3xl mb-6 shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500`}>
                  <stat.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {stat.value}
                </h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">WorkConnect</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're revolutionizing how workers and employers connect across India with cutting-edge technology and human-centered design.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-xl rounded-3xl p-8 text-center hover:bg-white transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-2xl border border-white/20"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-20 bg-white/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Popular Job Categories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore opportunities across various industries and find the perfect match for your skills.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.slice(1, 11).map((category, index) => (
              <Link
                key={category}
                to={`/jobs?category=${encodeURIComponent(category)}`}
                className="group bg-white/80 backdrop-blur-xl rounded-3xl p-8 text-center hover:bg-white transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-2xl border border-white/20"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <Briefcase className="h-8 w-8 text-white" />
                </div>
                <div className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                  {category}
                </div>
                <div className="text-sm text-gray-500">50+ jobs available</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/50 to-purple-600/50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl font-bold mb-6">Ready to Transform Your Career?</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Join thousands of successful workers and employers who have found their perfect match through WorkConnect. 
            Your dream job or ideal worker is just one click away.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/jobs"
              className="group bg-white text-blue-600 px-10 py-5 rounded-3xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-3"
            >
              <Search className="h-6 w-6" />
              <span>Find Jobs Now</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="/post-job"
              className="group bg-gray-900 text-white px-10 py-5 rounded-3xl font-bold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-3"
            >
              <Users className="h-6 w-6" />
              <span>Hire Workers</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;