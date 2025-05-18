import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import ContactForm from "@/components/ContactForm";

const Hero = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-white to-accent/5 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 xl:px-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in drop-shadow-lg">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Tame the Chaos
              </span><br />
              <span className="text-gray-900 dark:text-white">Talk to Your Infrastructure.</span>
            </h1>
            <div className="w-24 h-2 bg-gradient-to-r from-primary to-accent rounded-full mb-6 animate-fade-in" />
            <p className="text-xl md:text-xl text-muted-foreground max-w-xl mb-10 animate-fade-in leading-relaxed">
              RubixKube turns complex ops into simple conversations with AI agents that observe, learn, and act. Your 24/7 SRE team.<br />
              Always on. Always learning. Always acting.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-in">
              <Button 
                size="lg"
            className="bg-primary hover:bg-primary-dark group text-white shadow-lg shadow-primary/30 hover:shadow-primary/50 focus:ring-4 focus:ring-primary/30 focus:outline-none px-8 py-4 hover:scale-105 transition-all duration-300"
                onClick={() => setIsFormOpen(true)}
              >
               Book A Free Demo
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

      {/* Contact Form */}
      <ContactForm 
        isOpen={isFormOpen}
        onOpenChange={setIsFormOpen}
        title="Book A Free Demo"
        description="Fill out the form below to schedule a personalized demo with our team."
        submitButtonText="Schedule Demo"
        formName="demo-request"
      />
    </section>
  );
};

export default Hero;
