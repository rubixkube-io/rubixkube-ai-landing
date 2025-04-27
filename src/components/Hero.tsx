
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-transparent">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 animate-fade-in">
          Your Conversational & Operational
          <span className="text-primary"> AI for Infrastructure</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in">
          Transform how teams interact with infrastructure — starting with Kubernetes, and expanding across cloud-native and distributed systems.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
          <Button size="lg" className="bg-primary hover:bg-primary-dark">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline">
            Schedule Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

