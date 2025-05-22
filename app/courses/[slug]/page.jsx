"use client" ;
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
  Star 
} from 'lucide-react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Newsletter from '@/app/components/Newsletter';

// Sample data for a single course - In a real app, this would come from an API based on the course ID
const courseData = {
  id: 3,
  title: "Full Stack Web Development",
  description: "Comprehensive course covering frontend and backend web development. Learn to build complete web applications from scratch using modern technologies and best practices. Perfect for those looking to become professional web developers or enhance their existing skills.",
  longDescription: "This comprehensive course will take you from the basics of web development to building complex, full-stack applications. You'll learn both front-end and back-end technologies, working with HTML, CSS, JavaScript, React for the frontend, and Node.js, Express, and MongoDB for the backend. By the end of this course, you'll be able to build complete web applications independently and have a portfolio of projects to showcase your skills.",
  instructor: {
    name: "Yasmine Benkiran",
    bio: "Full Stack Developer with 10+ years of experience. Yasmine has worked with major tech companies and has taught over 10,000 students online. She specializes in React, Node.js, and modern JavaScript development.",
    image: "/api/placeholder/150/150"
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
  image: "/api/placeholder/800/450",
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
        { title: "Course Overview", duration: "15 min", type: "video" },
        { title: "Setting Up Your Development Environment", duration: "25 min", type: "video" },
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
      image: "/api/placeholder/60/60"
    },
    {
      name: "Fatima Ouazzani",
      rating: 5,
      date: "March 28, 2025",
      comment: "I love how the course is taught in Darija, which makes technical concepts much easier to understand. The instructor is very knowledgeable and explains everything in detail. Highly recommended!",
      image: "/api/placeholder/60/60"
    },
    {
      name: "Karim El Fassi",
      rating: 4,
      date: "March 15, 2025",
      comment: "Great content and very well-structured. I would have liked a bit more focus on advanced React concepts, but overall it's an excellent course for beginners and intermediate developers.",
      image: "/api/placeholder/60/60"
    }
  ]
};

export default function CourseDetailsPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState([]);
  
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
    <div className="min-h-screen bg-gray-50 flex flex-col">
 
      
      {/* Course Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Course Info */}
            <div className="lg:w-3/5">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-white text-emerald-700 text-sm font-medium px-3 py-1 rounded-full">
                  {courseData.category}
                </span>
                <span className="bg-emerald-500 text-white text-sm font-medium px-3 py-1 rounded-full">
                  {courseData.level}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{courseData.title}</h1>
              
              <p className="text-lg mb-6">{courseData.description}</p>
              
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-6">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="font-medium ml-1">{courseData.rating}</span>
                  <span className="text-gray-200 ml-1">{courseData.reviews.length} reviews</span>
                </div>
                
                <div className="flex items-center">
                  <Users className="h-5 w-5" />
                  <span className="ml-1">{courseData.students} students enrolled</span>
                </div>
                
                <div className="flex items-center">
                  <Calendar className="h-5 w-5" />
                  <span className="ml-1">Last updated {courseData.lastUpdated}</span>
                </div>
              </div>
              
              <div className="flex items-center mb-6">
                <img 
                  src={courseData.instructor.image} 
                  alt={courseData.instructor.name} 
                  className="w-12 h-12 rounded-full object-cover mr-3"
                />
                <div>
                  <span className="text-gray-200">Created by</span>
                  <h3 className="font-medium">{courseData.instructor.name}</h3>
                </div>
              </div>
            </div>
            
            {/* Course Card */}
            <div className="lg:w-2/5">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src={courseData.image} 
                  alt={courseData.title} 
                  className="w-full h-48 md:h-56 object-cover"
                />
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <span className="text-3xl font-bold text-gray-800">{courseData.discountPrice} MAD</span>
                      {courseData.discountPrice < courseData.price && (
                        <span className="text-lg text-gray-500 line-through ml-2">{courseData.price} MAD</span>
                      )}
                    </div>
                    
                    {courseData.discountPrice < courseData.price && (
                      <span className="bg-red-100 text-red-700 text-sm font-medium px-2 py-1 rounded">
                        {Math.round((1 - courseData.discountPrice / courseData.price) * 100)}% off
                      </span>
                    )}
                  </div>
                  
                  <div className="space-y-4 mb-6">
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
                      <MessageCircle className="h-5 w-5 text-gray-500 mr-3" />
                      <span className="text-gray-700">Language: {courseData.language}</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-md font-medium transition duration-200 mb-3">
                    Enroll Now
                  </button>
                  
                  <button className="w-full bg-white border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 py-3 rounded-md font-medium transition duration-200">
                    Preview Course
                  </button>
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
              <div className="bg-white rounded-lg shadow mb-8">
                <div className="flex border-b">
                  <button 
                    onClick={() => setActiveTab('overview')}
                    className={`px-6 py-4 text-center font-medium flex-1 ${
                      activeTab === 'overview' 
                        ? 'text-emerald-600 border-b-2 border-emerald-600' 
                        : 'text-gray-600 hover:text-emerald-600'
                    }`}
                  >
                    Overview
                  </button>
                  <button 
                    onClick={() => setActiveTab('curriculum')}
                    className={`px-6 py-4 text-center font-medium flex-1 ${
                      activeTab === 'curriculum' 
                        ? 'text-emerald-600 border-b-2 border-emerald-600' 
                        : 'text-gray-600 hover:text-emerald-600'
                    }`}
                  >
                    Curriculum
                  </button>
                  <button 
                    onClick={() => setActiveTab('instructor')}
                    className={`px-6 py-4 text-center font-medium flex-1 ${
                      activeTab === 'instructor' 
                        ? 'text-emerald-600 border-b-2 border-emerald-600' 
                        : 'text-gray-600 hover:text-emerald-600'
                    }`}
                  >
                    Instructor
                  </button>
                  <button 
                    onClick={() => setActiveTab('reviews')}
                    className={`px-6 py-4 text-center font-medium flex-1 ${
                      activeTab === 'reviews' 
                        ? 'text-emerald-600 border-b-2 border-emerald-600' 
                        : 'text-gray-600 hover:text-emerald-600'
                    }`}
                  >
                    Reviews
                  </button>
                </div>
                
                {/* Overview Tab */}
                {activeTab === 'overview' && (
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-4">About This Course</h2>
                    <p className="text-gray-700 mb-8">{courseData.longDescription}</p>
                    
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
                      <h3 className="text-xl font-bold mb-4">What You Will Learn</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {courseData.whatYouWillLearn.map((item, index) => (
                          <div key={index} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      <h3 className="text-xl font-bold mb-4">Requirements</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        {courseData.requirements.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold mb-4">This Course Includes</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                          <PlayCircle className="h-6 w-6 text-emerald-500 mr-3" />
                          <span className="text-gray-700">{totalVideos} video lessons</span>
                        </div>
                        <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                          <Book className="h-6 w-6 text-emerald-500 mr-3" />
                          <span className="text-gray-700">{totalPractices} practical exercises</span>
                        </div>
                        <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                          <Award className="h-6 w-6 text-emerald-500 mr-3" />
                          <span className="text-gray-700">{totalQuizzes} quizzes</span>
                        </div>
                        <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                          <MessageCircle className="h-6 w-6 text-emerald-500 mr-3" />
                          <span className="text-gray-700">Instructor support</span>
                        </div>
                        <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                          <Clock className="h-6 w-6 text-emerald-500 mr-3" />
                          <span className="text-gray-700">Lifetime access</span>
                        </div>
                        <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                          <Award className="h-6 w-6 text-emerald-500 mr-3" />
                          <span className="text-gray-700">Certificate</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Curriculum Tab */}
                {activeTab === 'curriculum' && (
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-2xl font-bold">Course Curriculum</h2>
                      <div className="text-gray-600 text-sm">
                        {courseData.lessonsCount} lessons • {courseData.hoursCount} hours
                      </div>
                    </div>
                    
                    {courseData.curriculum.map((section, sectionIndex) => (
                      <div key={sectionIndex} className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
                        <div 
                          className="bg-gray-50 p-4 flex justify-between items-center cursor-pointer"
                          onClick={() => toggleSection(sectionIndex)}
                        >
                          <h3 className="font-medium text-lg text-gray-800">
                            {sectionIndex + 1}. {section.title}
                          </h3>
                          <div className="flex items-center">
                            <span className="text-sm text-gray-500 mr-3">
                              {section.lessons.length} lessons
                            </span>
                            <ChevronDown 
                              className={`h-5 w-5 transition-transform ${
                                expandedSections.includes(sectionIndex) ? 'transform rotate-180' : ''
                              }`} 
                            />
                          </div>
                        </div>
                        
                        {expandedSections.includes(sectionIndex) && (
                          <div className="border-t border-gray-200">
                            {section.lessons.map((lesson, lessonIndex) => (
                              <div 
                                key={lessonIndex} 
                                className={`p-4 flex justify-between items-center ${
                                  lessonIndex < section.lessons.length - 1 ? 'border-b border-gray-200' : ''
                                }`}
                              >
                                <div className="flex items-center">
                                  {lesson.type === 'video' && (
                                    <PlayCircle className="h-5 w-5 text-emerald-500 mr-3" />
                                  )}
                                  {lesson.type === 'practice' && (
                                    <Book className="h-5 w-5 text-blue-500 mr-3" />
                                  )}
                                  {lesson.type === 'quiz' && (
                                    <Award className="h-5 w-5 text-purple-500 mr-3" />
                                  )}
                                  <span className="text-gray-800">
                                    {lessonIndex + 1}. {lesson.title}
                                  </span>
                                </div>
                                <div className="text-sm text-gray-500">{lesson.duration}</div>
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
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-6">Your Instructor</h2>
                    
                    <div className="flex items-start mb-6">
                      <img 
                        src={courseData.instructor.image} 
                        alt={courseData.instructor.name} 
                        className="w-24 h-24 rounded-full object-cover mr-6"
                      />
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-1">{courseData.instructor.name}</h3>
                        <p className="text-gray-600 italic mb-4">Full Stack Web Developer & Instructor</p>
                        <div className="flex items-center mb-4">
                          <ThumbsUp className="h-5 w-5 text-emerald-500 mr-2" />
                          <span className="text-gray-700">10,000+ students taught</span>
                        </div>
                        <p className="text-gray-700">{courseData.instructor.bio}</p>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Reviews Tab */}
                {activeTab === 'reviews' && (
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-2xl font-bold">Student Reviews</h2>
                      <div className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-400 fill-current" />
                        <span className="font-medium ml-1">{courseData.rating}</span>
                        <span className="text-gray-500 ml-1">({courseData.reviews.length} reviews)</span>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      {courseData.reviews.map((review, index) => (
                        <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                          <div className="flex items-start">
                            <img 
                              src={review.image} 
                              alt={review.name} 
                              className="w-12 h-12 rounded-full object-cover mr-4"
                            />
                            <div>
                              <h4 className="font-medium text-gray-800">{review.name}</h4>
                              <div className="flex items-center mb-1">
                                <div className="flex">
                                  {[...Array(5)].map((_, i) => (
                                    <Star 
                                      key={i} 
                                      className={`h-4 w-4 ${
                                        i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                      }`}
                                    />
                                  ))}
                                </div>
                                <span className="text-gray-500 text-sm ml-2">{review.date}</span>
                              </div>
                              <p className="text-gray-700">{review.comment}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-8 text-center">
                      <button className="bg-white border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 py-2 px-6 rounded-md font-medium transition duration-200">
                        See All Reviews
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Sidebar - Related Courses */}
            <div className="lg:w-2/5">
              <div className="bg-white rounded-lg shadow p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">Related Courses</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <img 
                      src="/api/placeholder/120/80" 
                      alt="Frontend Development with React" 
                      className="w-24 h-16 object-cover rounded mr-4"
                    />
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Frontend Development with React</h4>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm ml-1">4.7</span>
                        <span className="text-gray-500 text-sm ml-1">(1,023)</span>
                      </div>
                      <div className="text-emerald-600 font-medium mt-1">199 MAD</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <img 
                      src="/api/placeholder/120/80" 
                      alt="Backend Development with Node.js" 
                      className="w-24 h-16 object-cover rounded mr-4"
                    />
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Backend Development with Node.js</h4>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm ml-1">4.7</span>
                        <span className="text-gray-500 text-sm ml-1">(765)</span>
                      </div>
                      <div className="text-emerald-600 font-medium mt-1">269 MAD</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <img 
                      src="/api/placeholder/120/80" 
                      alt="Database Design & MongoDB" 
                      className="w-24 h-16 object-cover rounded mr-4"
                    />
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Database Design & MongoDB</h4>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm ml-1">4.8</span>
                        <span className="text-gray-500 text-sm ml-1">(612)</span>
                      </div>
                      <div className="text-emerald-600 font-medium mt-1">219 MAD</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <button className="text-emerald-600 hover:text-emerald-700 font-medium">
                    Browse All Web Development Courses
                  </button>
                </div>
              </div>
              
              <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-6">
                <h3 className="text-xl font-bold text-emerald-800 mb-4">Need Help?</h3>
                <p className="text-emerald-700 mb-4">Have questions about this course or need assistance with enrollment?</p>
                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-md font-medium transition duration-200">
                  Contact Support
                </button>
              </div>
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