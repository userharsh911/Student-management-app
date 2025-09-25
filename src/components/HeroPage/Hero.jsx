import { useState } from 'react';
import { BookOpen, Users, Award, BarChart3, ChevronRight, Play, Star, GraduationCap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export default function HeroPage() {
  const [activeFeature, setActiveFeature] = useState(0);
  const navigate = useNavigate();
  
  const features = [
    { icon: BookOpen, title: "Course Management", desc: "Easily manage courses, subjects, and curriculum" },
    { icon: Users, title: "Student Tracking", desc: "Track attendance, grades, and progress" },
    { icon: Award, title: "Performance Analytics", desc: "Detailed insights and reports" },
    { icon: BarChart3, title: "Dashboard Overview", desc: "Complete overview at a glance" }
  ];

  const stats = [
    { number: "50K+", label: "Students Managed" },
    { number: "1K+", label: "Institutions" },
    { number: "99.9%", label: "Uptime" },
    { number: "4.8", label: "Rating" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-16">
        
        {/* Main Hero Section */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-blue-600 p-4 rounded-full">
              <GraduationCap size={48} className="text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Student Management
            <span className="block text-blue-400">Made Simple</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Complete solution for managing students, courses, grades, and institutional data all in one place
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={()=>navigate('/signup')} className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 transition-colors">
              Get Started Free
              <ChevronRight size={20} />
            </button>
            <button onClick={()=>navigate("/student-portal")} className="border border-gray-400 hover:bg-gray-800 px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 transition-colors">
              
              Try Demo
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-gray-800 bg-opacity-50 rounded-lg p-6 border border-gray-700">
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Everything You Need
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gray-800 bg-opacity-50 rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-colors cursor-pointer"
                onClick={() => setActiveFeature(index)}
              >
                <div className="bg-blue-600 p-3 rounded-lg mb-4 w-fit">
                  <feature.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gray-800 bg-opacity-50 rounded-lg p-12 border border-gray-700">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of educators using our platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors">
              Start Free Trial
            </button>
            <button className="border border-gray-400 hover:bg-gray-800 px-8 py-3 rounded-lg font-semibold transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}