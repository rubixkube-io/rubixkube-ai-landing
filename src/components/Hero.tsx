import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, TrendingUp } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const Hero = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const whyItMattersRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (whyItMattersRef.current) {
      observer.observe(whyItMattersRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="pt-60 pb-16 bg-gradient-to-br from-primary/5 via-white to-accent/5 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 xl:px-32">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="text-left">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6 animate-fade-in drop-shadow-lg">
              <span className="font-bold bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">The Reliability Layer</span>
              <span className="text-gray-900 dark:text-white"></span><br />
              <span className="text-gray-900 dark:text-white">for the AI Era</span>
            </h1>

            <div className="w-24 h-2 bg-gradient-to-r from-primary to-accent rounded-full mb-8 animate-fade-in" />

            <p className="text-xl md:text-xl text-muted-foreground max-w-xl mb-4 animate-fade-in leading-relaxed">
              Your infrastructure is smart. It can scale itself.<br />
              <span className="font-bold bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">We make sure your revenue does too.</span>
            </p>

            <p className="text-lg text-muted-foreground max-w-xl mb-16 animate-fade-in leading-relaxed">
              RubixKube's <span className="font-bold bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">Site Reliability Intelligence</span> watches every signal, predicts failures, and heals issues before customers feel a thing.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-in mt-8 mb-8 lg:mb-0">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary-dark group text-white shadow-lg shadow-primary/30 hover:shadow-primary/50 focus:ring-4 focus:ring-primary/30 focus:outline-none px-8 py-4 hover:scale-105 transition-all duration-300"
                onClick={() => setIsFormOpen(true)}
              >
                Book A Free Demo
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          <div className="lg:block animate-fade-in relative mt-8 lg:-mt-20">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-accent/10 blur-3xl -z-10"></div>
            <img
              src="/lovable-uploads/pexels-googledeepmind-17485819.jpg"
              alt="AI Infrastructure Management"
              className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Why it matters section below the grid */}
        <div ref={whyItMattersRef} className="mt-20 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Why it matters</h2>
          <div className={`flex flex-col md:flex-row gap-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}> 
            <div className="flex-1 flex items-start gap-4 bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md">
              <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Detect → Diagnose → Heal — Automatically.</h4>
                <p className="text-muted-foreground">Our agent mesh closes the full Observe-Plan-Act-Learn loop, fixing problems in seconds allowing teams to focus on growth.</p>
              </div>
            </div>
            <div className="flex-1 flex items-start gap-4 bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md">
              <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Reliability isn't optional.</h4>
                <p className="text-muted-foreground">When infra fails, teams scramble, trust lost, and revenue bleeds. We translate system failures into business impact and actions that protect trust.</p>
              </div>
            </div>
            <div className="flex-1 flex items-start gap-4 bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md">
              <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Built to Grow With You</h4>
                <p className="text-muted-foreground">Whether you run Kubernetes, serverless, or hybrid infra. RubixKube evolves with your stack and never stops learning.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold mb-4">Book A Free Demo</h3>
            <p className="text-gray-600 mb-4">Contact us to schedule your demo.</p>
            <div className="flex gap-2">
              <Button onClick={() => setIsFormOpen(false)} variant="outline">
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;