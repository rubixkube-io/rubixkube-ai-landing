import React, { useState } from 'react';
import Our_story from "./Our_story.png"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { PopupModal } from "react-calendly";
import { InlineWidget } from "react-calendly"; 
import CallToAction from '@/components/CallToAction';

const About = () => {
  const [isBookDemoFormOpen, setIsBookDemoFormOpen] = useState(false);
  return (
    <>
      <Header />
      
      {/* Hero Section - Hero style layout with text left, image right */}
     
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/5 via-white to-accent/5 overflow-hidden">
          {/* Background pattern - contained within hero section */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute top-20 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-6 md:px-12 xl:px-32 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content - Left Side */}
              <div className="text-left">
                {/* Title - matching landing page typography */}
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in">
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Our Story</span>
                </h1>
                <div className="w-24 h-2 bg-gradient-to-r from-primary to-accent rounded-full mb-6 animate-fade-in" />

                {/* Main content - matching product-details structure */}
                <div className="animate-fade-in">
                  <p className="text-xl leading-relaxed text-muted-foreground max-w-xl mb-6">
                    RubixKube was born out of a simple question: <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold">What if managing infrastructure could be as intuitive as having a conversation?</span> 
                    In a world flooded with dashboards, alerts, and YAML files, we saw teams drowning in complexity and reactive toil.
                  </p>
                  <p className="text-xl leading-relaxed text-muted-foreground max-w-xl">
                    So we built something <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold">radically different</span>—an AI-native platform powered by a collaborative agentic mesh. 
                    These specialized agents observe, learn, and act together across environments, empowering teams to <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold">move fast, stay in control, and build with confidence</span>.
                  </p>
                </div>
              </div>

              {/* Image - Right Side */}
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

        {/* Detailed Story Section */}
        <section className="py-20 px-6 md:px-12 xl:px-32 bg-white">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              {/* Section Title */}
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">The Journey</h2>
              </div>

              {/* Blog-style Story Content */}
              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">How We Got Here</h3>
                
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  We've all been there, 2 AM alerts, digging through five different dashboards, trying to piece together what's actually broken. 
                  Infrastructure teams were spending entire nights hunting down issues that should have been obvious, or worse, preventable.
                </p>
                
                <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                  The tools were supposed to help, but they just created more noise. More alerts, more dashboards, more complexity. 
                  Great engineers were burning out not from building cool stuff, but from <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold">constant firefighting</span>.
                </p>

                <h3 className="text-2xl font-bold mb-6 text-gray-900 mt-12">What We Built Instead</h3>
                
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  We started with a simple idea: what if your infrastructure could actually talk to you? Not just beep and flash red, but genuinely 
                  understand what's happening and take action. What if it learned from every incident and got smarter over time?
                </p>
                
                <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                  That's how RubixKube was born. These agents don't just observe and report—they understand context, remember patterns, and actually 
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold">do something about it</span>. 
                  Think of it as having a really smart teammate who never sleeps and remembers everything.
                </p>

                <h3 className="text-2xl font-bold mb-6 text-gray-900 mt-12">Why This Changes Everything</h3>
                
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Instead of waking up to fix the same problems over and over, teams using RubixKube get to focus on what they actually love—building 
                  great products. The agents handle the repetitive stuff, learn from each incident, and gradually make those 2 AM calls a thing of the past. 
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold">Your infrastructure finally works for you</span>, 
                  not the other way around.
                </p>
              </div>
            </div>
          </div>
        </section>
   
        <CallToAction />
      
      <Footer />

      {/* Contact Form for Book Demo */}
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