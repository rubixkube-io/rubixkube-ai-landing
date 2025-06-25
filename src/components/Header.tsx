import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarCheck, Sparkles, ExternalLink, Menu, X } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { PopupModal } from "react-calendly";
import { InlineWidget } from "react-calendly"; // optional, in case you want inline in future


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isGetStartedFormOpen, setIsGetStartedFormOpen] = useState(false);
  const [isBookDemoFormOpen, setIsBookDemoFormOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : ''
    }`}>
      <div className="container mx-auto px-6 md:px-12 xl:px-32 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <a href="/">
          <span className="flex items-center space-x-4">
            <img src="/lovable-uploads/93e2cbcb-f72e-4975-95fb-51d3171067ee.png" alt="RubixKube Logo" className="h-8 w-auto" />
            <img src="/Asset 12.svg" alt="RubixKube Symbol" className="h-6 w-auto" />
          </span>
          </a>
          <nav className="hidden md:flex space-x-6">
  <a href="/#features" className="text-gray-600 hover:text-primary transition-colors">Features</a>
  <a href="/#pricing" className="text-gray-600 hover:text-primary transition-colors">Early Access</a>
  <a href="/#testimonials" className="text-gray-600 hover:text-primary transition-colors">Testimonials</a>
  <a href="/our-story" className="text-gray-600 hover:text-primary transition-colors">Our Story</a>
</nav>


        </div>
        
        {/* Desktop buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button 
            variant="ghost" 
            className="flex items-center gap-1 font-medium transition-all group"
            onClick={() => setIsGetStartedFormOpen(true)}
          >
            <span className="font-semibold transition-colors">Get Started</span>
          </Button>
          
          <Button 
            className="bg-gradient-to-r from-primary to-accent text-white shadow-md hover:shadow-xl rounded-full px-5 py-2 flex items-center gap-2 group hover:scale-105 transition-all duration-300"
            onClick={() => setIsBookDemoFormOpen(true)}
          >
            <CalendarCheck className="h-4 w-4 group-hover:rotate-12 group-hover:animate-spin-slow transition-transform" />
            <span className="font-bold">Book Demo</span>
            <Sparkles className="h-3.5 w-3.5 opacity-70 group-hover:opacity-100 group-hover:animate-pulse" />
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg py-4 px-6 absolute top-full left-0 right-0 border-t border-gray-100">
          <nav className="flex flex-col space-y-4 mb-6">
  <a href="/our-story" className="text-gray-600 hover:text-primary transition-colors">
  Our Story
</a>


  <a 
    href="/product-details" 
    className="text-gray-600 hover:text-primary transition-colors py-2"
    onClick={() => setIsMobileMenuOpen(false)}
  >
    Product
  </a>
  <a 
    href="#features" 
    className="text-gray-600 hover:text-primary transition-colors py-2"
    onClick={() => setIsMobileMenuOpen(false)}
  >
    Features
  </a>
  <a 
    href="#pricing" 
    className="text-gray-600 hover:text-primary transition-colors py-2"
    onClick={() => setIsMobileMenuOpen(false)}
  >
    Early Access
  </a>
  <a 
    href="#testimonials" 
    className="text-gray-600 hover:text-primary transition-colors py-2"
    onClick={() => setIsMobileMenuOpen(false)}
  >
    Success Stories
  </a>
</nav>

          
          <div className="flex flex-col space-y-3">
            <Button
  variant="ghost"
  className="w-full justify-center py-2 font-semibold text-primary hover:bg-transparent focus:outline-none focus:ring-0 shadow-none"
  onClick={() => {
    setIsMobileMenuOpen(false);
    setIsGetStartedFormOpen(true);
  }}
>
  Get Started
</Button>

            
            <Button 
              className="w-full bg-gradient-to-r from-primary to-accent text-white shadow-md rounded-full py-2 justify-center flex items-center gap-2"
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsBookDemoFormOpen(true);
              }}
            >
              <CalendarCheck className="h-4 w-4" />
              <span className="font-bold">Book Demo</span>
              <Sparkles className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      )}
      
      {/* Contact Form for Get Started */}
      <ContactForm 
        isOpen={isGetStartedFormOpen}
        onOpenChange={setIsGetStartedFormOpen}
        title="Get Started with RubixKube"
        description="Fill out the form below and our team will help you get started with RubixKube."
        submitButtonText="Submit Request"
        formName="header-get-started"
      />
      
      {/* Contact Form for Book Demo */}
{isBookDemoFormOpen && (
  <PopupModal
    url="https://calendly.com/rubixkube/new-meeting"
    onModalClose={() => setIsBookDemoFormOpen(false)}
    open={isBookDemoFormOpen}
    rootElement={document.getElementById("__next") || document.body}
  />
)}



    </header>
  );
};

export default Header;