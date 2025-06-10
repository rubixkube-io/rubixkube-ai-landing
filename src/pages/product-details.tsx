import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const ProductDetails = () => {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-6 md:px-12 xl:px-32 bg-gradient-to-br from-blue-50 via-slate-50 to-sky-50 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute -top-16 -right-16 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-sky-100/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-16 -left-16 w-96 h-96 bg-gradient-to-br from-slate-100/30 to-blue-100/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Main Title */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-sky-600 to-slate-600 bg-clip-text text-transparent leading-tight">
              About RubixKube
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-sky-400 mx-auto rounded-full mb-8"></div>
          </motion.div>

          {/* Description */}
          <motion.div
            className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg border border-blue-100/50 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xl leading-relaxed text-slate-700 text-center max-w-4xl mx-auto">
              RubixKube is an <span className="text-blue-600 font-semibold">always-on, AI-native SRE</span> that embeds directly into your cluster,
              surveils every byte of telemetry, and turns insight into governed action before your pager has a chance to vibrate.
              Where most "AI agents" conclude with a suggestion, RubixKube <span className="text-sky-600 font-semibold">closes the loop</span>—reasoning, deciding, and safely
              executing remediations through enterprise-grade guardrails.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-6 md:px-12 xl:px-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-slate-800">How It Works</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-sky-400 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Deep Observability & RCA",
                description:
                  "Continuous collection of logs, metrics, and traces with structured root‑cause analyses for instant remediation. RubixKube is on 24x7 and is noting everything that's going on in your clusters.",
                icon: "🔍",
                gradient: "from-blue-500 to-sky-500",
              },
              {
                title: "Adaptive Learning Memory",
                description:
                  "Your infra evolves hourly—new versions, nodes, flags. RubixKube continuously re‑embeds that tribal knowledge into its vector memory so every incident is solved faster than the last.",
                icon: "🧠",
                gradient: "from-sky-500 to-blue-500",
              },
              {
                title: "Automated, Guard-Railed Action",
                description:
                  "When thresholds trip or patterns repeat, RubixKube executes guardrailed playbooks, scales deployments, reverts configs, and rotates secrets. It then pings Slack with the diff, audit trail attached. You sleep; infra heals.",
                icon: "⚡",
                gradient: "from-slate-500 to-blue-500",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                {/* Card glow effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-200/50 to-sky-200/50 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-blue-100/50 h-full hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  {/* Icon with gradient background */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                    <span className="text-2xl text-white">{item.icon}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-slate-800">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Under The Hood Section */}
      <section className="py-20 px-6 md:px-12 xl:px-32 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-slate-800">Under The Hood</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-sky-400 mx-auto rounded-full"></div>
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
                icon: "🕸",
                title: "Agentic Mesh",
                description:
                  "A swarm of specialised agents collaborate like a veteran SRE squad.",
                gradient: "from-blue-500 to-sky-500",
              },
              {
                icon: "💬",
                title: "Chat Interface",
                description:
                  "Query your cluster in English or shell; responses include rich diffs, graphs, and actions. Fine-grained RBAC and policy packs ensure compliance.",
                gradient: "from-sky-500 to-slate-500",
              },
              {
                icon: "⚡",
                title: "Speed Scale",
                description:
                  "Stateless design + event-driven execution enable petabyte-scale telemetry and millisecond-level decisions.",
                gradient: "from-slate-500 to-blue-500",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="group relative"
                variants={{
                  hidden: { opacity: 0, x: idx % 2 === 0 ? -50 : 50 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
              >
                {/* Card glow effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-200/30 to-sky-200/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-100/50 hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02]">
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

      <Footer />
    </>
  );
};

export default ProductDetails;