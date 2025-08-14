import React from 'react';
import { Search, Globe } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/logo.svg" 
              alt="DataTech Analytics Solutions" 
              className="w-8 h-8"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-900">DataTech</h1>
              <p className="text-xs text-red-600 uppercase tracking-wide">Analytics Solutions</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Solutions</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Industries</a>
            <a href="#" className="text-blue-600 font-medium">Products</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Insights and Resources</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">About Us</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <Search className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-1 text-sm text-gray-600">
              <Globe className="w-4 h-4" />
              <span>English</span>
            </div>
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors">
              Product Sign In
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;