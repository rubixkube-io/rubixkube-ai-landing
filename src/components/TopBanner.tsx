// src/components/TopBanner.tsx
import React, { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

const messages = [
  "RubixKube's AI-driven operations platform has entered the Patent Pipeline.",
];

const TopBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 w-full z-50 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white text-sm shadow-md border-b border-blue-800/30">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex items-center justify-center gap-2 text-center">
          <div className="relative flex items-center justify-center flex-shrink-0">
            <Sparkles className="h-4 w-4 text-blue-400 animate-pulse" />
            <div className="absolute inset-0 h-4 w-4 text-blue-400 animate-ping opacity-30">
              <Sparkles className="h-full w-full" />
            </div>
          </div>
          <span className="text-xs font-bold text-blue-400 uppercase tracking-widest flex-shrink-0">
            Latest
          </span>
          <p className="text-[12px] sm:text-sm md:text-base font-medium text-slate-100 min-w-0 break-words leading-tight">
            {messages[currentIndex]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;