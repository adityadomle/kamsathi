import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  MapPin, 
  Calendar, 
  IndianRupee, 
  Building2, 
  Phone, 
  ArrowLeft,
  CheckCircle,
  Clock,
  Users,
  Star,
  Share2,
  Bookmark,
  Eye,
  Award,
  Shield,
  Zap
} from 'lucide-react';
import { jobsData } from '../data/jobsData';

const JobDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const job = jobsData.find(j => j.id === id);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showApplyModal, setShowApplyModal] = useState(false);

  if (!job) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center bg-white/90 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/20">
          <div className="w-24 h-24 bg-gradient-to-br from-red-100 to-red-200 rounded-full mx-auto mb-6 flex items-center justify-center">
            <Eye className="h-12 w-12 text-red-500" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Job Not Found</h2>
          <p className="text-gray-600 mb-8 text-lg">The job you're looking for doesn't exist or has been removed.</p>
          <Link
            to="/jobs"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold"
          >
            Browse All Jobs
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const handleApply = () => {
    setShowApplyModal(true);
  };

  const handleDirectCall = () => {
    if (job.contactPhone) {
      window.open(`tel:${job.contactPhone}`, '_self');
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: job.title,
        text: `Check out this job: ${job.title} at ${job.company}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Job link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-28">
        {/* Back Button */}
        <Link
          to="/jobs"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-all duration-300 bg-white/80 backdrop-blur-xl px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 border border-white/20"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          <span className="font-semibold">Back to Jobs</span>
        </Link>

        {/* Job Header */}
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 mb-8 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
              <div className="flex-1">
                {/* Company Badge */}
                <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-2xl mb-4">
                  <Building2 className="h-4 w-4" />
                  <span className="font-semibold">{job.company}</span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-3 w-3 text-yellow-500 fill-current" />
                    <span className="text-xs">4.5</span>
                  </div>
                </div>

                {/* Job Title */}
                <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">{job.title}</h1>
                
                {/* Job Meta Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="font-semibold text-gray-900">{job.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                      <IndianRupee className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Salary</p>
                      <p className="font-semibold text-green-600 text-lg">{job.wage}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Type</p>
                      <p className="font-semibold text-gray-900 capitalize">{job.wageType}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Posted</p>
                      <p className="font-semibold text-gray-900">{formatDate(job.postedDate)}</p>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-3">
                  <span className={`px-4 py-2 rounded-2xl text-sm font-semibold ${
                    job.wageType === 'daily' 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'bg-green-100 text-green-700'
                  }`}>
                    {job.wageType === 'daily' ? 'Daily Wage' : 'Monthly Salary'}
                  </span>
                  
                  <span className="px-4 py-2 rounded-2xl text-sm font-semibold bg-purple-100 text-purple-700">
                    {job.category}
                  </span>

                  <span className="px-4 py-2 rounded-2xl text-sm font-semibold bg-orange-100 text-orange-700 flex items-center space-x-1">
                    <Zap className="h-3 w-3" />
                    <span>Quick Apply</span>
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="lg:ml-8 flex flex-col space-y-4 min-w-[200px]">
                <button
                  onClick={handleApply}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>Apply Now</span>
                </button>
                
                <div className="flex space-x-2">
                  <button
                    onClick={() => setIsBookmarked(!isBookmarked)}
                    className={`flex-1 px-4 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                      isBookmarked
                        ? 'bg-blue-100 text-blue-600 border border-blue-200'
                        : 'bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                    }`}
                  >
                    <Bookmark className={`h-5 w-5 mx-auto ${isBookmarked ? 'fill-current' : ''}`} />
                  </button>
                  
                  <button
                    onClick={handleShare}
                    className="flex-1 px-4 py-3 rounded-2xl font-semibold bg-gray-100 text-gray-600 hover:bg-green-50 hover:text-green-600 transition-all duration-300 transform hover:scale-105"
                  >
                    <Share2 className="h-5 w-5 mx-auto" />
                  </button>
                </div>
                
                <p className="text-xs text-gray-500 text-center">
                  Click Apply to contact employer directly
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Job Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Job Description */}
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-lg border border-white/20 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-3">
                  <Eye className="h-4 w-4 text-white" />
                </div>
                Job Description
              </h2>
              <div className="prose prose-lg text-gray-700 leading-relaxed">
                <p>{job.description}</p>
              </div>
            </div>

            {/* Requirements */}
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-lg border border-white/20 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-3">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                Requirements
              </h2>
              <div className="space-y-4">
                {job.requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-colors duration-200">
                    <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Company Info */}
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-lg border border-white/20 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-3">
                  <Building2 className="h-4 w-4 text-white" />
                </div>
                About {job.company}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-2xl">
                  <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">Employees</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-2xl">
                  <Award className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">4.5</div>
                  <div className="text-sm text-gray-600">Rating</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-2xl">
                  <Shield className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">100%</div>
                  <div className="text-sm text-gray-600">Verified</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* Quick Apply Card */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white shadow-2xl">
              <h3 className="text-xl font-bold mb-4">Ready to Apply?</h3>
              <p className="text-blue-100 mb-6 text-sm">
                Don't miss out on this opportunity. Apply now and get direct contact with the employer.
              </p>
              <button
                onClick={handleApply}
                className="w-full bg-white text-blue-600 px-6 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Apply for this Job
              </button>
            </div>

            {/* Job Summary */}
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-lg border border-white/20 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Job Summary</h3>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600 font-medium">Company</span>
                  <span className="font-bold text-gray-900">{job.company}</span>
                </div>
                
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600 font-medium">Location</span>
                  <span className="font-bold text-gray-900">{job.location}</span>
                </div>
                
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600 font-medium">Category</span>
                  <span className="font-bold text-gray-900">{job.category}</span>
                </div>
                
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600 font-medium">Salary</span>
                  <span className="font-bold text-green-600">{job.wage}</span>
                </div>
                
                <div className="flex items-center justify-between py-3">
                  <span className="text-gray-600 font-medium">Posted</span>
                  <span className="font-bold text-gray-900">{formatDate(job.postedDate)}</span>
                </div>
              </div>
            </div>

            {/* Application Tips */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl border border-green-200 p-8">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-green-900 mb-3">Application Tips</h4>
                  <ul className="text-sm text-green-800 space-y-2">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Call during business hours (9 AM - 6 PM)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Be prepared to discuss your experience</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Ask about work schedule and requirements</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Have your documents ready</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Apply Modal */}
      {showApplyModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl transform transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Apply for this Job</h3>
              <p className="text-gray-600">Choose how you'd like to apply</p>
            </div>
            
            <div className="space-y-4">
              <button
                onClick={handleDirectCall}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-2xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Call {job.contactPhone}</span>
              </button>
              
              <button
                onClick={() => setShowApplyModal(false)}
                className="w-full bg-gray-100 text-gray-700 px-6 py-4 rounded-2xl font-semibold hover:bg-gray-200 transition-all duration-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobDetail;