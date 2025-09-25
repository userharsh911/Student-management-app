import { GraduationCap, Code } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t pb-10 border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Logo and Brand */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-md">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">EduManage</h3>
                <p className="text-sm text-gray-400">Student Management System</p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm font-medium transition duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm font-medium transition duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm font-medium transition duration-200">
                Support
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>© {currentYear} EduManage. All rights reserved.</span>
            </div>

            {/* VisionCoders Credit */}
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">Developed by</span>
              <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1 rounded-full">
                <Code className="w-4 h-4" />
                <span className="text-sm font-semibold">VisionCoders</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}