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
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Our Story</span>
              </h1>
              <div className="w-24 h-2 bg-gradient-to-r from-primary to-accent rounded-full mb-6 animate-fade-in" />
              <div className="animate-fade-in">
                <p className="text-xl leading-relaxed text-muted-foreground max-w-xl mb-6">
                  RubixKube began with a simple question: <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold">What if managing infrastructure could be as intuitive as having a conversation?</span>
                </p>
                <p className="text-xl leading-relaxed text-muted-foreground max-w-xl mb-6">
                  In a world saturated with dashboards, alerts, and complex configuration files, we saw engineering teams overwhelmed by operational complexity and constant firefighting.
                </p>
                <p className="text-xl leading-relaxed text-muted-foreground max-w-xl mb-6">
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold">So we took a different approach.</span>
                </p>
                <p className="text-xl leading-relaxed text-muted-foreground max-w-xl">
                  RubixKube is an <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold">AI-native platform built on a collaborative agentic mesh</span>. These specialized agents observe, learn, and act across environments—enabling teams to <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold">move faster, maintain control, and build with confidence</span>.
                </p>
              </div>
            </div>
            <div className="lg:block animate-fade-in relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-accent/10 blur-3xl -z-10"></div>
              <img
                src={Our_story}
                alt="Abstract colorful shapes representing RubixKube's intuitive infrastructure management"
                className="rounded-2xl shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-6 md:px-12 xl:px-32 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">The Journey</h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">How We Got Here</h3>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                We have all experienced it. Late night alerts, switching between multiple dashboards, trying to understand what broke and why. Infrastructure teams were spending countless hours troubleshooting issues that should have been easy to detect or, better yet, prevent entirely.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                The existing tools were meant to help, but instead they introduced more noise. More alerts, more dashboards, and more complexity. Talented engineers were burning out not from building innovative solutions, but from being stuck in a cycle of <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold">constant firefighting</span>.
              </p>

              <h3 className="text-2xl font-bold mb-6 text-gray-900 mt-12">What We Built Instead</h3>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                We began with a fundamental idea. What if your infrastructure could actually communicate? Not just trigger alerts, but truly understand what is happening and take meaningful action. What if it could learn from every incident and improve continuously?
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                That idea became RubixKube. Our intelligent agents go beyond monitoring and reporting. They <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold">understand context, recognize patterns, and take action</span>. Think of them as highly capable teammates who never sleep and never forget.
              </p>

              <h3 className="text-2xl font-bold mb-6 text-gray-900 mt-12">Why This Changes Everything</h3>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                With RubixKube, engineering teams can finally focus on what they do best. <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold">Building exceptional products</span>. Routine issues are handled autonomously. Each incident becomes a learning opportunity. Over time, those disruptive late night alerts become rare exceptions.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Your infrastructure becomes a <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold">proactive partner</span>. Not just another source of friction.
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
