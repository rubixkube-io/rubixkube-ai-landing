import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
          <span className="flex items-center space-x-4">
            <img src="/lovable-uploads/93e2cbcb-f72e-4975-95fb-51d3171067ee.png" alt="RubixKube Logo" className="h-8 w-auto" />
            <img src="/Asset 12.svg" alt="RubixKube Symbol" className="h-6 w-auto" />
          </span>
          <nav className="hidden md:flex space-x-6">
            <a href="#features" className="text-gray-600 hover:text-primary transition-colors">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-primary transition-colors">Pricing</a>
            <a href="#testimonials" className="text-gray-600 hover:text-primary transition-colors">Testimonials</a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          {/* <Button variant="ghost">Log in</Button> */}
          <Button className="bg-primary hover:bg-primary-dark text-white">Get Started</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

