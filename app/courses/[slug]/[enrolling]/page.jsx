"use client";
import { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  PlayCircle, 
  Book, 
  Award, 
  CheckCircle, 
  Download, 
  BookOpen, 
  MessageCircle, 
  Settings, 
  User,
  Menu,
  X,
  List,
  FileText,
  HelpCircle,
  CheckSquare,
  Clock
} from 'lucide-react';

// Sample data for the course - In a real app, this would come from an API
// Using the same courseData structure from your paste, with additional fields for content
const courseData = {
  id: 3,
  title: "Full Stack Web Development",
  description: "Comprehensive course covering frontend and backend web development.",
  instructor: {
    name: "Yasmine Benkiran",
    image: "/api/placeholder/150/150"
  },
  category: "Web Development",
  level: "Intermediate",
  language: "Darija",
  progress: 15, // Percentage complete
  curriculum: [
    {
      title: "Introduction to Web Development",
      lessons: [
        { 
          id: "1-1",
          title: "Course Overview", 
          duration: "15 min", 
          type: "video",
          completed: true,
          videoUrl: "#", // Would be a real URL in production
          description: "In this lesson, we'll go through what you'll learn in this course and how to get the most out of it.",
          resources: [
            { title: "Course Syllabus", type: "pdf", url: "#" },
            { title: "Development Environment Setup Guide", type: "doc", url: "#" }
          ]
        },
        { 
          id: "1-2",
          title: "Setting Up Your Development Environment", 
          duration: "25 min", 
          type: "video",
          completed: true,
          videoUrl: "#",
          description: "Learn how to set up your development environment with VS Code, Git, and Node.js."
        },
        { 
          id: "1-3",
          title: "Understanding Web Technologies", 
          duration: "40 min", 
          type: "video",
          completed: false,
          videoUrl: "#",
          description: "An overview of key web technologies: HTML, CSS, JavaScript, and how they work together."
        },
        { 
          id: "1-4",
          title: "Your First Web Page", 
          duration: "60 min", 
          type: "practice",
          completed: false,
          description: "Build your first web page using HTML and CSS, applying what you've learned so far.",
          instructions: "Create a simple personal profile page with your name, a short bio, and a few links. Use basic HTML elements and CSS styling.",
          codeTemplate: "<!DOCTYPE html>\n<html>\n<head>\n  <title>My Profile</title>\n  <style>\n    /* Add your CSS here */\n  </style>\n</head>\n<body>\n  <!-- Add your HTML here -->\n</body>\n</html>",
          submission: {
            type: "code",
            status: "not_started" // could be "not_started", "in_progress", "submitted", "graded"
          }
        }
      ]
    },
    {
      title: "HTML & CSS Fundamentals",
      lessons: [
        { 
          id: "2-1",
          title: "HTML Structure and Tags", 
          duration: "45 min", 
          type: "video",
          completed: false,
          videoUrl: "#",
          description: "Deep dive into HTML structure, semantic markup, and common tags."
        },
        { 
          id: "2-2",
          title: "CSS Styling Basics", 
          duration: "50 min", 
          type: "video",
          completed: false,
          videoUrl: "#",
          description: "Learn CSS fundamentals including selectors, properties, and the box model."
        },
        { 
          id: "2-3",
          title: "Responsive Design Principles", 
          duration: "55 min", 
          type: "video",
          completed: false,
          videoUrl: "#",
          description: "Master responsive design techniques including media queries and flexible layouts."
        },
        { 
          id: "2-4",
          title: "Building a Responsive Landing Page", 
          duration: "120 min", 
          type: "practice",
          completed: false,
          description: "Apply responsive design principles to build a landing page that works on all devices.",
          instructions: "Create a landing page for a fictional product or service using HTML and CSS. Ensure it's responsive across mobile, tablet, and desktop views.",
          submission: {
            type: "code",
            status: "not_started"
          }
        },
        { 
          id: "2-5",
          title: "HTML & CSS Assessment", 
          duration: "30 min", 
          type: "quiz",
          completed: false,
          description: "Test your knowledge of HTML and CSS fundamentals.",
          questions: [
            {
              question: "Which HTML element is used to define the main content area of a document?",
              options: ["<body>", "<main>", "<content>", "<section>"],
              answer: 1
            },
            // More questions would be here
          ]
        }
      ]
    },
    {
      title: "JavaScript Essentials",
      lessons: [
        { 
          id: "3-1",
          title: "JavaScript Syntax and Variables", 
          duration: "40 min", 
          type: "video",
          completed: false,
          videoUrl: "#",
          description: "Introduction to JavaScript syntax, data types, and variable declarations."
        },
        // More lessons for this section
      ]
    },
    {
      title: "Frontend Development with React",
      lessons: [
        { 
          id: "4-1",
          title: "Introduction to React", 
          duration: "40 min", 
          type: "video",
          completed: false,
          videoUrl: "#",
          description: "Learn the fundamentals of React and why it's a popular framework."
        },
        // More lessons for this section
      ]
    },
    {
      title: "Backend Development with Node.js",
      lessons: [
        { 
          id: "5-1",
          title: "Introduction to Node.js", 
          duration: "45 min", 
          type: "video",
          completed: false,
          videoUrl: "#",
          description: "Get started with Node.js and understand server-side JavaScript."
        },
        // More lessons for this section
      ]
    }
  ]
};

export default function CourseLearningPage() {
  // State variables
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [showSidebar, setShowSidebar] = useState(true);
  const [sidebarMobileOpen, setSidebarMobileOpen] = useState(false);
  const [noteContent, setNoteContent] = useState('');
  const [notes, setNotes] = useState([]);
  const [showNotes, setShowNotes] = useState(false);
  
  // Get current lesson
  const currentSection = courseData.curriculum[currentSectionIndex];
  const currentLesson = currentSection?.lessons[currentLessonIndex];
  
  // Calculate total lessons completed
  const totalLessons = courseData.curriculum.reduce((acc, section) => acc + section.lessons.length, 0);
  const completedLessons = courseData.curriculum.reduce((acc, section) => {
    return acc + section.lessons.filter(lesson => lesson.completed).length;
  }, 0);
  
  // Navigate to a specific lesson
  const navigateToLesson = (sectionIndex, lessonIndex) => {
    setCurrentSectionIndex(sectionIndex);
    setCurrentLessonIndex(lessonIndex);
    setSidebarMobileOpen(false); // Close mobile sidebar after navigation
  };
  
  // Mark lesson as complete
  const markAsComplete = () => {
    // In a real application, this would make an API call
    // For now, we'll just update the state
    const updatedCourseData = { ...courseData };
    updatedCourseData.curriculum[currentSectionIndex].lessons[currentLessonIndex].completed = true;
    // We would update the API here
    
    // Navigate to next lesson if available
    goToNextLesson();
  };
  
  // Go to next lesson
  const goToNextLesson = () => {
    // Check if there's another lesson in the current section
    if (currentLessonIndex < currentSection.lessons.length - 1) {
      setCurrentLessonIndex(currentLessonIndex + 1);
    } 
    // Check if there's another section
    else if (currentSectionIndex < courseData.curriculum.length - 1) {
      setCurrentSectionIndex(currentSectionIndex + 1);
      setCurrentLessonIndex(0);
    }
  };
  
  // Go to previous lesson
  const goToPrevLesson = () => {
    // Check if there's a previous lesson in the current section
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(currentLessonIndex - 1);
    } 
    // Check if there's a previous section
    else if (currentSectionIndex > 0) {
      setCurrentSectionIndex(currentSectionIndex - 1);
      setCurrentLessonIndex(courseData.curriculum[currentSectionIndex - 1].lessons.length - 1);
    }
  };
  
  // Save note
  const saveNote = () => {
    if (noteContent.trim()) {
      const newNote = {
        id: Date.now(),
        content: noteContent,
        timestamp: new Date(),
        lessonId: currentLesson.id
      };
      setNotes([...notes, newNote]);
      setNoteContent('');
    }
  };
  
  // Filter notes for current lesson
  const currentLessonNotes = notes.filter(note => note.lessonId === currentLesson?.id);
  
  // Format time from timestamp
  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Course Title / Nav Toggle */}
            <div className="flex items-center">
              <button 
                className="md:hidden mr-3 text-gray-500"
                onClick={() => setSidebarMobileOpen(!sidebarMobileOpen)}
              >
                {sidebarMobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
              <h1 className="font-bold text-gray-800 text-lg md:text-xl truncate">
                {courseData.title}
              </h1>
            </div>
            
            {/* Controls */}
            <div className="flex items-center space-x-2 md:space-x-4">
              <button 
                className="hidden md:flex items-center text-gray-600 hover:text-emerald-600"
                onClick={() => setShowSidebar(!showSidebar)}
              >
                {showSidebar ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
                <span className="ml-1">{showSidebar ? 'Hide' : 'Show'} Menu</span>
              </button>
              
              <button 
                className="text-gray-600 hover:text-emerald-600"
                onClick={() => setShowNotes(!showNotes)}
              >
                <FileText size={20} />
                <span className="sr-only">Notes</span>
              </button>
              
              <button className="text-gray-600 hover:text-emerald-600">
                <HelpCircle size={20} />
                <span className="sr-only">Help</span>
              </button>
              
              <div className="ml-4">
                <img 
                  src="/api/placeholder/32/32" 
                  alt="User avatar" 
                  className="w-8 h-8 rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar - Course Structure */}
        <aside 
          className={`bg-white border-r border-gray-200 flex-shrink-0 w-full md:w-72 lg:w-80 overflow-y-auto transition-all duration-300 ease-in-out 
            ${showSidebar ? 'md:block' : 'md:hidden'} 
            ${sidebarMobileOpen ? 'fixed inset-0 z-40 md:relative' : 'hidden md:block'}`}
        >
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img 
                  src={courseData.instructor.image} 
                  alt={courseData.instructor.name} 
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="text-sm text-gray-500">Instructor</p>
                  <p className="font-medium text-gray-800">{courseData.instructor.name}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-medium text-gray-800">Your Progress</h2>
              <span className="text-sm font-medium">{completedLessons}/{totalLessons} lessons</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-emerald-600 h-2.5 rounded-full" 
                style={{ width: `${(completedLessons / totalLessons) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <div className="p-4">
            <h2 className="font-medium text-gray-800 mb-4">Course Content</h2>
            
            <div className="space-y-3">
              {courseData.curriculum.map((section, sectionIdx) => (
                <div key={sectionIdx} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 p-3 font-medium text-gray-800">
                    Section {sectionIdx + 1}: {section.title}
                  </div>
                  <div className="divide-y divide-gray-200">
                    {section.lessons.map((lesson, lessonIdx) => (
                      <div 
                        key={lessonIdx}
                        onClick={() => navigateToLesson(sectionIdx, lessonIdx)}
                        className={`p-3 flex items-start hover:bg-gray-50 cursor-pointer ${
                          currentSectionIndex === sectionIdx && currentLessonIndex === lessonIdx
                            ? 'bg-emerald-50 border-l-4 border-emerald-500'
                            : ''
                        }`}
                      >
                        <div className="mr-3 mt-0.5">
                          {lesson.completed ? (
                            <CheckCircle size={18} className="text-emerald-500" />
                          ) : (
                            <div className="w-[18px] h-[18px] border-2 border-gray-300 rounded-full"></div>
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <p className={`text-sm ${lesson.completed ? 'text-gray-500' : 'text-gray-800'}`}>
                              {lesson.title}
                            </p>
                            <div className="flex items-center ml-2">
                              {lesson.type === 'video' && <PlayCircle size={16} className="text-blue-500" />}
                              {lesson.type === 'practice' && <Book size={16} className="text-purple-500" />}
                              {lesson.type === 'quiz' && <Award size={16} className="text-orange-500" />}
                            </div>
                          </div>
                          <p className="text-xs text-gray-500">{lesson.duration}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
        
        {/* Main Content Area */}
        <main className={`flex-1 flex flex-col bg-white overflow-hidden transition-all duration-300 ease-in-out ${showNotes ? 'md:max-w-[calc(100%-24rem)]' : ''}`}>
          {/* Lesson Content */}
          <div className="flex-1 overflow-y-auto p-4 md:p-6">
            {currentLesson && (
              <>
                <div className="mb-6">
                  <div className="text-sm text-gray-500 mb-1">
                    Section {currentSectionIndex + 1}, Lesson {currentLessonIndex + 1}
                  </div>
                  <h1 className="text-2xl font-bold text-gray-800 mb-2">{currentLesson.title}</h1>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock size={16} className="mr-1" />
                    <span>{currentLesson.duration}</span>
                    <span className="mx-2">•</span>
                    {currentLesson.type === 'video' && <span className="flex items-center"><PlayCircle size={16} className="mr-1 text-blue-500" /> Video Lesson</span>}
                    {currentLesson.type === 'practice' && <span className="flex items-center"><Book size={16} className="mr-1 text-purple-500" /> Practice Exercise</span>}
                    {currentLesson.type === 'quiz' && <span className="flex items-center"><Award size={16} className="mr-1 text-orange-500" /> Quiz</span>}
                  </div>
                </div>
                
                {/* Video Content */}
                {currentLesson.type === 'video' && (
                  <div className="mb-8">
                    <div className="bg-gray-900 rounded-lg aspect-video flex items-center justify-center mb-6">
                      <PlayCircle size={64} className="text-white opacity-80" />
                    </div>
                    
                    <div className="prose max-w-none">
                      <h2 className="text-xl font-semibold mb-3">About this lesson</h2>
                      <p>{currentLesson.description}</p>
                      
                      {currentLesson.resources && currentLesson.resources.length > 0 && (
                        <>
                          <h3 className="font-semibold mt-6 mb-2">Lesson Resources</h3>
                          <ul className="space-y-2">
                            {currentLesson.resources.map((resource, idx) => (
                              <li key={idx} className="flex items-center">
                                <Download size={18} className="mr-2 text-emerald-600" />
                                <a href={resource.url} className="text-emerald-600 hover:text-emerald-700">
                                  {resource.title}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  </div>
                )}
                
                {/* Practice Exercise Content */}
                {currentLesson.type === 'practice' && (
                  <div className="mb-8">
                    <div className="bg-purple-50 border border-purple-100 rounded-lg p-4 mb-6">
                      <h2 className="text-lg font-semibold text-purple-800 mb-2">Practice Exercise</h2>
                      <p className="text-purple-700 mb-4">{currentLesson.description}</p>
                      <div className="bg-white border border-purple-200 rounded-lg p-4">
                        <h3 className="font-semibold mb-2 text-gray-800">Instructions:</h3>
                        <p className="text-gray-700">{currentLesson.instructions}</p>
                      </div>
                    </div>
                    
                    {currentLesson.codeTemplate && (
                      <div className="mb-6">
                        <h3 className="font-semibold mb-2">Starter Code:</h3>
                        <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                          <pre className="text-sm font-mono">{currentLesson.codeTemplate}</pre>
                        </div>
                      </div>
                    )}
                    
                    <div className="mb-6">
                      <h3 className="font-semibold mb-2">Your Solution:</h3>
                      <textarea 
                        className="w-full h-64 p-4 border border-gray-300 rounded-lg font-mono text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Write your code here..."
                      ></textarea>
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md font-medium">
                        Submit Solution
                      </button>
                      <button className="bg-white border border-purple-600 text-purple-600 hover:bg-purple-50 px-4 py-2 rounded-md font-medium">
                        Preview Result
                      </button>
                    </div>
                  </div>
                )}
                
                {/* Quiz Content */}
                {currentLesson.type === 'quiz' && (
                  <div className="mb-8">
                    <div className="bg-orange-50 border border-orange-100 rounded-lg p-4 mb-6">
                      <h2 className="text-lg font-semibold text-orange-800 mb-2">Quiz: {currentLesson.title}</h2>
                      <p className="text-orange-700">{currentLesson.description}</p>
                    </div>
                    
                    {currentLesson.questions && currentLesson.questions.map((q, qIdx) => (
                      <div key={qIdx} className="mb-6 border border-gray-200 rounded-lg p-4">
                        <h3 className="font-semibold mb-3">Question {qIdx + 1}:</h3>
                        <p className="mb-4">{q.question}</p>
                        
                        <div className="space-y-2">
                          {q.options.map((option, oIdx) => (
                            <label key={oIdx} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                              <input 
                                type="radio" 
                                name={`question-${qIdx}`} 
                                className="mr-3"
                              />
                              <span>{option}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    ))}
                    
                    <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-md font-medium">
                      Submit Quiz
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
          
          {/* Bottom Navigation */}
          <div className="border-t border-gray-200 p-4 bg-gray-50">
            <div className="flex items-center justify-between">
              <button 
                onClick={goToPrevLesson}
                disabled={currentSectionIndex === 0 && currentLessonIndex === 0}
                className={`flex items-center px-4 py-2 rounded-md font-medium ${
                  currentSectionIndex === 0 && currentLessonIndex === 0
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
              >
                <ChevronLeft size={20} className="mr-1" />
                Previous Lesson
              </button>
              
              <div className="hidden md:block">
                {!currentLesson?.completed && (
                  <button 
                    onClick={markAsComplete}
                    className="flex items-center bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md font-medium"
                  >
                    <CheckSquare size={20} className="mr-2" />
                    Mark as Complete
                  </button>
                )}
              </div>
              
              <button 
                onClick={goToNextLesson}
                disabled={currentSectionIndex === courseData.curriculum.length - 1 && 
                  currentLessonIndex === courseData.curriculum[courseData.curriculum.length - 1].lessons.length - 1}
                className={`flex items-center px-4 py-2 rounded-md font-medium ${
                  currentSectionIndex === courseData.curriculum.length - 1 && 
                  currentLessonIndex === courseData.curriculum[courseData.curriculum.length - 1].lessons.length - 1
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
              >
                Next Lesson
                <ChevronRight size={20} className="ml-1" />
              </button>
            </div>
            
            <div className="md:hidden mt-4">
              {!currentLesson?.completed && (
                <button 
                  onClick={markAsComplete}
                  className="w-full flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md font-medium"
                >
                  <CheckSquare size={20} className="mr-2" />
                  Mark as Complete
                </button>
              )}
            </div>
          </div>
        </main>
        
        {/* Notes Panel */}
        {showNotes && (
          <aside className="hidden md:block bg-white border-l border-gray-200 w-96 flex-shrink-0 overflow-y-auto">
            <div className="p-4 border-b border-gray-200">
              <h2 className="font-medium text-gray-800 flex items-center">
                <FileText size={18} className="mr-2" />
                Notes for this lesson
              </h2>
            </div>
            
            <div className="p-4">
              <textarea
                className="w-full h-32 p-3 border border-gray-300 rounded-lg mb-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="Add notes for this lesson..."
                value={noteContent}
                onChange={(e) => setNoteContent(e.target.value)}
              ></textarea>
              
              <button 
                onClick={saveNote}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md font-medium mb-6"
              >
                Save Note
              </button>
              
              {currentLessonNotes.length > 0 ? (
                <div className="space-y-4">
                  {currentLessonNotes.map(note => (
                    <div key={note.id} className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                      <p className="text-gray-800 mb-2">{note.content}</p>
                      <div className="text-xs text-gray-500 flex items-center">
                        <Clock size={12} className="mr-1" />
                        {formatTime(note.timestamp)}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <BookOpen size={32} className="mx-auto mb-2 opacity-40" />
                  <p>No notes yet for this lesson</p>
                </div>
              )}
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}