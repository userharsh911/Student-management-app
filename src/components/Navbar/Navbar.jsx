import { useState } from 'react';
import { GraduationCap, Menu, X, Home, UserPlus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';




export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
const navigate = useNavigate();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-md">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">EduManage</h1>
              <p className="text-xs text-gray-500 -mt-1">Student Management System</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button
                onClick={()=>navigate("/")}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 px-3 py-2 rounded-lg text-sm font-medium transition duration-200 hover:bg-blue-50"
              >
                <Home className="w-4 h-4" />
                <span  >Home</span>
              </button>
              
              <button
                onClick={()=>navigate("/signup")}
                className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-indigo-700 transition duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <UserPlus className="w-4 h-4" />
                <span >Register School</span>
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition duration-200"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mt-2 mb-4">
              <button
                onClick={()=>navigate("/")}
                className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-lg text-base font-medium transition duration-200 hover:bg-white"
              >
                <Home className="w-5 h-5" />
                <span>Home</span>
              </button>
              
              <button
                onClick={()=>navigate("/signup")}
                className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-lg text-base font-medium transition duration-200 hover:bg-white"
              >
                <UserPlus className="w-5 h-5" />
                <span>Register School</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Optional: Add a subtle gradient line at bottom */}
      <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20"></div>
    </nav>
  );
}