"use client" ;
import { useState } from 'react';
import { Bell, Eye, X, ChevronDown, User, BookOpen, Settings, BarChart2, Grid } from 'lucide-react';
import AdminSidebar from '../components/Admin/AdminSidebar';
import AdminHeader from '../components/Admin/Header';
import CoursesTable from '../components/Admin/CoursesTable';
import CourseForm from '../components/Admin/CourseForm';

// Notification Component
const NotificationPanel = ({ notifications, onClose }) => {
  return (
    <div className="absolute right-0 top-16 w-80 bg-white shadow-lg rounded-lg border border-gray-200 overflow-hidden z-50">
      <div className="flex justify-between items-center px-4 py-3 bg-gray-50 border-b border-gray-200">
        <h3 className="font-medium text-gray-700">Notifications</h3>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X size={18} />
        </button>
      </div>
      <div className="max-h-96 overflow-y-auto">
        {notifications.length === 0 ? (
          <div className="p-4 text-gray-500 text-center">No new notifications</div>
        ) : (
          <ul>
            {notifications.map((notification) => (
              <li 
                key={notification.id} 
                className="px-4 py-3 border-b border-gray-100 hover:bg-gray-50"
              >
                <div className="flex gap-3 items-start">
                  <div className={`mt-1 flex-shrink-0 rounded-full w-2 h-2 ${notification.read ? 'bg-gray-300' : 'bg-blue-500'}`}></div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">{notification.title}</p>
                    <p className="text-xs text-gray-500">{notification.time}</p>
                    <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="px-4 py-2 bg-gray-50 border-t border-gray-200">
        <button className="w-full text-center text-sm text-blue-600 hover:text-blue-800">
          View all notifications
        </button>
      </div>
    </div>
  );
};

// Course Preview Component
const CoursePreview = ({ course, onClose }) => {
  if (!course) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="border-b border-gray-200 px-6 py-4 flex justify-between items-center sticky top-0 bg-white">
          <h3 className="text-lg font-medium">Course Preview</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6">
          {/* Course Header */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="w-full md:w-1/3">
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                {course.thumbnail ? (
                  <img 
                    src={course.thumbnail} 
                    alt={course.title} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-100">
                    <BookOpen className="text-gray-400" size={48} />
                  </div>
                )}
              </div>
            </div>
            
            <div className="w-full md:w-2/3">
              <h2 className="text-xl font-bold">{course.title}</h2>
              <p className="text-gray-500 text-sm mb-2">Instructor: {course.instructor}</p>
              <div className="flex items-center gap-2 mb-2">
                <span className={`px-2 py-1 text-xs rounded ${
                  course.status === 'published' ? 'bg-green-100 text-green-800' : 
                  course.status === 'draft' ? 'bg-yellow-100 text-yellow-800' : 
                  'bg-gray-100 text-gray-800'
                }`}>
                  {course.status}
                </span>
                <span className="text-sm text-gray-500">{course.duration || '8 hours'} total length</span>
              </div>
              <p className="text-sm text-gray-700 mt-2">{course.description}</p>
            </div>
          </div>
          
          {/* Course Content Sections */}
          <div className="mt-6">
            <h3 className="font-medium text-lg mb-3">Course Content</h3>
            <div className="space-y-3">
              {(course.sections || [
                { id: 1, title: 'Introduction', lessons: 3, duration: '45 min' },
                { id: 2, title: 'Getting Started', lessons: 5, duration: '1h 30m' },
                { id: 3, title: 'Advanced Concepts', lessons: 4, duration: '2h 15m' }
              ]).map((section) => (
                <div key={section.id} className="border border-gray-200 rounded-lg">
                  <div className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-50">
                    <div className="font-medium">{section.title}</div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-gray-500">{section.lessons} lessons</span>
                      <span className="text-sm text-gray-500">{section.duration}</span>
                      <ChevronDown size={16} className="text-gray-500" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Course Details */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium text-lg mb-3">Details</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <span className="font-medium">Category:</span> 
                  <span>{course.category || 'Development'}</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="font-medium">Level:</span> 
                  <span>{course.level || 'Intermediate'}</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="font-medium">Students:</span> 
                  <span>{course.students || '245'}</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="font-medium">Last Updated:</span> 
                  <span>{course.updatedAt || 'April 15, 2025'}</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-lg mb-3">Requirements</h3>
              <ul className="list-disc pl-5 space-y-1">
                {(course.requirements || [
                  'Basic programming knowledge',
                  'Understanding of HTML and CSS',
                  'Familiarity with JavaScript'
                ]).map((req, index) => (
                  <li key={index} className="text-sm text-gray-700">{req}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Updated Admin Header with notification functionality
const EnhancedAdminHeader = ({ title, onNotificationClick, notificationCount }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-4 py-3">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
        <div className="flex items-center space-x-4">
          <button 
            onClick={onNotificationClick}
            className="relative p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            <Bell size={20} />
            {notificationCount > 0 && (
              <span className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                {notificationCount > 9 ? '9+' : notificationCount}
              </span>
            )}
          </button>
          <div className="relative">
            <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 focus:outline-none">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                <User size={16} className="text-gray-600" />
              </div>
              <span className="hidden md:inline-block font-medium">Admin</span>
              <ChevronDown size={16} className="hidden md:inline-block" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

// Main Dashboard Component
export default function AdminDashboard() {
  const [activeSection, setActiveSection] = useState('courses');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentCourse, setCurrentCourse] = useState(null);
  
  // Notification state
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'New Course Submission',
      message: 'John Doe has submitted a new course for review.',
      time: '2 hours ago',
      read: false
    },
    {
      id: 2,
      title: 'User Report',
      message: 'A user has reported inappropriate content in "JavaScript Basics" course.',
      time: '1 day ago',
      read: false
    },
    {
      id: 3,
      title: 'System Update',
      message: 'The platform will undergo maintenance on May 25, 2025.',
      time: '2 days ago',
      read: true
    }
  ]);
  
  // Course preview state
  const [previewCourse, setPreviewCourse] = useState(null);
  
  // Sample courses data
  const sampleCourses = [
    {
      id: 1,
      title: 'Complete Web Development Bootcamp',
      instructor: 'Jane Smith',
      category: 'Web Development',
      status: 'published',
      students: 1245,
      rating: 4.8,
      thumbnail: '/api/placeholder/320/180'
    },
    {
      id: 2,
      title: 'Advanced React Patterns',
      instructor: 'Mike Johnson',
      category: 'Frontend',
      status: 'draft',
      students: 0,
      rating: 0,
      thumbnail: '/api/placeholder/320/180'
    }
  ];

  // Handle course editing
  const handleEditCourse = (course) => {
    setCurrentCourse(course);
    setIsFormOpen(true);
  };

  // Handle new course creation
  const handleNewCourse = () => {
    setCurrentCourse(null);
    setIsFormOpen(true);
  };

  // Close form and refresh courses (would trigger API refetch in real app)
  const handleFormClose = (wasSubmitted = false) => {
    setIsFormOpen(false);
    setCurrentCourse(null);
  };
  
  // Handle notification click
  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };
  
  // Handle course preview
  const handlePreviewCourse = (course) => {
    setPreviewCourse(course);
  };
  
  // Close course preview
  const closePreview = () => {
    setPreviewCourse(null);
  };
  
  // Get unread notification count
  const unreadNotificationCount = notifications.filter(n => !n.read).length;

  // Enhanced CoursesTable component with preview functionality
  const EnhancedCoursesTable = ({ courses, onEdit, onNew, onPreview }) => {
    return (
      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:px-6 flex justify-between items-center border-b border-gray-200">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Courses</h3>
          <button
            onClick={onNew}
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Add Course
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Course
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Instructor
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Students
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rating
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {courses.map((course) => (
                <tr key={course.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0 rounded overflow-hidden bg-gray-100">
                        {course.thumbnail ? (
                          <img className="h-10 w-10 object-cover" src={course.thumbnail} alt="" />
                        ) : (
                          <div className="h-10 w-10 flex items-center justify-center">
                            <BookOpen size={20} className="text-gray-400" />
                          </div>
                        )}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{course.title}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{course.instructor}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{course.category}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      course.status === 'published' ? 'bg-green-100 text-green-800' : 
                      course.status === 'draft' ? 'bg-yellow-100 text-yellow-800' : 
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {course.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {course.students}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {course.rating ? `${course.rating}/5.0` : '-'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <button
                        onClick={() => onPreview(course)}
                        className="text-blue-600 hover:text-blue-900 p-1"
                      >
                        <Eye size={18} />
                      </button>
                      <button
                        onClick={() => onEdit(course)}
                        className="text-indigo-600 hover:text-indigo-900 p-1"
                      >
                        <Settings size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  // Dashboard overview with stats
  const DashboardOverview = () => {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                <BookOpen size={24} />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Total Courses</p>
                <h2 className="text-xl font-bold">127</h2>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-100 text-green-600">
                <User size={24} />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Students</p>
                <h2 className="text-xl font-bold">3,452</h2>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
                <User size={24} />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Instructors</p>
                <h2 className="text-xl font-bold">42</h2>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-purple-100 text-purple-600">
                <BarChart2 size={24} />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Revenue</p>
                <h2 className="text-xl font-bold">$24,500</h2>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium mb-4">Recent Activity</h2>
          <div className="space-y-3">
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <div className="p-2 rounded-full bg-blue-100 text-blue-600">
                <Grid size={18} />
              </div>
              <div className="ml-3">
                <p className="text-sm">New course "AI Fundamentals" was published</p>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
            </div>
            
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <div className="p-2 rounded-full bg-green-100 text-green-600">
                <User size={18} />
              </div>
              <div className="ml-3">
                <p className="text-sm">15 new users registered today</p>
                <p className="text-xs text-gray-500">5 hours ago</p>
              </div>
            </div>
            
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <div className="p-2 rounded-full bg-yellow-100 text-yellow-600">
                <Bell size={18} />
              </div>
              <div className="ml-3">
                <p className="text-sm">System maintenance completed</p>
                <p className="text-xs text-gray-500">1 day ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <AdminSidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
     
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <EnhancedAdminHeader
          title={activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
          onNotificationClick={toggleNotifications}
          notificationCount={unreadNotificationCount}
        />
        
        {/* Notification Panel */}
        {showNotifications && (
          <NotificationPanel
            notifications={notifications}
            onClose={() => setShowNotifications(false)}
          />
        )}
       
        <main className="flex-1 overflow-y-auto p-4">
          {activeSection === 'courses' && (
            <>
              {isFormOpen ? (
                <CourseForm
                  course={currentCourse}
                  onClose={handleFormClose}
                />
              ) : (
                <EnhancedCoursesTable
                  courses={sampleCourses}
                  onEdit={handleEditCourse}
                  onNew={handleNewCourse}
                  onPreview={handlePreviewCourse}
                />
              )}
            </>
          )}
         
          {activeSection === 'dashboard' && <DashboardOverview />}
         
          {activeSection === 'users' && (
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold mb-4">User Management</h2>
              <p>Here you can manage your platform's users and their roles.</p>
            </div>
          )}
         
          {activeSection === 'instructors' && (
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold mb-4">Instructor Management</h2>
              <p>Here you can manage your platform's instructors and their profiles.</p>
            </div>
          )}
         
          {activeSection === 'categories' && (
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold mb-4">Category Management</h2>
              <p>Here you can manage course categories and subcategories.</p>
            </div>
          )}
         
          {activeSection === 'settings' && (
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold mb-4">Platform Settings</h2>
              <p>Manage global settings for your educational platform.</p>
            </div>
          )}
        </main>
      </div>
      
      {/* Course Preview Modal */}
      {previewCourse && (
        <CoursePreview 
          course={previewCourse} 
          onClose={closePreview} 
        />
      )}
    </div>
  );
}