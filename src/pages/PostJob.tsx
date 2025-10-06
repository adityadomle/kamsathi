import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, ArrowLeft, CheckCircle, Upload, MapPin, IndianRupee, Briefcase, Building2, Phone, Mail } from 'lucide-react';
import { categories, locations } from '../data/jobsData';

const PostJob: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    category: '',
    wageType: 'daily' as 'daily' | 'monthly',
    wageMin: '',
    wageMax: '',
    description: '',
    requirements: '',
    contactPhone: '',
    contactEmail: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    console.log('Job posting data:', formData);
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setCurrentStep(1);
    setFormData({
      title: '',
      company: '',
      location: '',
      category: '',
      wageType: 'daily',
      wageMin: '',
      wageMax: '',
      description: '',
      requirements: '',
      contactPhone: '',
      contactEmail: ''
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="max-w-lg mx-auto text-center bg-white/90 backdrop-blur-xl p-12 rounded-3xl shadow-2xl border border-white/20">
          <div className="relative mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mx-auto flex items-center justify-center shadow-2xl">
              <CheckCircle className="h-12 w-12 text-white" />
            </div>
            <div className="absolute -inset-2 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full opacity-20 blur animate-pulse"></div>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Job Posted Successfully!</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Your job posting has been submitted and will be reviewed within 24 hours. 
            Once approved, it will be visible to thousands of job seekers across India.
          </p>
          
          <div className="space-y-4">
            <button
              onClick={resetForm}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold"
            >
              Post Another Job
            </button>
            
            <Link
              to="/jobs"
              className="block w-full bg-gray-100 text-gray-700 px-8 py-4 rounded-2xl hover:bg-gray-200 transition-all duration-300 text-center font-semibold"
            >
              Browse All Jobs
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-28">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-all duration-300 bg-white/80 backdrop-blur-xl px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 border border-white/20"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          <span className="font-semibold">Back to Home</span>
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
              🚀 Hire the Best Talent
            </span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Post Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Dream Job</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with skilled workers across India. Fill out our simple form to post your job and find the perfect candidate.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-center space-x-8">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                  currentStep >= step
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {step}
                </div>
                {step < 3 && (
                  <div className={`w-16 h-1 mx-4 transition-all duration-300 ${
                    currentStep > step ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-gray-200'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4 space-x-16">
            <span className={`text-sm font-medium ${currentStep >= 1 ? 'text-blue-600' : 'text-gray-500'}`}>
              Basic Info
            </span>
            <span className={`text-sm font-medium ${currentStep >= 2 ? 'text-blue-600' : 'text-gray-500'}`}>
              Job Details
            </span>
            <span className={`text-sm font-medium ${currentStep >= 3 ? 'text-blue-600' : 'text-gray-500'}`}>
              Contact Info
            </span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            {/* Step 1: Basic Information */}
            {currentStep === 1 && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Basic Information</h2>
                  <p className="text-gray-600">Let's start with the essential details about your job posting.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label htmlFor="title" className="block text-sm font-bold text-gray-900 flex items-center">
                      <Briefcase className="h-4 w-4 mr-2 text-blue-600" />
                      Job Title *
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      required
                      placeholder="e.g., Construction Worker, Kitchen Helper"
                      className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50/50 backdrop-blur-sm transition-all duration-200 hover:bg-white"
                      value={formData.title}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="company" className="block text-sm font-bold text-gray-900 flex items-center">
                      <Building2 className="h-4 w-4 mr-2 text-blue-600" />
                      Company/Shop Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      placeholder="e.g., Sharma Construction, Raj Restaurant"
                      className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50/50 backdrop-blur-sm transition-all duration-200 hover:bg-white"
                      value={formData.company}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="location" className="block text-sm font-bold text-gray-900 flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                      Location *
                    </label>
                    <select
                      id="location"
                      name="location"
                      required
                      className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50/50 backdrop-blur-sm appearance-none cursor-pointer transition-all duration-200 hover:bg-white"
                      value={formData.location}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Location</option>
                      {locations.slice(1).map((location) => (
                        <option key={location} value={location}>
                          {location}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="category" className="block text-sm font-bold text-gray-900 flex items-center">
                      <Briefcase className="h-4 w-4 mr-2 text-blue-600" />
                      Job Category *
                    </label>
                    <select
                      id="category"
                      name="category"
                      required
                      className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50/50 backdrop-blur-sm appearance-none cursor-pointer transition-all duration-200 hover:bg-white"
                      value={formData.category}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Category</option>
                      {categories.slice(1).map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Job Details */}
            {currentStep === 2 && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Job Details</h2>
                  <p className="text-gray-600">Provide detailed information about the role and requirements.</p>
                </div>

                {/* Wage Information */}
                <div className="bg-blue-50 rounded-3xl p-8 border border-blue-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <IndianRupee className="h-5 w-5 mr-2 text-blue-600" />
                    Wage Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-3">
                      <label htmlFor="wageType" className="block text-sm font-bold text-gray-900">
                        Wage Type *
                      </label>
                      <select
                        id="wageType"
                        name="wageType"
                        required
                        className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                        value={formData.wageType}
                        onChange={handleInputChange}
                      >
                        <option value="daily">Daily</option>
                        <option value="monthly">Monthly</option>
                      </select>
                    </div>

                    <div className="space-y-3">
                      <label htmlFor="wageMin" className="block text-sm font-bold text-gray-900">
                        Minimum Wage (₹) *
                      </label>
                      <input
                        type="number"
                        id="wageMin"
                        name="wageMin"
                        required
                        placeholder="500"
                        className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                        value={formData.wageMin}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="space-y-3">
                      <label htmlFor="wageMax" className="block text-sm font-bold text-gray-900">
                        Maximum Wage (₹) *
                      </label>
                      <input
                        type="number"
                        id="wageMax"
                        name="wageMax"
                        required
                        placeholder="800"
                        className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                        value={formData.wageMax}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div className="space-y-3">
                    <label htmlFor="description" className="block text-sm font-bold text-gray-900">
                      Job Description *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      required
                      rows={6}
                      placeholder="Describe the job responsibilities, working conditions, and what you're looking for in a candidate..."
                      className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50/50 backdrop-blur-sm transition-all duration-200 hover:bg-white resize-none"
                      value={formData.description}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="requirements" className="block text-sm font-bold text-gray-900">
                      Requirements & Skills
                    </label>
                    <textarea
                      id="requirements"
                      name="requirements"
                      rows={4}
                      placeholder="List the skills, experience, or qualifications required (one per line)..."
                      className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50/50 backdrop-blur-sm transition-all duration-200 hover:bg-white resize-none"
                      value={formData.requirements}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Contact Information */}
            {currentStep === 3 && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Information</h2>
                  <p className="text-gray-600">How can interested candidates reach you?</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label htmlFor="contactPhone" className="block text-sm font-bold text-gray-900 flex items-center">
                      <Phone className="h-4 w-4 mr-2 text-blue-600" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="contactPhone"
                      name="contactPhone"
                      required
                      placeholder="+91 98765 43210"
                      className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50/50 backdrop-blur-sm transition-all duration-200 hover:bg-white"
                      value={formData.contactPhone}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="contactEmail" className="block text-sm font-bold text-gray-900 flex items-center">
                      <Mail className="h-4 w-4 mr-2 text-blue-600" />
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      id="contactEmail"
                      name="contactEmail"
                      placeholder="contact@company.com"
                      className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50/50 backdrop-blur-sm transition-all duration-200 hover:bg-white"
                      value={formData.contactEmail}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                {/* Terms */}
                <div className="bg-yellow-50 rounded-3xl p-8 border border-yellow-200">
                  <label className="flex items-start space-x-4">
                    <input
                      type="checkbox"
                      required
                      className="mt-1 h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="text-sm text-gray-700 leading-relaxed">
                      I agree to the terms and conditions and confirm that the information provided is accurate. 
                      I understand that false information may result in the removal of this job posting. 
                      I also consent to WorkConnect displaying this job to potential candidates.
                    </span>
                  </label>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between pt-8 mt-8 border-t border-gray-200">
              <div>
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-8 py-4 border border-gray-300 rounded-2xl text-gray-700 hover:bg-gray-50 transition-all duration-300 font-semibold"
                  >
                    Previous
                  </button>
                )}
              </div>
              
              <div className="flex items-center space-x-4">
                <Link
                  to="/"
                  className="px-8 py-4 border border-gray-300 rounded-2xl text-gray-700 hover:bg-gray-50 transition-all duration-300 font-semibold"
                >
                  Cancel
                </Link>
                
                {currentStep < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-2xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2"
                  >
                    <span>Next Step</span>
                    <ArrowLeft className="h-5 w-5 rotate-180" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-10 py-4 rounded-2xl font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2"
                  >
                    <Plus className="h-5 w-5" />
                    <span>Post Job</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostJob;