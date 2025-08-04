import { ArrowLeft, CheckCircle, AlertTriangle, Zap, Brain, Search, TrendingUp, CalendarCheck } from "lucide-react";
import { useState } from "react";
import { PopupModal } from "react-calendly";
import React from "react";

const CaseStudyType1 = () => {
  const [activeTimelineItem, setActiveTimelineItem] = useState(0);
  const [isBookDemoFormOpen, setIsBookDemoFormOpen] = useState(false);

  const scrollToSuccessStories = () => {
    // Navigate to home page with testimonials section
    window.location.href = '/#testimonials';
  };

  const timelineItems = [
    {
      icon: <Search />,
      time: "19:31:24 - Detection Phase",
      title: "Observer Agent Spots the Anomaly",
      description: "Observer Agent (On-Prem) detected subtle routing drift in Smart Router's decision weights. Unlike traditional monitoring focused on crashes and errors, RubixKube identified performance erosion patterns.",
      code: `{
  "anomaly": "smart-router.routing-drift",
  "bank_b_weight": {
    "before": 18.4,
    "after": 3.1,
    "change": -83.2
  },
  "merchant_impact": {
    "zomato_retry_spike": +340.2,
    "success_rate": 76.8
  }
}`,
      status: "ROUTING_FAILURE pattern detected",
      statusType: "warning"
    },
    {
      icon: <Brain />,
      time: "19:31:31 - Analysis Phase",
      title: "Planner Agent Finds Historical Match",
      description: "Planner Agent (SaaS) cross-referenced against memory bank and found 94.7% confidence match with similar Bank B incident from 2 months prior. Business impact calculated in real-time.",
      metrics: [
        { label: "Pattern Match:", value: "94.7% confidence with May 2024 incident", type: "info" },
        { label: "Business Risk:", value: "₹45L GMV at immediate risk", type: "warning" }
      ],
      status: "Root cause: Stale metrics during QPS spike",
      statusType: "info"
    },
    {
      icon: <Zap />,
      time: "19:31:45 - Action Phase",
      title: "Action Agent Deploys Fix",
      description: "Action Agent (On-Prem) executed safe remediation through GitOps automation. Router weights restored and decay parameters adjusted to prevent recurrence.",
      code: `# Automated GitOps Fix Applied
git checkout -b hotfix/router-weight-override

# Configuration Update
bank_weights:
  Bank_A: 42.0
  Bank_B: 18.0  # ✅ Restored from 3.1%
  Bank_C: 40.0

decay_config:
  success_metric_ttl: 300s  # ⬆️ Increased
  weight_adjustment_rate: 0.05  # ⬇️ Reduced

# Deployed via ArgoCD in 60 seconds`,
      status: "GitOps deployment completed automatically",
      statusType: "success"
    },
    {
      icon: <TrendingUp />,
      time: "19:32:54 - Recovery Verified",
      title: "Learning & Communication",
      description: "Memory Agent (SaaS) confirmed recovery and stored incident signature for future learning. Stakeholder notifications automatically generated.",
      metrics: [
        { label: "✅ SRE Slack", value: "Auto-resolved with RCA link", type: "success" },
        { label: "📧 Zomato Ops", value: "Proactive comm prepared", type: "info" }
      ],
      status: "Pattern learned for future protection",
      statusType: "success"
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                How We Saved <span className="text-blue-600">₹45 Lakh</span> in 90 Seconds
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                A real case study of RubixKube's autonomous AI preventing revenue loss during Razorpay's Smart Router crisis, 
                while Zomato users were booking concert tickets. Zero human intervention required.
              </p>
              <div className="bg-blue-50 p-4 md:p-5 rounded-xl border-l-4 border-blue-600">
                <strong className="text-blue-800">The Challenge:</strong>
                <span className="text-gray-700"> Payment routing failures during peak traffic that traditional monitoring couldn't detect</span>
              </div>
            </div>
            <div className="bg-gray-50 p-6 md:p-10 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-100/30 to-transparent rounded-2xl"></div>
              <div className="grid grid-cols-2 gap-4 md:gap-6 relative z-10">
                <div className="bg-white p-4 md:p-6 rounded-xl border-2 border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all text-center">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">90s</div>
                  <div className="text-gray-600 font-medium text-sm md:text-base">Resolution Time</div>
                </div>
                <div className="bg-white p-4 md:p-6 rounded-xl border-2 border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all text-center">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">₹45L</div>
                  <div className="text-gray-600 font-medium text-sm md:text-base">Revenue Saved</div>
                </div>
                <div className="bg-white p-4 md:p-6 rounded-xl border-2 border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all text-center">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">0</div>
                  <div className="text-gray-600 font-medium text-sm md:text-base">Human Actions</div>
                </div>
                <div className="bg-white p-4 md:p-6 rounded-xl border-2 border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all text-center">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">83%</div>
                  <div className="text-gray-600 font-medium text-sm md:text-base">Weight Restored</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendly Modal for Book Demo */}
      {isBookDemoFormOpen && (
        <PopupModal
          url="https://calendly.com/rubixkube/new-meeting"
          onModalClose={() => setIsBookDemoFormOpen(false)}
          open={isBookDemoFormOpen}
          rootElement={document.body}
        />
      )}

      {/* Crisis Context */}
      <section className="py-12 md:py-20 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">🎯 The Crisis That Traditional Monitoring Missed</h2>
          <p className="text-lg md:text-xl text-gray-600 text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            A silent failure brewing during peak traffic that could have cost millions
          </p>

          <div className="bg-white border-2 border-red-200 rounded-2xl p-6 md:p-10 relative">
            <div className="absolute -top-4 left-4 md:left-8 bg-red-600 text-white px-3 md:px-5 py-2 rounded-full font-semibold text-xs md:text-sm">
              🚨 CRITICAL INCIDENT
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-red-600 mb-4 mt-2">Friday 7:30 PM - Concert Booking Rush</h3>
            <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
              Zomato's District app was experiencing unprecedented traffic as users rushed to book tickets for a trending concert. 
              Razorpay's Smart Router was processing thousands of payment requests per second, but a silent crisis was building.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div className="bg-red-50 p-4 md:p-5 rounded-xl border-l-4 border-red-600">
                <strong className="text-red-600 text-base md:text-lg block mb-2">Bank B Weight Collapse</strong>
                <p className="text-gray-600 text-sm md:text-base">18% → 3% (-83% drop)</p>
              </div>
              <div className="bg-red-50 p-4 md:p-5 rounded-xl border-l-4 border-red-600">
                <strong className="text-red-600 text-base md:text-lg block mb-2">Traditional Alerts</strong>
                <p className="text-gray-600 text-sm md:text-base">All systems showing green ✅</p>
              </div>
              <div className="bg-red-50 p-4 md:p-5 rounded-xl border-l-4 border-red-600">
                <strong className="text-red-600 text-base md:text-lg block mb-2">Hidden Impact</strong>
                <p className="text-gray-600 text-sm md:text-base">Cascading failure building</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="success-stories" className="py-12 md:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">⏱️ 90 Seconds to Resolution</h2>
          <p className="text-lg md:text-xl text-gray-600 text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            Watch how RubixKube's AI agents worked together to detect, analyze, and fix the crisis autonomously
          </p>

          <div className="relative">
            {/* Desktop timeline line - shifted to left */}
            <div className="absolute left-10 w-1 h-full bg-gray-200 hidden md:block"></div>
            
            {/* Mobile timeline line */}
            <div className="absolute left-8 top-0 w-0.5 h-full bg-gray-200 md:hidden"></div>
            
            {timelineItems.map((item, index) => (
              <div key={index} className={`relative mb-16 ${index % 2 === 1 ? 'md:flex md:flex-row-reverse' : 'md:flex'}`}>
                {/* Desktop Timeline badge - positioned on left */}
                <div className="absolute left-2 md:left-2 w-16 h-16 md:w-20 md:h-20 bg-blue-600 border-4 border-white rounded-full flex items-center justify-center text-white shadow-lg z-10 hidden md:flex">
                  <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center">
                    {React.cloneElement(item.icon, { className: "w-full h-full" })}
                  </div>
                </div>
                
                {/* Mobile Timeline badge */}
                <div className="absolute left-0 w-16 h-16 bg-blue-600 border-4 border-white rounded-full flex items-center justify-center text-white shadow-lg z-10 md:hidden">
                  <div className="w-6 h-6 flex items-center justify-center">
                    {React.cloneElement(item.icon, { className: "w-full h-full" })}
                  </div>
                </div>
                
                {/* Content */}
                <div className={`flex-1 ml-24 md:ml-32 ${index % 2 === 1 ? 'md:mr-0' : 'md:ml-32'} bg-white p-6 md:p-8 rounded-2xl border-2 border-gray-200 hover:border-blue-600 hover:shadow-xl transition-all`}>
                  <div className="inline-block bg-blue-100 text-blue-800 px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-semibold mb-3">
                    {item.time}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm md:text-base">{item.description}</p>
                  
                  {item.code && (
                    <div className="bg-gray-900 text-gray-100 p-4 md:p-5 rounded-xl font-mono text-xs md:text-sm overflow-x-auto mb-4">
                      <pre className="whitespace-pre-wrap">{item.code}</pre>
                    </div>
                  )}
                  
                  {item.metrics && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      {item.metrics.map((metric, idx) => (
                        <div key={idx} className={`p-3 md:p-4 rounded-lg border-l-4 ${
                          metric.type === 'info' ? 'bg-blue-50 border-blue-600' : 
                          metric.type === 'warning' ? 'bg-yellow-50 border-yellow-600' :
                          'bg-green-50 border-green-600'
                        }`}>
                          <strong className={`block mb-1 text-sm md:text-base ${
                            metric.type === 'info' ? 'text-blue-800' : 
                            metric.type === 'warning' ? 'text-yellow-800' :
                            'text-green-800'
                          }`}>{metric.label}</strong>
                          <span className="text-gray-700 text-xs md:text-sm">{metric.value}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <div className={`inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-semibold ${
                    item.statusType === 'warning' ? 'bg-yellow-100 text-yellow-800 border border-yellow-200' :
                    item.statusType === 'success' ? 'bg-green-100 text-green-800 border border-green-200' :
                    'bg-blue-100 text-blue-800 border border-blue-200'
                  }`}>
                    <span>●</span> {item.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture
      <section className="py-12 md:py-20 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">🏗️ The Architecture Behind the Magic</h2>
          <p className="text-lg md:text-xl text-gray-600 text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            Hybrid SaaS + on-premises deployment ensuring security, speed, and intelligence
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <div className="bg-white p-6 md:p-10 rounded-2xl border-2 border-gray-200 hover:border-blue-600 hover:shadow-xl transition-all">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-lg md:text-2xl">☁️</div>
                SaaS Control Plane
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base"><strong>Memory Agent:</strong> Cross-customer learning and pattern recognition</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base"><strong>Planner Agent:</strong> Advanced analytics and decision making</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base"><strong>Global Intelligence:</strong> Shared knowledge base</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base"><strong>Secure Communication:</strong> Encrypted data exchange</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 md:p-10 rounded-2xl border-2 border-gray-200 hover:border-blue-600 hover:shadow-xl transition-all">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-lg md:text-2xl">🔒</div>
                On-Premises Agents
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base"><strong>Observer Agent:</strong> Real-time monitoring and detection</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base"><strong>Action Agent:</strong> Automated remediation execution</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base"><strong>Data Privacy:</strong> Sensitive data never leaves premises</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base"><strong>Low Latency:</strong> Sub-second response times</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}

      {/* Results */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-blue-50 to-blue-100 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">Measurable Impact</h2>
          <p className="text-lg md:text-xl text-gray-600 text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            Real results from autonomous AI operations
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="bg-white p-4 md:p-8 rounded-2xl text-center border-2 border-gray-200 hover:border-blue-600 hover:shadow-xl transition-all">
              <div className="text-2xl md:text-4xl font-bold text-blue-600 mb-2">₹45L</div>
              <div className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Revenue Protected</div>
              <div className="text-xs md:text-sm text-gray-600">Prevented cascading payment failures</div>
            </div>
            <div className="bg-white p-4 md:p-8 rounded-2xl text-center border-2 border-gray-200 hover:border-blue-600 hover:shadow-xl transition-all">
              <div className="text-2xl md:text-4xl font-bold text-blue-600 mb-2">90s</div>
              <div className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Resolution Time</div>
              <div className="text-xs md:text-sm text-gray-600">From detection to fix deployment</div>
            </div>
            <div className="bg-white p-4 md:p-8 rounded-2xl text-center border-2 border-gray-200 hover:border-blue-600 hover:shadow-xl transition-all">
              <div className="text-2xl md:text-4xl font-bold text-blue-600 mb-2">0%</div>
              <div className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Human Intervention</div>
              <div className="text-xs md:text-sm text-gray-600">Fully autonomous resolution</div>
            </div>
            <div className="bg-white p-4 md:p-8 rounded-2xl text-center border-2 border-gray-200 hover:border-blue-600 hover:shadow-xl transition-all">
              <div className="text-2xl md:text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Protection</div>
              <div className="text-xs md:text-sm text-gray-600">Continuous intelligent monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 px-6 text-center bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to Transform Your Operations?</h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-10 max-w-2xl mx-auto">
            See how RubixKube can deliver similar results for your organization. 
            Book a demo to explore our platform and discuss your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <button 
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:shadow-lg transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
              onClick={() => setIsBookDemoFormOpen(true)}
            >
              <CalendarCheck className="h-4 w-4" />
              Book a Demo
            </button>
            <button 
              className="border-2 border-blue-600 text-blue-600 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-blue-50 transition-all"
              onClick={scrollToSuccessStories}
            >
              View More Success Stories
            </button>
          </div>
        </div>
      </section>

      {/* Learning Callout
      <section className="py-12 md:py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-2 border-blue-600 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-blue-800 mb-4 flex items-center gap-3">
              💡 Key Learning
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Traditional monitoring systems focus on obvious failures - crashes, errors, and outages. 
              RubixKube's AI agents detect subtle performance degradation patterns that indicate brewing crises, 
              enabling proactive intervention before customer impact occurs. This shift from reactive to predictive 
              operations is the future of infrastructure management.
            </p>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default CaseStudyType1;