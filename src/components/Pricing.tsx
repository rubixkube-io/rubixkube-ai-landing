import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import ContactForm, { ContactFormData } from "@/components/ContactForm";

// Custom CSS for animations
const animationStyles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes flipNumber {
    0% {
      transform: rotateX(0);
      opacity: 1;
    }
    50% {
      transform: rotateX(90deg);
      opacity: 0.2;
    }
    100% {
      transform: rotateX(0);
      opacity: 1;
    }
  }
  
  .flip-animation {
    animation: flipNumber 0.6s ease-out;
    transform-style: preserve-3d;
    perspective: 1000px;
  }
  
  .counter-ring {
    stroke-linecap: round;
    transform-origin: center;
    transform: rotate(-90deg);
    transition: stroke-dashoffset 1s ease;
  }
  
  .counter-circle {
    fill: transparent;
    stroke-width: 8;
    border-radius: 50%;
  }
`;

// Map of dates and available seats
// Starting from May 18, 2025, with daily decreases of 10-20 seats
const availableSeatsData = {
  "2025-05-18": 100,
  "2025-05-19": 85,
  "2025-05-20": 68,
  "2025-05-21": 56,
  "2025-05-22": 42,
  "2025-05-23": 30,
  "2025-05-24": 17,
  "2025-05-25": 5,
  "2025-05-26": 0
};

const EarlyAdaptation = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Get the current date in YYYY-MM-DD format
  const getCurrentDate = () => {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  };

  // Determine available seats based on current date
  const getAvailableSeats = () => {
    const currentDate = getCurrentDate();
    const dates = Object.keys(availableSeatsData).sort();
    
    // If current date is before the start date, show max seats
    if (currentDate < dates[0]) {
      return availableSeatsData[dates[0]];
    }
    
    // If current date is after end date, show 0
    if (currentDate > dates[dates.length - 1]) {
      return 0;
    }
    
    // If the exact date exists in our map
    if (availableSeatsData[currentDate] !== undefined) {
      return availableSeatsData[currentDate];
    }
    
    // Find the closest date that has passed
    let closestDate = dates[0];
    for (const date of dates) {
      if (date <= currentDate) {
        closestDate = date;
      } else {
        break;
      }
    }
    
    return availableSeatsData[closestDate];
  };

  // Handle form submission
  const handleEarlyAccessSubmit = (formData: ContactFormData) => {
    // This would normally connect to a backend service to send the email
    console.log("Early access form submitted:", formData);
    
    // Show success message
    toast({
      title: "Request Submitted",
      description: "We've received your request for early access. We'll be in touch soon!",
    });
  };

  const availableSeats = getAvailableSeats();
  const isSeatsAvailable = availableSeats > 0;
  const [displayCount, setDisplayCount] = useState(0);
  const [animateCounter, setAnimateCounter] = useState(false);
  
  // Animation for counting up to the available seats
  useEffect(() => {
    // Reset counter when component mounts
    setDisplayCount(0);
    
    // Start animation after a short delay
    const timeout = setTimeout(() => {
      setAnimateCounter(true);
    }, 500);
    
    return () => clearTimeout(timeout);
  }, []);
  
  // Count up animation effect
  useEffect(() => {
    if (!animateCounter) return;
    
    let start = 0;
    const end = availableSeats;
    const duration = 1500; // 1.5 seconds
    const startTime = performance.now();
    
    // Only animate if we have a significant number of seats
    if (end <= 5) {
      setDisplayCount(end);
      return;
    }
    
    const animateCount = (timestamp) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smoother counting
      const easeOutCubic = progress => 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easeOutCubic(progress) * end);
      
      setDisplayCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setDisplayCount(end);
      }
    };
    
    requestAnimationFrame(animateCount);
  }, [animateCounter, availableSeats]);
  
  // Get colors for the counter
  const getCounterColors = () => {
    const maxSeats = 100;
    const percentage = (availableSeats / maxSeats) * 100;
    
    if (percentage > 60) {
      return {
        main: "#0032B2", // Primary color from theme
        text: "#001F7A", // Primary dark
        track: "#e6ebff" // Light blue background
      };
    } else if (percentage > 30) {
      return {
        main: "#f59e0b", // amber-500
        text: "#d97706", // amber-600
        track: "#fef3c7" // amber-100
      };
    } else {
      return {
        main: "#f43f5e", // rose-500
        text: "#e11d48", // rose-600
        track: "#ffe4e6" // rose-100
      };
    }
  };
  
  // Calculate the circumference for the SVG circle
  const circleSize = 120; // Diameter in pixels
  const radius = circleSize / 2;
  const circumference = 2 * Math.PI * radius;
  
  // Calculate the stroke-dashoffset based on the available seats
  const calculateOffset = () => {
    const percentage = (availableSeats / 100);
    return circumference - (circumference * percentage);
  };
  
  // Update display count with flip animation
  const [prevCount, setPrevCount] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  
  useEffect(() => {
    if (prevCount !== displayCount) {
      setIsFlipping(true);
      
      // Remove animation class after it completes
      const timer = setTimeout(() => {
        setIsFlipping(false);
        setPrevCount(displayCount);
      }, 600); // Match animation duration
      
      return () => clearTimeout(timer);
    }
  }, [displayCount, prevCount]);

  return (
    <section id="pricing" className="py-20 bg-muted relative overflow-hidden">
      {/* Add animation styles */}
      <style dangerouslySetInnerHTML={{ __html: animationStyles }} />
      
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-6 md:px-12 xl:px-32 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Early Adaptation Program
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Be among the first to experience our revolutionary platform with exclusive benefits and priority support.
        </p>
        
        <div className="bg-white p-10 rounded-xl shadow-2xl max-w-3xl mx-auto">
          <div className="flex flex-col items-center justify-center mb-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Limited Availability</h3>
              
              {/* Circular Counter */}
              <div className="relative w-52 h-52 mx-auto">
                <div 
                  className="w-full h-full flex flex-col items-center justify-center rounded-full border-4"
                  style={{
                    borderColor: getCounterColors().track
                  }}
                >
                  {/* SVG Circle Progress */}
                  <svg className="absolute inset-0" width="100%" height="100%" viewBox="0 0 120 120">
                    <circle 
                      className="counter-circle" 
                      cx="60" 
                      cy="60" 
                      r="54" 
                      stroke={getCounterColors().track}
                    />
                    <circle 
                      className="counter-circle counter-ring" 
                      cx="60" 
                      cy="60" 
                      r="54" 
                      stroke={getCounterColors().main}
                      strokeDasharray={circumference}
                      strokeDashoffset={calculateOffset()}
                    />
                  </svg>
                  
                  {/* Counter */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div 
                      className={`text-7xl font-bold ${isFlipping ? 'flip-animation' : ''}`}
                      style={{ color: getCounterColors().text }}
                    >
                      {displayCount}
                    </div>
                    <div className="text-muted-foreground font-medium">seats remaining</div>
                  </div>
                </div>
              </div>
              
              {/* Urgency message based on availability */}
              {availableSeats <= 20 && (
                <p className={`mt-4 font-medium ${
                  availableSeats <= 10 ? 'text-rose-500' : 'text-amber-500'
                } animate-pulse`}>
                  {availableSeats <= 10 ? 'Almost gone! Act quickly!' : 'Limited seats remaining!'}
                </p>
              )}
            </div>
            
            <div className="space-y-6 w-full max-w-md mb-8">
              <div className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-1">
                  <span className="text-primary font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Priority Access</h4>
                  <p className="text-muted-foreground">Be the first to access all new features and updates</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-1">
                  <span className="text-primary font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Exclusive Pricing</h4>
                  <p className="text-muted-foreground">Lock in special early adopter rates permanently</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-1">
                  <span className="text-primary font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Dedicated Support</h4>
                  <p className="text-muted-foreground">Direct access to our engineering team during onboarding</p>
                </div>
              </div>
            </div>
            
            <Button 
              className={`w-full max-w-md py-6 text-lg bg-primary hover:bg-primary-dark text-white transition-all duration-300 ${isSeatsAvailable && availableSeats <= 30 ? 'shadow-lg' : ''}`}
              disabled={!isSeatsAvailable}
              onClick={() => setIsFormOpen(true)}
            >
              {isSeatsAvailable ? "Book Your Access Now" : "Currently Unavailable"}
            </Button>
            
            {!isSeatsAvailable && (
              <p className="text-muted-foreground text-sm mt-4">
                All early access seats have been claimed. Join our waitlist to be notified when more spots open up.
              </p>
            )}
          </div>
        </div>
      </div>
      
      {/* Early Access Request Form */}
      <ContactForm 
        isOpen={isFormOpen}
        onOpenChange={setIsFormOpen}
        title="Request Early Access"
        description="Fill out the form below to secure your spot in our early adaptation program."
        submitButtonText="Submit Request"
        onSubmit={handleEarlyAccessSubmit}
        formName="early-access"
      />
    </section>
  );
};

export { EarlyAdaptation };
