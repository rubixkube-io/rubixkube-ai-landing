import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <style>
        {`
          @keyframes glitch {
            0%, 90%, 100% {
              transform: translate(0);
            }
            10% {
              transform: translate(-2px, 2px);
            }
            20% {
              transform: translate(2px, -2px);
            }
            30% {
              transform: translate(-2px, -2px);
            }
            40% {
              transform: translate(2px, 2px);
            }
            50% {
              transform: translate(-2px, 2px);
            }
            60% {
              transform: translate(2px, -2px);
            }
            70% {
              transform: translate(-2px, -2px);
            }
            80% {
              transform: translate(2px, 2px);
            }
          }
        `}
      </style>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#f7faff] to-white relative overflow-hidden">
        <div className="text-center z-10 max-w-2xl mx-auto px-6">
          <div className="relative mb-8">
            <div
              className="text-7xl md:text-8xl font-black uppercase relative text-blue-900 animate-pulse"
              style={{
                animation: 'glitch 2s infinite',
                textShadow: '3px 3px 0px #3b82f6, -2px -2px 0px #60a5fa',
                fontFamily: 'system-ui, -apple-system, sans-serif',
                letterSpacing: '0.05em'
              }}
            >
              ERROR
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl text-blue-800 mb-6 font-bold" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
           404 - Achievement Unlocked!
          </h1>
          
          <p className="text-lg md:text-xl text-blue-700 mb-8 max-w-lg mx-auto leading-relaxed" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
            Congratulations! You've discovered a page that exists in a parallel universe.
          </p>
          
          <button
            onClick={() => window.location.href = '/'}
            className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            Back to Reality
          </button>
        </div>

      </div>
    </>
  );
};

export default NotFound;