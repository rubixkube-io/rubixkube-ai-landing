import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { PopupModal } from "react-calendly";
import { InlineWidget } from "react-calendly"; 
import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Network, 
  Brain, 
  MessageCircle, 
  Shield, 
  Search, 
  Zap,
  Settings,
  Cloud,
  Link,
  Target,
  Dices,
  Music
} from "lucide-react";
import Our_story from "./Our_story.png"
import CallToAction from "@/components/CallToAction";

const ProductDetails = () => {
  const [isBookDemoFormOpen, setIsBookDemoFormOpen] = useState(false);
  return (
    <>
      <Header />
      
      {/* Hero Section - Hero style layout with text left, image right */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/5 via-white to-accent/5 overflow-hidden">
        {/* Background decoration - matching landing page */}
        <div className="absolute inset-0">
          <div className="absolute -top-16 -right-16 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-16 -left-16 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 xl:px-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content - Left Side */}
            <div className="text-left">
              {/* Main Title - matching landing page typography */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">About RubixKube</span>
                </h1>
                <div className="w-24 h-2 bg-gradient-to-r from-primary to-accent rounded-full mb-6 animate-fade-in"></div>
              </motion.div>

              {/* Description - matching landing page card style */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <p className="text-xl leading-relaxed text-muted-foreground max-w-xl mb-6">
                  RubixKube is an <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold">always on, AI-native SRE</span> that embeds directly into your cluster,
                  surveils every byte of telemetry, and turns insight into governed action before your pager has a chance to vibrate.
                </p>
                <p className="text-xl leading-relaxed text-muted-foreground max-w-xl">
                  Where most "AI agents" conclude with a suggestion, RubixKube <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold">closes the loop,</span>  reasoning, deciding, and safely
                  executing remediations through enterprise grade guardrails.
                </p>
              </motion.div>
            </div>

            {/* Image - Right Side */}
            <motion.div 
              className="lg:block animate-fade-in relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-accent/10 blur-3xl -z-10"></div>
              <img
                src={Our_story}
                alt="Abstract colorful shapes representing RubixKube's intuitive infrastructure management"
                className="rounded-2xl shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section - 6 Cards - matching landing page style */}
<section className="py-20 px-6 md:px-12 xl:px-32 bg-white">
  <div className="container mx-auto">
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Pillars Of RubixKube</h2>
      <div className="w-24 h-2 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"></div>
    </motion.div>

    {/* Responsive grid - 1 col on mobile, 2 on small, 3 on large */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {[
        {
          title: "Agentic Mesh Architecture",
          description:
            "A self orchestrating network of specialized AI agents (Observer, Planner, Executor, Historian, Collaborator) that form a collaborative reasoning engine for intelligent, multi-step infrastructure operations. Think \"microservices for operational intelligence.\"",
          icon: Network,
          gradient: "from-primary to-primary-dark",
          shadowColor: "shadow-primary/20",
        },
        {
          title: "Multi-Dimensional Memory System",
          description:
            "Combines real-time state capture (live system snapshots) with persistent historical knowledge (incidents, RCAs, patterns) using retrieval-augmented generation (RAG). Provides agents with deep temporal awareness for pattern recognition and continuous learning.",
          icon: Brain,
          gradient: "from-accent to-primary",
          shadowColor: "shadow-accent/20",
        },
        {
          title: "Intelligent Conversational Interface",
          description:
            "Human-centric, context-aware interface that transforms operational complexity into intuitive dialogue. Eliminates CLI gymnastics and YAML hunting — it's an operational copilot that understands infrastructure, not just text.",
          icon: MessageCircle,
          gradient: "from-primary-light to-accent",
          shadowColor: "shadow-primary/20",
        },
        {
          title: "Governed Autonomy Framework",
          description:
            "Every action operates within configurable policy boundaries, audit trails, and approval workflows. Operators control automation scope from read-only monitoring to full autonomous remediation. Policy driven, explainable, and reversible.",
          icon: Shield,
          gradient: "from-primary-dark to-primary",
          shadowColor: "shadow-primary/20",
        },
        {
          title: "Unified Observability & Knowledge Graph",
          description:
            "Comprehensive infrastructure graph connecting services, metrics, logs, dependencies, ownership, and incident history. Enriched with CI/CD, docs, and runbooks to answer \"What happened?\", \"Why?\", \"What next?\", and \"Has this happened before?\"",
          icon: Search,
          gradient: "from-accent to-primary-light",
          shadowColor: "shadow-accent/20",
        },
        {
          title: "Adaptive Intelligence Engine",
          description:
            "Continuously evolves through feedback loops, corrective interventions, and historical analysis. Over time, becomes your team's institutional memory, SRE expert, and diagnostic specialist — always online, always learning.",
          icon: Zap,
          gradient: "from-primary to-accent",
          shadowColor: "shadow-primary/20",
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
          {/* Card background glow */}
          <div className={`absolute -inset-2 bg-gradient-to-r ${item.gradient} opacity-20 rounded-2xl blur-xl group-hover:opacity-30 transition-opacity duration-500`}></div>

          {/* Card container */}
          <div className={`relative bg-white rounded-2xl p-6 lg:p-8 shadow-lg ${item.shadowColor} border border-gray-200/50 h-full hover:shadow-xl transition-all duration-300 group-hover:scale-105`}>
            {/* Centered content block */}
            <div className="flex flex-col items-center text-center">
              <div className={`w-12 h-12 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 lg:mb-6 shadow-lg`}>
                <item.icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
              </div>
              <h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4 text-gray-900 leading-tight">
                {item.title}
              </h3>
              <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Under The Hood Section - matching landing page background */}
      <section className="py-20 px-6 md:px-12 xl:px-32 bg-gradient-to-b from-white to-muted">
  <div className="container mx-auto">
    {/* Section Heading */}
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Under The Hood</h2>
      <div className="w-24 h-2 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"></div>
    </motion.div>

    {/* Card List */}
    <motion.div
      className="space-y-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ staggerChildren: 0.2 }}
      variants={{ hidden: {}, visible: {} }}
    >
      {[
        {
          icon: Settings,
          title: "Modular Agents",
          description:
            "Observer, Planner, Executor, Historian, Collaborator, each agent focused on their specialty, dynamically scaling with workload.",
          gradient: "from-primary to-primary-dark",
          shadowColor: "shadow-primary/20",
        },
        {
          icon: Cloud,
          title: "Multi-Cloud Native",
          description:
            "Kubernetes, AWS, GCP, Azure, hybrid, on-prem, one interface to rule them all through pluggable environment adapters.",
          gradient: "from-accent to-primary",
          shadowColor: "shadow-accent/20",
        },
        {
          icon: Link,
          title: "Context Enrichment",
          description:
            "CI/CD metadata, architecture docs, FAQs, support tickets automatically linked to infrastructure nodes.",
          gradient: "from-primary-light to-accent",
          shadowColor: "shadow-primary/20",
        },
        {
          icon: Target,
          title: "Visual RCA Flow",
          description:
            "Infrastructure graph animates investigation paths and remediation steps in real time, see your system think.",
          gradient: "from-primary to-accent",
          shadowColor: "shadow-primary/20",
        },
        {
          icon: Dices,
          title: "Vendor-Specific Agents",
          description:
            "Specialized sub-agents for AWS, GCP, Azure operations, deep platform expertise in each domain.",
          gradient: "from-primary-dark to-accent",
          shadowColor: "shadow-primary/20",
        },
        {
          icon: Music,
          title: "Distributed Coordination",
          description:
            "Goal-oriented agent collaboration ensures cohesive action across complex, multi-system operations.",
          gradient: "from-accent to-primary-light",
          shadowColor: "shadow-accent/20",
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
          {/* Glow Effect */}
          <div className={`absolute -inset-2 bg-gradient-to-r ${item.gradient} opacity-20 rounded-2xl blur-xl group-hover:opacity-30 transition-opacity duration-500`}></div>

          {/* Card Content */}
          <div
            className={`relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-lg ${item.shadowColor} border border-gray-200/50 hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02]`}
          >
            <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-6 text-center md:text-left">
              {/* Icon */}
              <div className={`w-14 h-14 mb-4 md:mb-0 md:mt-1 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg`}>
                <item.icon className="w-7 h-7 text-white" />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

      <CallToAction />

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