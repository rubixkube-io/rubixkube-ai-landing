import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CalendarCheck,
  Sparkles,
  ExternalLink,
  Menu,
  X,
  ChevronDown,
  FileText,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { PopupModal } from "react-calendly";

const Header = ({ hasBanner = true }: { hasBanner?: boolean }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isGetStartedFormOpen, setIsGetStartedFormOpen] = useState(false);
  const [isBookDemoFormOpen, setIsBookDemoFormOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCaseStudyDropdownOpen, setIsCaseStudyDropdownOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCaseStudyDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleNavClick = (path, hash = "") => {
    if (location.pathname !== path) {
      navigate(`${path}${hash}`);
    } else if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        // Calculate the offset based on whether banner is present
        const headerHeight = hasBanner ? 112 : 80; // banner (48px) + header (64px) = 112px, or just header (80px)
        const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
    setIsMobileMenuOpen(false);
    setIsCaseStudyDropdownOpen(false);
  };

  const handleCaseStudyClick = () => {
    setIsCaseStudyDropdownOpen(!isCaseStudyDropdownOpen);
  };

  const handleIssueTypeClick = (issueType: string) => {
    // Navigate to specific issue type or handle as needed
    console.log(`Navigating to ${issueType}`);
    navigate(`/case-study/${issueType.toLowerCase().replace(/\s+/g, '-')}`);
    setIsCaseStudyDropdownOpen(false);
  };

  return (
    <header
      className={`fixed w-full z-40 transition-all duration-300 ${
        hasBanner ? "top-10" : "top-0"
      } ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 xl:px-32 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <a href="/">
            <span className="flex items-center space-x-4">
              <img
                src="/lovable-uploads/93e2cbcb-f72e-4975-95fb-51d3171067ee.png"
                alt="RubixKube Logo"
                className="h-8 w-auto"
              />
              <img src="/Asset 12.svg" alt="RubixKube Symbol" className="h-6 w-auto" />
            </span>
          </a>
          <nav className="hidden md:flex space-x-6">
            <button
              onClick={() => handleNavClick("/", "#features")}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => handleNavClick("/", "#pricing")}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Early Access
            </button>
            
            <button
              onClick={() => handleNavClick("/", "#testimonials")}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Testimonials
            </button>

            {/* Case Study Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={handleCaseStudyClick}
                className="text-gray-600 hover:text-primary transition-colors flex items-center gap-1"
              >
                Case Studies
                <ChevronDown 
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isCaseStudyDropdownOpen ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              {isCaseStudyDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <button
                    onClick={() => handleIssueTypeClick("Issue Type 1")}
                    className="w-full text-left px-4 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors flex items-center gap-2"
                  >
                    <FileText className="h-4 w-4" />
                    Infra Breakdown
                  </button>
                  <hr className="my-1 border-gray-100" />
                  <button
                    onClick={() => handleIssueTypeClick("Issue Type 2")}
                    className="w-full text-left px-4 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors flex items-center gap-2"
                  >
                    <FileText className="h-4 w-4" />
                    Query Overload


                  </button>
                  <hr className="my-1 border-gray-100" />
                  <button
                    onClick={() => handleIssueTypeClick("Issue Type 3")}
                    className="w-full text-left px-4 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors flex items-center gap-2"
                  >
                    <FileText className="h-4 w-4" />
                    Account Breach
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick("/our-story")}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Our Story
            </button>
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
            <button
              onClick={() => handleNavClick("/our-story")}
              className="text-gray-600 hover:text-primary transition-colors text-left"
            >
              Our Story
            </button>
            <button
              onClick={() => handleNavClick("/product-details")}
              className="text-gray-600 hover:text-primary transition-colors text-left"
            >
              Product
            </button>
            <button
              onClick={() => handleNavClick("/", "#features")}
              className="text-gray-600 hover:text-primary transition-colors text-left"
            >
              Features
            </button>
            <button
              onClick={() => handleNavClick("/", "#pricing")}
              className="text-gray-600 hover:text-primary transition-colors text-left"
            >
              Early Access
            </button>
            <button
              onClick={() => handleNavClick("/", "#testimonials")}
              className="text-gray-600 hover:text-primary transition-colors text-left"
            >
              Testimonials
            </button>
            
            {/* Mobile Case Study Items */}
            <div className="pl-4 space-y-2">
              <div className="text-gray-500 text-sm font-medium">Case Studies:</div>
              <button
                onClick={() => handleIssueTypeClick("Issue Type 1")}
                className="text-gray-600 hover:text-primary transition-colors text-left flex items-center gap-2"
              >
                <FileText className="h-4 w-4" />
                Issue Type 1
              </button>
              <button
                onClick={() => handleIssueTypeClick("Issue Type 2")}
                className="text-gray-600 hover:text-primary transition-colors text-left flex items-center gap-2"
              >
                <FileText className="h-4 w-4" />
                Issue Type 2
              </button>
              <button
                onClick={() => handleIssueTypeClick("Issue Type 3")}
                className="text-gray-600 hover:text-primary transition-colors text-left flex items-center gap-2"
              >
                <FileText className="h-4 w-4" />
                Issue Type 3
              </button>
            </div>
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