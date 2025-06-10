import React from 'react';
import Our_story from "./Our_story.png"
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <main className="pt-24">
        <section className="relative py-24 px-6 md:px-12 xl:px-32 bg-gradient-to-br from-blue-50 via-slate-50 to-sky-50">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-16 -right-16 w-96 h-96 bg-gradient-to-br from-blue-100/40 to-sky-100/40 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-16 -left-16 w-96 h-96 bg-gradient-to-br from-slate-100/40 to-blue-100/40 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 max-w-6xl mx-auto">
            {/* Title with soft blue styling */}
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-sky-600 to-slate-600 bg-clip-text text-transparent leading-tight">
                Our Story
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-sky-400 mx-auto rounded-full"></div>
            </div>

            {/* Story content with soft blue theme */}
            <div className="space-y-8 text-center max-w-4xl mx-auto">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-blue-100/50">
                <p className="text-xl leading-relaxed text-slate-700 font-medium">
                  RubixKube was born out of a simple question: 
                  <span className="text-blue-600 font-semibold"> What if managing infrastructure could be as intuitive as having a conversation?</span>
                </p>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-blue-100/50">
                <p className="text-lg leading-relaxed text-slate-600">
                  In a world flooded with dashboards, alerts, and YAML files, we saw teams drowning in complexity and reactive toil. 
                  So we set out to build something <span className="text-sky-600 font-semibold">radically different</span>—an AI-native platform 
                  that brings intelligence, autonomy, and reliability to infrastructure operations.
                </p>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-blue-100/50">
                <p className="text-lg leading-relaxed text-slate-600">
                  At its heart, RubixKube is powered by a <span className="text-blue-600 font-semibold">collaborative agentic mesh</span>—a system 
                  of specialized AI agents that observe, plan, and act together across environments. These agents are enhanced by a dynamic 
                  memory system that learns from every incident, enabling smarter, faster decisions over time.
                </p>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-blue-100/50">
                <p className="text-lg leading-relaxed text-slate-600">
                  Our conversational interface lets teams interact with their infrastructure naturally, turning complex tasks into 
                  plain-language commands. With deep observability, built-in guardrails, and a focus on safety and governance, 
                  RubixKube empowers teams to <span className="text-blue-600 font-semibold">move fast, stay in control, and build with confidence</span>.
                </p>
              </div>
            </div>
            
            {/* Enhanced image section with soft blue theme */}
            <div className="mt-20 flex justify-center">
              <div className="relative group">
                {/* Soft glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-300/30 via-sky-300/30 to-slate-300/30 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-700"></div>
                
                {/* Image container */}
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-blue-100/60">
                  <img
                    src={Our_story}
                    alt="Abstract colorful shapes representing RubixKube's intuitive infrastructure management"
                    className="w-full h-auto rounded-xl shadow-md transform group-hover:scale-[1.02] transition-transform duration-700"
                    style={{ maxWidth: '900px' }}
                  />
                  
                  {/* Subtle image overlay */}
                  <div className="absolute inset-4 bg-gradient-to-t from-blue-50/20 to-transparent rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
                
                {/* Soft floating elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-blue-300 to-sky-400 rounded-full opacity-40 animate-pulse"></div>
                <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-br from-sky-300 to-slate-400 rounded-full opacity-40 animate-pulse delay-1000"></div>
              </div>
            </div>

            {/* Soft call to action section */}
            <div className="mt-20 text-center">
              <div className="bg-gradient-to-r from-blue-500 to-sky-500 rounded-2xl p-8 text-white shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Infrastructure?</h3>
                <p className="text-blue-50 mb-6 max-w-2xl mx-auto">
                  Join the teams already using RubixKube to simplify their infrastructure operations and build the future of intelligent systems.
                </p>
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg">
                  Get Started Today
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default About;