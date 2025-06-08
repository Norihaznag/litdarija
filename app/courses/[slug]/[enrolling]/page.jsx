"use client";
import { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  PlayCircle, 
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Volume2,
  Settings,
  Maximize,
  CheckCircle2,
  Clock,
  Zap,
  Menu,
  X,
  ThumbsUp,
  Share,
  Download,
  BookOpen,
  FileText,
  Star,
  Coffee,
  Target,
  Award,
  TrendingUp
} from 'lucide-react';

// Mock course data
const courseData = {
  title: "Complete React Mastery Course",
  instructor: {
    name: "Sarah Chen",
    image: "/api/placeholder/40/40"
  },
  curriculum: [
    {
      title: "Getting Started",
      lessons: [
        {
          id: 1,
          title: "What is React?",
          duration: "5:30",
          type: "video",
          completed: true,
          description: "Learn the basics of React and why it's so popular",
          difficulty: "Beginner",
          keyPoints: ["Components", "Virtual DOM", "JSX"]
        },
        {
          id: 2,
          title: "Setting up your environment",
          duration: "8:45",
          type: "video",
          completed: false,
          description: "Get your development environment ready",
          difficulty: "Beginner",
          keyPoints: ["Node.js", "Create React App", "VS Code"]
        }
      ]
    },
    {
      title: "Core Concepts",
      lessons: [
        {
          id: 3,
          title: "Components & Props",
          duration: "12:20",
          type: "video",
          completed: false,
          description: "Master the building blocks of React",
          difficulty: "Intermediate",
          keyPoints: ["Functional Components", "Props", "Reusability"]
        },
        {
          id: 4,
          title: "State & Events",
          duration: "15:30",
          type: "video",
          completed: false,
          description: "Handle user interactions and dynamic data",
          difficulty: "Intermediate",
          keyPoints: ["useState", "Event Handlers", "State Updates"]
        }
      ]
    }
  ]
};

export default function EnhancedCourseLearningPage() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showNotes, setShowNotes] = useState(false);
  const [quickNotes, setQuickNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState('');

  const currentSection = courseData.curriculum[currentSectionIndex];
  const currentLesson = currentSection?.lessons[currentLessonIndex];
  
  const totalLessons = courseData.curriculum.reduce((acc, section) => acc + section.lessons.length, 0);
  const completedLessons = courseData.curriculum.reduce((acc, section) => {
    return acc + section.lessons.filter(lesson => lesson.completed).length;
  }, 0);

  const navigateToLesson = (sectionIndex, lessonIndex) => {
    setCurrentSectionIndex(sectionIndex);
    setCurrentLessonIndex(lessonIndex);
    setShowPlaylist(false);
    setProgress(0);
  };

  const goToNextLesson = () => {
    if (currentLessonIndex < currentSection.lessons.length - 1) {
      setCurrentLessonIndex(currentLessonIndex + 1);
    } else if (currentSectionIndex < courseData.curriculum.length - 1) {
      setCurrentSectionIndex(currentSectionIndex + 1);
      setCurrentLessonIndex(0);
    }
    setProgress(0);
  };

  const goToPrevLesson = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(currentLessonIndex - 1);
    } else if (currentSectionIndex > 0) {
      setCurrentSectionIndex(currentSectionIndex - 1);
      setCurrentLessonIndex(courseData.curriculum[currentSectionIndex - 1].lessons.length - 1);
    }
    setProgress(0);
  };

  const markComplete = () => {
    currentLesson.completed = true;
    goToNextLesson();
  };

  const addQuickNote = () => {
    if (currentNote.trim()) {
      setQuickNotes([...quickNotes, {
        id: Date.now(),
        content: currentNote,
        timestamp: `${Math.floor(progress/60)}:${(progress%60).toString().padStart(2, '0')}`,
        lessonId: currentLesson.id
      }]);
      setCurrentNote('');
    }
  };

  const speedOptions = [0.5, 0.75, 1, 1.25, 1.5, 2];

  // Auto-progress simulation
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev + 1;
          const totalSeconds = parseInt(currentLesson?.duration.split(':')[0]) * 60 + parseInt(currentLesson?.duration.split(':')[1]);
          return newProgress >= totalSeconds ? totalSeconds : newProgress;
        });
      }, 1000 / playbackSpeed);
    }
    return () => clearInterval(interval);
  }, [isPlaying, playbackSpeed, currentLesson]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* YouTube-style Header */}
      <header className="bg-black border-b border-gray-800 sticky top-0 z-50">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setShowPlaylist(!showPlaylist)}
              className="text-white hover:text-red-400 transition-colors"
            >
              <Menu size={24} />
            </button>
            <div className="text-white font-semibold truncate max-w-xs md:max-w-md">
              {currentLesson?.title}
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="hidden md:flex items-center space-x-2 text-sm text-gray-300">
              <TrendingUp size={16} />
              <span>{completedLessons}/{totalLessons} completed</span>
            </div>
            <button 
              onClick={() => setShowNotes(!showNotes)}
              className="text-white hover:text-red-400 transition-colors"
            >
              <FileText size={20} />
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Main Video Area */}
        <div className={`flex-1 ${showPlaylist ? 'md:pr-96' : ''}`}>
          {/* Video Player */}
          <div className="relative bg-black">
            <div className="aspect-video bg-gradient-to-br from-gray-900 to-black flex items-center justify-center relative group">
              {/* Video Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-purple-900/20"></div>
              
              {/* Play Button */}
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="relative z-10 bg-red-600 hover:bg-red-700 rounded-full p-4 transition-all transform hover:scale-110"
              >
                {isPlaying ? <Pause size={32} /> : <Play size={32} />}
              </button>

              {/* Video Controls */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                {/* Progress Bar */}
                <div className="w-full bg-gray-600 h-1 rounded-full mb-4">
                  <div 
                    className="bg-red-600 h-1 rounded-full transition-all"
                    style={{ width: `${(progress / (parseInt(currentLesson?.duration.split(':')[0]) * 60 + parseInt(currentLesson?.duration.split(':')[1]))) * 100}%` }}
                  ></div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button onClick={() => setIsPlaying(!isPlaying)}>
                      {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                    </button>
                    <button onClick={goToPrevLesson}>
                      <SkipBack size={20} />
                    </button>
                    <button onClick={goToNextLesson}>
                      <SkipForward size={20} />
                    </button>
                    <Volume2 size={20} />
                    <span className="text-sm">
                      {formatTime(progress)} / {currentLesson?.duration}
                    </span>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="relative group">
                      <button className="flex items-center space-x-1 text-sm hover:text-red-400">
                        <span>{playbackSpeed}x</span>
                      </button>
                      <div className="absolute bottom-full right-0 mb-2 bg-gray-800 rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        {speedOptions.map(speed => (
                          <button
                            key={speed}
                            onClick={() => setPlaybackSpeed(speed)}
                            className={`block w-full text-left px-3 py-1 rounded text-sm hover:bg-gray-700 ${
                              playbackSpeed === speed ? 'text-red-400' : ''
                            }`}
                          >
                            {speed}x
                          </button>
                        ))}
                      </div>
                    </div>
                    <button onClick={() => setIsFullscreen(!isFullscreen)}>
                      <Maximize size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Video Info */}
          <div className="p-6 bg-gray-900">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div className="flex-1">
                <h1 className="text-xl md:text-2xl font-bold mb-2">{currentLesson?.title}</h1>
                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400 mb-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(currentLesson?.difficulty)}`}>
                    {currentLesson?.difficulty}
                  </span>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    {currentLesson?.duration}
                  </div>
                  <div className="flex items-center">
                    <Target size={16} className="mr-1" />
                    Section {currentSectionIndex + 1}, Lesson {currentLessonIndex + 1}
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{currentLesson?.description}</p>
                
                {/* Key Points */}
                {currentLesson?.keyPoints && (
                  <div className="mb-4">
                    <h3 className="font-semibold mb-2 flex items-center">
                      <Zap size={16} className="mr-2 text-yellow-400" />
                      Quick Takeaways
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {currentLesson.keyPoints.map((point, idx) => (
                        <span key={idx} className="bg-gray-800 px-3 py-1 rounded-full text-sm">
                          {point}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 mb-6">
              <button 
                onClick={markComplete}
                className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-full font-medium transition-colors flex items-center"
              >
                <CheckCircle2 size={18} className="mr-2" />
                Mark Complete
              </button>
              <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-full transition-colors flex items-center">
                <ThumbsUp size={18} className="mr-2" />
                Like
              </button>
              <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-full transition-colors flex items-center">
                <Share size={18} className="mr-2" />
                Share
              </button>
              <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-full transition-colors flex items-center">
                <Download size={18} className="mr-2" />
                Resources
              </button>
            </div>

            {/* Instructor Info */}
            <div className="border-t border-gray-700 pt-4">
              <div className="flex items-center">
                <img 
                  src={courseData.instructor.image} 
                  alt={courseData.instructor.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">{courseData.instructor.name}</p>
                  <p className="text-sm text-gray-400">Instructor</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Notes */}
          {showNotes && (
            <div className="bg-gray-800 p-4 border-t border-gray-700">
              <h3 className="font-semibold mb-3 flex items-center">
                <Coffee size={18} className="mr-2 text-orange-400" />
                Quick Notes
              </h3>
              <div className="flex gap-2 mb-4">
                <input
                  type="text"
                  value={currentNote}
                  onChange={(e) => setCurrentNote(e.target.value)}
                  placeholder="Jot down a quick thought..."
                  className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                  onKeyPress={(e) => e.key === 'Enter' && addQuickNote()}
                />
                <button 
                  onClick={addQuickNote}
                  className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Add
                </button>
              </div>
              {quickNotes.filter(note => note.lessonId === currentLesson?.id).map(note => (
                <div key={note.id} className="bg-gray-700 p-3 rounded-lg mb-2">
                  <p className="text-sm">{note.content}</p>
                  <span className="text-xs text-gray-400">@ {note.timestamp}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Playlist Sidebar */}
        {showPlaylist && (
          <div className="fixed md:absolute right-0 top-0 h-full w-full md:w-96 bg-gray-900 border-l border-gray-700 z-40 overflow-y-auto">
            <div className="p-4 border-b border-gray-700 flex items-center justify-between">
              <h2 className="font-semibold flex items-center">
                <BookOpen size={18} className="mr-2" />
                Course Playlist
              </h2>
              <button 
                onClick={() => setShowPlaylist(false)}
                className="md:hidden text-gray-400 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>
            
            {/* Progress Overview */}
            <div className="p-4 border-b border-gray-700">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">Your Progress</span>
                <span className="text-sm font-medium">{Math.round((completedLessons/totalLessons)*100)}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all"
                  style={{ width: `${(completedLessons/totalLessons)*100}%` }}
                ></div>
              </div>
            </div>

            {/* Lesson List */}
            <div className="p-2">
              {courseData.curriculum.map((section, sectionIdx) => (
                <div key={sectionIdx} className="mb-4">
                  <div className="px-3 py-2 text-sm font-medium text-gray-400 bg-gray-800 rounded-lg mb-2">
                    {section.title}
                  </div>
                  {section.lessons.map((lesson, lessonIdx) => (
                    <div
                      key={lessonIdx}
                      onClick={() => navigateToLesson(sectionIdx, lessonIdx)}
                      className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors mb-1 ${
                        currentSectionIndex === sectionIdx && currentLessonIndex === lessonIdx
                          ? 'bg-red-600/20 border border-red-500/30'
                          : 'hover:bg-gray-800'
                      }`}
                    >
                      <div className="mr-3">
                        {lesson.completed ? (
                          <CheckCircle2 size={16} className="text-green-500" />
                        ) : (
                          <div className="w-4 h-4 border-2 border-gray-500 rounded-full"></div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm font-medium truncate ${
                          lesson.completed ? 'text-gray-400 line-through' : 'text-white'
                        }`}>
                          {lesson.title}
                        </p>
                        <div className="flex items-center text-xs text-gray-500 mt-1">
                          <Clock size={12} className="mr-1" />
                          {lesson.duration}
                          <span className={`ml-2 px-2 py-0.5 rounded text-xs ${getDifficultyColor(lesson.difficulty)}`}>
                            {lesson.difficulty}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}