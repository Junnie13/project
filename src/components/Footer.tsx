import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Industries */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Industries</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Healthcare Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Financial Technology</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Education & Research</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Manufacturing</a></li>
            </ul>
          </div>

          {/* Insights and Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Insights and Resources</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Articles</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Whitepapers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Webinars</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Research Reports</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Videos</a></li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Company Overview</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Leadership Team</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Our Technology</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Press Room</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Partnerships</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Sales</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Customer Support</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Technical Support</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Media Contacts</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Career Opportunities</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Report Security Issue</a></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Policies</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms and Conditions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Legal Notices</a></li>
            </ul>
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-2">Our Products</h4>
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">View All Products</a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              DataTech Analytics Solutions, part of TechCorp.
            </p>
            <p className="text-sm text-gray-400">
              Copyright © 2024 DataTech Analytics Solutions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;