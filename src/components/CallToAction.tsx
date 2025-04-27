import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-transparent opacity-80"></div>
      <div className="absolute inset-0 bg-[url('/lovable-uploads/pexels-googledeepmind-18069156.jpg')] bg-cover bg-center mix-blend-multiply"></div>
      <div className="container mx-auto px-6 md:px-12 xl:px-32 text-center relative">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Rethink Infra Ops?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            RubixKube helps you ship faster, operate smarter, and sleep better — with an evolving, AI-powered control plane at your side.
          </p>
          <Button size="lg" className="bg-primary text-white hover:bg-primary-dark hover:scale-105 transition-all duration-300">
            Get Started Now <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
