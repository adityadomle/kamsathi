import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Mail, Phone, MapPin, Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl opacity-20 blur"></div>
              </div>
              <span className="text-2xl font-bold">WorkConnect</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Empowering workers and employers across India with intelligent job matching. 
              Building bridges between opportunity and talent.
            </p>
            <div className="flex space-x-4">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 cursor-pointer transform hover:scale-110">
                <span className="text-lg font-bold">f</span>
              </div>
              <div className="w-12 h-12 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 cursor-pointer transform hover:scale-110">
                <span className="text-lg font-bold">t</span>
              </div>
              <div className="w-12 h-12 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 cursor-pointer transform hover:scale-110">
                <span className="text-lg font-bold">in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { to: '/', label: 'Home' },
                { to: '/jobs', label: 'Browse Jobs' },
                { to: '/post-job', label: 'Post a Job' },
                { to: '/auth', label: 'Login/Register' }
              ].map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to} 
                    className="text-gray-300 hover:text-white transition-all duration-300 flex items-center space-x-2 group"
                  >
                    <div className="w-1 h-1 bg-blue-400 rounded-full group-hover:w-2 transition-all duration-300"></div>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Job Categories */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Popular Categories</h3>
            <ul className="space-y-4">
              {['Construction', 'Restaurant', 'Electrical', 'Cleaning', 'Retail', 'Security'].map((category) => (
                <li key={category}>
                  <Link 
                    to={`/jobs?category=${category}`}
                    className="text-gray-300 hover:text-white transition-all duration-300 flex items-center space-x-2 group"
                  >
                    <div className="w-1 h-1 bg-purple-400 rounded-full group-hover:w-2 transition-all duration-300"></div>
                    <span>{category}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Email Us</p>
                  <p className="text-white font-semibold">support@workconnect.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Call Us</p>
                  <p className="text-white font-semibold">+91 1800-XXX-XXXX</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Visit Us</p>
                  <p className="text-white font-semibold">New Delhi, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get the latest job opportunities and career tips delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-2 text-gray-300">
              <span>© 2025 WorkConnect. Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current animate-pulse" />
              <span>in India</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <Link to="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <button
                onClick={scrollToTop}
                className="bg-white/10 backdrop-blur-xl p-3 rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
              >
                <ArrowUp className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;