import React, { useState } from 'react';
import Our_story from "./Our_story.png"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { PopupModal } from "react-calendly";
import { InlineWidget } from "react-calendly"; 

const About = () => {
  const [isBookDemoFormOpen, setIsBookDemoFormOpen] = useState(false);
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <main className="pt-8">
        <section className="relative py-16 px-6 md:px-12 xl:px-32 bg-gray-50 min-h-screen">
          {/* Background pattern - subtle and clean */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-32 right-20 w-64 h-64 bg-blue-100/20 rounded-full"></div>
            <div className="absolute bottom-32 left-20 w-80 h-80 bg-purple-100/15 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-100/10 rounded-full"></div>
          </div>
          
          <div className="relative z-10 max-w-5xl mx-auto">
            {/* Title - clean and bold */}
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4 tracking-tight">
                Our Story
              </h1>
              <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
            </div>

            {/* First card - featured story */}
            <div className="text-center max-w-4xl mx-auto mb-16">
              <div className="bg-white rounded-2xl p-10 shadow-lg border border-gray-200/50">
                <p className="text-lg md:text-xl leading-relaxed text-gray-800 font-normal">
                  RubixKube was born out of a simple question: 
                  <span className="text-blue-600 font-semibold"> What if managing infrastructure could be as intuitive as having a conversation?</span>
                </p>
              </div>
            </div>

            {/* Image section */}
            <div className="mb-16 flex justify-center">
              <div className="relative">
                {/* Image container - clean and professional */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200/50">
                  <img
                    src={Our_story}
                    alt="Abstract colorful shapes representing RubixKube's intuitive infrastructure management"
                    className="w-full max-w-4xl h-auto rounded-xl"
                  />
                </div>
              </div>
            </div>

            {/* Rest of the content as paragraphs */}
            <div className="text-center max-w-4xl mx-auto">
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-10 border border-white/40">
                <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-4 font-normal">
                  In a world flooded with dashboards, alerts, and YAML files, we saw teams drowning in complexity and reactive toil. 
                  So we set out to build something <span className="text-blue-600 font-semibold">radically different</span>—an AI-native platform 
                  that brings intelligence, autonomy, and reliability to infrastructure operations. At its heart, RubixKube is powered by a <span className="text-blue-600 font-semibold">collaborative agentic mesh</span>—a system 
                  of specialized AI agents that observe, plan, and act together across environments.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-gray-700 font-normal">
                  These agents are enhanced by a dynamic memory system that learns from every incident, enabling smarter, faster decisions over time. Our conversational interface lets teams interact with their infrastructure naturally, turning complex tasks into plain language commands. With deep observability, built in guardrails, and a focus on safety and governance, 
                  RubixKube empowers teams to <span className="text-blue-600 font-semibold">move fast, stay in control, and build with confidence</span>.
                </p>
              </div>
            </div>

            {/* Call to action section */}
            <div className="mt-20 text-center">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-10 text-white shadow-xl">
                <h3 className="text-2xl md:text-3xl font-extrabold mb-4 tracking-tight">Ready to Transform Your Infrastructure?</h3>
                <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-base md:text-lg font-normal leading-relaxed">
                  Join the teams already using RubixKube to simplify their infrastructure operations and build the future of intelligent systems.
                </p>
                <button 
                  className="bg-white text-blue-600 px-10 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  onClick={() => setIsBookDemoFormOpen(true)}
                >
                  Get Started Today
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
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