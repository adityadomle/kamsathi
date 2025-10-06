import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Briefcase, Mail, Lock, Phone, MapPin, ArrowLeft, Eye, EyeOff, CheckCircle } from 'lucide-react';

type UserType = 'worker' | 'employer';
type AuthMode = 'login' | 'register';

const Auth: React.FC = () => {
  const [userType, setUserType] = useState<UserType>('worker');
  const [authMode, setAuthMode] = useState<AuthMode>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone: '',
    location: '',
    skills: '',
    company: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Auth submission:', { userType, authMode, formData });
    alert(`${authMode === 'login' ? 'Login' : 'Registration'} successful! (Demo only)`);
    setIsLoading(false);
  };

  const resetForm = () => {
    setFormData({
      email: '',
      password: '',
      name: '',
      phone: '',
      location: '',
      skills: '',
      company: ''
    });
  };

  const switchMode = (mode: AuthMode) => {
    setAuthMode(mode);
    resetForm();
  };

  const switchUserType = (type: UserType) => {
    setUserType(type);
    resetForm();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-28">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-all duration-300 bg-white/80 backdrop-blur-xl px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 border border-white/20"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          <span className="font-semibold">Back to Home</span>
        </Link>

        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <User className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -inset-2 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl opacity-20 blur animate-pulse"></div>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-3">
                {authMode === 'login' ? 'Welcome Back!' : 'Join WorkConnect'}
              </h1>
              <p className="text-gray-600 text-lg">
                {authMode === 'login' 
                  ? 'Sign in to access your account and find opportunities' 
                  : 'Create your account and start your journey with us'}
              </p>
            </div>

            {/* User Type Selector */}
            <div className="mb-8">
              <p className="text-sm font-bold text-gray-900 mb-4 text-center">I am a:</p>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => switchUserType('worker')}
                  className={`flex flex-col items-center space-y-3 p-6 rounded-2xl border-2 transition-all duration-300 ${
                    userType === 'worker'
                      ? 'bg-gradient-to-br from-blue-50 to-purple-50 border-blue-300 text-blue-700 shadow-lg'
                      : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                    userType === 'worker' 
                      ? 'bg-gradient-to-br from-blue-500 to-purple-500 text-white' 
                      : 'bg-gray-100 text-gray-500'
                  }`}>
                    <User className="h-6 w-6" />
                  </div>
                  <span className="font-semibold">Worker</span>
                  <span className="text-xs text-center">Looking for jobs</span>
                </button>
                
                <button
                  type="button"
                  onClick={() => switchUserType('employer')}
                  className={`flex flex-col items-center space-y-3 p-6 rounded-2xl border-2 transition-all duration-300 ${
                    userType === 'employer'
                      ? 'bg-gradient-to-br from-blue-50 to-purple-50 border-blue-300 text-blue-700 shadow-lg'
                      : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                    userType === 'employer' 
                      ? 'bg-gradient-to-br from-blue-500 to-purple-500 text-white' 
                      : 'bg-gray-100 text-gray-500'
                  }`}>
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <span className="font-semibold">Employer</span>
                  <span className="text-xs text-center">Hiring workers</span>
                </button>
              </div>
            </div>

            {/* Auth Mode Tabs */}
            <div className="flex bg-gray-100 rounded-2xl p-1 mb-8">
              <button
                onClick={() => switchMode('login')}
                className={`flex-1 py-3 text-center font-semibold rounded-xl transition-all duration-300 ${
                  authMode === 'login'
                    ? 'bg-white text-blue-600 shadow-md'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => switchMode('register')}
                className={`flex-1 py-3 text-center font-semibold rounded-xl transition-all duration-300 ${
                  authMode === 'register'
                    ? 'bg-white text-blue-600 shadow-md'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Register
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-bold text-gray-900">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50/50 backdrop-blur-sm transition-all duration-200 hover:bg-white"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-bold text-gray-900">
                  Password *
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    required
                    placeholder="Enter your password"
                    className="w-full pl-12 pr-12 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50/50 backdrop-blur-sm transition-all duration-200 hover:bg-white"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              {/* Registration Fields */}
              {authMode === 'register' && (
                <>
                  {/* Name */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-bold text-gray-900">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Enter your full name"
                      className="w-full px-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50/50 backdrop-blur-sm transition-all duration-200 hover:bg-white"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-900">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        placeholder="+91 98765 43210"
                        className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50/50 backdrop-blur-sm transition-all duration-200 hover:bg-white"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  {/* Location */}
                  <div className="space-y-2">
                    <label htmlFor="location" className="block text-sm font-bold text-gray-900">
                      Location *
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        id="location"
                        name="location"
                        required
                        placeholder="City, State"
                        className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50/50 backdrop-blur-sm transition-all duration-200 hover:bg-white"
                        value={formData.location}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  {/* User Type Specific Fields */}
                  {userType === 'worker' ? (
                    <div className="space-y-2">
                      <label htmlFor="skills" className="block text-sm font-bold text-gray-900">
                        Skills & Experience
                      </label>
                      <textarea
                        id="skills"
                        name="skills"
                        rows={4}
                        placeholder="Describe your skills, experience, and qualifications..."
                        className="w-full px-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50/50 backdrop-blur-sm transition-all duration-200 hover:bg-white resize-none"
                        value={formData.skills}
                        onChange={handleInputChange}
                      />
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <label htmlFor="company" className="block text-sm font-bold text-gray-900">
                        Company/Business Name *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        placeholder="Enter your company or business name"
                        className="w-full px-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50/50 backdrop-blur-sm transition-all duration-200 hover:bg-white"
                        value={formData.company}
                        onChange={handleInputChange}
                      />
                    </div>
                  )}
                </>
              )}

              {/* Forgot Password Link (Login Only) */}
              {authMode === 'login' && (
                <div className="text-right">
                  <button type="button" className="text-sm text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium">
                    Forgot password?
                  </button>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-2xl font-bold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <CheckCircle className="h-5 w-5" />
                    <span>{authMode === 'login' ? 'Sign In' : 'Create Account'}</span>
                  </>
                )}
              </button>
            </form>

            {/* Terms (Register Only) */}
            {authMode === 'register' && (
              <p className="text-xs text-gray-500 text-center mt-6 leading-relaxed">
                By creating an account, you agree to our{' '}
                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Terms of Service</a>{' '}
                and{' '}
                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Privacy Policy</a>.
              </p>
            )}

            {/* Switch Mode */}
            <div className="text-center mt-8 pt-6 border-t border-gray-200">
              <p className="text-gray-600">
                {authMode === 'login' ? "Don't have an account? " : "Already have an account? "}
                <button
                  onClick={() => switchMode(authMode === 'login' ? 'register' : 'login')}
                  className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200"
                >
                  {authMode === 'login' ? 'Register here' : 'Sign in here'}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;