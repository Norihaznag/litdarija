"use client" ;
import { useState } from 'react';
import { ChevronDown, Filter, Star, Search } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';

// Sample course data - this would come from an API in a real application
const allCourses = [
  {
    id: 1,
    title: "Financial Literacy Basics",
    description: "Learn the fundamentals of personal finance management and financial planning.",
    instructor: "Karim Alaoui",
    category: "Finance",
    level: "Beginner",
    rating: 4.8,
    students: 1245,
    duration: "6 weeks",
    price: 199,
    image: "/api/placeholder/320/180"
  },
  {
    id: 2,
    title: "Investment Strategies",
    description: "Master various investment techniques for long-term wealth building.",
    instructor: "Leila Haddioui",
    category: "Finance",
    level: "Intermediate",
    rating: 4.6,
    students: 892,
    duration: "8 weeks",
    price: 249,
    image: "/api/placeholder/320/180"
  },
  {
    id: 3,
    title: "Full Stack Web Development",
    description: "Comprehensive course covering frontend and backend web development.",
    instructor: "Yasmine Benkiran",
    category: "Web Development",
    level: "Intermediate",
    rating: 4.9,
    students: 876,
    duration: "12 weeks",
    price: 299,
    image: "/api/placeholder/320/180"
  },
  {
    id: 4,
    title: "Frontend Development with React",
    description: "Learn to build modern, responsive user interfaces with React.",
    instructor: "Hassan Ouahbi",
    category: "Web Development",
    level: "Beginner",
    rating: 4.7,
    students: 1023,
    duration: "8 weeks",
    price: 249,
    image: "/api/placeholder/320/180"
  },
  {
    id: 5,
    title: "Construction Management",
    description: "Master the principles of managing construction projects efficiently.",
    instructor: "Omar Benjelloun",
    category: "Construction",
    level: "Advanced",
    rating: 4.7,
    students: 524,
    duration: "10 weeks",
    price: 279,
    image: "/api/placeholder/320/180"
  },
  {
    id: 6,
    title: "UI/UX Design Fundamentals",
    description: "Learn the principles of creating user-friendly digital experiences.",
    instructor: "Nadia Elmaleh",
    category: "Design",
    level: "Beginner",
    rating: 4.9,
    students: 1156,
    duration: "6 weeks",
    price: 229,
    image: "/api/placeholder/320/180"
  },
  {
    id: 7,
    title: "Business Leadership",
    description: "Develop essential leadership skills for managing teams and organizations.",
    instructor: "Tarik Idrissi",
    category: "Business",
    level: "Intermediate",
    rating: 4.8,
    students: 785,
    duration: "8 weeks",
    price: 269,
    image: "/api/placeholder/320/180"
  },
  {
    id: 8,
    title: "Darija for Beginners",
    description: "Learn the basics of Moroccan Darija for everyday communication.",
    instructor: "Samira Tazi",
    category: "Languages",
    level: "Beginner",
    rating: 4.9,
    students: 1342,
    duration: "4 weeks",
    price: 179,
    image: "/api/placeholder/320/180"
  },
  {
    id: 9,
    title: "Sustainable Agriculture",
    description: "Learn modern farming techniques that promote sustainability.",
    instructor: "Youssef Amrani",
    category: "Agriculture",
    level: "Intermediate",
    rating: 4.6,
    students: 438,
    duration: "8 weeks",
    price: 219,
    image: "/api/placeholder/320/180"
  },
  {
    id: 10,
    title: "First Aid & Emergency Response",
    description: "Essential knowledge for handling medical emergencies.",
    instructor: "Dr. Amina Boutaleb",
    category: "Healthcare",
    level: "Beginner",
    rating: 4.8,
    students: 892,
    duration: "3 weeks",
    price: 159,
    image: "/api/placeholder/320/180"
  },
  {
    id: 11,
    title: "Backend Development with Node.js",
    description: "Build scalable server-side applications using Node.js and Express.",
    instructor: "Mehdi Elouazzani",
    category: "Web Development",
    level: "Intermediate",
    rating: 4.7,
    students: 765,
    duration: "9 weeks",
    price: 269,
    image: "/api/placeholder/320/180"
  },
  {
    id: 12,
    title: "Digital Marketing Fundamentals",
    description: "Learn the basics of promoting products and services online.",
    instructor: "Sofia Bennani",
    category: "Business",
    level: "Beginner",
    rating: 4.8,
    students: 1087,
    duration: "5 weeks",
    price: 199,
    image: "/api/placeholder/320/180"
  }
];

// Available filters
const categories = ["Finance", "Web Development", "Construction", "Design", "Business", "Languages", "Agriculture", "Healthcare"];
const levels = ["Beginner", "Intermediate", "Advanced"];
const priceRanges = ["All Prices", "Under 200 MAD", "200-250 MAD", "Over 250 MAD"];

export default function AllCoursesPage() {
  // State for filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All Prices');
  const [sortBy, setSortBy] = useState('popularity'); // 'popularity', 'rating', 'newest'
  const [showFilters, setShowFilters] = useState(false);

  // Filter and sort courses
  const filteredCourses = allCourses.filter(course => {
    // Apply search filter
    if (searchQuery && !course.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !course.description.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Apply category filter
    if (selectedCategory && course.category !== selectedCategory) {
      return false;
    }
    
    // Apply level filter
    if (selectedLevel && course.level !== selectedLevel) {
      return false;
    }
    
    // Apply price filter
    if (selectedPriceRange !== 'All Prices') {
      if (selectedPriceRange === 'Under 200 MAD' && course.price >= 200) {
        return false;
      } else if (selectedPriceRange === '200-250 MAD' && (course.price < 200 || course.price > 250)) {
        return false;
      } else if (selectedPriceRange === 'Over 250 MAD' && course.price <= 250) {
        return false;
      }
    }
    
    return true;
  }).sort((a, b) => {
    // Sort courses
    if (sortBy === 'rating') {
      return b.rating - a.rating;
    } else if (sortBy === 'popularity') {
      return b.students - a.students;
    } else if (sortBy === 'newest') {
      // This would typically use a date field, but we'll use ID as a proxy
      return b.id - a.id;
    }
    return 0;
  });

  // Reset filters
  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('');
    setSelectedLevel('');
    setSelectedPriceRange('All Prices');
    setSortBy('popularity');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
   
      {/* Page Title */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold">All Courses</h1>
          <p className="mt-2 text-lg">Browse our complete catalog of courses in Moroccan Darija</p>
        </div>
      </section>
      
      {/* Filters and Courses */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters - Mobile Toggle */}
            <div className="lg:hidden w-full mb-4">
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="w-full flex items-center justify-between bg-white p-4 rounded-lg shadow border border-gray-200"
              >
                <span className="font-medium flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Filter Courses
                </span>
                <ChevronDown className={`w-5 h-5 transition-transform ${showFilters ? 'transform rotate-180' : ''}`} />
              </button>
            </div>
            
            {/* Filters Sidebar */}
            <div className={`lg:w-1/4 ${showFilters ? 'block' : 'hidden'} lg:block`}>
              <div className="bg-white rounded-lg shadow p-6 sticky top-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-800">Filters</h2>
                  <button 
                    onClick={resetFilters}
                    className="text-sm text-emerald-600 hover:text-emerald-700"
                  >
                    Reset All
                  </button>
                </div>
                
                {/* Search Filter */}
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">Search</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search courses..."
                      className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                    <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                  </div>
                </div>
                
                {/* Category Filter */}
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="">All Categories</option>
                    {categories.map((category, index) => (
                      <option key={index} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                
                {/* Level Filter */}
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">Level</label>
                  <div className="space-y-2">
                    <button
                      onClick={() => setSelectedLevel('')}
                      className={`px-4 py-2 rounded-full text-sm font-medium ${
                        selectedLevel === '' ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                    >
                      All Levels
                    </button>
                    {levels.map((level, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedLevel(level)}
                        className={`px-4 py-2 rounded-full text-sm font-medium ${
                          selectedLevel === level ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Price Filter */}
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">Price</label>
                  <select
                    value={selectedPriceRange}
                    onChange={(e) => setSelectedPriceRange(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    {priceRanges.map((range, index) => (
                      <option key={index} value={range}>{range}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            
            {/* Courses Grid */}
            <div className="lg:w-3/4">
              <div className="bg-white rounded-lg shadow p-6 mb-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <h2 className="text-xl font-bold text-gray-800">{filteredCourses.length} courses found</h2>
                  <div className="flex items-center">
                    <span className="text-gray-600 mr-2">Sort by:</span>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      <option value="popularity">Most Popular</option>
                      <option value="rating">Highest Rated</option>
                      <option value="newest">Newest</option>
                    </select>
                  </div>
                </div>
              </div>
              
              {filteredCourses.length === 0 ? (
                <div className="bg-white rounded-lg shadow p-8 text-center">
                  <h3 className="text-xl font-medium text-gray-700 mb-2">No courses found</h3>
                  <p className="text-gray-500 mb-4">Try adjusting your filters or search terms</p>
                  <button 
                    onClick={resetFilters}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-6 rounded-md font-medium transition duration-200"
                  >
                    Reset Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredCourses.map((course) => (
                    <div key={course.id} className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-200">
                      <img 
                        src={course.image} 
                        alt={course.title} 
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full">{course.category}</span>
                          <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">{course.level}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-gray-800">{course.title}</h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>
                        <div className="flex items-center mb-2">
                          <span className="text-gray-600 text-sm">By </span>
                          <span className="text-emerald-600 text-sm font-medium ml-1">{course.instructor}</span>
                        </div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="font-medium ml-1">{course.rating}</span>
                            <span className="text-gray-500 text-sm ml-1">({course.students})</span>
                          </div>
                          <span className="text-gray-600 text-sm">{course.duration}</span>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <span className="text-xl font-bold text-gray-800">{course.price} MAD</span>
                          <button className="bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md font-medium transition duration-200">
                            Enroll Now
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <Newsletter />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}