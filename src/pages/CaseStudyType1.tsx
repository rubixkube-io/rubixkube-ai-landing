import { ArrowLeft, CheckCircle, AlertTriangle, Zap, Brain, Search, TrendingUp, CalendarCheck, Monitor, Gamepad2, Shield, Globe, Users, Building, MessageSquare, Clock, Target, Activity } from "lucide-react";
import { useState } from "react";
import React from "react";

const CaseStudyType1 = () => {
  const [isBookDemoFormOpen, setIsBookDemoFormOpen] = useState(false);

  const scrollToSuccessStories = () => {
    // Navigate to home page with testimonials section
    window.location.href = '/#testimonials';
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                In Conversation with <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">Sony Interactive</span>: The Future of Gaming Infrastructure
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                For a global leader like Sony Interactive, infrastructure reliability is the foundation of the brand. 
                But with a complex system serving millions, human blind spots mean a single missed anomaly could 
                cause a global ripple effect.
              </p>
              <div className="bg-blue-50 border border-blue-200 p-4 md:p-5 rounded-xl">
                <strong className="text-blue-700">Analysis Focus:</strong>
                <span className="text-gray-700"> How shifting from reactive firefighting to proactive, silent remediation can protect the player experience while freeing teams to focus on innovation</span>
              </div>
            </div>
            <div className="bg-white border border-gray-200 p-6 md:p-10 rounded-2xl shadow-lg">
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="bg-blue-50 border border-blue-200 p-4 md:p-6 rounded-xl hover:shadow-md transition-all text-center">
                  <div className="text-2xl md:text-2xl font-bold text-blue-600 mb-2">Global</div>
                  <div className="text-gray-700 font-medium text-sm md:text-base">Gaming Leader</div>
                </div>
                <div className="bg-blue-50 border border-blue-200 p-4 md:p-6 rounded-xl hover:shadow-md transition-all text-center">
                  <div className="text-2xl md:text-2xl font-bold text-blue-600 mb-2">24/7</div>
                  <div className="text-gray-700 font-medium text-sm md:text-base">Operations</div>
                </div>
                <div className="bg-blue-50 border border-blue-200 p-4 md:p-6 rounded-xl hover:shadow-md transition-all text-center">
                  <div className="text-2xl md:text-2xl font-bold text-blue-600 mb-2">Millions</div>
                  <div className="text-gray-700 font-medium text-sm md:text-base">of Players</div>
                </div>
                <div className="bg-blue-50 border border-blue-200 p-4 md:p-6 rounded-xl hover:shadow-md transition-all text-center">
                  <div className="text-2xl md:text-2xl font-bold text-blue-600 mb-2">Zero</div>
                  <div className="text-gray-700 font-medium text-sm md:text-base">Tolerance</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="py-12 md:py-20 bg-gray-100 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">🎯 The Challenge: Protecting an Always-On Global Experience</h2>
          <p className="text-lg md:text-xl text-gray-600 text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            Understanding the critical infrastructure challenges facing global gaming operations
          </p>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-10 relative shadow-sm mb-8">
            <div className="absolute -top-4 left-4 md:left-8 bg-red-600 text-white px-3 md:px-5 py-2 rounded-full font-semibold text-xs md:text-sm shadow-lg">
              ⚠️ CRITICAL CHALLENGES
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 mt-2">The High-Stakes Reality</h3>
            <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
              For a global gaming leader like Sony Interactive, infrastructure reliability is everything. Their platform 
              serves millions of gamers across multiple regions, 24/7. In this high-stakes environment, even a minor 
              glitch can create a broken user experience and cause significant damage to the brand.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div className="bg-red-50 border border-red-200 p-4 md:p-5 rounded-xl border-l-4 border-l-red-500">
                <strong className="text-red-700 text-base md:text-lg block mb-2">Human Blind Spots</strong>
                <p className="text-gray-700 text-sm md:text-base">Complex distributed systems create monitoring gaps</p>
              </div>
              <div className="bg-red-50 border border-red-200 p-4 md:p-5 rounded-xl border-l-4 border-l-red-500">
                <strong className="text-red-700 text-base md:text-lg block mb-2">Ripple Effects</strong>
                <p className="text-gray-700 text-sm md:text-base">Small regional problems impact players worldwide</p>
              </div>
              <div className="bg-red-50 border border-red-200 p-4 md:p-5 rounded-xl border-l-4 border-l-red-500">
                <strong className="text-red-700 text-base md:text-lg block mb-2">Brand Risk</strong>
                <p className="text-gray-700 text-sm md:text-base">User satisfaction and revenue at stake</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-10 shadow-sm">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">The Core Problem</h3>
            <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
              Despite having a large and skilled DevOps team, the sheer complexity of a globally distributed system 
              creates human blind spots. Subtle anomalies can be missed, leading to a dangerous ripple effect where 
              a small problem in one region can impact players worldwide, affecting both user satisfaction and revenue.
            </p>
            
            <div className="bg-amber-50 border border-amber-200 p-4 md:p-5 rounded-xl">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-amber-700 block mb-1">The Reactive Trap</strong>
                  <p className="text-gray-700 text-sm md:text-base">Teams spend time in frantic war rooms fixing problems after they've already impacted users, instead of preventing them proactively.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-12 md:py-20 bg-white px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">💡 The Solution: Proactive AI Co-Pilot</h2>
          <p className="text-lg md:text-xl text-gray-600 text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            Moving from reactive firefighting to predictable, proactive infrastructure management
          </p>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 p-8 md:p-12 rounded-2xl mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">RubixKube: The Ideal Partner</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              To address these challenges, Sony Interactive needs a solution that can move their operations from a 
              reactive model to a predictable, proactive one. RubixKube could be brought in to act as a proactive 
              reliability layer and a 24/7 co-pilot for their infrastructure.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">Continuous AI-Powered Monitoring</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our modular mesh of AI agents continuously monitors for anomalies across all clusters, regions, 
                  and traffic patterns, directly addressing the problem of human blind spots in complex systems.
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-xl flex items-center justify-center mb-4">
                  <Search className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">Early Warning Detection</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  The system excels at detecting and learning from early warning signals before a dip in user 
                  experience can even occur, preventing problems rather than just fixing them.
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-xl flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">Proactive Remediation</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  RubixKube's intelligence allows it to deploy predictive remediations without the need for frantic 
                  war rooms or manual intervention, preventing minor issues from causing global ripple effects.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-blue-200 p-6 md:p-8 rounded-2xl shadow-sm">
            <h3 className="text-xl md:text-2xl font-bold text-blue-600 mb-4 flex items-center gap-3">
              <Shield className="w-6 h-6" />
              The Transformation Promise
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              With RubixKube, Sony's infrastructure reliability can become a pillar of strength, allowing their 
              team to breathe and their brand to thrive.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Silent, proactive issue prevention</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Eliminated reactive firefighting</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Protected player experience</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Team focus on innovation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Brand reputation safeguarded</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Revenue protection at scale</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-12 md:py-20 bg-gray-100 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">📊 Potential Impact Metrics</h2>
          <p className="text-lg md:text-xl text-gray-600 text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            What could have been resolved if Sony Interactive had RubixKube
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white border border-gray-200 p-6 rounded-xl text-center shadow-sm hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
              <div className="text-gray-600 text-sm">Uptime Achievement</div>
              <div className="text-xs text-gray-500 mt-1">vs current reactive model</div>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-xl text-center shadow-sm hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">85%</div>
              <div className="text-gray-600 text-sm">Faster Resolution</div>
              <div className="text-xs text-gray-500 mt-1">Average incident response time</div>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-xl text-center shadow-sm hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-2">70%</div>
              <div className="text-gray-600 text-sm">Issues Prevented</div>
              <div className="text-xs text-gray-500 mt-1">Before user impact</div>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-xl text-center shadow-sm hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-orange-600 mb-2">60%</div>
              <div className="text-gray-600 text-sm">Reduced Alert Fatigue</div>
              <div className="text-xs text-gray-500 mt-1">Intelligent alert filtering</div>
            </div>
          </div>
{/* 
          <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Projected Annual Impact</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">$2.5M+</div>
                <div className="text-gray-700 font-semibold mb-2">Revenue Protected</div>
                <div className="text-sm text-gray-500">From prevented outages and improved player retention</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">40%</div>
                <div className="text-gray-700 font-semibold mb-2">OpEx Reduction</div>
                <div className="text-sm text-gray-500">Through automated monitoring and response</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">1000+</div>
                <div className="text-gray-700 font-semibold mb-2">Hours Saved</div>
                <div className="text-sm text-gray-500">Engineering time redirected to innovation</div>
              </div>
            </div>
          </div> */}

          <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 p-6 md:p-8 rounded-xl">
            <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center gap-3">
              <Gamepad2 className="w-5 h-5" />
              Gaming-Specific Benefits
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <strong className="text-gray-900 block mb-2">Player Experience Protection</strong>
                <p className="text-gray-700 text-sm">Zero-impact issue resolution ensures consistent gaming experiences during peak traffic and major game launches.</p>
              </div>
              <div>
                <strong className="text-gray-900 block mb-2">Global Reliability</strong>
                <p className="text-gray-700 text-sm">Synchronized infrastructure management across all regions prevents localized issues from becoming global problems.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 px-6 text-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-indigo-600/5 to-blue-600/5"></div>
        <div className="max-w-4xl mx-auto relative">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-blue-200">
            <Building className="w-4 h-4" />
            Transform Your Infrastructure Operations
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to Eliminate Reactive Firefighting?</h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-10 max-w-2xl mx-auto">
            Join industry leaders exploring proactive infrastructure management. Let's discuss how RubixKube 
            can transform your operations from reactive to predictive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <button 
              className="bg-gradient-to-r from-blue-900 to-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:shadow-lg transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 shadow-md"
              onClick={() => setIsBookDemoFormOpen(true)}
            >
              <CalendarCheck className="h-4 w-4" />
              Start the Conversation
            </button>
            <button 
              className="border-2 border-gray-300 text-gray-700 bg-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-gray-50 hover:shadow-md transition-all"
              onClick={scrollToSuccessStories}
            >
              Explore More Stories
            </button>
          </div>

          <div className="mt-12 bg-white border border-gray-200 p-6 md:p-8 rounded-2xl text-left shadow-sm">
            <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3">The Future of Gaming Infrastructure:</h4>
            <blockquote className="text-gray-700 text-base md:text-lg italic leading-relaxed">
              "Infrastructure reliability becomes a competitive advantage when it's proactive rather than reactive. 
              RubixKube transforms operations from constant firefighting to predictable, silent protection of the 
              player experience."
            </blockquote>
            <div className="text-gray-500 text-sm md:text-base mt-3">— Infrastructure Innovation Perspective</div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CaseStudyType1;