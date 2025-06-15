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
  Lock,
  Eye,
  Calendar,
  Zap,
  X,
  List,
  Crown
} from 'lucide-react';
import { coursEData } from '@/app/data/data';

// Course data structure

export default function CourseEnrollmentPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration] = useState("8:45");
  const [progress, setProgress] = useState(0);
  const [showPlaylist, setShowPlaylist] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black border-b border-gray-800 px-3 sm:px-6 py-3 sticky top-0 z-50">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Play size={isMobile ? 12 : 16} fill="white" />
            </div>
            <span className="text-base sm:text-lg font-medium">DevBootcamp</span>
          </div>
          
          <div className="flex items-center space-x-2">
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
                alt="Course preview"
                className="absolute inset-0 w-full h-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/40"></div>
              
              {/* Free badge */}
              <div className="absolute top-4 left-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center">
                <Eye size={12} className="mr-1" />
                FREE PREVIEW
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

          {/* Video Info */}
          <div className="space-y-4 px-1 sm:px-0 mb-6">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-100 leading-tight">
              {coursEData.freeVideo.title}
            </h1>
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
              <div className="text-sm text-gray-400 flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  {coursEData.freeVideo.views}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {coursEData.freeVideo.uploadDate}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <button className="flex items-center space-x-2 px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-sm">
                  <ThumbsUp size={14} />
                  <span>1.2K</span>
                </button>
                <button className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                  <Share size={14} />
                </button>
              </div>
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
                Subscribe
              </button>
            </div>
          </div>

          {/* Course Info Card */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 mb-6">
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {coursEData.title}
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="font-bold">{coursEData.stats.rating}</span>
                </div>
                <div className="text-xs text-gray-400">Rating</div>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Users className="h-4 w-4 text-blue-400" />
                  <span className="font-bold">{coursEData.stats.students}</span>
                </div>
                <div className="text-xs text-gray-400">Students</div>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Clock className="h-4 w-4 text-purple-400" />
                  <span className="font-bold text-xs">18+ hrs</span>
                </div>
                <div className="text-xs text-gray-400">Content</div>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Award className="h-4 w-4 text-orange-400" />
                  <span className="font-bold text-xs">Certificate</span>
                </div>
                <div className="text-xs text-gray-400">Included</div>
              </div>
            </div>

            {/* Highlights */}
            <div className="mb-6">
              <h3 className="font-bold text-lg mb-3 text-green-400">What You'll Learn</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {coursEData.highlights.map((highlight, index) => (
                  <div key={index} className="text-sm font-medium text-gray-300 flex items-center gap-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-red-400 to-pink-400 rounded-full"></div>
                    {highlight}
                  </div>
                ))}
              </div>
            </div>

            {/* Enrollment CTA */}
            <div className="bg-gradient-to-r from-red-900/20 to-pink-900/20 border border-red-500/30 rounded-xl p-6 text-center">
              <div className="mb-4">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                    {coursEData.price.current} MAD
                  </span>
                  <span className="text-lg text-gray-500 line-through">{coursEData.price.original} MAD</span>
                </div>
                <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm font-bold px-4 py-2 rounded-full inline-block">
                  {coursEData.price.discount}% OFF - Limited Time!
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 mb-3">
                <Crown className="h-5 w-5" />
                Enroll Now & Get Full Access
              </button>
              
              <div className="text-sm text-gray-400">
                30-day money-back guarantee • Lifetime access
              </div>
            </div>
          </div>
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

              <div className="overflow-y-auto max-h-[60vh] relative">
                {/* Blur overlay for locked content */}
                <div className="absolute inset-0 backdrop-blur-sm bg-black/20 z-10 flex items-center justify-center">
                  <div className="bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center max-w-sm mx-4">
                    <Lock className="h-12 w-12 text-red-400 mx-auto mb-4" />
                    <h3 className="text-lg font-bold mb-2">Premium Content Locked</h3>
                    <p className="text-sm text-gray-400 mb-4">Enroll now to access all {coursEData.playlist.totalVideos} lessons</p>
                    <button className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-lg font-medium">
                      Unlock Course
                    </button>
                  </div>
                </div>

                {coursEData.playlist.videos.map((video, index) => (
                  <div
                    key={video.id}
                    className={`flex items-center p-4 border-b border-gray-800/30 ${
                      video.free ? 'opacity-100' : 'opacity-60'
                    }`}
                  >
                    <div className="flex-shrink-0 mr-3">
                      <div className="w-8 h-8 rounded bg-gray-700 flex items-center justify-center text-sm font-mono text-gray-400">
                        {index + 1}
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium mb-1 text-gray-300 flex items-center gap-2">
                        {video.title}
                        {!video.free && <Lock size={12} className="text-red-400" />}
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
                <div className="text-sm text-gray-500">{coursEData.playlist.totalVideos} videos • {coursEData.playlist.totalDuration}</div>
              </div>

              <div className="max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent relative">
                {/* Blur overlay for locked content */}
                <div className="absolute inset-0 backdrop-blur-sm bg-black/10 z-10 flex items-center justify-center">
                  <div className="bg-gray-900/95 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center max-w-xs mx-4">
                    <Lock className="h-10 w-10 text-red-400 mx-auto mb-3" />
                    <h3 className="text-base font-bold mb-2">Premium Content</h3>
                    <p className="text-xs text-gray-400 mb-4">Enroll to access all lessons</p>
                    <button className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-lg font-medium text-sm">
                      Unlock Now
                    </button>
                  </div>
                </div>

                {coursEData.playlist.videos.map((video, index) => (
                  <div
                    key={video.id}
                    className={`flex items-center p-3 ${
                      video.free ? 'opacity-100' : 'opacity-50'
                    }`}
                  >
                    <div className="flex-shrink-0 mr-3">
                      <div className="w-6 h-6 rounded bg-gray-700 flex items-center justify-center text-xs font-mono text-gray-400">
                        {index + 1}
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium line-clamp-2 mb-1 text-gray-300 flex items-center gap-2">
                        {video.title}
                        {!video.free && <Lock size={10} className="text-red-400" />}
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