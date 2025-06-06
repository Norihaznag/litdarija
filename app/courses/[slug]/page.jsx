"use client";
import { useState } from 'react';
import { 
  Clock, 
  Users, 
  Calendar, 
  Award, 
  Book, 
  CheckCircle, 
  ChevronDown, 
  PlayCircle, 
  MessageCircle, 
  ThumbsUp, 
  Star,
  Download,
  Globe,
  Bookmark,
  Share2,
  Heart,
  ChevronRight,
  Play
} from 'lucide-react';

// Sample data for a single course
const courseData = {
  id: 3,
  title: "Full Stack Web Development",
  description: "Comprehensive course covering frontend and backend web development. Learn to build complete web applications from scratch using modern technologies and best practices. Perfect for those looking to become professional web developers or enhance their existing skills.",
  longDescription: "This comprehensive course will take you from the basics of web development to building complex, full-stack applications. You'll learn both front-end and back-end technologies, working with HTML, CSS, JavaScript, React for the frontend, and Node.js, Express, and MongoDB for the backend. By the end of this course, you'll be able to build complete web applications independently and have a portfolio of projects to showcase your skills.",
  instructor: {
    name: "Yasmine Benkiran",
    bio: "Full Stack Developer with 10+ years of experience. Yasmine has worked with major tech companies and has taught over 10,000 students online. She specializes in React, Node.js, and modern JavaScript development.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b1f5?w=150&h=150&fit=crop&crop=face"
  },
  category: "Web Development",
  level: "Intermediate",
  language: "Darija",
  rating: 4.9,
  students: 876,
  reviews: 124,
  lastUpdated: "March 2025",
  duration: "12 weeks",
  lessonsCount: 48,
  hoursCount: 72,
  price: 299,
  discountPrice: 249,
  image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=450&fit=crop",
  whatYouWillLearn: [
    "Build complete web applications from scratch",
    "Master HTML, CSS, and JavaScript fundamentals",
    "Create responsive user interfaces with React",
    "Develop backend APIs with Node.js and Express",
    "Work with databases like MongoDB",
    "Deploy your applications to production environments",
    "Implement user authentication and authorization",
    "Connect frontend and backend with REST APIs"
  ],
  requirements: [
    "Basic computer skills",
    "Understanding of how websites work",
    "No prior programming experience required, but helpful"
  ],
  curriculum: [
    {
      title: "Introduction to Web Development",
      lessons: [
        { title: "Course Overview", duration: "15 min", type: "video", isPreview: true },
        { title: "Setting Up Your Development Environment", duration: "25 min", type: "video", isPreview: true },
        { title: "Understanding Web Technologies", duration: "40 min", type: "video" },
        { title: "Your First Web Page", duration: "60 min", type: "practice" }
      ]
    },
    {
      title: "HTML & CSS Fundamentals",
      lessons: [
        { title: "HTML Structure and Tags", duration: "45 min", type: "video" },
        { title: "CSS Styling Basics", duration: "50 min", type: "video" },
        { title: "Responsive Design Principles", duration: "55 min", type: "video" },
        { title: "Building a Responsive Landing Page", duration: "120 min", type: "practice" },
        { title: "HTML & CSS Assessment", duration: "30 min", type: "quiz" }
      ]
    },
    {
      title: "JavaScript Essentials",
      lessons: [
        { title: "JavaScript Syntax and Variables", duration: "40 min", type: "video" },
        { title: "Functions and Control Flow", duration: "55 min", type: "video" },
        { title: "DOM Manipulation", duration: "60 min", type: "video" },
        { title: "Building Interactive Web Pages", duration: "90 min", type: "practice" },
        { title: "JavaScript Basics Assessment", duration: "30 min", type: "quiz" }
      ]
    },
    {
      title: "Frontend Development with React",
      lessons: [
        { title: "Introduction to React", duration: "40 min", type: "video" },
        { title: "Components and Props", duration: "50 min", type: "video" },
        { title: "State and Lifecycle", duration: "60 min", type: "video" },
        { title: "Building a React Application", duration: "180 min", type: "practice" }
      ]
    },
    {
      title: "Backend Development with Node.js",
      lessons: [
        { title: "Introduction to Node.js", duration: "45 min", type: "video" },
        { title: "Express.js Framework", duration: "50 min", type: "video" },
        { title: "RESTful API Design", duration: "60 min", type: "video" },
        { title: "Building a Backend API", duration: "150 min", type: "practice" }
      ]
    }
  ],
  reviews: [
    {
      name: "Ahmed Tazi",
      rating: 5,
      date: "April 12, 2025",
      comment: "This course completely changed my career. I went from knowing almost nothing about web development to building my own full-stack applications. The explanations are clear and the projects are challenging but achievable.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Fatima Ouazzani",
      rating: 5,
      date: "March 28, 2025",
      comment: "I love how the course is taught in Darija, which makes technical concepts much easier to understand. The instructor is very knowledgeable and explains everything in detail. Highly recommended!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Karim El Fassi",
      rating: 4,
      date: "March 15, 2025",
      comment: "Great content and very well-structured. I would have liked a bit more focus on advanced React concepts, but overall it's an excellent course for beginners and intermediate developers.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
    }
  ]
};

export default function CourseDetailsPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState([0]);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  
  // Toggle curriculum section expansion
  const toggleSection = (index) => {
    if (expandedSections.includes(index)) {
      setExpandedSections(expandedSections.filter(i => i !== index));
    } else {
      setExpandedSections([...expandedSections, index]);
    }
  };
  
  // Calculate total curriculum stats
  const totalVideos = courseData.curriculum.flatMap(section => 
    section.lessons.filter(lesson => lesson.type === 'video')
  ).length;
  
  const totalPractices = courseData.curriculum.flatMap(section => 
    section.lessons.filter(lesson => lesson.type === 'practice')
  ).length;
  
  const totalQuizzes = courseData.curriculum.flatMap(section => 
    section.lessons.filter(lesson => lesson.type === 'quiz')
  ).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Course Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-300 opacity-10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Course Info */}
            <div className="lg:w-3/5">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-white text-emerald-700 text-sm font-medium px-3 py-1 rounded-full">
                  {courseData.category}
                </span>
                <span className="bg-emerald-400 text-emerald-900 text-sm font-medium px-3 py-1 rounded-full">
                  {courseData.level}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">{courseData.title}</h1>
              
              <p className="text-lg md:text-xl mb-6 text-emerald-50 leading-relaxed">{courseData.description}</p>
              
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-6">
                <div className="flex items-center bg-white bg-opacity-10 rounded-lg px-3 py-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="font-medium ml-1">{courseData.rating}</span>
                  <span className="text-emerald-200 ml-1">({courseData.reviews.length} reviews)</span>
                </div>
                
                <div className="flex items-center bg-white bg-opacity-10 rounded-lg px-3 py-2">
                  <Users className="h-5 w-5" />
                  <span className="ml-1">{courseData.students} students enrolled</span>
                </div>
                
                <div className="flex items-center bg-white bg-opacity-10 rounded-lg px-3 py-2">
                  <Calendar className="h-5 w-5" />
                  <span className="ml-1">Updated {courseData.lastUpdated}</span>
                </div>
              </div>
              
              <div className="flex items-center mb-6">
                <img 
                  src={courseData.instructor.image} 
                  alt={courseData.instructor.name} 
                  className="w-12 h-12 rounded-full object-cover mr-3 border-2 border-white"
                />
                <div>
                  <span className="text-emerald-200">Created by</span>
                  <h3 className="font-medium text-lg">{courseData.instructor.name}</h3>
                </div>
              </div>
            </div>
            
            {/* Course Card */}
            <div className="lg:w-2/5">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden sticky top-8">
                <div className="relative">
                  <img 
                    src={courseData.image} 
                    alt={courseData.title} 
                    className="w-full h-48 md:h-56 object-cover"
                  />
                  <button 
                    onClick={() => setShowPreview(true)}
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 hover:bg-opacity-50 transition-all duration-300 group"
                  >
                    <div className="bg-white rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                      <Play className="h-8 w-8 text-emerald-600 ml-1" />
                    </div>
                  </button>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <span className="text-3xl font-bold text-gray-800">{courseData.discountPrice} MAD</span>
                      {courseData.discountPrice < courseData.price && (
                        <span className="text-lg text-gray-500 line-through ml-2">{courseData.price} MAD</span>
                      )}
                    </div>
                    
                    {courseData.discountPrice < courseData.price && (
                      <span className="bg-red-100 text-red-700 text-sm font-medium px-3 py-1 rounded-full">
                        {Math.round((1 - courseData.discountPrice / courseData.price) * 100)}% off
                      </span>
                    )}
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-gray-500 mr-3" />
                      <span className="text-gray-700">{courseData.duration} course</span>
                    </div>
                    
                    <div className="flex items-center">
                      <Book className="h-5 w-5 text-gray-500 mr-3" />
                      <span className="text-gray-700">{courseData.lessonsCount} lessons ({courseData.hoursCount} hours)</span>
                    </div>
                    
                    <div className="flex items-center">
                      <Award className="h-5 w-5 text-gray-500 mr-3" />
                      <span className="text-gray-700">Certificate of completion</span>
                    </div>
                    
                    <div className="flex items-center">
                      <Globe className="h-5 w-5 text-gray-500 mr-3" />
                      <span className="text-gray-700">Language: {courseData.language}</span>
                    </div>

                    <div className="flex items-center">
                      <Download className="h-5 w-5 text-gray-500 mr-3" />
                      <span className="text-gray-700">Downloadable resources</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white py-3 rounded-lg font-medium transition duration-300 mb-3 shadow-lg transform hover:scale-105">
                    Enroll Now
                  </button>
                  
                  <div className="flex gap-2">
                    <button className="flex-1 bg-white border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 py-3 rounded-lg font-medium transition duration-200">
                      Preview Course
                    </button>
                    
                    <button 
                      onClick={() => setIsBookmarked(!isBookmarked)}
                      className={`p-3 rounded-lg border-2 transition duration-200 ${
                        isBookmarked 
                          ? 'bg-emerald-600 border-emerald-600 text-white' 
                          : 'bg-white border-gray-300 text-gray-600 hover:border-emerald-600 hover:text-emerald-600'
                      }`}
                    >
                      <Bookmark className={`h-5 w-5 ${isBookmarked ? 'fill-current' : ''}`} />
                    </button>
                    
                    <button className="p-3 rounded-lg border-2 border-gray-300 text-gray-600 hover:border-emerald-600 hover:text-emerald-600 transition duration-200">
                      <Share2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Course Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-3/5">
              {/* Tabs */}
              <div className="bg-white rounded-2xl shadow-lg mb-8 overflow-hidden">
                <div className="flex border-b bg-gray-50">
                  {['overview', 'curriculum', 'instructor', 'reviews'].map((tab) => (
                    <button 
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-6 py-4 text-center font-medium flex-1 transition-all duration-200 ${
                        activeTab === tab 
                          ? 'text-emerald-600 border-b-2 border-emerald-600 bg-white -mb-px' 
                          : 'text-gray-600 hover:text-emerald-600 hover:bg-white'
                      }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>
                
                {/* Overview Tab */}
                {activeTab === 'overview' && (
                  <div className="p-8">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800">About This Course</h2>
                    <p className="text-gray-700 mb-8 text-lg leading-relaxed">{courseData.longDescription}</p>
                    
                    <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-8 mb-8">
                      <h3 className="text-2xl font-bold mb-6 text-emerald-800">What You Will Learn</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {courseData.whatYouWillLearn.map((item, index) => (
                          <div key={index} className="flex items-start">
                            <CheckCircle className="h-6 w-6 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-lg">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold mb-6 text-gray-800">Requirements</h3>
                      <ul className="space-y-3 text-gray-700 text-lg">
                        {courseData.requirements.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <ChevronRight className="h-5 w-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold mb-6 text-gray-800">This Course Includes</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                          { icon: PlayCircle, text: `${totalVideos} video lessons`, color: 'text-blue-500' },
                          { icon: Book, text: `${totalPractices} practical exercises`, color: 'text-green-500' },
                          { icon: Award, text: `${totalQuizzes} quizzes`, color: 'text-purple-500' },
                          { icon: MessageCircle, text: 'Instructor support', color: 'text-orange-500' },
                          { icon: Clock, text: 'Lifetime access', color: 'text-red-500' },
                          { icon: Download, text: 'Downloadable resources', color: 'text-indigo-500' }
                        ].map((item, index) => {
                          const Icon = item.icon;
                          return (
                            <div key={index} className="flex items-center bg-white border-2 border-gray-100 hover:border-emerald-200 p-4 rounded-xl transition-all duration-200 hover:shadow-md">
                              <Icon className={`h-6 w-6 ${item.color} mr-3`} />
                              <span className="text-gray-700 font-medium">{item.text}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Curriculum Tab */}
                {activeTab === 'curriculum' && (
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-8">
                      <h2 className="text-3xl font-bold text-gray-800">Course Curriculum</h2>
                      <div className="text-gray-600 bg-gray-100 px-4 py-2 rounded-lg">
                        {courseData.lessonsCount} lessons • {courseData.hoursCount} hours
                      </div>
                    </div>
                    
                    {courseData.curriculum.map((section, sectionIndex) => (
                      <div key={sectionIndex} className="border-2 border-gray-200 rounded-xl mb-6 overflow-hidden hover:border-emerald-200 transition-colors duration-200">
                        <div 
                          className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 flex justify-between items-center cursor-pointer hover:from-emerald-50 hover:to-teal-50 transition-all duration-200"
                          onClick={() => toggleSection(sectionIndex)}
                        >
                          <h3 className="font-bold text-lg text-gray-800">
                            {sectionIndex + 1}. {section.title}
                          </h3>
                          <div className="flex items-center">
                            <span className="text-sm text-gray-500 mr-4 bg-white px-3 py-1 rounded-full">
                              {section.lessons.length} lessons
                            </span>
                            <ChevronDown 
                              className={`h-6 w-6 transition-transform duration-200 ${
                                expandedSections.includes(sectionIndex) ? 'transform rotate-180' : ''
                              }`} 
                            />
                          </div>
                        </div>
                        
                        {expandedSections.includes(sectionIndex) && (
                          <div className="border-t-2 border-gray-200 bg-white">
                            {section.lessons.map((lesson, lessonIndex) => (
                              <div 
                                key={lessonIndex} 
                                className={`p-4 flex justify-between items-center hover:bg-gray-50 transition-colors duration-150 ${
                                  lessonIndex < section.lessons.length - 1 ? 'border-b border-gray-100' : ''
                                }`}
                              >
                                <div className="flex items-center">
                                  {lesson.type === 'video' && (
                                    <PlayCircle className="h-5 w-5 text-blue-500 mr-3" />
                                  )}
                                  {lesson.type === 'practice' && (
                                    <Book className="h-5 w-5 text-green-500 mr-3" />
                                  )}
                                  {lesson.type === 'quiz' && (
                                    <Award className="h-5 w-5 text-purple-500 mr-3" />
                                  )}
                                  <span className="text-gray-800 font-medium">
                                    {lessonIndex + 1}. {lesson.title}
                                  </span>
                                  {lesson.isPreview && (
                                    <span className="ml-3 bg-emerald-100 text-emerald-700 text-xs font-medium px-2 py-1 rounded-full">
                                      Preview
                                    </span>
                                  )}
                                </div>
                                <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                                  {lesson.duration}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
                
                {/* Instructor Tab */}
                {activeTab === 'instructor' && (
                  <div className="p-8">
                    <h2 className="text-3xl font-bold mb-8 text-gray-800">Your Instructor</h2>
                    
                    <div className="flex flex-col md:flex-row items-start mb-8 bg-gradient-to-r from-emerald-50 to-teal-50 p-8 rounded-xl">
                      <img 
                        src={courseData.instructor.image} 
                        alt={courseData.instructor.name} 
                        className="w-32 h-32 rounded-full object-cover mr-8 mb-4 md:mb-0 border-4 border-white shadow-lg"
                      />
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{courseData.instructor.name}</h3>
                        <p className="text-emerald-600 text-lg font-medium mb-4">Full Stack Web Developer & Instructor</p>
                        <div className="flex items-center mb-6">
                          <ThumbsUp className="h-6 w-6 text-emerald-500 mr-3" />
                          <span className="text-gray-700 text-lg font-medium">10,000+ students taught</span>
                        </div>
                        <p className="text-gray-700 text-lg leading-relaxed">{courseData.instructor.bio}</p>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Reviews Tab */}
                {activeTab === 'reviews' && (
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-8 text-black">
                      <h2 className="text-3xl font-bold text-gray-800">Student Reviews</h2>
                      <div className="flex items-center bg-yellow-50 px-4 py-2 rounded-lg">
                        <Star className="h-6 w-6 text-yellow-400 fill-current" />
                        <span className="font-bold ml-2 text-lg">{courseData.rating}</span>
                        <span className="text-gray-500 ml-1">({courseData.reviews.length} reviews)</span>
                      </div>
                    </div>
                    
                    <div className="space-y-8">
                      {courseData.reviews.map((review, index) => (
                        <div key={index} className="border-b border-gray-200 pb-8 last:border-0">
                          <div className="flex items-start">
                            <img 
                              src={review.image} 
                              alt={review.name} 
                              className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-gray-200"
                            />
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-bold text-lg text-gray-800">{review.name}</h4>
                                <span className="text-gray-500 text-sm">{review.date}</span>
                              </div>
                              <div className="flex items-center mb-3">
                                <div className="flex">
                                  {[...Array(5)].map((_, i) => (
                                    <Star 
                                      key={i} 
                                      className={`h-5 w-5 ${
                                        i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                      }`}
                                    />
                                  ))}
                                </div>
                              </div>
                              <p className="text-gray-700 text-lg leading-relaxed">{review.comment}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-8 text-center">
                      <button className="bg-white border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 py-3 px-8 rounded-lg font-medium transition duration-200">
                        See All Reviews
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Sidebar - Related Courses & Help */}
            <div className="lg:w-2/5">
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                <h3 className="text-xl font-bold mb-6 text-gray-800">Related Courses</h3>
                
                <div className="space-y-6">
                  {[
                    {
                      title: "Frontend Development with React",
                      rating: 4.7,
                      reviews: 1023,
                      price: 199,
                      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=120&h=80&fit=crop"
                    },
                    {
                      title: "Backend Development with Node.js",
                      rating: 4.7,
                      reviews: 765,
                      price: 269,
                      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=120&h=80&fit=crop"
                    },
                    {
                      title: "Database Design & MongoDB",
                      rating: 4.8,
                      reviews: 612,
                      price: 219,
                      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=120&h=80&fit=crop"
                    }
                  ].map((course, index) => (
                    <div key={index} className="flex items-start group hover:bg-gray-50 p-3 rounded-lg transition-colors duration-200">
                      <img 
                        src={course.image} 
                        alt={course.title} 
                        className="w-20 h-16 object-cover rounded-lg mr-4 group-hover:scale-105 transition-transform duration-200"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-800 mb-1 group-hover:text-emerald-600 transition-colors duration-200">
                          {course.title}
                        </h4>
                        <div className="flex items-center mb-2">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm ml-1 font-medium">{course.rating}</span>
                          <span className="text-gray-500 text-sm ml-1">({course.reviews})</span>
                        </div>
                        <div className="text-emerald-600 font-bold">{course.price} MAD</div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 text-center">
                  <button className="text-emerald-600 hover:text-emerald-700 font-medium transition-colors duration-200">
                    Browse All Web Development Courses →
                  </button>
                </div>
              </div>
              
              {/* Course Progress Tracker */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-6 mb-8">
                <h3 className="text-xl font-bold text-blue-800 mb-4">Course Progress</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-blue-700">Overall Progress</span>
                      <span className="text-blue-700 font-medium">0%</span>
                    </div>
                    <div className="w-full bg-blue-200 rounded-full h-3">
                      <div className="bg-blue-600 h-3 rounded-full" style={{width: '0%'}}></div>
                    </div>
                  </div>
                  <div className="text-center pt-2">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg font-medium transition duration-200">
                      Start Learning
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Certification Info */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl p-6 mb-8">
                <div className="text-center">
                  <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-purple-800 mb-2">Get Certified</h3>
                  <p className="text-purple-700 mb-4">
                    Earn a certificate of completion after finishing this course and showcase your new skills.
                  </p>
                  <div className="bg-white rounded-lg p-3 border border-purple-200">
                    <div className="text-sm text-purple-600 font-medium">Certificate Features:</div>
                    <ul className="text-sm text-purple-700 mt-2 space-y-1">
                      <li>• Shareable on LinkedIn</li>
                      <li>• PDF download available</li>
                      <li>• Verified completion</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Help Section */}
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-2xl p-6">
                <div className="text-center">
                  <MessageCircle className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-emerald-800 mb-4">Need Help?</h3>
                  <p className="text-emerald-700 mb-6">
                    Have questions about this course or need assistance with enrollment?
                  </p>
                  <div className="space-y-3">
                    <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-medium transition duration-200 transform hover:scale-105">
                      Contact Support
                    </button>
                    <button className="w-full bg-white border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 py-3 rounded-lg font-medium transition duration-200">
                      Live Chat
                    </button>
                  </div>
                  <div className="mt-4 text-sm text-emerald-600">
                    <p>📞 Available 24/7</p>
                    <p>💬 Average response: 2 minutes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with New Courses</h2>
          <p className="text-xl text-gray-300 mb-8">
            Subscribe to our newsletter and be the first to know about new courses and special offers.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button className="bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-lg font-medium transition duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">LearnHub</h3>
              <p className="text-gray-400 mb-4">
                Empowering learners worldwide with high-quality online courses.
              </p>
              <div className="flex space-x-4">
                <button className="text-gray-400 hover:text-white transition-colors duration-200">
                  Facebook
                </button>
                <button className="text-gray-400 hover:text-white transition-colors duration-200">
                  Twitter
                </button>
                <button className="text-gray-400 hover:text-white transition-colors duration-200">
                  LinkedIn
                </button>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Courses</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors duration-200">Web Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Data Science</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Mobile Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Design</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors duration-200">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Community</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors duration-200">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 LearnHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
      {/* Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-xl font-bold">Course Preview</h3>
              <button 
                onClick={() => setShowPreview(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            <div className="p-6">
              <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-center">
                  <Play className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Course Preview Video</p>
                  <p className="text-sm text-gray-500">Click to play sample lesson</p>
                </div>
              </div>
              <h4 className="text-lg font-semibold mb-2">Sample Lesson: Course Overview</h4>
              <p className="text-gray-600 mb-4">
                Get a taste of what you'll learn in this comprehensive web development course. 
                This preview covers the course structure and learning objectives.
              </p>
              <div className="flex gap-4">
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-medium transition duration-200">
                  Enroll Now
                </button>
                <button 
                  onClick={() => setShowPreview(false)}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-lg font-medium transition duration-200"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}