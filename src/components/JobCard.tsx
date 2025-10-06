import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, IndianRupee, Building2, Bookmark, Eye, Clock, Star } from 'lucide-react';
import { Job } from '../data/jobsData';

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return 'Today';
    if (diffDays === 2) return 'Yesterday';
    if (diffDays <= 7) return `${diffDays} days ago`;
    return date.toLocaleDateString('en-IN', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const handleBookmark = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div 
      className="group bg-white/90 backdrop-blur-xl border border-gray-100/50 rounded-3xl p-8 hover:bg-white transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2 shadow-lg hover:shadow-2xl relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div className="flex-1">
            {/* Job Title */}
            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
              {job.title}
            </h3>
            
            {/* Company Info */}
            <div className="flex items-center space-x-2 text-gray-600 mb-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <Building2 className="h-4 w-4 text-white" />
              </div>
              <span className="font-semibold">{job.company}</span>
              <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <span className="text-sm">4.5</span>
              </div>
            </div>
            
            {/* Location */}
            <div className="flex items-center space-x-2 text-gray-600">
              <MapPin className="h-4 w-4" />
              <span className="font-medium">{job.location}</span>
            </div>
          </div>
          
          {/* Right Side Actions */}
          <div className="flex flex-col items-end space-y-3">
            {/* Bookmark Button */}
            <button
              onClick={handleBookmark}
              className={`p-3 rounded-2xl transition-all duration-300 transform hover:scale-110 ${
                isBookmarked 
                  ? 'bg-blue-100 text-blue-600' 
                  : 'bg-gray-100 text-gray-400 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              <Bookmark className={`h-5 w-5 ${isBookmarked ? 'fill-current' : ''}`} />
            </button>
            
            {/* Wage Display */}
            <div className="text-right">
              <div className="flex items-center space-x-1 text-green-600 font-bold text-xl mb-1">
                <IndianRupee className="h-5 w-5" />
                <span>{job.wage}</span>
              </div>
              <span className={`inline-block px-4 py-2 text-xs font-semibold rounded-2xl ${
                job.wageType === 'daily' 
                  ? 'bg-blue-100 text-blue-700 border border-blue-200' 
                  : 'bg-green-100 text-green-700 border border-green-200'
              }`}>
                {job.wageType === 'daily' ? 'Per Day' : 'Per Month'}
              </span>
            </div>
          </div>
        </div>

        {/* Job Description */}
        <p className="text-gray-600 text-sm mb-6 line-clamp-2 leading-relaxed">
          {job.description}
        </p>

        {/* Skills/Requirements Preview */}
        <div className="flex flex-wrap gap-2 mb-6">
          {job.requirements.slice(0, 3).map((requirement, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200"
            >
              {requirement}
            </span>
          ))}
          {job.requirements.length > 3 && (
            <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-xs font-medium rounded-full">
              +{job.requirements.length - 3} more
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-6 border-t border-gray-100">
          {/* Posted Date */}
          <div className="flex items-center space-x-2 text-gray-500 text-sm">
            <Clock className="h-4 w-4" />
            <span>{formatDate(job.postedDate)}</span>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            {/* View Count */}
            <div className="flex items-center space-x-1 text-gray-500 text-sm">
              <Eye className="h-4 w-4" />
              <span>24</span>
            </div>
            
            {/* View Details Button */}
            <Link
              to={`/jobs/${job.id}`}
              className={`bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2 ${
                isHovered ? 'from-purple-600 to-pink-600' : ''
              }`}
            >
              <span>View Details</span>
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </Link>
          </div>
        </div>

        {/* Hover Overlay Effect */}
        <div className={`absolute top-4 right-4 transition-all duration-300 ${
          isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
            Quick Apply
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;