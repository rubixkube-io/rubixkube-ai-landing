import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Our_story from "./Our_story.png";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { PopupModal } from "react-calendly";
import { InlineWidget } from "react-calendly"; 
import CallToAction from '@/components/CallToAction';

const About = () => {
  const [isBookDemoFormOpen, setIsBookDemoFormOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <Header />
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/5 via-white to-accent/5 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute top-20 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 md:px-12 xl:px-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">The Bridge Between Infra and Impact</span>
              </h1>
              <div className="w-24 h-2 bg-gradient-to-r from-primary to-accent rounded-full mb-6 animate-fade-in" />
              <div className="animate-fade-in">
                <p className="text-xl leading-relaxed text-muted-foreground max-w-xl mb-6">
                  RubixKube didn't start with a product idea. It started with a real problem:
                </p>
                <p className="text-xl leading-relaxed text-muted-foreground max-w-xl mb-6">
                  Teams were drowning in dashboards, alerts, and tribal knowledge. Infra was evolving, but reliability was still a people problem.
                </p>
                <p className="text-xl leading-relaxed text-muted-foreground max-w-xl mb-6">
                  We asked the question no one else dared to: <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold">What if your infrastructure could explain itself?</span> Not just alert but understand what's wrong, what it impacts, and what to do next.
                </p>
              </div>
            </div>
            <div className="lg:block animate-fade-in relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-accent/10 blur-3xl -z-10"></div>
              <img
                src={Our_story}
                alt="Abstract colorful shapes representing RubixKube's intelligent infrastructure management"
                className="rounded-2xl shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-6 md:px-12 xl:px-32 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">What We Built</h2>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                So we built RubixKube: A growing mesh of intelligent AI agents that <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold">observe, reason, and act.</span> A system that <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold">learns your stack like a seasoned SRE</span> and scales faster than any human ever could.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                But we didn't stop at engineers. <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold">RubixKube bridges the gap between infrastructure and leadership.</span> While agents automate root cause and healing, the system also tells you in business terms what's at risk, what's costing you, and whether you're safe to launch.
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 mt-12">Why It Matters</h2>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                Because downtime doesn't just break systems. It breaks <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold">trust. momentum. revenue.</span>
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                Not another tool. Not another LLM wrapper. RubixKube is the <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold">reliability brain</span> your infra and your business never had.
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 mt-12">The Result</h2>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold">Fewer fire drills. Faster launches. Peace of mind.</span> RubixKube lets your teams move fast without fear.
              </p>
            </div>
          </div>
        </div>
      </section>
      <CallToAction />
      
      {isBookDemoFormOpen && (
        <PopupModal
          url="https://calendly.com/rubixkube/new-meeting"
          onModalClose={() => setIsBookDemoFormOpen(false)}
          open={isBookDemoFormOpen}
          rootElement={document.getElementById("__next") || document.body}
        />
      )}
    </>
  );
};

export default About;