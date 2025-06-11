import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { PopupModal } from "react-calendly";
import { InlineWidget } from "react-calendly"; 
import { motion } from "framer-motion";
import { useState } from "react";
import Our_story from "./Our_story.png"

const ProductDetails = () => {
  const [isBookDemoFormOpen, setIsBookDemoFormOpen] = useState(false);
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-6 md:px-12 xl:px-32 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute -top-16 -right-16 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-16 -left-16 w-96 h-96 bg-gradient-to-br from-green-200/20 to-blue-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Main Title */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-blue-600 leading-tight">
              About RubixKube
            </h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-8"></div>
          </motion.div>

          {/* Image section */}
          <motion.div 
            className="mb-16 flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative group">
              {/* Soft glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-300/30 via-purple-300/30 to-green-300/30 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-700"></div>
              
              {/* Image container */}
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-slate-200/60">
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
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-40 animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-40 animate-pulse delay-1000"></div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-slate-200/50 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="text-xl leading-relaxed text-slate-700 text-center max-w-4xl mx-auto">
              RubixKube is an <span className="text-blue-600 font-semibold">always-on, AI-native SRE</span> that embeds directly into your cluster,
              surveils every byte of telemetry, and turns insight into governed action before your pager has a chance to vibrate.
              Where most "AI agents" conclude with a suggestion, RubixKube <span className="text-blue-600 font-semibold">closes the loop</span>—reasoning, deciding, and safely
              executing remediations through enterprise-grade guardrails.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section - 6 Cards */}
      <section className="py-20 px-6 md:px-12 xl:px-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-slate-800">Pillars Of RubixKube</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Agentic Mesh Architecture",
                description:
                  "A self-orchestrating network of specialized AI agents (Observer, Planner, Executor, Historian, Collaborator) that form a collaborative reasoning engine for intelligent, multi-step infrastructure operations. Think \"microservices for operational intelligence.\"",
                icon: "🕸",
                gradient: "from-orange-500 to-yellow-500",
                shadowColor: "shadow-orange-200/50",
              },
              {
                title: "Multi-Dimensional Memory System",
                description:
                  "Combines real-time state capture (live system snapshots) with persistent historical knowledge (incidents, RCAs, patterns) using retrieval-augmented generation (RAG). Provides agents with deep temporal awareness for pattern recognition and continuous learning.",
                icon: "🧠",
                gradient: "from-purple-500 to-pink-500",
                shadowColor: "shadow-purple-200/50",
              },
              {
                title: "Intelligent Conversational Interface",
                description:
                  "Human-centric, context-aware interface that transforms operational complexity into intuitive dialogue. Eliminates CLI gymnastics and YAML hunting—it's an operational copilot that understands infrastructure, not just text.",
                icon: "💬",
                gradient: "from-blue-500 to-cyan-500",
                shadowColor: "shadow-blue-200/50",
              },
              {
                title: "Governed Autonomy Framework",
                description:
                  "Every action operates within configurable policy boundaries, audit trails, and approval workflows. Operators control automation scope from read-only monitoring to full autonomous remediation. Policy-driven, explainable, and reversible.",
                icon: "🛡",
                gradient: "from-indigo-500 to-blue-600",
                shadowColor: "shadow-indigo-200/50",
              },
              {
                title: "Unified Observability & Knowledge Graph",
                description:
                  "Comprehensive infrastructure graph connecting services, metrics, logs, dependencies, ownership, and incident history. Enriched with CI/CD, docs, and runbooks to answer \"What happened?\", \"Why?\", \"What next?\", and \"Has this happened before?\"",
                icon: "🔍",
                gradient: "from-green-500 to-emerald-500",
                shadowColor: "shadow-green-200/50",
              },
              {
                title: "Adaptive Intelligence Engine",
                description:
                  "Continuously evolves through feedback loops, corrective interventions, and historical analysis. Over time, becomes your team's institutional memory, SRE expert, and diagnostic specialist—always online, always learning.",
                icon: "⚡",
                gradient: "from-yellow-500 to-orange-500",
                shadowColor: "shadow-yellow-200/50",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                {/* Card glow effect */}
                <div className={`absolute -inset-2 bg-gradient-to-r ${item.gradient} opacity-20 rounded-2xl blur-xl group-hover:opacity-30 transition-opacity duration-500`}></div>
                
                <div className={`relative bg-white rounded-2xl p-6 lg:p-8 shadow-lg ${item.shadowColor} border border-slate-100 h-full hover:shadow-xl transition-all duration-300 group-hover:scale-105`}>
                  {/* Icon with gradient background */}
                  <div className={`w-12 h-12 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 lg:mb-6 shadow-lg`}>
                    <span className="text-lg lg:text-2xl text-white">{item.icon}</span>
                  </div>
                  
                  <h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4 text-slate-800 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm lg:text-base text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Under The Hood Section */}
      <section className="py-20 px-6 md:px-12 xl:px-32 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-slate-800">Under The Hood</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.2 }}
            variants={{
              hidden: {},
              visible: {},
            }}
          >
            {[
              {
                icon: "🔧",
                title: "Modular Agents",
                description:
                  "Observer, Planner, Executor, Historian, Collaborator - each agent focused on their specialty, dynamically scaling with workload.",
                gradient: "from-orange-500 to-yellow-500",
                shadowColor: "shadow-orange-200/30",
              },
              {
                icon: "☁️",
                title: "Multi-Cloud Native",
                description:
                  "Kubernetes, AWS, GCP, Azure, hybrid, on-prem - one interface to rule them all through pluggable environment adapters.",
                gradient: "from-blue-500 to-cyan-500",
                shadowColor: "shadow-blue-200/30",
              },
              {
                icon: "🔗",
                title: "Context Enrichment",
                description:
                  "CI/CD metadata, architecture docs, FAQs, support tickets automatically linked to infrastructure nodes.",
                gradient: "from-green-500 to-emerald-500",
                shadowColor: "shadow-green-200/30",
              },
              {
                icon: "🎯",
                title: "Visual RCA Flow",
                description:
                  "Infrastructure graph animates investigation paths and remediation steps in real-time - see your system think.",
                gradient: "from-purple-500 to-pink-500",
                shadowColor: "shadow-purple-200/30",
              },
              {
                icon: "🎲",
                title: "Vendor-Specific Agents",
                description:
                  "Specialized sub-agents for AWS, GCP, Azure operations - deep platform expertise in each domain.",
                gradient: "from-indigo-500 to-blue-600",
                shadowColor: "shadow-indigo-200/30",
              },
              {
                icon: "🎼",
                title: "Distributed Coordination",
                description:
                  "Goal-oriented agent collaboration ensures cohesive action across complex, multi-system operations.",
                gradient: "from-yellow-500 to-orange-500",
                shadowColor: "shadow-yellow-200/30",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="group relative"
                variants={{
                  hidden: { opacity: 0, x: idx % 2 === 0 ? -50 : 50 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
              >
                {/* Card glow effect */}
                <div className={`absolute -inset-2 bg-gradient-to-r ${item.gradient} opacity-20 rounded-2xl blur-xl group-hover:opacity-30 transition-opacity duration-500`}></div>
                
                <div className={`relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg ${item.shadowColor} border border-slate-200/50 hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02]`}>
                  <div className="flex items-start space-x-6">
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}>
                      <span className="text-xl text-white">{item.icon}</span>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 text-slate-800">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Get Started CTA Section */}
      <section className="py-16 px-6 md:px-12 xl:px-32 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-blue-100 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Join leading teams who trust RubixKube to automate their operations and eliminate downtime.
            </p>
            
            <motion.button
              onClick={() => setIsBookDemoFormOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg flex items-center space-x-2 mx-auto group"
            >
              <span>Get Started Now</span>
              <svg 
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Calendly Integration Modal */}
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

export default ProductDetails;