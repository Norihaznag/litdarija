"use client";
import { useState } from 'react';
import { ChevronDown, Filter, Star, Search } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import Link from 'next/link';
import { allCourses, categories, levels, priceRanges } from '../data/data';
import { createSlug } from '../utils/slug';

// Filter functions
const filterCourses = (courses, filters) => {
  return courses.filter(course => {
    // Search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      const matchesTitle = course.title.toLowerCase().includes(searchLower);
      const matchesDescription = course.description.toLowerCase().includes(searchLower);
      if (!matchesTitle && !matchesDescription) return false;
    }
    
    // Category filter
    if (filters.category && course.category !== filters.category) {
      return false;
    }
    
    // Level filter
    if (filters.level && course.level !== filters.level) {
      return false;
    }
    
    // Price filter
    if (filters.priceRange !== 'All Prices') {
      const price = course.price;
      switch (filters.priceRange) {
        case 'Under 200 MAD':
          if (price >= 200) return false;
          break;
        case '200-250 MAD':
          if (price < 200 || price > 250) return false;
          break;
        case 'Over 250 MAD':
          if (price <= 250) return false;
          break;
      }
    }
    
    return true;
  });
};

const sortCourses = (courses, sortBy) => {
  const sortedCourses = [...courses];
  
  switch (sortBy) {
    case 'rating':
      return sortedCourses.sort((a, b) => b.rating - a.rating);
    case 'popularity':
      return sortedCourses.sort((a, b) => b.students - a.students);
    case 'newest':
      return sortedCourses.sort((a, b) => b.id - a.id);
    default:
      return sortedCourses;
  }
};

// Components
const MobileFilterToggle = ({ showFilters, setShowFilters }) => (
  <div className="lg:hidden w-full mb-4">
    <button 
      onClick={() => setShowFilters(!showFilters)}
      className="w-full flex items-center justify-between bg-white p-4 rounded-lg shadow border border-gray-200"
    >
      <span className="font-medium flex items-center">
        <Filter className="w-5 h-5 mr-2" />
        Filter Courses
      </span>
      <ChevronDown className={`w-5 h-5 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
    </button>
  </div>
);

const SearchFilter = ({ searchQuery, setSearchQuery }) => (
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
);

const CategoryFilter = ({ selectedCategory, setSelectedCategory }) => (
  <div className="mb-6">
    <label className="block text-gray-700 font-medium mb-2">Category</label>
    <select
      value={selectedCategory}
      onChange={(e) => setSelectedCategory(e.target.value)}
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
    >
      <option value="">All Categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>{category}</option>
      ))}
    </select>
  </div>
);

const LevelFilter = ({ selectedLevel, setSelectedLevel }) => (
  <div className="mb-6">
    <label className="block text-gray-700 font-medium mb-2">Level</label>
    <div className="space-y-2">
      <FilterButton
        isActive={selectedLevel === ''}
        onClick={() => setSelectedLevel('')}
        label="All Levels"
      />
      {levels.map((level) => (
        <FilterButton
          key={level}
          isActive={selectedLevel === level}
          onClick={() => setSelectedLevel(level)}
          label={level}
        />
      ))}
    </div>
  </div>
);

const FilterButton = ({ isActive, onClick, label }) => (
  <button
    onClick={onClick}
    className={`w-full px-4 py-2 rounded-full text-sm font-medium transition-colors ${
      isActive 
        ? 'bg-emerald-600 text-white' 
        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
    }`}
  >
    {label}
  </button>
);

const PriceFilter = ({ selectedPriceRange, setSelectedPriceRange }) => (
  <div className="mb-6">
    <label className="block text-gray-700 font-medium mb-2">Price</label>
    <select
      value={selectedPriceRange}
      onChange={(e) => setSelectedPriceRange(e.target.value)}
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
    >
      {priceRanges.map((range) => (
        <option key={range} value={range}>{range}</option>
      ))}
    </select>
  </div>
);

const CourseCard = ({ course }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-200">
    <Link href={`/courses/${course.slug}`}>
      <img 
        src="/litdarija_logo_vector.svg" 
        alt={course.title} 
        className="w-full h-48 object-cover cursor-pointer hover:opacity-90 transition-opacity"
      />
    </Link>
    <div className="p-6">
      <div className="flex items-center justify-between mb-2">
        <span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full">
          {course.category}
        </span>
        <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
          {course.level}
        </span>
      </div>
      
      <Link href={`/courses/${course.slug}`}>
        <h3 className="text-xl font-bold mb-2 text-gray-800 hover:text-emerald-600 transition-colors cursor-pointer">
          {course.title}
        </h3>
      </Link>
      
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
        <Link 
          href={`/courses/${course.slug}`} 
          className="bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md font-medium transition-colors duration-200"
        >
          View Course
        </Link>
      </div>
    </div>
  </div>
);

const NoCoursesFound = ({ onReset }) => (
  <div className="bg-white rounded-lg shadow p-8 text-center">
    <h3 className="text-xl font-medium text-gray-700 mb-2">No courses found</h3>
    <p className="text-gray-500 mb-4">Try adjusting your filters or search terms</p>
    <button 
      onClick={onReset}
      className="bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-6 rounded-md font-medium transition-colors duration-200"
    >
      Reset Filters
    </button>
  </div>
);

// Main component
export default function AllCoursesPage() {
  // State management
  const [filters, setFilters] = useState({
    search: '',
    category: '',
    level: '',
    priceRange: 'All Prices'
  });
  const [sortBy, setSortBy] = useState('popularity');
  const [showFilters, setShowFilters] = useState(false);

  // Update filter functions
  const updateFilter = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const resetFilters = () => {
    setFilters({
      search: '',
      category: '',
      level: '',
      priceRange: 'All Prices'
    });
    setSortBy('popularity');
  };

  // Process courses
  const filteredCourses = filterCourses(allCourses, filters);
  const sortedCourses = sortCourses(filteredCourses, sortBy);

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
            <MobileFilterToggle showFilters={showFilters} setShowFilters={setShowFilters} />
            
            {/* Filters Sidebar */}
            <div className={`lg:w-1/4 ${showFilters ? 'block' : 'hidden'} lg:block`}>
              <div className="bg-white rounded-lg shadow p-6 sticky top-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-800">Filters</h2>
                  <button 
                    onClick={resetFilters}
                    className="text-sm text-emerald-600 hover:text-emerald-700 transition-colors"
                  >
                    Reset All
                  </button>
                </div>
                
                <SearchFilter 
                  searchQuery={filters.search} 
                  setSearchQuery={(value) => updateFilter('search', value)} 
                />
                <CategoryFilter 
                  selectedCategory={filters.category} 
                  setSelectedCategory={(value) => updateFilter('category', value)} 
                />
                <LevelFilter 
                  selectedLevel={filters.level} 
                  setSelectedLevel={(value) => updateFilter('level', value)} 
                />
                <PriceFilter 
                  selectedPriceRange={filters.priceRange} 
                  setSelectedPriceRange={(value) => updateFilter('priceRange', value)} 
                />
              </div>
            </div>
            
            {/* Courses Grid */}
            <div className="lg:w-3/4">
              <div className="bg-white rounded-lg shadow p-6 mb-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <h2 className="text-xl font-bold text-gray-800">
                    {sortedCourses.length} courses found
                  </h2>
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
              
              {sortedCourses.length === 0 ? (
                <NoCoursesFound onReset={resetFilters} />
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {sortedCourses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      <Newsletter />
      <Footer />
    </div>
  );
}