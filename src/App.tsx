
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import ProductDetails from "./pages/product-details";
import Index from "./pages/Index";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import ContactForm from "./components/ContactForm";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
<Route path="/our-story" element={<About />} />
<Route path="/product-details" element={<ProductDetails />} />
<Route
  path="/contact"
  element={
    <ContactForm
      isOpen={true}
      onOpenChange={() => {}}
      title="Contact Us"
      description="We'd love to hear from you! Fill out the form below and our team will get back to you as soon as possible."
      submitButtonText="Send Message"
      formName="contact"
    />
  }
/>
<Route path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
