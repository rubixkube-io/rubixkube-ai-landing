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
import TopBanner from "./components/TopBanner";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
  <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Index />
              </Layout>
            }
          />
          <Route
            path="/our-story"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />
          <Route
            path="/product-details"
            element={
              <Layout>
                <ProductDetails />
              </Layout>
            }
          />
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
          <Route
            path="/privacy"
            element={
              <Layout>
                <PrivacyPage />
              </Layout>
            }
          />
          <Route
            path="/terms"
            element={
              <Layout>
                <Terms />
              </Layout>
            }
          />
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
