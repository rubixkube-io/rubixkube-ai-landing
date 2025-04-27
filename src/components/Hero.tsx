
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-white to-accent/5 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 animate-fade-in">
              Cut Through the Chaos
              <span className="text-primary block mt-2">
                Reimagine Infrastructure Management with Agentic AI
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mb-8 animate-fade-in">
              RubixKube transforms how teams interact with Kubernetes and cloud-native infrastructure — replacing dashboards, scripts, and endless YAMLs with intuitive, intelligent operations.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-in">
              <Button size="lg" className="bg-primary hover:bg-primary-dark group transition-all duration-300">
                Get Started Free <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          <div className="lg:block animate-fade-in relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-accent/10 blur-3xl -z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
              alt="AI Infrastructure Management"
              className="rounded-2xl shadow-2xl w-full hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
