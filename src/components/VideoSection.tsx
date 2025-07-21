import React, { useRef, useState, useEffect } from "react";
import { Play, Pause, SkipForward, SkipBack, Volume2, VolumeX, Maximize, X } from "lucide-react";

const VideoSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  
  const videoSectionRef = useRef(null);
  const thumbnailVideoRef = useRef(null);
  const modalVideoRef = useRef(null);

  const openModal = () => {
    setIsModalOpen(true);
    // Pause thumbnail video when modal opens
    if (thumbnailVideoRef.current) {
      thumbnailVideoRef.current.pause();
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsPlaying(false);
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
    }
    videoSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Handle thumbnail video hover
  const handleThumbnailMouseEnter = () => {
    setIsHovering(true);
    if (thumbnailVideoRef.current) {
      thumbnailVideoRef.current.currentTime = 0;
      thumbnailVideoRef.current.play();
    }
  };

  const handleThumbnailMouseLeave = () => {
    setIsHovering(false);
    if (thumbnailVideoRef.current) {
      thumbnailVideoRef.current.pause();
      thumbnailVideoRef.current.currentTime = 0;
    }
  };

  // Modal video controls
  const togglePlayPause = () => {
    if (modalVideoRef.current) {
      if (isPlaying) {
        modalVideoRef.current.pause();
      } else {
        modalVideoRef.current.play();
      }
    }
  };

  const skipForward = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.currentTime += 10;
    }
  };

  const skipBackward = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.currentTime -= 10;
    }
  };

  const toggleMute = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (modalVideoRef.current) {
      modalVideoRef.current.volume = newVolume;
    }
  };

  const handleProgressChange = (e) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (modalVideoRef.current) {
      modalVideoRef.current.currentTime = newTime;
    }
  };

  // Video event listeners
  useEffect(() => {
    const video = modalVideoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
    };

    const handlePlay = () => {
      setIsPlaying(true);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, [isModalOpen]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return;
      
      switch (e.key) {
        case ' ':
          e.preventDefault();
          togglePlayPause();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          skipBackward();
          break;
        case 'ArrowRight':
          e.preventDefault();
          skipForward();
          break;
        case 'Escape':
          closeModal();
          break;
        case 'm':
          toggleMute();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, isPlaying, isMuted]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <>
      {/* Video Section with Overlay Text */}
      <section
        ref={videoSectionRef}
        className="relative w-full h-screen overflow-hidden"
      >
        {/* Background Video */}
        <div 
          className="absolute inset-0 cursor-pointer"
          onClick={openModal}
          onMouseEnter={handleThumbnailMouseEnter}
          onMouseLeave={handleThumbnailMouseLeave}
        >
          <video
            ref={thumbnailVideoRef}
            className="w-full h-full object-cover"
            muted
            playsInline
            poster="/image_thumbnail.jpg"
          >
            <source src="/sample_video.mp4" type="video/mp4" />
          </video>
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="max-w-2xl">
              {/* Main Heading */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                See RubixKube in Action
              </h1>

              {/* Subtext */}
              <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-xl">
                Watch how our AI-driven operations platform transforms complex workflows
                into simple, intelligent conversations that drive results.
              </p>

              {/* CTA Button */}
              <button 
                onClick={openModal}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-10 rounded-xl transition-all duration-300 inline-flex items-center gap-3 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <Play className="w-5 h-5" />
                Watch Full Demo
              </button>
            </div>
          </div>
        </div>

        {/* Video Preview Indicator */}
        {isHovering && (
          <div className="absolute bottom-8 right-8 z-20">
            <div className="bg-black/80 text-white text-sm px-4 py-2 rounded-xl backdrop-blur-sm flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              Playing preview
            </div>
          </div>
        )}

        {/* Play Button Overlay */}
        <div className={`absolute inset-0 flex items-center justify-center z-10 transition-opacity duration-300 ${isHovering ? 'opacity-0' : 'opacity-100'}`}>
          <button
            onClick={openModal}
            className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
          >
            <Play className="w-8 h-8 text-white ml-1" />
          </button>
        </div>
      </section>

      {/* Modal with Custom Controls */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/95 backdrop-blur-sm px-4 py-8">
          <div className="relative w-full max-w-6xl">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-slate-300 transition-colors z-50 bg-slate-800/50 p-3 rounded-full backdrop-blur-sm hover:bg-slate-700/50"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Video Player */}
            <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
              <video
                ref={modalVideoRef}
                className="w-full aspect-video"
                playsInline
                onClick={togglePlayPause}
              >
                <source src="/sample_video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Custom Controls */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                {/* Progress Bar */}
                <div className="mb-6">
                  <input
                    type="range"
                    min="0"
                    max={duration}
                    value={currentTime}
                    onChange={handleProgressChange}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
                    style={{
                      background: `linear-gradient(to right, #2563eb 0%, #2563eb ${(currentTime / duration) * 100}%, #475569 ${(currentTime / duration) * 100}%, #475569 100%)`
                    }}
                  />
                </div>

                {/* Control Buttons */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    {/* Skip Backward */}
                    <button
                      onClick={skipBackward}
                      className="text-white hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-white/10"
                      title="Skip backward 10s"
                    >
                      <SkipBack className="w-6 h-6" />
                    </button>

                    {/* Play/Pause */}
                    <button
                      onClick={togglePlayPause}
                      className="text-white hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-white/10"
                    >
                      {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8" />}
                    </button>

                    {/* Skip Forward */}
                    <button
                      onClick={skipForward}
                      className="text-white hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-white/10"
                      title="Skip forward 10s"
                    >
                      <SkipForward className="w-6 h-6" />
                    </button>

                    {/* Time Display */}
                    <div className="text-white text-sm font-mono bg-slate-800/50 px-3 py-1 rounded-lg">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    {/* Volume Control */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={toggleMute}
                        className="text-white hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-white/10"
                      >
                        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                      </button>
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.1"
                        value={volume}
                        onChange={handleVolumeChange}
                        className="w-24 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
                      />
                    </div>

                    {/* Fullscreen Button */}
                    <button
                      onClick={() => {
                        if (modalVideoRef.current?.requestFullscreen) {
                          modalVideoRef.current.requestFullscreen();
                        }
                      }}
                      className="text-white hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-white/10"
                      title="Fullscreen"
                    >
                      <Maximize className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Keyboard Shortcuts Info */}
            <div className="mt-6 text-center text-slate-400 text-sm">
              <p>Keyboard shortcuts: <span className="text-white">Space</span> (play/pause) • <span className="text-white">← →</span> (skip 10s) • <span className="text-white">M</span> (mute) • <span className="text-white">Esc</span> (close)</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoSection;
