
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary opacity-90"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531297484001-80022131f5a1')] bg-cover bg-center mix-blend-overlay"></div>
      <div className="container mx-auto px-4 text-center relative">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Infrastructure?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join the future of infrastructure management with RubixKube's AI-powered platform.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100 hover:scale-105 transition-all duration-300">
            Get Started Now <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
