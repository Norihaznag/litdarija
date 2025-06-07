"use client";
import React, { useState, useCallback, useMemo } from 'react';
import { 
  Bell, Eye, X, ChevronDown, User, BookOpen, Settings, BarChart2, 
  Grid, Search, Filter, Download, Plus, Edit3, Trash2, Star,
  Users, GraduationCap, FolderOpen, Zap, TrendingUp, Calendar,
  Activity, AlertCircle, CheckCircle, Clock
} from 'lucide-react';

// Custom Hooks
const useNotifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'New Course Submission',
      message: 'John Doe has submitted a new course for review.',
      time: '2 hours ago',
      read: false,
      type: 'info'
    },
    {
      id: 2,
      title: 'User Report',
      message: 'A user has reported inappropriate content in "JavaScript Basics" course.',
      time: '1 day ago',
      read: false,
      type: 'warning'
    },
    {
      id: 3,
      title: 'System Update',
      message: 'The platform will undergo maintenance on May 25, 2025.',
      time: '2 days ago',
      read: true,
      type: 'success'
    }
  ]);

  const markAsRead = useCallback((id) => {
    setNotifications(prev => prev.map(n => n.id === id ? {...n, read: true} : n));
  }, []);

  const unreadCount = useMemo(() => 
    notifications.filter(n => !n.read).length, [notifications]
  );

  return { notifications, markAsRead, unreadCount };
};

// Utility Components
const StatCard = ({ icon: Icon, title, value, trend, color = 'emerald' }) => {
  const colorClasses = {
    emerald: 'bg-emerald-100 text-emerald-600',
    green: 'bg-green-100 text-green-600',
    yellow: 'bg-yellow-100 text-yellow-600',
    purple: 'bg-purple-100 text-purple-600',
    red: 'bg-red-100 text-red-600',
    teal: 'bg-teal-100 text-teal-600'
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-lg hover:border-emerald-200 transition-all duration-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className={`p-3 rounded-lg ${colorClasses[color]}`}>
            <Icon size={24} />
          </div>
          <div className="ml-4">
            <p className="text-sm text-gray-500 font-medium">{title}</p>
            <h2 className="text-2xl font-bold text-gray-900">{value}</h2>
          </div>
        </div>
        {trend && (
          <div className={`flex items-center text-sm ${trend.positive ? 'text-emerald-600' : 'text-red-600'}`}>
            <TrendingUp size={16} className={trend.positive ? '' : 'rotate-180'} />
            <span className="ml-1">{trend.value}</span>
          </div>
        )}
      </div>
    </div>
  );
};

const SearchAndFilter = ({ searchTerm, setSearchTerm, activeFilter, setActiveFilter, onExport }) => {
  const filters = ['all', 'published', 'draft', 'pending'];
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6 border border-gray-100">
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="flex flex-1 gap-3 w-full sm:w-auto">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
            />
          </div>
          
          <div className="relative">
            <select
              value={activeFilter}
              onChange={(e) => setActiveFilter(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
            >
              {filters.map(filter => (
                <option key={filter} value={filter}>
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </option>
              ))}
            </select>
            <Filter className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          </div>
        </div>
        
        <div className="flex gap-2">
          <button
            onClick={onExport}
            className="flex items-center gap-2 px-4 py-2 border border-emerald-300 text-emerald-700 rounded-lg hover:bg-emerald-50 transition-colors"
          >
            <Download size={16} />
            Export
          </button>
        </div>
      </div>
    </div>
  );
};

const NotificationPanel = ({ notifications, onClose, onMarkAsRead }) => {
  const getNotificationIcon = (type) => {
    switch(type) {
      case 'warning': return <AlertCircle className="text-yellow-500" size={16} />;
      case 'success': return <CheckCircle className="text-emerald-500" size={16} />;
      default: return <Activity className="text-emerald-500" size={16} />;
    }
  };

  return (
    <div className="absolute right-0 top-16 w-80 bg-white shadow-xl rounded-lg border border-gray-200 overflow-hidden z-50">
      <div className="flex justify-between items-center px-4 py-3 bg-emerald-50 border-b border-emerald-200">
        <h3 className="font-semibold text-emerald-800">Notifications</h3>
        <button onClick={onClose} className="text-emerald-600 hover:text-emerald-800 p-1 rounded">
          <X size={18} />
        </button>
      </div>
      
      <div className="max-h-96 overflow-y-auto">
        {notifications.length === 0 ? (
          <div className="p-6 text-center text-gray-500">
            <Bell className="mx-auto mb-2 text-gray-300" size={32} />
            <p>No new notifications</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {notifications.map((notification) => (
              <div 
                key={notification.id} 
                className={`px-4 py-3 hover:bg-emerald-50 cursor-pointer transition-colors ${
                  !notification.read ? 'bg-emerald-25 border-l-4 border-emerald-400' : ''
                }`}
                onClick={() => onMarkAsRead(notification.id)}
              >
                <div className="flex gap-3 items-start">
                  <div className="mt-1 flex-shrink-0">
                    {getNotificationIcon(notification.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-800 truncate">
                      {notification.title}
                    </p>
                    <p className="text-xs text-gray-500 mb-1">{notification.time}</p>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {notification.message}
                    </p>
                  </div>
                  {!notification.read && (
                    <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0 mt-2"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      <div className="px-4 py-3 bg-emerald-50 border-t border-emerald-200">
        <button className="w-full text-center text-sm text-emerald-600 hover:text-emerald-800 font-medium">
          View all notifications
        </button>
      </div>
    </div>
  );
};

const AdminHeader = ({ title, onNotificationClick, notificationCount }) => (
  <header className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white shadow-lg px-6 py-4">
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-emerald-100 mt-1">Manage your LitDarija platform</p>
      </div>
      
      <div className="flex items-center space-x-4">
        <button 
          onClick={onNotificationClick}
          className="relative p-2 text-emerald-100 hover:text-white hover:bg-emerald-700 rounded-lg transition-colors"
        >
          <Bell size={20} />
          {notificationCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-yellow-500 text-yellow-900 text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
              {notificationCount > 9 ? '9+' : notificationCount}
            </span>
          )}
        </button>
        
        <div className="flex items-center space-x-3 pl-4 border-l border-emerald-500">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
            <User size={16} className="text-emerald-600" />
          </div>
          <div className="hidden md:block">
            <span className="font-medium">Admin</span>
            <p className="text-xs text-emerald-200">Super Admin</p>
          </div>
          <ChevronDown size={16} className="text-emerald-200" />
        </div>
      </div>
    </div>
  </header>
);

const Sidebar = ({ activeSection, setActiveSection }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Grid },
    { id: 'courses', label: 'Courses', icon: BookOpen },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'instructors', label: 'Instructors', icon: GraduationCap },
    { id: 'categories', label: 'Categories', icon: FolderOpen },
    { id: 'analytics', label: 'Analytics', icon: BarChart2 },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  return (
    <aside className="w-64 bg-white shadow-lg border-r border-gray-200 flex flex-col">
      <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-emerald-50 to-emerald-100">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-lg flex items-center justify-center">
            <Zap className="text-white" size={20} />
          </div>
          <span className="text-xl font-bold text-emerald-800">LitDarija</span>
        </div>
      </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map(item => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <li key={item.id}>
                <button
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                    isActive 
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-200 shadow-sm' 
                      : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-700'
                  }`}
                >
                  <Icon size={20} className={isActive ? 'text-emerald-600' : 'text-gray-500'} />
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

const CoursesTable = ({ courses, onEdit, onPreview, onDelete }) => (
  <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead className="bg-emerald-50">
          <tr>
            <th className="px-6 py-4 text-left text-xs font-semibold text-emerald-800 uppercase tracking-wider">
              Course
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold text-emerald-800 uppercase tracking-wider">
              Instructor
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold text-emerald-800 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold text-emerald-800 uppercase tracking-wider">
              Students
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold text-emerald-800 uppercase tracking-wider">
              Rating
            </th>
            <th className="px-6 py-4 text-right text-xs font-semibold text-emerald-800 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {courses.map((course) => (
            <tr key={course.id} className="hover:bg-emerald-50 transition-colors">
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <div className="h-12 w-12 flex-shrink-0 rounded-lg overflow-hidden bg-gradient-to-br from-emerald-100 to-emerald-200">
                    {course.thumbnail ? (
                      <img className="h-12 w-12 object-cover" src={course.thumbnail} alt="" />
                    ) : (
                      <div className="h-12 w-12 flex items-center justify-center">
                        <BookOpen size={24} className="text-emerald-600" />
                      </div>
                    )}
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-semibold text-gray-900">{course.title}</div>
                    <div className="text-sm text-emerald-600">{course.category}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm font-medium text-gray-900">{course.instructor}</div>
              </td>
              <td className="px-6 py-4">
                <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                  course.status === 'published' ? 'bg-emerald-100 text-emerald-800' : 
                  course.status === 'draft' ? 'bg-yellow-100 text-yellow-800' : 
                  'bg-gray-100 text-gray-800'
                }`}>
                  {course.status === 'published' && <CheckCircle size={12} className="mr-1" />}
                  {course.status === 'draft' && <Clock size={12} className="mr-1" />}
                  {course.status}
                </span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                {course.students.toLocaleString()}
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <Star size={16} className="text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm font-medium text-gray-900">
                    {course.rating ? course.rating.toFixed(1) : '-'}
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 text-right">
                <div className="flex justify-end space-x-2">
                  <button
                    onClick={() => onPreview(course)}
                    className="p-2 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                    title="Preview"
                  >
                    <Eye size={16} />
                  </button>
                  <button
                    onClick={() => onEdit(course)}
                    className="p-2 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                    title="Edit"
                  >
                    <Edit3 size={16} />
                  </button>
                  <button
                    onClick={() => onDelete(course)}
                    className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    title="Delete"
                  >
                    <Trash2 size={16} />
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

const DashboardOverview = () => {
  const stats = [
    { icon: BookOpen, title: 'Total Courses', value: '127', trend: { positive: true, value: '+12%' }, color: 'emerald' },
    { icon: Users, title: 'Active Students', value: '3,452', trend: { positive: true, value: '+8.2%' }, color: 'green' },
    { icon: GraduationCap, title: 'Instructors', value: '42', trend: { positive: true, value: '+3' }, color: 'teal' },
    { icon: BarChart2, title: 'Monthly Revenue', value: '$24,500', trend: { positive: true, value: '+15.3%' }, color: 'yellow' }
  ];

  const recentActivities = [
    { icon: Plus, text: 'New course "AI Fundamentals" was published', time: '2 hours ago', color: 'emerald' },
    { icon: Users, text: '15 new users registered today', time: '5 hours ago', color: 'green' },
    { icon: Settings, text: 'System maintenance completed', time: '1 day ago', color: 'gray' },
    { icon: Star, text: 'Course "React Mastery" received 5-star review', time: '2 days ago', color: 'yellow' }
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:border-emerald-200 transition-colors">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
            <Calendar className="text-emerald-500" size={20} />
          </div>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-emerald-50 transition-colors">
                <div className={`p-2 rounded-lg ${
                  activity.color === 'emerald' ? 'bg-emerald-100 text-emerald-600' :
                  activity.color === 'green' ? 'bg-green-100 text-green-600' :
                  activity.color === 'yellow' ? 'bg-yellow-100 text-yellow-600' :
                  'bg-gray-100 text-gray-600'
                }`}>
                  <activity.icon size={16} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900">{activity.text}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:border-emerald-200 transition-colors">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
            <Zap className="text-emerald-500" size={20} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button className="p-4 border border-emerald-200 rounded-lg hover:border-emerald-300 hover:bg-emerald-50 transition-colors group">
              <Plus className="text-emerald-600 mb-2 group-hover:scale-110 transition-transform" size={24} />
              <p className="text-sm font-medium text-gray-900">Add Course</p>
            </button>
            <button className="p-4 border border-emerald-200 rounded-lg hover:border-emerald-300 hover:bg-emerald-50 transition-colors group">
              <Users className="text-emerald-600 mb-2 group-hover:scale-110 transition-transform" size={24} />
              <p className="text-sm font-medium text-gray-900">Manage Users</p>
            </button>
            <button className="p-4 border border-emerald-200 rounded-lg hover:border-emerald-300 hover:bg-emerald-50 transition-colors group">
              <BarChart2 className="text-emerald-600 mb-2 group-hover:scale-110 transition-transform" size={24} />
              <p className="text-sm font-medium text-gray-900">View Analytics</p>
            </button>
            <button className="p-4 border border-emerald-200 rounded-lg hover:border-emerald-300 hover:bg-emerald-50 transition-colors group">
              <Download className="text-emerald-600 mb-2 group-hover:scale-110 transition-transform" size={24} />
              <p className="text-sm font-medium text-gray-900">Export Data</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Dashboard Component
export default function EnhancedAdminDashboard() {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [showNotifications, setShowNotifications] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  
  const { notifications, markAsRead, unreadCount } = useNotifications();
  
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
      thumbnail: null
    },
    {
      id: 2,
      title: 'Advanced React Patterns',
      instructor: 'Mike Johnson',
      category: 'Frontend',
      status: 'draft',
      students: 0,
      rating: 0,
      thumbnail: null
    },
    {
      id: 3,
      title: 'Node.js Masterclass',
      instructor: 'Sarah Wilson',
      category: 'Backend',
      status: 'published',
      students: 892,
      rating: 4.6,
      thumbnail: null
    }
  ];

  const filteredCourses = useMemo(() => {
    return sampleCourses.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = activeFilter === 'all' || course.status === activeFilter;
      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, activeFilter]);

  const handleExport = useCallback(() => {
    console.log('Exporting data...');
    // Implement export functionality
  }, []);

  const handleEdit = useCallback((course) => {
    console.log('Editing course:', course);
    // Implement edit functionality
  }, []);

  const handlePreview = useCallback((course) => {
    console.log('Previewing course:', course);
    // Implement preview functionality
  }, []);

  const handleDelete = useCallback((course) => {
    console.log('Deleting course:', course);
    // Implement delete functionality
  }, []);

  const getSectionTitle = (section) => {
    const titles = {
      dashboard: 'Dashboard',
      courses: 'Course Management',
      users: 'User Management',
      instructors: 'Instructor Management',
      categories: 'Category Management',
      analytics: 'Analytics & Reports',
      settings: 'Platform Settings'
    };
    return titles[section] || section.charAt(0).toUpperCase() + section.slice(1);
  };

  return (
    <div className="flex h-screen bg-gray-50 ">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader
          title={getSectionTitle(activeSection)}
          onNotificationClick={() => setShowNotifications(!showNotifications)}
          notificationCount={unreadCount}
        />
        
        {showNotifications && (
          <NotificationPanel
            notifications={notifications}
            onClose={() => setShowNotifications(false)}
            onMarkAsRead={markAsRead}
          />
        )}
        
        <main className="flex-1 overflow-y-auto p-6">
          {activeSection === 'dashboard' && <DashboardOverview />}
          
          {activeSection === 'courses' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Courses</h2>
                  <p className="text-gray-600">Manage your platform's courses</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors shadow-sm">
                  <Plus size={16} />
                  Add Course
                </button>
              </div>
              
              <SearchAndFilter
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
                onExport={handleExport}
              />
              
              <CoursesTable
                courses={filteredCourses}
                onEdit={handleEdit}
                onPreview={handlePreview}
                onDelete={handleDelete}
              />
            </div>
          )}
          
          {activeSection !== 'dashboard' && activeSection !== 'courses' && (
            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100 text-center">
              <div className="max-w-md mx-auto">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="text-emerald-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {getSectionTitle(activeSection)}
                </h3>
                <p className="text-gray-600 mb-6">
                  This section is under development. Coming soon with enhanced features!
                </p>
                <button className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors shadow-sm">
                  Learn More
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}