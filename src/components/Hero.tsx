
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-white to-accent/5">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 animate-fade-in">
              Your Conversational & Operational
              <span className="text-primary block"> AI for Infrastructure</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mb-8 animate-fade-in">
              Transform how teams interact with infrastructure — starting with Kubernetes, and expanding across cloud-native and distributed systems.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-in">
              <Button size="lg" className="bg-primary hover:bg-primary-dark">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Schedule Demo
              </Button>
            </div>
          </div>
          <div className="lg:block animate-fade-in">
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
              alt="Infrastructure Management"
              className="rounded-2xl shadow-2xl w-full hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
