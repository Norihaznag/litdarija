"use client";
import { useState } from 'react';
import { 
  Play,
  ThumbsUp,
  Share2,
  Bookmark,
  Users,
  Clock,
  Star,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  PlayCircle,
  Award,
  Zap,
  Eye,
  Calendar
} from 'lucide-react';

// Sample course data
const courseData = {
  title: "Complete Web Development Bootcamp 2025",
  instructor: {
    name: "Ahmed Hassan",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    subscribers: "125K"
  },
  stats: {
    views: "2.3M",
    rating: 4.9,
    students: "45K",
    duration: "12 weeks",
    updated: "2 days ago"
  },
  price: {
    current: 299,
    original: 899,
    discount: 67
  },
  quickFacts: [
    "🎯 Build 12 real projects",
    "⚡ Job-ready in 12 weeks", 
    "🏆 Certificate included",
    "💼 Career support"
  ],
  curriculum: [
    { title: "HTML & CSS Basics", lessons: 8, duration: "2h 15m", completed: false },
    { title: "JavaScript Fundamentals", lessons: 12, duration: "3h 45m", completed: false },
    { title: "React Development", lessons: 15, duration: "4h 30m", completed: false },
    { title: "Backend with Node.js", lessons: 10, duration: "3h 20m", completed: false },
    { title: "Database & MongoDB", lessons: 7, duration: "2h 10m", completed: false },
    { title: "Final Projects", lessons: 5, duration: "1h 50m", completed: false }
  ]
};

export default function YouTubeCourseDetails() {
  const [showDescription, setShowDescription] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [liked, setLiked] = useState(false);

  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Video Player Area */}
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Main Video/Content Area */}
            <div className="lg:col-span-2">
              {/* Video Player */}
              <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden mb-4 group">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=450&fit=crop" 
                  alt="Course preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300">
                  <button className="bg-red-600 hover:bg-red-700 rounded-full p-4 transform hover:scale-110 transition-all duration-200 shadow-2xl">
                    <Play className="h-8 w-8 ml-1 fill-white" />
                  </button>
                </div>
                
                {/* Quick Stats Overlay */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                    🔥 TRENDING
                  </span>
                  <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
                    67% OFF
                  </span>
                </div>
                
                <div className="absolute bottom-4 right-4 bg-black bg-opacity-80 text-white text-sm px-2 py-1 rounded">
                  17:45
                </div>
              </div>

              {/* Course Title */}
              <h1 className="text-xl md:text-2xl font-bold mb-3 leading-tight">
                {courseData.title}
              </h1>

              {/* Stats Row - YouTube Style */}
              <div className="flex flex-wrap items-center justify-between mb-4 text-sm text-gray-300">
                <div className="flex items-center gap-4 mb-2 lg:mb-0">
                  <span className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    {courseData.stats.views} views
                  </span>
                  <span>{courseData.stats.updated}</span>
                </div>
                
                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => setLiked(!liked)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-200 ${
                      liked ? 'bg-blue-600 text-white' : 'bg-gray-800 hover:bg-gray-700'
                    }`}
                  >
                    <ThumbsUp className={`h-4 w-4 ${liked ? 'fill-current' : ''}`} />
                    <span className="text-sm font-medium">{liked ? '1.2K' : '1.2K'}</span>
                  </button>
                  
                  <button className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-full transition-colors duration-200">
                    <Share2 className="h-4 w-4" />
                    <span className="text-sm font-medium">Share</span>
                  </button>
                  
                  <button 
                    onClick={() => setIsBookmarked(!isBookmarked)}
                    className={`p-2 rounded-full transition-all duration-200 ${
                      isBookmarked ? 'bg-blue-600 text-white' : 'bg-gray-800 hover:bg-gray-700'
                    }`}
                  >
                    <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-current' : ''}`} />
                  </button>
                </div>
              </div>

              {/* Instructor Info */}
              <div className="flex items-center justify-between bg-gray-900 rounded-lg p-4 mb-4">
                <div className="flex items-center gap-3">
                  <img 
                    src={courseData.instructor.image} 
                    alt={courseData.instructor.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{courseData.instructor.name}</h3>
                    <p className="text-sm text-gray-400">{courseData.instructor.subscribers} subscribers</p>
                  </div>
                </div>
                
                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-medium transition-colors duration-200">
                  Subscribe
                </button>
              </div>

              {/* Quick Course Facts */}
              <div className="bg-gray-900 rounded-lg p-4 mb-4">
                <div className="grid grid-cols-2 gap-3">
                  {courseData.quickFacts.map((fact, index) => (
                    <div key={index} className="text-sm font-medium text-green-400">
                      {fact}
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="bg-gray-900 rounded-lg p-4 mb-4">
                <div className={`text-sm text-gray-300 leading-relaxed ${showDescription ? '' : 'line-clamp-3'}`}>
                  Master web development from zero to hero! This comprehensive course covers everything you need to become a professional web developer. Build real projects, learn modern technologies, and get job-ready skills that employers actually want.
                  
                  {showDescription && (
                    <div className="mt-3 space-y-2">
                      <p>🚀 What you'll build:</p>
                      <p>• E-commerce website with React & Node.js</p>
                      <p>• Social media app with real-time features</p>
                      <p>• Portfolio website that gets you hired</p>
                      <p>• And 9 more exciting projects!</p>
                      
                      <p className="mt-3">💼 Career support included:</p>
                      <p>• Resume review & optimization</p>
                      <p>• Interview preparation</p>
                      <p>• Job placement assistance</p>
                    </div>
                  )}
                </div>
                
                <button 
                  onClick={() => setShowDescription(!showDescription)}
                  className="text-blue-400 hover:text-blue-300 text-sm font-medium mt-2 flex items-center gap-1"
                >
                  {showDescription ? (
                    <>Show less <ChevronUp className="h-4 w-4" /></>
                  ) : (
                    <>Show more <ChevronDown className="h-4 w-4" /></>
                  )}
                </button>
              </div>

              {/* Course Curriculum - Expandable */}
              <div className="bg-gray-900 rounded-lg p-4">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <PlayCircle className="h-5 w-5 text-red-500" />
                  Course Content
                </h3>
                
                <div className="space-y-2">
                  {courseData.curriculum.map((section, index) => (
                    <div key={index} className="border border-gray-700 rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleSection(index)}
                        className="w-full flex items-center justify-between p-3 hover:bg-gray-800 transition-colors duration-200"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-xs font-bold">
                            {index + 1}
                          </div>
                          <div className="text-left">
                            <div className="font-medium">{section.title}</div>
                            <div className="text-xs text-gray-400">
                              {section.lessons} lessons • {section.duration}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          {section.completed && <CheckCircle className="h-4 w-4 text-green-500" />}
                          <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                            activeSection === index ? 'rotate-180' : ''
                          }`} />
                        </div>
                      </button>
                      
                      {activeSection === index && (
                        <div className="bg-gray-800 p-3 border-t border-gray-700">
                          <div className="space-y-2 text-sm">
                            {Array.from({length: section.lessons}, (_, i) => (
                              <div key={i} className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded">
                                <PlayCircle className="h-4 w-4 text-gray-400" />
                                <span>Lesson {i + 1}: Introduction to {section.title}</span>
                                <span className="ml-auto text-xs text-gray-400">5:30</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar - Enrollment Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-4">
                {/* Price Card */}
                <div className="bg-gray-900 rounded-lg p-6 mb-4 border border-gray-700">
                  <div className="text-center mb-4">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-3xl font-bold text-green-400">{courseData.price.current} MAD</span>
                      <span className="text-lg text-gray-500 line-through">{courseData.price.original} MAD</span>
                    </div>
                    <div className="bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-full inline-block">
                      {courseData.price.discount}% OFF - Limited Time!
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6 text-center">
                    <div className="bg-gray-800 rounded-lg p-3">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="font-bold">{courseData.stats.rating}</span>
                      </div>
                      <div className="text-xs text-gray-400">Rating</div>
                    </div>
                    
                    <div className="bg-gray-800 rounded-lg p-3">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Users className="h-4 w-4 text-blue-400" />
                        <span className="font-bold">{courseData.stats.students}</span>
                      </div>
                      <div className="text-xs text-gray-400">Students</div>
                    </div>
                    
                    <div className="bg-gray-800 rounded-lg p-3">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Clock className="h-4 w-4 text-purple-400" />
                        <span className="font-bold">{courseData.stats.duration}</span>
                      </div>
                      <div className="text-xs text-gray-400">Duration</div>
                    </div>
                    
                    <div className="bg-gray-800 rounded-lg p-3">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Award className="h-4 w-4 text-orange-400" />
                        <span className="font-bold text-xs">Certificate</span>
                      </div>
                      <div className="text-xs text-gray-400">Included</div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-3">
                    <button className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-lg font-bold text-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2">
                      <Zap className="h-5 w-5" />
                      Enroll Now
                    </button>
                    
                    <button className="w-full bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-lg font-medium transition-colors duration-200 border border-gray-600">
                      Try Free Preview
                    </button>
                  </div>

                  {/* Guarantee */}
                  <div className="mt-4 text-center">
                    <div className="bg-green-900 border border-green-600 rounded-lg p-3">
                      <div className="text-green-400 font-medium text-sm">✅ 30-Day Money Back Guarantee</div>
                      <div className="text-green-300 text-xs mt-1">Risk-free learning experience</div>
                    </div>
                  </div>
                </div>

                {/* What's Included - Quick List */}
                <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                  <h3 className="font-bold mb-3 text-green-400">✨ What's Included:</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>57 video lessons (18+ hours)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>12 hands-on projects</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>Source code & resources</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>Lifetime access</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>Mobile & desktop access</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>Certificate of completion</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}