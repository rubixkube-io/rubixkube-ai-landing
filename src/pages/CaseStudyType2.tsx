import { ArrowLeft, CheckCircle, AlertTriangle, Zap, Brain, Search, TrendingUp, CalendarCheck, Monitor, Gamepad2, Shield, Globe, Clock, MessageSquare } from "lucide-react";
import { useState } from "react";
import React from "react";

const CaseStudyType2= () => {
  const [activeTimelineItem, setActiveTimelineItem] = useState(0);
  const [isBookDemoFormOpen, setIsBookDemoFormOpen] = useState(false);

  const scrollToSuccessStories = () => {
    // Navigate to home page with testimonials section
    window.location.href = '/#testimonials';
  };

  const timelineItems = [
    {
      icon: <Search />,
      time: "T+0s - Detection Phase",
      title: "Observer Agent Detects Production Flow Break",
      description: "Observer Agent instantly detected a critical failure in FR 2.0's production flow during service startup. The system identified this as a breaking change that could derail the imminent live customer demo.",
      code: `{
  "alert": "fr-2.0.production-flow-failure",
  "service_status": {
    "startup": "FAILED",
    "environment": "production",
    "last_successful": "dev_environment"
  },
  "incident_severity": "CRITICAL",
  "time_to_demo": "30_minutes",
  "blast_radius": "production_only"
}`,
      status: "PRODUCTION_FLOW_FAILURE detected in FR 2.0",
      statusType: "warning"
    },
    {
      icon: <Brain />,
      time: "T+20s - Analysis Phase", 
      title: "Planner Agent Identifies Secret Configuration Issue",
      description: "Planner Agent traced the issue to a misconfigured secret mount - a subtle bug that passed undetected in development environments. The system provided immediate root cause analysis with precise component identification.",
      metrics: [
        { label: "Root Cause:", value: "Misconfigured secret mount reference", type: "info" },
        { label: "Environment Impact:", value: "Production only - dev unaffected", type: "warning" },
        { label: "Time Criticality:", value: "30 minutes to live demo", type: "warning" }
      ],
      status: "Secret mount configuration error identified",
      statusType: "info"
    },
    {
      icon: <MessageSquare />,
      time: "T+30s - Conversational Debugging",
      title: "Natural Language Interface Provides Instant Clarity",
      description: "The team queried RubixKube in plain English: 'Why is FR failing in prod?' RubixKube responded with the exact root cause, affected pod, faulty secret reference, and blast radius assessment.",
      code: `Engineer: "Why is FR failing in prod?"

RubixKube Response:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 ROOT CAUSE: Misconfigured secret mount

📍 AFFECTED POD: fr-2-0-deployment-7d9f8c6b4x-abc123

🔐 FAULTY SECRET: /app/config/database-secret
   Expected: database-prod-secret-v2
   Current:  database-prod-secret-v1

🎯 BLAST RADIUS: Production environment only

⚡ RECOMMENDED ACTION: Update secret reference
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      status: "Conversational debugging completed with actionable insights",
      statusType: "success"
    },
    {
      icon: <Zap />,
      time: "T+60s - Action Phase",
      title: "GitOps Patch Plan Executed",
      description: "RubixKube proposed a safe fix and Executor Agent provided a GitOps patch plan. The team applied the fix and within minutes, FR 2.0 was back online and ready for the live demonstration.",
      code: `# GitOps Patch Plan Applied
# Update secret reference in deployment
apiVersion: apps/v1
kind: Deployment
spec:
  template:
    spec:
      containers:
      - name: fr-2-0
        env:
        - name: DATABASE_SECRET
          valueFrom:
            secretKeyRef:
              name: database-prod-secret-v2  # ✅ Fixed
              key: connection-string

# Applied and verified in 45 seconds`,
      status: "FR 2.0 system restored and demo-ready",
      statusType: "success"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Live Launch Rescue: How RubixKube Saved <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">Sheshi AI's</span> Critical Demo
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                A real case study of RubixKube's conversational debugging preventing a catastrophic product launch failure. 
                With just 30 minutes before a live customer demo, a silent production failure threatened to derail Sheshi AI's flagship FR 2.0 model launch.
              </p>
              <div className="bg-blue-50 border border-blue-200 p-4 md:p-5 rounded-xl">
                <strong className="text-blue-700">The Challenge:</strong>
                <span className="text-gray-700"> Silent production failure with no crash logs, no alerts, and a ticking clock before live demo</span>
              </div>
            </div>
            <div className="bg-white border border-gray-200 p-6 md:p-10 rounded-2xl shadow-lg">
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="bg-blue-50 border border-blue-200 p-4 md:p-6 rounded-xl hover:shadow-md transition-all text-center">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">2min</div>
                  <div className="text-gray-700 font-medium text-sm md:text-base">Time to RCA</div>
                </div>
                <div className="bg-blue-50 border border-blue-200 p-4 md:p-6 rounded-xl hover:shadow-md transition-all text-center">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">5min</div>
                  <div className="text-gray-700 font-medium text-sm md:text-base">Time to Fix</div>
                </div>
                <div className="bg-blue-50 border border-blue-200 p-4 md:p-6 rounded-xl hover:shadow-md transition-all text-center">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">0</div>
                  <div className="text-gray-700 font-medium text-sm md:text-base">Customer Impact</div>
                </div>
                <div className="bg-blue-50 border border-blue-200 p-4 md:p-6 rounded-xl hover:shadow-md transition-all text-center">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">100%</div>
                  <div className="text-gray-700 font-medium text-sm md:text-base">Demo Success</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crisis Context */}
      <section className="py-12 md:py-20 bg-gray-100 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">🚨 Minutes Before Launch Disaster</h2>
          <p className="text-lg md:text-xl text-gray-600 text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            A silent production failure that could have destroyed a high-stakes product launch and customer trust
          </p>

          <div className="bg-red-50 border border-red-200 rounded-2xl p-6 md:p-10 relative">
            <div className="absolute -top-4 left-4 md:left-8 bg-red-600 text-white px-3 md:px-5 py-2 rounded-full font-semibold text-xs md:text-sm shadow-lg">
              ⏰ LAUNCH CRISIS
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-red-700 mb-4 mt-2">30 Minutes Before Live Customer Demo</h3>
            <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
              Sheshi AI was minutes away from demonstrating their flagship FR 2.0 model to critical customers. Everything worked perfectly in development, but the moment the build was promoted to production, the system broke completely. There were no crash logs, no alerts, no clue - just a broken flow and a ticking clock before the live demonstration.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div className="bg-white border border-red-200 p-4 md:p-5 rounded-xl border-l-4 border-l-red-500">
                <strong className="text-red-700 text-base md:text-lg block mb-2">Development Status</strong>
                <p className="text-gray-700 text-sm md:text-base">✅ Everything working perfectly</p>
              </div>
              <div className="bg-white border border-red-200 p-4 md:p-5 rounded-xl border-l-4 border-l-red-500">
                <strong className="text-red-700 text-base md:text-lg block mb-2">Production Status</strong>
                <p className="text-gray-700 text-sm md:text-base">❌ Complete system failure</p>
              </div>
              <div className="bg-white border border-red-200 p-4 md:p-5 rounded-xl border-l-4 border-l-red-500">
                <strong className="text-red-700 text-base md:text-lg block mb-2">Available Information</strong>
                <p className="text-gray-700 text-sm md:text-base">No logs, no alerts, no clue</p>
              </div>
            </div>

            <div className="mt-6 bg-white border border-red-200 p-4 md:p-5 rounded-xl">
              <strong className="text-red-700 text-base md:text-lg block mb-2">The Stakes:</strong>
              <p className="text-gray-700 text-sm md:text-base">
                Any delay could have ruined the launch, eroded customer trust, and hurt the company's momentum. 
                The team faced a frantic search across logs, configs, and dashboards with no clear direction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="success-stories" className="py-12 md:py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">⚡ From Crisis to Resolution in 90 Seconds</h2>
          <p className="text-lg md:text-xl text-gray-600 text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            Watch how RubixKube's conversational AI transformed a potential disaster into a seamless launch recovery
          </p>

          <div className="relative">
            {/* Desktop timeline line - shifted to left */}
            <div className="absolute left-10 w-1 h-full bg-gradient-to-b from-blue-500 to-blue-400 hidden md:block"></div>
            
            {/* Mobile timeline line */}
            <div className="absolute left-8 top-0 w-0.5 h-full bg-gradient-to-b from-blue-500 to-blue-400 md:hidden"></div>
            
            {timelineItems.map((item, index) => (
              <div key={index} className={`relative mb-16 ${index % 2 === 1 ? 'md:flex md:flex-row-reverse' : 'md:flex'}`}>
                {/* Desktop Timeline badge - positioned on left */}
                <div className="absolute left-2 md:left-2 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-blue-600 to-blue-500 border-4 border-white rounded-full flex items-center justify-center text-white shadow-lg z-10 hidden md:flex">
                  <div className="w-4 h-4 md:w-5 md:h-5 flex items-center justify-center">
                    {React.cloneElement(item.icon, { className: "w-full h-full" })}
                  </div>
                </div>
                
                {/* Mobile Timeline badge */}
                <div className="absolute left-0 w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-500 border-4 border-white rounded-full flex items-center justify-center text-white shadow-lg z-10 md:hidden">
                  <div className="w-4 h-4 flex items-center justify-center">
                    {React.cloneElement(item.icon, { className: "w-full h-full" })}
                  </div>
                </div>
                
                {/* Content */}
                <div className={`flex-1 ml-24 md:ml-32 ${index % 2 === 1 ? 'md:mr-0' : 'md:ml-32'} bg-white border border-gray-200 p-6 md:p-8 rounded-2xl hover:shadow-lg transition-all shadow-sm`}>
                  <div className="inline-block bg-blue-50 text-blue-700 border border-blue-200 px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-semibold mb-3">
                    {item.time}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm md:text-base">{item.description}</p>
                  
                  {item.code && (
                    <div className="bg-gray-900 text-gray-100 p-4 md:p-5 rounded-xl font-mono text-xs md:text-sm overflow-x-auto mb-4 border border-gray-300">
                      <pre className="whitespace-pre-wrap">{item.code}</pre>
                    </div>
                  )}
                  
                  {item.metrics && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      {item.metrics.map((metric, idx) => (
                        <div key={idx} className={`p-3 md:p-4 rounded-lg border-l-4 ${
                          metric.type === 'info' ? 'bg-blue-50 border-blue-500' : 
                          metric.type === 'warning' ? 'bg-yellow-50 border-yellow-500' :
                          'bg-green-50 border-green-500'
                        }`}>
                          <strong className={`block mb-1 text-sm md:text-base ${
                            metric.type === 'info' ? 'text-blue-700' : 
                            metric.type === 'warning' ? 'text-yellow-700' :
                            'text-green-700'
                          }`}>{metric.label}</strong>
                          <span className="text-gray-600 text-xs md:text-sm">{metric.value}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <div className={`inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-semibold border ${
                    item.statusType === 'warning' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' :
                    item.statusType === 'success' ? 'bg-green-50 text-green-700 border-green-200' :
                    'bg-blue-50 text-blue-700 border-blue-200'
                  }`}>
                    <span>●</span> {item.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 md:py-20 bg-gray-100 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">Launch Success Metrics</h2>
          <p className="text-lg md:text-xl text-gray-600 text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            How conversational AI turned a potential disaster into a flawless product launch
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="bg-white border border-gray-200 p-4 md:p-8 rounded-2xl text-center hover:shadow-lg transition-all shadow-sm">
              <div className="text-2xl md:text-4xl font-bold text-blue-600 mb-2">&lt;2min</div>
              <div className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Time to RCA</div>
              <div className="text-xs md:text-sm text-gray-500">Root cause analysis</div>
            </div>
            <div className="bg-white border border-gray-200 p-4 md:p-8 rounded-2xl text-center hover:shadow-lg transition-all shadow-sm">
              <div className="text-2xl md:text-4xl font-bold text-blue-600 mb-2">&lt;5min</div>
              <div className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Time to Fix</div>
              <div className="text-xs md:text-sm text-gray-500">Complete resolution</div>
            </div>
            <div className="bg-white border border-gray-200 p-4 md:p-8 rounded-2xl text-center hover:shadow-lg transition-all shadow-sm">
              <div className="text-2xl md:text-4xl font-bold text-blue-600 mb-2">0</div>
              <div className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Customer Impact</div>
              <div className="text-xs md:text-sm text-gray-500">Customers never saw the glitch</div>
            </div>
            <div className="bg-white border border-gray-200 p-4 md:p-8 rounded-2xl text-center hover:shadow-lg transition-all shadow-sm">
              <div className="text-2xl md:text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Launch Success</div>
              <div className="text-xs md:text-sm text-gray-500">Flawless demo delivery</div>
            </div>
          </div>

          <div className="mt-12 bg-white border border-blue-200 p-6 md:p-8 rounded-2xl shadow-sm">
            <h3 className="text-xl md:text-2xl font-bold text-blue-600 mb-4 flex items-center gap-3">
              <MessageSquare className="w-5 h-5" />
              The Power of Conversational Debugging
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <strong className="text-gray-900 block mb-2">No War Room Needed</strong>
                <p className="text-gray-600 text-sm">Instead of frantic searching across logs and dashboards, the team had a simple conversation with RubixKube to get instant answers.</p>
              </div>
              <div>
                <strong className="text-gray-900 block mb-2">Precise Diagnosis</strong>
                <p className="text-gray-600 text-sm">RubixKube provided the exact root cause, affected pod, faulty reference, and blast radius - like having a seasoned SRE who already knew the answer.</p>
              </div>
              <div>
                <strong className="text-gray-900 block mb-2">Confidence Under Pressure</strong>
                <p className="text-gray-600 text-sm">"It felt like RubixKube already knew our system better than we did" - enabling calm, confident decision-making during crisis.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Overview */}
      <section className="py-12 md:py-20 bg-white px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">🧠 Beyond Traditional Monitoring</h2>
          <p className="text-lg md:text-xl text-gray-600 text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            Why conversational AI debugging outperforms traditional observability tools
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <div className="bg-white border border-gray-200 p-6 md:p-10 rounded-2xl hover:shadow-lg transition-all shadow-sm">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-xl flex items-center justify-center shadow-lg">
                  <AlertTriangle className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                Traditional Monitoring
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0">❌</div>
                  <span className="text-gray-600 text-sm md:text-base"><strong className="text-gray-900">Reactive:</strong> Alerts after problems occur</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0">❌</div>
                  <span className="text-gray-600 text-sm md:text-base"><strong className="text-gray-900">Manual Analysis:</strong> Time-consuming root cause hunting</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0">❌</div>
                  <span className="text-gray-600 text-sm md:text-base"><strong className="text-gray-900">Silent Failures:</strong> Misses subtle configuration issues</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 p-6 md:p-10 rounded-2xl hover:shadow-lg transition-all shadow-sm">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl flex items-center justify-center shadow-lg">
                  <Brain className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                RubixKube Intelligence
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 text-sm md:text-base"><strong className="text-gray-900">Proactive Detection:</strong> Catches issues before they impact users</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 text-sm md:text-base"><strong className="text-gray-900">Conversational Interface:</strong> Ask questions in plain English</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 text-sm md:text-base"><strong className="text-gray-900">Autonomous Resolution:</strong> Provides exact fixes and patch plans</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
{/* CTA */}
      <section className="py-12 md:py-20 px-6 text-center bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-blue-600/5"></div>
        <div className="max-w-4xl mx-auto relative">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to Transform Your Incident Response?</h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-10 max-w-2xl mx-auto">
            Experience conversational debugging that turns crisis moments into confident resolutions. 
            See how RubixKube can protect your critical launches and deployments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <button 
              className="bg-gradient-to-r from-blue-900 to-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:shadow-lg transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 shadow-md"
              onClick={() => setIsBookDemoFormOpen(true)}
            >
              <CalendarCheck className="h-4 w-4" />
              Book a Demo
            </button>
            <button 
              className="border-2 border-gray-300 text-gray-700 bg-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-gray-50 hover:shadow-md transition-all"
              onClick={scrollToSuccessStories}
            >
              View More Success Stories
            </button>
          </div>

          <div className="mt-12 bg-white border border-gray-200 p-6 md:p-8 rounded-2xl text-left shadow-sm">
            <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Team Feedback:</h4>
            <blockquote className="text-gray-700 text-base md:text-lg italic leading-relaxed">
              "We didn't just avoid a failure. We felt what it's like to have your infra think with you. 
              It felt like RubixKube already knew our system better than we did."
            </blockquote>
            <div className="text-gray-500 text-sm md:text-base mt-3">— Sheshi AI Engineering Team</div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CaseStudyType2;