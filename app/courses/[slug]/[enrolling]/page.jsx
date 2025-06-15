'use client';

import { useState, useEffect } from 'react';
import { 
  Play,
  Pause,
  SkipForward,
  Volume2,
  Settings,
  Maximize,
  ThumbsUp,
  Share,
  Star,
  Users,
  Clock,
  CheckCircle,
  Award,
  Eye,
  Calendar,
  Zap,
  X,
  List,
  Crown,
  Download,
  Bookmark,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  PlayCircle
} from 'lucide-react';
import { coursEData } from '@/app/data/data';

export default function CourseEnrollmentPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration] = useState("42:15");
  const [progress, setProgress] = useState(25);
  const [showPlaylist, setShowPlaylist] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(coursEData.playlist.videos.find(v => v.current) || coursEData.playlist.videos[0]);
  const [completedVideos, setCompletedVideos] = useState(new Set([1, 2, 3]));

  // Check mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setShowPlaylist(false);
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const togglePlaylist = () => {
    setShowPlaylist(!showPlaylist);
  };

  const selectVideo = (video) => {
    setCurrentVideo(video);
    setProgress(0);
    setCurrentTime("0:00");
    setIsPlaying(false);
  };

  const markAsComplete = (videoId) => {
    setCompletedVideos(prev => new Set([...prev, videoId]));
  };

  const toggleBookmark = () => {
    // Bookmark functionality
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black border-b border-gray-800 px-3 sm:px-6 py-3 sticky top-0 z-50">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-2 sm:space-x-3">
           
            <div className="hidden sm:flex items-center gap-2 ml-4">
              <Crown className="h-4 w-4 text-yellow-400" />
              <span className="text-sm text-yellow-400 font-medium">Premium Member</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button 
              onClick={() => setShowNotes(!showNotes)}
              className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
            >
              <MessageCircle size={isMobile ? 14 : 16} />
              <span className="text-xs sm:text-sm hidden sm:block">Notes</span>
            </button>
            <button 
              onClick={togglePlaylist}
              className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
            >
              <List size={isMobile ? 14 : 16} />
              <span className="text-xs sm:text-sm hidden sm:block">Course Content</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-2 sm:gap-6 p-2 sm:p-6">
        {/* Main Content */}
        <div className="flex-1 w-full">
          {/* Video Player */}
          <div className="bg-gray-900 rounded-lg sm:rounded-xl overflow-hidden mb-4 sm:mb-6 shadow-2xl">
            <div 
              className="aspect-video bg-gradient-to-br from-gray-800 to-black flex items-center justify-center relative group cursor-pointer"
              onMouseEnter={() => !isMobile && setShowControls(true)}
              onMouseLeave={() => !isMobile && setShowControls(false)}
              onTouchStart={() => setShowControls(true)}
            >
              {/* Video background */}
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=450&fit=crop" 
                alt="Course content"
                className="absolute inset-0 w-full h-full object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-black/30"></div>
              
              {/* Premium badge */}
              <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center">
                <Crown size={12} className="mr-1" />
                PREMIUM CONTENT
              </div>
              
              {/* Video actions */}
              <div className="absolute top-4 right-4 flex gap-2">
                <button 
                  onClick={toggleBookmark}
                  className="bg-black/50 backdrop-blur-sm hover:bg-black/70 rounded-full p-2 transition-all"
                >
                  <Bookmark size={16} className="text-white" />
                </button>
                <button className="bg-black/50 backdrop-blur-sm hover:bg-black/70 rounded-full p-2 transition-all">
                  <Download size={16} className="text-white" />
                </button>
              </div>
              
              {/* Play button */}
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

              {/* Video Controls */}
              <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3 sm:p-6 transition-opacity duration-300 ${showControls || isMobile ? 'opacity-100' : 'opacity-0'}`}>
                {/* Progress bar */}
                <div className="w-full bg-gray-700/50 h-1 rounded-full mb-3 sm:mb-4 cursor-pointer">
                  <div 
                    className="bg-gradient-to-r from-red-500 to-pink-500 h-1 rounded-full transition-all"
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
                    <button className="p-1.5 sm:p-2 hover:bg-white/10 rounded-lg transition-colors">
                      <SkipForward size={isMobile ? 16 : 18} />
                    </button>
                    <div className="flex items-center space-x-1 sm:space-x-2">
                      <Volume2 size={isMobile ? 12 : 16} />
                      <span className="text-xs sm:text-sm font-mono">{currentTime} / {duration}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <button className="text-xs bg-gray-800/80 px-2 py-1 rounded">1.5x</button>
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

          {/* Video Info */}
          <div className="space-y-4 px-1 sm:px-0 mb-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h1 className="text-xl sm:text-2xl font-bold text-gray-100 leading-tight mb-2">
                  {currentVideo.title}
                </h1>
                <div className="text-sm text-gray-400 flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {currentVideo.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    15.2K views
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    2 days ago
                  </span>
                </div>
              </div>
              
              <button 
                onClick={() => markAsComplete(currentVideo.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  completedVideos.has(currentVideo.id)
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                }`}
              >
                <CheckCircle size={16} />
                {completedVideos.has(currentVideo.id) ? 'Completed' : 'Mark Complete'}
              </button>
            </div>

            <div className="flex items-center space-x-2">
              <button className="flex items-center space-x-2 px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-sm">
                <ThumbsUp size={14} />
                <span>1.2K</span>
              </button>
              <button className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                <Share size={14} />
              </button>
              <button className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                <Download size={14} />
              </button>
              <button className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                <Bookmark size={14} />
              </button>
            </div>

            {/* Instructor Info */}
            <div className="flex items-center justify-between p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800">
              <div className="flex items-center space-x-3">
                <img 
                  src={coursEData.instructor.image} 
                  alt={coursEData.instructor.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-gray-700"
                />
                <div>
                  <div className="font-medium text-gray-100">{coursEData.instructor.name}</div>
                  <div className="text-sm text-gray-400">{coursEData.instructor.subscribers}</div>
                </div>
              </div>
              <button className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-4 py-2 rounded-lg font-medium transition-all">
                Following
              </button>
            </div>
          </div>

          {/* Course Progress */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">Course Progress</h3>
              <span className="text-sm text-gray-400">{completedVideos.size}/{coursEData.playlist.totalVideos} completed</span>
            </div>
            
            <div className="w-full bg-gray-800 h-2 rounded-full mb-4">
              <div 
                className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${(completedVideos.size / coursEData.playlist.totalVideos) * 100}%` }}
              ></div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="font-bold">{completedVideos.size}</span>
                </div>
                <div className="text-xs text-gray-400">Completed</div>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Clock className="h-4 w-4 text-blue-400" />
                  <span className="font-bold">8.5h</span>
                </div>
                <div className="text-xs text-gray-400">Watched</div>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Zap className="h-4 w-4 text-yellow-400" />
                  <span className="font-bold">4</span>
                </div>
                <div className="text-xs text-gray-400">Streak Days</div>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Award className="h-4 w-4 text-purple-400" />
                  <span className="font-bold">67%</span>
                </div>
                <div className="text-xs text-gray-400">Progress</div>
              </div>
            </div>
          </div>

          {/* Notes Section */}
          {showNotes && (
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 mb-6">
              <h3 className="text-lg font-bold mb-4">My Notes</h3>
              <textarea 
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg p-4 text-gray-300 placeholder-gray-500 resize-none"
                rows="6"
                placeholder="Take notes for this lesson..."
              ></textarea>
              <div className="flex justify-end mt-3">
                <button className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-lg font-medium">
                  Save Notes
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Playlist Sidebar */}
        {isMobile ? (
          // Mobile: Full-screen overlay
          <div className={`fixed inset-0 z-50 transition-all duration-300 ${showPlaylist ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={togglePlaylist}></div>
            <div className={`absolute bottom-0 left-0 right-0 bg-gray-900 rounded-t-xl max-h-[80vh] transition-transform duration-300 ${showPlaylist ? 'translate-y-0' : 'translate-y-full'}`}>
              <div className="p-4 border-b border-gray-800/50 flex items-center justify-between">
                <div>
                  <h2 className="font-semibold text-gray-100">{coursEData.playlist.title}</h2>
                  <div className="text-sm text-gray-500">{coursEData.playlist.totalVideos} videos • {coursEData.playlist.totalDuration}</div>
                </div>
                <button 
                  onClick={togglePlaylist}
                  className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="overflow-y-auto max-h-[60vh]">
                {coursEData.playlist.videos.map((video, index) => (
                  <div
                    key={video.id}
                    onClick={() => selectVideo(video)}
                    className={`flex items-center p-4 border-b border-gray-800/30 cursor-pointer hover:bg-gray-800/30 transition-colors ${
                      currentVideo.id === video.id ? 'bg-gray-800/50 border-l-4 border-l-red-500' : ''
                    }`}
                  >
                    <div className="flex-shrink-0 mr-3">
                      {completedVideos.has(video.id) ? (
                        <CheckCircle size={20} className="text-green-400" />
                      ) : currentVideo.id === video.id ? (
                        <PlayCircle size={20} className="text-red-400" />
                      ) : (
                        <div className="w-5 h-5 rounded-full border-2 border-gray-600 flex items-center justify-center text-xs font-mono text-gray-400">
                          {index + 1}
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium mb-1 text-gray-300">
                        {video.title}
                      </h3>
                      <div className="flex items-center text-xs text-gray-500">
                        <Clock size={10} className="mr-1" />
                        <span className="font-mono">{video.duration}</span>
                        {video.free && <span className="ml-2 text-green-400 font-medium">FREE</span>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          // Desktop: Sidebar
          <div className={`transition-all duration-300 ${showPlaylist ? 'w-96 opacity-100' : 'w-0 opacity-0 overflow-hidden'}`}>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800/50 h-fit sticky top-20">
              <div className="p-4 border-b border-gray-800/50">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="font-semibold text-gray-100">{coursEData.playlist.title}</h2>
                  <button 
                    onClick={togglePlaylist}
                    className="p-1 hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>
                <div className="text-sm text-gray-500 mb-3">{coursEData.playlist.totalVideos} videos • {coursEData.playlist.totalDuration}</div>
                <div className="w-full bg-gray-800 h-1 rounded-full">
                  <div 
                    className="bg-gradient-to-r from-green-500 to-emerald-500 h-1 rounded-full transition-all"
                    style={{ width: `${(completedVideos.size / coursEData.playlist.totalVideos) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
                {coursEData.playlist.videos.map((video, index) => (
                  <div
                    key={video.id}
                    onClick={() => selectVideo(video)}
                    className={`flex items-center p-3 cursor-pointer hover:bg-gray-800/30 transition-colors ${
                      currentVideo.id === video.id ? 'bg-gray-800/50 border-l-4 border-l-red-500' : ''
                    }`}
                  >
                    <div className="flex-shrink-0 mr-3">
                      {completedVideos.has(video.id) ? (
                        <CheckCircle size={18} className="text-green-400" />
                      ) : currentVideo.id === video.id ? (
                        <PlayCircle size={18} className="text-red-400" />
                      ) : (
                        <div className="w-4 h-4 rounded-full border-2 border-gray-600 flex items-center justify-center text-xs font-mono text-gray-400">
                          {index + 1}
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium line-clamp-2 mb-1 text-gray-300">
                        {video.title}
                      </h3>
                      <div className="flex items-center text-xs text-gray-500">
                        <Clock size={10} className="mr-1" />
                        <span className="font-mono">{video.duration}</span>
                        {video.free && <span className="ml-2 text-green-400 font-medium">FREE</span>}
                      </div>
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