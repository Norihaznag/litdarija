"use client";
import { useState, useMemo, useCallback, memo, Suspense } from 'react';
import { Search, Star, Clock, Users, Filter, Zap, Sparkles, TrendingUp, Play } from 'lucide-react';
import { categories, levels, priceRanges, allCourses } from '../data/data';
import dynamic from 'next/dynamic';
import Link from 'next/link';

// Memoized course card component
const CourseCard = memo(({ course }) => (
  <div className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105">
    {/* Course Image */}
    <div className="relative">
      <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
        <div className="text-4xl">📚</div>
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
        <span className="bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
          {course.price === 0 ? 'Free' : `${course.price} MAD`}
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

      <Link  href={`courses/${course.slug}`} className="text-xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
        {course.title}
      </Link>
      
      <p className="text-gray-400 mb-4">By {course.instructor}</p>
      <p className="text-gray-400 text-sm mb-4">{course.description}</p>

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

      <Link href={`courses/${course.slug}`} className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center">
        <Play size={18} className="mr-2" />
        View Course
      </Link>
    </div>
  </div>
));

CourseCard.displayName = 'CourseCard';

// Memoized filter sidebar
const FilterSidebar = memo(({ 
  selectedCategory, 
  selectedLevel, 
  selectedPriceRange, 
  onCategoryChange, 
  onLevelChange, 
  onPriceRangeChange, 
  onResetFilters 
}) => (
  <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 sticky top-6">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-xl font-bold">Filters</h2>
      <button 
        onClick={onResetFilters}
        className="text-sm text-red-400 hover:text-red-300 transition-colors"
      >
        Reset All
      </button>
    </div>
    
    {/* Category Filter */}
    <div className="mb-6">
      <label className="block text-gray-300 font-medium mb-3">Category</label>
      <select
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
      >
        {categories.map((category) => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
    </div>

    {/* Level Filter */}
    <div className="mb-6">
      <label className="block text-gray-300 font-medium mb-3">Level</label>
      <div className="space-y-2">
        {levels.map((level) => (
          <button
            key={level}
            onClick={() => onLevelChange(level)}
            className={`w-full px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedLevel === level 
                ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white' 
                : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {level}
          </button>
        ))}
      </div>
    </div>

    {/* Price Filter */}
    <div className="mb-6">
      <label className="block text-gray-300 font-medium mb-3">Price</label>
      <select
        value={selectedPriceRange}
        onChange={(e) => onPriceRangeChange(e.target.value)}
        className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
      >
        {priceRanges.map((range) => (
          <option key={range} value={range}>{range}</option>
        ))}
      </select>
    </div>
  </div>
));

FilterSidebar.displayName = 'FilterSidebar';

// Virtualized course grid for large datasets
const CourseGrid = memo(({ courses }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
    {courses.map((course) => (
      <CourseCard key={course.id} course={course} />
    ))}
  </div>
));

CourseGrid.displayName = 'CourseGrid';

export default function ModernCoursesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedLevel, setSelectedLevel] = useState('All Levels');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All Prices');
  const [showFilters, setShowFilters] = useState(false);

  // Memoized filter functions
  const filterCourses = useCallback((courses, query, category, level, priceRange) => {
    return courses.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(query.toLowerCase()) ||
                           course.description.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = category === 'All Categories' || course.category === category;
      const matchesLevel = level === 'All Levels' || course.level === level;
      
      let matchesPrice = true;
      if (priceRange !== 'All Prices') {
        if (priceRange === 'Free') matchesPrice = course.price === 0;
        else if (priceRange === 'Under 200 MAD') matchesPrice = course.price > 0 && course.price < 200;
        else if (priceRange === '200-250 MAD') matchesPrice = course.price >= 200 && course.price <= 250;
        else if (priceRange === 'Over 250 MAD') matchesPrice = course.price > 250;
      }
      
      return matchesSearch && matchesCategory && matchesLevel && matchesPrice;
    });
  }, []);

  // Memoized filtered courses
  const filteredCourses = useMemo(() => 
    filterCourses(allCourses, searchQuery, selectedCategory, selectedLevel, selectedPriceRange),
    [searchQuery, selectedCategory, selectedLevel, selectedPriceRange, filterCourses]
  );

  // Memoized event handlers
  const handleSearchChange = useCallback((e) => {
    setSearchQuery(e.target.value);
  }, []);

  const handleCategoryChange = useCallback((category) => {
    setSelectedCategory(category);
  }, []);

  const handleLevelChange = useCallback((level) => {
    setSelectedLevel(level);
  }, []);

  const handlePriceRangeChange = useCallback((priceRange) => {
    setSelectedPriceRange(priceRange);
  }, []);

  const resetFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedCategory('All Categories');
    setSelectedLevel('All Levels');
    setSelectedPriceRange('All Prices');
  }, []);

  const toggleFilters = useCallback(() => {
    setShowFilters(prev => !prev);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-purple-900/20 to-blue-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,100,0.1),transparent_70%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              All Courses
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Browse our complete catalog of courses in Moroccan Darija
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Search courses..."
                  className="w-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full pl-12 pr-4 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Results */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden mb-6">
            <button 
              onClick={toggleFilters}
              className="w-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-4 flex items-center justify-between"
            >
              <span className="flex items-center">
                <Filter className="w-5 h-5 mr-2 text-red-400" />
                Filters
              </span>
              <span className="text-gray-400">{showFilters ? 'Hide' : 'Show'}</span>
            </button>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className={`lg:w-1/4 ${showFilters ? 'block' : 'hidden'} lg:block`}>
              <FilterSidebar
                selectedCategory={selectedCategory}
                selectedLevel={selectedLevel}
                selectedPriceRange={selectedPriceRange}
                onCategoryChange={handleCategoryChange}
                onLevelChange={handleLevelChange}
                onPriceRangeChange={handlePriceRangeChange}
                onResetFilters={resetFilters}
              />
            </div>
            
            {/* Courses Grid */}
            <div className="lg:w-3/4">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 mb-8">
                <h2 className="text-xl font-bold">
                  {filteredCourses.length} courses found
                </h2>
              </div>
              
              <Suspense fallback={<div className="text-center py-8">Loading courses...</div>}>
                {filteredCourses.length === 0 ? (
                  <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-12 text-center">
                    <h3 className="text-xl font-medium text-gray-300 mb-4">No courses found</h3>
                    <p className="text-gray-400 mb-6">Try adjusting your filters or search terms</p>
                    <button 
                      onClick={resetFilters}
                      className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 px-8 py-3 rounded-full font-medium transition-all"
                    >
                      Reset Filters
                    </button>
                  </div>
                ) : (
                  <CourseGrid courses={filteredCourses} />
                )}
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}