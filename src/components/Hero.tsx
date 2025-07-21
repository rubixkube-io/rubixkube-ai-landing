import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, TrendingUp } from "lucide-react";
import { useState } from "react";
import { PopupModal } from "react-calendly"

const Hero = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-white to-accent/5 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 xl:px-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in drop-shadow-lg">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                RubixKube™
              </span><br />
              <span className="text-gray-900 dark:text-white">The Reliability Layer</span><br />
              <span className="text-gray-900 dark:text-white">for AI Era</span>
            </h1>
            
            <div className="w-24 h-2 bg-gradient-to-r from-primary to-accent rounded-full mb-6 animate-fade-in" />
            
            <p className="text-xl md:text-xl text-muted-foreground max-w-xl mb-8 animate-fade-in leading-relaxed">
              Your infrastructure is smart. It can scale itself. <span className="font-bold bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">We make sure your revenue does too.</span>
            </p>
            
            <p className="text-lg text-muted-foreground max-w-xl mb-10 animate-fade-in leading-relaxed">
              RubixKube's <span className="font-bold bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">Site Reliability Intelligence</span> watches every signal, predicts failures, and heals issues before customers feel a thing.
            </p>

            {/* Why it matters section */}
            <div className="mb-10 animate-fade-in">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Why it matters</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Detect → Diagnose → Heal — automatically.</h4>
                    <p className="text-muted-foreground">Our agent mesh closes the full Observe-Plan-Act-Learn loop, fixing problems in seconds allowing teams to focus on growth.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Reliability isn't optional.</h4>
                    <p className="text-muted-foreground">When infra fails, teams scramble, trust lost, and revenue bleeds. We translate system failures into business impact and actions that protect trust.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
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
            
            <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-in">
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
          
          <div className="lg:block animate-fade-in relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-accent/10 blur-3xl -z-10"></div>
            <img
              src="/lovable-uploads/pexels-googledeepmind-17485819.jpg"
              alt="AI Infrastructure Management"
              className="rounded-2xl shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      {isFormOpen && (
        <PopupModal
          url="https://calendly.com/rubixkube/new-meeting"
          onModalClose={() => setIsFormOpen(false)}
          open={true}
          rootElement={document.body}
        />
      )}
    </section>
  );
};

export default Hero;