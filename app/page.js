"use client";
import { useState } from 'react';
import { 
  Search,
  PlayCircle,
  Star,
  Clock,
  Users,
  TrendingUp,
  Zap,
  Award,
  BookOpen,
  Code,
  DollarSign,
  Hammer,
  Palette,
  Heart,
  ChevronRight,
  ArrowRight,
  Sparkles,
  Target,
  Coffee,
  Trophy,
  Play,
  User,
  Bell,
  Menu
} from 'lucide-react';

// Mock data
const allcategories = [
  {
    name: "Web Development",
    description: "Build modern websites and apps",
    icon: "💻",
    courseCount: 45,
    slug: "web-dev",
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "Finance",
    description: "Master money management",
    icon: "💰",
    courseCount: 32,
    slug: "finance",
    color: "from-green-500 to-emerald-500"
  },
  {
    name: "Construction",
    description: "Build and create structures",
    icon: "🏗️",
    courseCount: 28,
    slug: "construction",
    color: "from-orange-500 to-red-500"
  },
  {
    name: "Design",
    description: "Create beautiful visuals",
    icon: "🎨",
    courseCount: 51,
    slug: "design",
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "Business",
    description: "Grow your business skills",
    icon: "📈",
    courseCount: 38,
    slug: "business",
    color: "from-indigo-500 to-blue-500"
  },
  {
    name: "Health & Fitness",
    description: "Stay healthy and fit",
    icon: "💪",
    courseCount: 24,
    slug: "health",
    color: "from-green-400 to-teal-500"
  }
];

const featuredCourses = [
  {
    title: "Complete React Mastery",
    instructor: "Sarah Chen",
    level: "Intermediate",
    rating: 4.9,
    students: "12.5k",
    duration: "8h 30m",
    image: "/api/placeholder/400/250",
    price: "Free",
    category: "Web Development",
    isHot: true
  },
  {
    title: "Personal Finance in Morocco",
    instructor: "Ahmed Bennani",
    level: "Beginner",
    rating: 4.8,
    students: "8.2k",
    duration: "6h 15m",
    image: "/api/placeholder/400/250",
    price: "199 MAD",
    category: "Finance",
    isNew: true
  },
  {
    title: "Modern Construction Techniques",
    instructor: "Fatima Zahra",
    level: "Advanced",
    rating: 4.7,
    students: "5.1k",
    duration: "12h 45m",
    image: "/api/placeholder/400/250",
    price: "299 MAD",
    category: "Construction",
    isPopular: true
  },
  {
    title: "UI/UX Design Fundamentals",
    instructor: "Youssef Alami",
    level: "Beginner",
    rating: 4.9,
    students: "15.3k",
    duration: "10h 20m",
    image: "/api/placeholder/400/250",
    price: "Free",
    category: "Design",
    isHot: true
  },
  {
    title: "Digital Marketing Strategy",
    instructor: "Laila Mansouri",
    level: "Intermediate",
    rating: 4.6,
    students: "9.8k",
    duration: "7h 55m",
    image: "/api/placeholder/400/250",
    price: "249 MAD",
    category: "Business",
    isNew: true
  },
  {
    title: "Fitness & Nutrition Basics",
    instructor: "Karim El Fassi",
    level: "Beginner",
    rating: 4.8,
    students: "6.7k",
    duration: "5h 30m",
    image: "/api/placeholder/400/250",
    price: "149 MAD",
    category: "Health",
    isPopular: true
  }
];

const stats = [
  { label: "Active Students", value: "50K+", icon: Users },
  { label: "Courses Available", value: "500+", icon: BookOpen },
  { label: "Expert Instructors", value: "100+", icon: Award },
  { label: "Success Rate", value: "95%", icon: Trophy }
];

export default function EnhancedHomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="min-h-screen bg-black text-white">


      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-purple-900/20 to-blue-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,100,0.1),transparent_70%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-red-500 to-pink-500 px-4 py-2 rounded-full text-sm font-medium flex items-center">
                <Sparkles size={16} className="mr-2" />
                Learn in Moroccan Darija
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Master New Skills,
              <br />
              <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                Your Way
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              High-quality courses in finance, web development, construction, and more - all in your language!
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="What do you want to learn today?"
                  className="w-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full pl-12 pr-4 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                <button
                  onClick={handleSearch}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 px-6 py-2 rounded-full font-medium transition-all"
                >
                  Search
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full mb-3">
                    <stat.icon size={24} className="text-red-400" />
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Browse by Category
            </h2>
            <p className="text-gray-400 text-lg">
              Find the perfect course for your goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {allcategories.map((category, index) => (
              <div
                key={index}
                className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                    {category.name}
                  </h3>
                  <p className="text-gray-400 mb-4">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-red-400 font-semibold">
                      {category.courseCount} courses
                    </span>
                    <ChevronRight className="text-gray-500 group-hover:text-red-400 group-hover:translate-x-1 transition-all duration-300" size={20} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                🔥 Featured Courses
              </h2>
              <p className="text-gray-400 text-lg">
                Handpicked courses from our top instructors
              </p>
            </div>
            <button className="mt-4 md:mt-0 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 px-6 py-3 rounded-full font-medium transition-all flex items-center">
              View All Courses
              <ArrowRight size={18} className="ml-2" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course, index) => (
              <div
                key={index}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Course Image */}
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                    <PlayCircle size={48} className="text-white/60 group-hover:text-red-400 group-hover:scale-110 transition-all duration-300" />
                  </div>
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    {course.isHot && (
                      <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                        <Zap size={12} className="mr-1" />
                        Hot
                      </span>
                    )}
                    {course.isNew && (
                      <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                        <Sparkles size={12} className="mr-1" />
                        New
                      </span>
                    )}
                    {course.isPopular && (
                      <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                        <TrendingUp size={12} className="mr-1" />
                        Popular
                      </span>
                    )}
                  </div>

                  <div className="absolute top-3 right-3">
                    <span className="bg-black/70 backdrop-blur-sm text-white px-2 py-1 rounded-full text-sm font-medium">
                      {course.price}
                    </span>
                  </div>
                </div>

                {/* Course Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                      {course.category}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      course.level === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                      course.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {course.level}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                    {course.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4">By {course.instructor}</p>

                  <div className="flex items-center justify-between mb-6 text-sm text-gray-400">
                    <div className="flex items-center">
                      <Star className="text-yellow-400 mr-1" size={16} />
                      <span className="text-white font-medium mr-1">{course.rating}</span>
                      <span>({course.students})</span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      {course.duration}
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center">
                    <Play size={18} className="mr-2" />
                    Start Learning
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-red-900/20 to-pink-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full mb-6">
              <Coffee size={32} className="text-red-400" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Get the latest courses and learning tips delivered to your inbox
            </p>

            <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
              <button
                onClick={() => console.log('Newsletter signup')}
                className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 px-8 py-3 rounded-full font-medium transition-all whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent mb-4">
              LitDarija
            </div>
            <p className="text-gray-400 mb-6">
              Empowering Moroccans through quality education in Darija
            </p>
            <div className="flex justify-center space-x-6 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">About</a>
              <a href="#" className="hover:text-white transition-colors">Courses</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}