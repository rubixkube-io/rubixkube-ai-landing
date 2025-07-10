// src/components/TopBanner.tsx
import React, { useEffect, useState } from "react";
import { Sparkles, X } from "lucide-react";

const messages = [
"RubixKube’s innovation is officially protected Patent filed!",
"RubixKube’s AI-driven operations platform has entered the patent pipeline.",
];

const TopBanner = ({ onClose }: { onClose: () => void }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClosing, setIsClosing] = useState(false);

  // Rotate banner message every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    // Delay the actual removal to allow smooth transition
    setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    <div className={`sticky top-0 w-full h-12 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white text-sm px-4 flex justify-center items-center z-50 border-b border-blue-800/30 shadow-lg transition-all duration-300 ${
      isClosing ? 'transform -translate-y-full opacity-0' : 'transform translate-y-0 opacity-100'
    }`}>
      <div className="container mx-auto flex items-center justify-between max-w-6xl">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Sparkles className="h-3.5 w-3.5 text-blue-400 animate-pulse" />
              <div className="absolute inset-0 h-3.5 w-3.5 text-blue-400 animate-ping opacity-30">
                <Sparkles className="h-full w-full" />
              </div>
            </div>
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-bold text-xs uppercase tracking-wide">
              Latest
            </span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-blue-600/50"></div>
          <span className="font-medium text-slate-100 tracking-wide">
            {messages[currentIndex]}
          </span>
        </div>
                
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 text-xs text-slate-400">
            <div className="flex gap-1">
              {messages.map((_, index) => (
                <div
                  key={index}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                       ? 'bg-blue-400'
                       : 'bg-slate-600'
                  }`}
                />
              ))}
            </div>
          </div>
          <button
            className="flex items-center justify-center w-6 h-6 rounded-full hover:bg-white/10 transition-colors duration-200 group"
            onClick={handleClose}
            aria-label="Close banner"
          >
            <X className="h-3.5 w-3.5 text-slate-300 group-hover:text-white transition-colors" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;