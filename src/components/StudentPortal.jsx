import { useState } from 'react';
import { 
  User, 
  BookOpen, 
  Calendar, 
  Trophy, 
  Bell, 
  Settings, 
  LogOut,
  Clock,
  CheckCircle,
  AlertCircle,
  GraduationCap,
  FileText,
  Users,
  BarChart3,
  Menu,
  X
} from 'lucide-react';

export default function StudentPortal() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  // Demo data
  const studentData = {
    name: "Rahul Sharma",
    class: "Class 12-A",
    rollNumber: "2024001",
    school: "Delhi Public School",
    profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  };

  const subjects = [
    { name: "Mathematics", grade: "A+", percentage: 95, color: "bg-green-500" },
    { name: "Physics", grade: "A", percentage: 88, color: "bg-blue-500" },
    { name: "Chemistry", grade: "A", percentage: 92, color: "bg-purple-500" },
    { name: "English", grade: "B+", percentage: 85, color: "bg-yellow-500" },
    { name: "Computer Science", grade: "A+", percentage: 97, color: "bg-red-500" },
  ];

  const upcomingEvents = [
    { title: "Math Quiz", date: "Today, 2:00 PM", type: "exam", icon: BookOpen },
    { title: "Science Project Due", date: "Tomorrow", type: "assignment", icon: FileText },
    { title: "Parent-Teacher Meeting", date: "Oct 15, 2024", type: "meeting", icon: Users },
    { title: "Annual Sports Day", date: "Oct 20, 2024", type: "event", icon: Trophy },
  ];

  const recentGrades = [
    { subject: "Mathematics", assignment: "Algebra Test", grade: "A+", date: "Oct 5" },
    { subject: "Physics", assignment: "Motion Quiz", grade: "A", date: "Oct 3" },
    { subject: "Chemistry", assignment: "Lab Report", grade: "A", date: "Oct 1" },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'subjects', label: 'Subjects', icon: BookOpen },
    { id: 'schedule', label: 'Schedule', icon: Calendar },
    { id: 'grades', label: 'Grades', icon: Trophy },
    { id: 'assignments', label: 'Assignments', icon: FileText },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-40">
        <div className="flex items-center justify-between px-4 py-4">
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleSidebar}
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            >
              {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Student Portal</h1>
                <p className="text-sm text-gray-500">{studentData.school}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
              <Bell className="w-6 h-6" />
              <span className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>
            
            <div className="flex items-center space-x-3">
              <img
                src={studentData.profileImage}
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-blue-200"
              />
              <div className="hidden md:block">
                <p className="text-sm font-semibold text-gray-900">{studentData.name}</p>
                <p className="text-xs text-gray-500">{studentData.class}</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out`}>
          <div className="flex flex-col h-full">
            {/* Profile Section */}
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center space-x-3">
                <img
                  src={studentData.profileImage}
                  alt="Profile"
                  className="w-12 h-12 rounded-full border-2 border-blue-200"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{studentData.name}</h3>
                  <p className="text-sm text-gray-500">{studentData.class}</p>
                  <p className="text-xs text-gray-400">Roll: {studentData.rollNumber}</p>
                </div>
              </div>
            </div>

            {/* Navigation Menu */}
            <nav className="flex-1 px-4 py-6 space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition duration-200 ${
                    activeTab === item.id
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </nav>

            {/* Bottom Actions */}
            <div className="p-4 border-t border-gray-100 space-y-2">
              <button className="w-full flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-blue-600 rounded-lg transition duration-200">
                <Settings className="w-5 h-5" />
                <span>Settings</span>
              </button>
              <button className="w-full flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-red-100 hover:text-red-600 rounded-lg transition duration-200">
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 lg:ml-0">
          <div className="max-w-7xl mx-auto">
            {/* Overview Section */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Welcome Section */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 text-white">
                  <h2 className="text-2xl font-bold mb-2">Welcome back, {studentData.name.split(' ')[0]}!</h2>
                  <p className="text-blue-100">Here's what's happening in your academic journey today.</p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-500 text-sm">Overall GPA</p>
                        <p className="text-2xl font-bold text-gray-900">3.8</p>
                      </div>
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <Trophy className="w-6 h-6 text-green-600" />
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-500 text-sm">Attendance</p>
                        <p className="text-2xl font-bold text-gray-900">94%</p>
                      </div>
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-500 text-sm">Assignments Due</p>
                        <p className="text-2xl font-bold text-gray-900">3</p>
                      </div>
                      <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                        <AlertCircle className="w-6 h-6 text-yellow-600" />
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-500 text-sm">Completed</p>
                        <p className="text-2xl font-bold text-gray-900">18</p>
                      </div>
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-purple-600" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Subject Performance */}
                  <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Subject Performance</h3>
                    <div className="space-y-4">
                      {subjects.map((subject, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className={`w-3 h-3 rounded-full ${subject.color}`}></div>
                            <span className="font-medium text-gray-900">{subject.name}</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-20 bg-gray-200 rounded-full h-2">
                              <div
                                className={`h-2 rounded-full ${subject.color}`}
                                style={{ width: `${subject.percentage}%` }}
                              ></div>
                            </div>
                            <span className="text-sm font-semibold text-gray-900 w-8">{subject.grade}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Upcoming Events */}
                  <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Events</h3>
                    <div className="space-y-4">
                      {upcomingEvents.map((event, index) => (
                        <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <event.icon className="w-5 h-5 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-gray-900">{event.title}</p>
                            <p className="text-sm text-gray-500">{event.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Recent Grades */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Grades</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-3 px-4 font-semibold text-gray-700">Subject</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-700">Assignment</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-700">Grade</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-700">Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentGrades.map((grade, index) => (
                          <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="py-3 px-4 text-gray-900">{grade.subject}</td>
                            <td className="py-3 px-4 text-gray-600">{grade.assignment}</td>
                            <td className="py-3 px-4">
                              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">
                                {grade.grade}
                              </span>
                            </td>
                            <td className="py-3 px-4 text-gray-500">{grade.date}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Other Tab Content Placeholders */}
            {activeTab !== 'overview' && (
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {menuItems.find(item => item.id === activeTab)?.label} Section
                </h3>
                <p className="text-gray-600">This section is under development. Coming soon!</p>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
}