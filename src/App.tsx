import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

import Layout from "./components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import ProductDetails from "./pages/product-details";
import ContactForm from "./components/ContactForm";
import PrivacyPage from "./pages/privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import CaseStudyRouter from "./pages/CaseStudyRouter"; // Dynamic case study routing

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Home */}
          <Route
            path="/"
            element={
              <Layout>
                <Index />
              </Layout>
            }
          />

          {/* About */}
          <Route
            path="/our-story"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />

          {/* Product Details */}
          <Route
            path="/product-details"
            element={
              <Layout>
                <ProductDetails />
              </Layout>
            }
          />

          {/* Dynamic Case Study Route */}
          <Route
  path="/case-study/:issueType"
  element={
    <Layout>
      <CaseStudyRouter />
    </Layout>
  }
/>

          {/* Contact Page */}
          <Route
            path="/contact"
            element={
              <Layout>
                <ContactForm
                  isOpen={true}
                  onOpenChange={() => {}}
                  title="Contact Us"
                  description="We'd love to hear from you! Fill out the form below and our team will get back to you as soon as possible."
                  submitButtonText="Send Message"
                  formName="contact"
                />
              </Layout>
            }
          />

          {/* Privacy Page */}
          <Route
            path="/privacy"
            element={
              <Layout>
                <PrivacyPage />
              </Layout>
            }
          />

          {/* Terms Page */}
          <Route
            path="/terms"
            element={
              <Layout>
                <Terms />
              </Layout>
            }
          />

          {/* Placeholder/NotFound routes */}
          <Route
            path="/documentation"
            element={
              <Layout>
                <NotFound />
              </Layout>
            }
          />
          <Route
            path="/help-center"
            element={
              <Layout>
                <NotFound />
              </Layout>
            }
          />

          {/* 404 fallback */}
          <Route
            path="*"
            element={
              <Layout>
                <NotFound />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
