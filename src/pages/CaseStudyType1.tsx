import { ArrowLeft, CheckCircle, AlertTriangle, Zap, Brain, Search, TrendingUp, CalendarCheck, Monitor, Gamepad2, Shield, Globe, Users, Building, MessageSquare, Clock, Target, Activity } from "lucide-react";
import { useState } from "react";
import React from "react";

// PopupModal component for Calendly integration
const PopupModal = ({ url, onModalClose, open, rootElement }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onModalClose}></div>
      <div className="relative bg-white rounded-lg shadow-xl w-full max-w-4xl mx-4 h-[80vh]">
        <button
          onClick={onModalClose}
          className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <iframe
          src={url}
          width="100%"
          height="100%"
          frameBorder="0"
          className="rounded-lg"
          title="Calendly Scheduling"
        ></iframe>
      </div>
    </div>
  );
};

const CaseStudyType1 = () => {
  const [isBookDemoFormOpen, setIsBookDemoFormOpen] = useState(false);

  const scrollToSuccessStories = () => {
    // Navigate to home page with testimonials section
    window.location.href = '/#testimonials';
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-12">
          {/* Heading and Team Feedback in parallel layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
            {/* Left side - Heading */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Conversations with Sony Interactive on 
                <span className="text-blue-600"> the Future of Gaming Infrastructure</span>
              </h1>
              
              <div className="text-xl text-gray-600 leading-relaxed">
                For a global leader like Sony Interactive, infrastructure reliability is the foundation of the brand. 
                But with a complex system serving millions, human blind spots means a single missed anomaly could 
                cause a global ripple effect. This is an analysis on how shifting from reactive firefighting to 
                proactive, silent remediation can protect the player experience while freeing their team to focus on innovation.
              </div>
            </div>
            
            {/* Right side - Team Feedback */}
            <div>
              <div className="bg-gray-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <blockquote className="text-xl text-gray-700 italic mb-4 leading-relaxed">
                  "We're constantly playing catch-up with infrastructure issues. By the time we detect a problem, it's already impacting players across multiple regions. We need a way to see around corners to catch issues before they cascade into global incidents."
                </blockquote>
                <div className="text-lg text-gray-600">
                  <strong>— Senior DevOps Engineer, Large Gaming Platform</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Challenge Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge: Protecting an Always-On Global Experience</h2>
          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>
              For a global gaming leader like Sony Interactive, infrastructure reliability is everything. Their platform 
              serves millions of gamers across multiple regions, 24/7. In this high-stakes environment, even a minor glitch 
              can create a broken user experience and cause significant damage to the brand.
            </p>
            <p>
              Despite a large and skilled DevOps team, the sheer complexity of a globally distributed system created human 
              blind spots. Subtle anomalies could be missed, leading to a dangerous ripple effect where a small problem in 
              one region could impact players worldwide, affecting both user satisfaction and revenue.
            </p>
          </div>
        </div>

        {/* Solution Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Solution: Proactive AI Co-Pilot</h2>
          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>
              To address these challenges, Sony Interactive needs a solution that can move their operations from a reactive 
              model to a predictable, proactive one.
            </p>
            <p>
              RubixKube could be brought in to act as a proactive reliability layer and a 24/7 co-pilot for their infrastructure.
            </p>
            <p className="font-medium text-gray-800 mb-4">
              RubixKube would be the ideal partner for several key reasons:
            </p>
            
            <div className="space-y-6 ml-4">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Continuous, AI-Powered Monitoring:</h3>
                <p>
                  Our modular mesh of AI agents is designed to continuously monitor for anomalies across all clusters, regions, 
                  and traffic patterns, directly addressing the problem of human blind spots in a complex system.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Early Warning Detection:</h3>
                <p>
                  The system excels at detecting and learning from early warning signals before a dip in user experience can 
                  even occur, preventing problems rather than just fixing them.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Proactive Remediation:</h3>
                <p>
                  RubixKube's intelligence allows it to deploy predictive remediations without the need for frantic war rooms 
                  or manual intervention, preventing minor issues from causing a global ripple effect.
                </p>
              </div>
            </div>
            
            <p className="pt-4 font-medium text-gray-800">
              With RubixKube, Sony's infrastructure reliability can become a pillar of strength, allowing their team to 
              breathe and their brand to thrive.
            </p>
          </div>
        </div>

        {/* Value Proposition Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">The Transformation Potential</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
                <div className="text-xl font-bold text-gray-900">Brand Protection</div>
              </div>
              <div className="text-gray-600">Prevent infrastructure issues from becoming brand reputation risks</div>
            </div>
            
            <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-8 h-8 text-blue-600" />
                <div className="text-xl font-bold text-gray-900">Team Innovation</div>
              </div>
              <div className="text-gray-600">Free DevOps teams from firefighting to focus on strategic improvements</div>
            </div>
            
            <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Gamepad2 className="w-8 h-8 text-blue-600" />
                <div className="text-xl font-bold text-gray-900">Player Experience</div>
              </div>
              <div className="text-gray-600">Ensure seamless gameplay through proactive issue prevention</div>
            </div>
            
            <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-8 h-8 text-blue-600" />
                <div className="text-xl font-bold text-gray-900">Global Reliability</div>
              </div>
              <div className="text-gray-600">Contain regional issues before they cascade into global problems</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-100 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Infrastructure Operations?</h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Discover how RubixKube can help your team transition from reactive firefighting to proactive infrastructure intelligence.
          </p>
          <button 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
            onClick={() => setIsBookDemoFormOpen(true)}
          >
            <CalendarCheck className="w-5 h-5" />
            Start the Conversation
          </button>
        </div>

        {/* Calendly Modal */}
        {isBookDemoFormOpen && (
          <PopupModal
            url="https://calendly.com/rubixkube/new-meeting"
            onModalClose={() => setIsBookDemoFormOpen(false)}
            open={isBookDemoFormOpen}
            rootElement={document.getElementById("__next") || document.body}
          />
        )}

      </div>

    </div>
  );
};

export default CaseStudyType1;