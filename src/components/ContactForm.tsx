import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

export interface ContactFormProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  submitButtonText?: string;
  onSubmit?: (formData: ContactFormData) => void;
  formName?: string; // Add form name prop for different form types
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  organization: string;
  message: string;
}

const defaultFormData: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  organization: "",
  message: ""
};

const ContactForm = ({
  isOpen,
  onOpenChange,
  title,
  description = "Fill out the form below and our team will get back to you shortly.",
  submitButtonText = "Submit",
  onSubmit,
  formName = "contact" // Default form name
}: ContactFormProps) => {
  const [formData, setFormData] = useState<ContactFormData>(defaultFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Get form data
      const form = e.target as HTMLFormElement;
      const data = new FormData(form);
      
      // Submit form using fetch to handle SPA navigation
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as any).toString()
      })
      .then(() => {
        setIsSuccess(true);
        
        // Show success toast
        toast({
          title: "Request Submitted",
          description: "We've received your request. We'll be in touch soon!",
        });
        
        // Call custom onSubmit handler if provided
        if (onSubmit) {
          onSubmit(formData);
        }
        
        // Reset form data
        setFormData(defaultFormData);
        
        // Close the form after a short delay
        setTimeout(() => {
          onOpenChange(false);
          setIsSuccess(false); 
        }, 1000);
      })
      .catch((error) => {
        console.error("Form submission error:", error);
        toast({
          title: "Submission Failed",
          description: "There was a problem submitting your request. Please try again.",
          variant: "destructive"
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
    } catch (error) {
      console.error("Form handling error:", error);
      setIsSubmitting(false);
      toast({
        title: "Submission Failed",
        description: "There was a problem with your request. Please try again.",
        variant: "destructive"
      });
    }
  };

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <form 
          onSubmit={handleSubmit} 
          name={formName} 
          method="POST" 
          data-netlify="true"
        >
          {/* Required for Netlify forms */}
          <input type="hidden" name="form-name" value={formName} />
          
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>
              {description}
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Full Name</Label>
              <Input 
                id="name" 
                name="name" 
                placeholder="John Doe"
                required 
                value={formData.name} 
                onChange={handleInputChange} 
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                placeholder="john.doe@example.com"
                required 
                value={formData.email} 
                onChange={handleInputChange} 
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input 
                id="phone" 
                name="phone"
                placeholder="+1 (555) 123-4567"
                value={formData.phone} 
                onChange={handleInputChange} 
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="organization">Organization Name</Label>
              <Input 
                id="organization" 
                name="organization"
                placeholder="Acme Inc."
                required 
                value={formData.organization} 
                onChange={handleInputChange} 
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="message">Additional Information</Label>
              <Textarea 
                id="message" 
                name="message" 
                placeholder="Tell us about your needs and how we can help..."
                value={formData.message} 
                onChange={handleInputChange} 
              />
            </div>
          </div>
          
          <DialogFooter>
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => onOpenChange(false)}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button 
              className="bg-primary hover:bg-primary-dark text-white" 
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </span>
              ) : submitButtonText}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;
