"use client";
import { useState, useEffect } from 'react';
import { 
  Play,
  Pause,
  SkipForward,
  SkipBack,
  CheckCircle2,
  Clock,
  Volume2,
  Settings,
  Maximize,
  ThumbsUp,
  ThumbsDown,
  Share,
  MoreHorizontal,
  List,
  X,
  ChevronRight,
  ChevronDown,
  Menu
} from 'lucide-react';

// Course data
const courseData = {
  title: "Complete React Mastery Course",
  instructor: {
    name: "Sarah Chen",
    subscribers: "184K subscribers",
    avatar: "/api/placeholder/40/40"
  },
  currentVideo: {
    title: "Create a project with React — Course part 1",
    views: "40K views",
    uploadDate: "2 years ago"
  },
  playlist: {
    title: "React Mastery (2023)",
    author: "Codewithsarah",
    currentIndex: 1,
    totalVideos: 23,
    videos: [
      { id: 1, title: "Create a project with React — Course part 1", duration: "11:36", current: true, completed: false },
      { id: 2, title: "Webhooks with React — Course part 2", duration: "5:35", current: false, completed: false },
      { id: 3, title: "Self-host with React — Course part 3", duration: "5:57", current: false, completed: false },
      { id: 4, title: "Learn React — Full course for beginners [3 hours...]", duration: "2:55:24", current: false, completed: false },
      { id: 5, title: "Building a Full-Stack Web App with Next.js 13 and...", duration: "51:53", current: false, completed: false },
      { id: 6, title: "Tables with React — Course part 6", duration: "14:39", current: false, completed: false },
      { id: 7, title: "Authentication with React — Course part 7", duration: "18:42", current: false, completed: false },
      { id: 8, title: "Deployment Strategies — Course part 8", duration: "22:15", current: false, completed: false }
    ]
  }
};

export default function ResponsiveCoursePlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState("0:33");
  const [duration] = useState("11:36");
  const [progress, setProgress] = useState(5);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [showPlaylist, setShowPlaylist] = useState(false); // Default closed on mobile
  const [showControls, setShowControls] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      // Auto-close playlist on mobile
      if (window.innerWidth < 768) {
        setShowPlaylist(false);
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const currentVideo = courseData.playlist.videos[currentVideoIndex];

  const playVideo = (index) => {
    setCurrentVideoIndex(index);
    courseData.playlist.videos.forEach((video, i) => {
      video.current = i === index;
    });
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime("0:00");
    // Close playlist on mobile after selection
    if (isMobile) {
      setShowPlaylist(false);
    }
  };

  const nextVideo = () => {
    if (currentVideoIndex < courseData.playlist.videos.length - 1) {
      playVideo(currentVideoIndex + 1);
    }
  };

  const prevVideo = () => {
    if (currentVideoIndex > 0) {
      playVideo(currentVideoIndex - 1);
    }
  };

  const togglePlaylist = () => {
    setShowPlaylist(!showPlaylist);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Responsive Header */}
      <header className="bg-black border-b border-gray-800 px-3 sm:px-6 py-3 sticky top-0 z-50">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-700 rounded-lg flex items-center justify-center">
              <Play size={isMobile ? 12 : 16} fill="white" />
            </div>
            <span className="text-base sm:text-lg font-medium hidden sm:block">Course Player</span>
            <span className="text-sm font-medium sm:hidden">Player</span>
          </div>
          
          {/* Responsive search - hidden on small mobile */}
          <div className="flex-1 max-w-xs sm:max-w-md mx-2 sm:mx-8 hidden xs:block">
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full bg-gray-900 border-0 rounded-lg px-3 sm:px-4 py-2 text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
          </div>
          
          <button 
            onClick={togglePlaylist}
            className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
          >
            <List size={isMobile ? 14 : 16} />
            <span className="text-xs sm:text-sm hidden sm:block">Playlist</span>
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-2 sm:gap-4 p-2 sm:p-4">
        {/* Main Video Section */}
        <div className="flex-1 w-full">
          {/* Video Player - Fully responsive */}
          <div className="bg-gray-900 rounded-lg sm:rounded-xl overflow-hidden mb-3 sm:mb-4 shadow-2xl">
            <div 
              className="aspect-video bg-gradient-to-br from-gray-800 to-black flex items-center justify-center relative group cursor-pointer"
              onMouseEnter={() => !isMobile && setShowControls(true)}
              onMouseLeave={() => !isMobile && setShowControls(false)}
              onTouchStart={() => setShowControls(true)}
            >
              {/* Simplified video background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-green-900/10"></div>
              
              {/* Content indicator - responsive sizing */}
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="bg-black/30 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl text-center border border-gray-700/50 max-w-sm">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-100">React Course</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">Interactive Learning Experience</p>
                </div>
              </div>
              
              {/* Responsive play button */}
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="relative z-10 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full p-4 sm:p-6 transition-all transform hover:scale-105 active:scale-95 border border-white/20"
              >
                {isPlaying ? (
                  <Pause size={isMobile ? 24 : 32} className="text-white" />
                ) : (
                  <Play size={isMobile ? 24 : 32} className="text-white ml-1" />
                )}
              </button>

              {/* Responsive Controls */}
              <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3 sm:p-6 transition-opacity duration-300 ${showControls || isMobile ? 'opacity-100' : 'opacity-0'}`}>
                {/* Progress bar */}
                <div className="w-full bg-gray-700/50 h-1 rounded-full mb-3 sm:mb-4 cursor-pointer">
                  <div 
                    className="bg-white h-1 rounded-full transition-all"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 sm:space-x-4">
                    <button 
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="p-1.5 sm:p-2 hover:bg-white/10 rounded-lg transition-colors"
                    >
                      {isPlaying ? <Pause size={isMobile ? 16 : 18} /> : <Play size={isMobile ? 16 : 18} />}
                    </button>
                    <button 
                      onClick={nextVideo}
                      className="p-1.5 sm:p-2 hover:bg-white/10 rounded-lg transition-colors"
                    >
                      <SkipForward size={isMobile ? 16 : 18} />
                    </button>
                    <div className="flex items-center space-x-1 sm:space-x-2">
                      <Volume2 size={isMobile ? 12 : 16} />
                      <span className="text-xs sm:text-sm font-mono">{currentTime} / {duration}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <button className="p-1.5 sm:p-2 hover:bg-white/10 rounded-lg transition-colors">
                      <Settings size={isMobile ? 14 : 16} />
                    </button>
                    <button className="p-1.5 sm:p-2 hover:bg-white/10 rounded-lg transition-colors">
                      <Maximize size={isMobile ? 14 : 16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Responsive Video Info */}
          <div className="space-y-3 sm:space-y-4 px-1 sm:px-0">
            <h1 className="text-lg sm:text-xl font-semibold text-gray-100 leading-tight">
              {courseData.currentVideo.title}
            </h1>
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
              <div className="text-sm text-gray-500">
                {courseData.currentVideo.views} • {courseData.currentVideo.uploadDate}
              </div>
              <div className="flex items-center space-x-2">
                <button className="flex items-center space-x-2 px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-sm">
                  <ThumbsUp size={14} />
                  <span>559</span>
                </button>
                <button className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                  <Share size={14} />
                </button>
              </div>
            </div>

            {/* Responsive Channel Info */}
            <div className="flex items-center justify-between p-3 sm:p-4 bg-gray-900/50 rounded-lg sm:rounded-xl">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-xs sm:text-sm font-medium">SC</span>
                </div>
                <div>
                  <div className="font-medium text-gray-100 text-sm sm:text-base">{courseData.instructor.name}</div>
                  <div className="text-xs sm:text-sm text-gray-500">{courseData.instructor.subscribers}</div>
                </div>
              </div>
              <button className="bg-white text-black hover:bg-gray-200 px-3 sm:px-4 py-2 rounded-lg font-medium transition-colors text-xs sm:text-sm">
                Follow
              </button>
            </div>
          </div>
        </div>

        {/* Responsive Playlist Sidebar/Modal */}
        {isMobile ? (
          // Mobile: Full-screen overlay
          <div className={`fixed inset-0 z-50 transition-all duration-300 ${showPlaylist ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={togglePlaylist}></div>
            <div className={`absolute bottom-0 left-0 right-0 bg-gray-900 rounded-t-xl max-h-[80vh] transition-transform duration-300 ${showPlaylist ? 'translate-y-0' : 'translate-y-full'}`}>
              {/* Mobile Playlist Header */}
              <div className="p-4 border-b border-gray-800/50 flex items-center justify-between">
                <div>
                  <h2 className="font-semibold text-gray-100">{courseData.playlist.title}</h2>
                  <div className="text-sm text-gray-500">{courseData.playlist.author}</div>
                  <div className="text-xs text-gray-600 mt-1">
                    {courseData.playlist.currentIndex} of {courseData.playlist.totalVideos} videos
                  </div>
                </div>
                <button 
                  onClick={togglePlaylist}
                  className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Mobile Video List */}
              <div className="overflow-y-auto max-h-[60vh]">
                {courseData.playlist.videos.map((video, index) => (
                  <div
                    key={video.id}
                    onClick={() => playVideo(index)}
                    className={`flex items-center p-4 cursor-pointer transition-all hover:bg-gray-800/50 border-b border-gray-800/30 ${
                      video.current 
                        ? 'bg-gray-800/70 border-l-4 border-white' 
                        : ''
                    }`}
                  >
                    <div className="flex-shrink-0 mr-3">
                      <div className="w-8 h-8 rounded bg-gray-700 flex items-center justify-center text-sm font-mono text-gray-400">
                        {index + 1}
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className={`text-sm font-medium mb-1 ${
                        video.current ? 'text-white' : 'text-gray-300'
                      }`}>
                        {video.title}
                      </h3>
                      <div className="flex items-center text-xs text-gray-500">
                        <span className="font-mono">{video.duration}</span>
                      </div>
                    </div>

                    <div className="flex-shrink-0 ml-2">
                      {video.completed ? (
                        <CheckCircle2 size={16} className="text-green-500" />
                      ) : video.current ? (
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          // Desktop: Sidebar
          <div className={`transition-all duration-300 ${showPlaylist ? 'w-80 opacity-100' : 'w-0 opacity-0 overflow-hidden'}`}>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800/50 h-fit sticky top-20">
              {/* Desktop Playlist Header */}
              <div className="p-4 border-b border-gray-800/50">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="font-semibold text-gray-100">{courseData.playlist.title}</h2>
                  <button 
                    onClick={togglePlaylist}
                    className="p-1 hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>
                <div className="text-sm text-gray-500">{courseData.playlist.author}</div>
                <div className="text-xs text-gray-600 mt-1">
                  {courseData.playlist.currentIndex} of {courseData.playlist.totalVideos} videos
                </div>
              </div>

              {/* Desktop Video List */}
              <div className="max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
                {courseData.playlist.videos.map((video, index) => (
                  <div
                    key={video.id}
                    onClick={() => playVideo(index)}
                    className={`flex items-center p-3 cursor-pointer transition-all hover:bg-gray-800/50 ${
                      video.current 
                        ? 'bg-gray-800/70 border-l-2 border-white' 
                        : ''
                    }`}
                  >
                    <div className="flex-shrink-0 mr-3">
                      <div className="w-6 h-6 rounded bg-gray-700 flex items-center justify-center text-xs font-mono text-gray-400">
                        {index + 1}
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className={`text-sm font-medium line-clamp-2 mb-1 ${
                        video.current ? 'text-white' : 'text-gray-300'
                      }`}>
                        {video.title}
                      </h3>
                      <div className="flex items-center text-xs text-gray-500">
                        <span className="font-mono">{video.duration}</span>
                      </div>
                    </div>

                    <div className="flex-shrink-0 ml-2">
                      {video.completed ? (
                        <CheckCircle2 size={14} className="text-green-500" />
                      ) : video.current ? (
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}