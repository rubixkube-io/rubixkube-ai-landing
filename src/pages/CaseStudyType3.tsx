import { ArrowLeft, CheckCircle, AlertTriangle, Zap, Brain, Search, TrendingUp, CalendarCheck, Monitor, Gamepad2, Shield, Globe, Clock, MessageSquare, Activity, Users, DollarSign } from "lucide-react";
import { useState } from "react";
import React from "react";

const CaseStudyType3 = () => {
  const [activeTimelineItem, setActiveTimelineItem] = useState(0);
  const [isBookDemoFormOpen, setIsBookDemoFormOpen] = useState(false);

  const scrollToSuccessStories = () => {
    // Navigate to home page with testimonials section
    window.location.href = '/#testimonials';
  };

  const timelineItems = [
    {
      icon: <Activity />,
      time: "T+0s - Early Signal Detection",
      title: "Observer Agent Catches Non-Linear Traffic Surge",
      description: "RubixKube's Observer Agent detected unusual traffic spike patterns and pod saturation well before traditional monitoring alerts fired. The system recognized this wasn't normal organic growth but a campaign-driven surge.",
      code: `{
  "alert": "traffic-surge-anomaly-detected",
  "pattern": "non-linear-spike",
  "services_affected": ["checkout", "catalog", "user-auth"],
  "pod_saturation": {
    "current": "85%",
    "trend": "exponential",
    "time_to_threshold": "2_minutes"
  },
  "campaign_correlation": "high_confidence"
}`,
      status: "Abnormal traffic pattern detected - campaign surge identified",
      statusType: "warning"
    },
    {
      icon: <Brain />,
      time: "T+30s - Root Cause Analysis", 
      title: "Planner Agent Maps Autoscaling Failure to Config Issues",
      description: "The Planner Agent correlated the sudden memory/CPU bursts with a historical similar incident. It identified that autoscaling failed due to misconfigured thresholds and cooldown periods preventing rapid scale-out.",
      metrics: [
        { label: "Root Cause:", value: "Autoscaler throttle limits + cooldown config", type: "info" },
        { label: "Services at Risk:", value: "Checkout, Catalog, User-Auth (98% capacity)", type: "warning" },
        { label: "Cluster Status:", value: "Unable to provision pods in time", type: "warning" }
      ],
      status: "Autoscaler configuration bottleneck identified with historical context",
      statusType: "info"
    },
    {
      icon: <DollarSign />,
      time: "T+60s - Business Impact Estimation",
      title: "Historian Agent Calculates Revenue Impact",
      description: "Using contextual memory from similar past incidents, the Historian Agent estimated real-time business impact: 5% user drop-off per minute with potential conversion loss of ₹12-14L over 15 minutes.",
      code: `Business Impact Analysis:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 IMPACT ESTIMATION (based on similar incidents):
   • User Drop-off Rate: 5% per minute
   • Revenue at Risk: ₹12-14L over 15 minutes
   • Campaign Window: High-conversion period

🎯 SIMILAR INCIDENT (6 months ago):
   • Pattern Match: 94% similarity
   • Resolution Time: 18 minutes
   • Revenue Loss: ₹15L

⚡ CURRENT TRAJECTORY:
   • If unresolved: ₹20L+ potential loss
   • Customer churn: 12-15% in conversion window`,
      status: "High-impact revenue loss scenario - immediate intervention required",
      statusType: "warning"
    },
    {
      icon: <Zap />,
      time: "T+90s - Smart Resolution & Prevention",
      title: "Executor Agent Deploys Multi-Layer Fix",
      description: "The Executor Agent provided immediate fixes: manual pod limit overrides, warm pool provisioning, and created a preventive policy for future campaigns. No war room needed - just guided, contextual resolution.",
      code: `# Immediate Resolution Applied
apiVersion: v1
kind: ConfigMap
metadata:
  name: autoscaler-emergency-override
data:
  # Temporary manual override
  max-pods-checkout: "50"    # was: 20
  max-pods-catalog: "30"     # was: 12
  cooldown-period: "30s"     # was: 300s
  
# Warm Pool Provisioning
kubectl apply -f warm-nodes-campaign.yaml

# Future Prevention Policy
apiVersion: policy/v1
kind: AutoScalePolicy  
spec:
  trigger: "traffic-pattern-anomaly-X"
  action: "auto-expand-warm-nodes-cluster-Y"
  
# ✅ Applied in 45 seconds`,
      status: "System restored with preventive policies deployed",
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
                Marketing Campaign Crisis:                 How RubixKube Saved <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">Fleek's</span> ₹20L Revenue Window
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                When a major influencer campaign overwhelmed Fleek's autoscaling capabilities, RubixKube's intelligent reliability layer transformed potential disaster into seamless scale. 
                A real case study of context-aware incident response under revenue pressure.
              </p>
              <div className="bg-blue-50 border border-blue-200 p-4 md:p-5 rounded-xl">
                <strong className="text-blue-700">The Challenge:</strong>
                <span className="text-gray-700"> Marketing surge broke autoscaling, services choking, users dropping off during peak conversion window</span>
              </div>
            </div>
            <div className="bg-white border border-gray-200 p-6 md:p-10 rounded-2xl shadow-lg">
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="bg-blue-50 border border-blue-200 p-4 md:p-6 rounded-xl hover:shadow-md transition-all text-center">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">90s</div>
                  <div className="text-gray-700 font-medium text-sm md:text-base">Time to Fix</div>
                </div>
                <div className="bg-blue-50 border border-blue-200 p-4 md:p-6 rounded-xl hover:shadow-md transition-all text-center">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">₹8L</div>
                  <div className="text-gray-700 font-medium text-sm md:text-base">Revenue Saved</div>
                </div>
                <div className="bg-blue-50 border border-blue-200 p-4 md:p-6 rounded-xl hover:shadow-md transition-all text-center">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">67%</div>
                  <div className="text-gray-700 font-medium text-sm md:text-base">Faster Resolution</div>
                </div>
                <div className="bg-blue-50 border border-blue-200 p-4 md:p-6 rounded-xl hover:shadow-md transition-all text-center">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">0</div>
                  <div className="text-gray-700 font-medium text-sm md:text-base">War Rooms</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crisis Context */}
      <section className="py-12 md:py-20 bg-gray-100 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">🚨 When Marketing Breaks the System</h2>
          <p className="text-lg md:text-xl text-gray-600 text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            A major influencer campaign surge that overwhelmed infrastructure and threatened massive revenue loss
          </p>

          <div className="bg-red-50 border border-red-200 rounded-2xl p-6 md:p-10 relative">
            <div className="absolute -top-4 left-4 md:left-8 bg-red-600 text-white px-3 md:px-5 py-2 rounded-full font-semibold text-xs md:text-sm shadow-lg">
              📈 CAMPAIGN OVERLOAD
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-red-700 mb-4 mt-2">High-Conversion Window Under Threat</h3>
            <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
              Fleek launched a major influencer-led marketing campaign across multiple social channels. The traffic spike was expected, but the infrastructure team didn't get the heads-up early enough. When the surge hit, autoscaling mechanisms couldn't respond fast enough. Memory and pod limits hit red zones, response times degraded, services choked, and users started dropping off during peak conversion hours.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div className="bg-white border border-red-200 p-4 md:p-5 rounded-xl border-l-4 border-l-red-500">
                <strong className="text-red-700 text-base md:text-lg block mb-2">Traffic Pattern</strong>
                <p className="text-gray-700 text-sm md:text-base">📊 Non-linear surge from campaign</p>
              </div>
              <div className="bg-white border border-red-200 p-4 md:p-5 rounded-xl border-l-4 border-l-red-500">
                <strong className="text-red-700 text-base md:text-lg block mb-2">Autoscaling Status</strong>
                <p className="text-gray-700 text-sm md:text-base">❌ Throttled by config limits</p>
              </div>
              <div className="bg-white border border-red-200 p-4 md:p-5 rounded-xl border-l-4 border-l-red-500">
                <strong className="text-red-700 text-base md:text-lg block mb-2">Business Impact</strong>
                <p className="text-gray-700 text-sm md:text-base">📉 User drop-off in conversion window</p>
              </div>
            </div>

            <div className="mt-6 bg-white border border-red-200 p-4 md:p-5 rounded-xl">
              <strong className="text-red-700 text-base md:text-lg block mb-2">The Hidden Problem:</strong>
              <p className="text-gray-700 text-sm md:text-base">
                No one had clear visibility into why autoscaling failed, what the blast radius was, or how to fix it quickly. 
                The team was left guessing under immense pressure with potential ₹20L+ revenue at stake.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="success-stories" className="py-12 md:py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">⚡ From Chaos to Context in 90 Seconds</h2>
          <p className="text-lg md:text-xl text-gray-600 text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            How RubixKube's intelligent reliability layer turned a revenue-threatening crisis into a guided resolution
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
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">Campaign Crisis to Success Metrics</h2>
          <p className="text-lg md:text-xl text-gray-600 text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            How intelligent reliability transformed a revenue-threatening crisis into business protection
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="bg-white border border-gray-200 p-4 md:p-8 rounded-2xl text-center hover:shadow-lg transition-all shadow-sm">
              <div className="text-2xl md:text-4xl font-bold text-blue-600 mb-2">6min</div>
              <div className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Resolution Time</div>
              <div className="text-xs md:text-sm text-gray-500">vs 18min traditional</div>
            </div>
            <div className="bg-white border border-gray-200 p-4 md:p-8 rounded-2xl text-center hover:shadow-lg transition-all shadow-sm">
              <div className="text-2xl md:text-4xl font-bold text-blue-600 mb-2">₹8L</div>
              <div className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Revenue Saved</div>
              <div className="text-xs md:text-sm text-gray-500">Potential loss prevented</div>
            </div>
            <div className="bg-white border border-gray-200 p-4 md:p-8 rounded-2xl text-center hover:shadow-lg transition-all shadow-sm">
              <div className="text-2xl md:text-4xl font-bold text-blue-600 mb-2">0%</div>
              <div className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Customer Churn</div>
              <div className="text-xs md:text-sm text-gray-500">In conversion window</div>
            </div>
            <div className="bg-white border border-gray-200 p-4 md:p-8 rounded-2xl text-center hover:shadow-lg transition-all shadow-sm">
              <div className="text-2xl md:text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Campaign Success</div>
              <div className="text-xs md:text-sm text-gray-500">Full conversion window protected</div>
            </div>
          </div>

          <div className="mt-12 bg-white border border-blue-200 p-6 md:p-8 rounded-2xl shadow-sm">
            <h3 className="text-xl md:text-2xl font-bold text-blue-600 mb-4 flex items-center gap-3">
              <Brain className="w-5 h-5" />
              Context-Aware Incident Response
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <strong className="text-gray-900 block mb-2">Business Context Understanding</strong>
                <p className="text-gray-600 text-sm">RubixKube calculated real-time revenue impact and user drop off rates, not just technical metrics.</p>
              </div>
              <div>
                <strong className="text-gray-900 block mb-2">Historical Pattern Recognition</strong>
                <p className="text-gray-600 text-sm">Connected current crisis with past similar incidents, providing proven resolution paths and impact predictions.</p>
              </div>
              <div>
                <strong className="text-gray-900 block mb-2">Proactive Policy Creation</strong>
                <p className="text-gray-600 text-sm">Deployed preventive measures for future campaigns, turning crisis into competitive advantage.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Overview */}
      <section className="py-12 md:py-20 bg-white px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">🧠 Beyond Reactive Autoscaling</h2>
          <p className="text-lg md:text-xl text-gray-600 text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            Why intelligent reliability beats traditional infrastructure monitoring under business pressure
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <div className="bg-white border border-gray-200 p-6 md:p-10 rounded-2xl hover:shadow-lg transition-all shadow-sm">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-xl flex items-center justify-center shadow-lg">
                  <AlertTriangle className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                Traditional Autoscaling
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0">❌</div>
                  <span className="text-gray-600 text-sm md:text-base"><strong className="text-gray-900">Reactive Scaling:</strong> Acts after damage begins</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0">❌</div>
                  <span className="text-gray-600 text-sm md:text-base"><strong className="text-gray-900">Config Blind Spots:</strong> Throttle limits and cooldowns overlooked</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0">❌</div>
                  <span className="text-gray-600 text-sm md:text-base"><strong className="text-gray-900">No Business Context:</strong> Missing revenue impact awareness</span>
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
                  <span className="text-gray-600 text-sm md:text-base"><strong className="text-gray-900">Predictive Detection:</strong> Catches surge patterns early</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 text-sm md:text-base"><strong className="text-gray-900">Historical Context:</strong> Learns from past incident patterns</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 text-sm md:text-base"><strong className="text-gray-900">Revenue-Aware:</strong> Calculates business impact in real time</span>
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Protect Your Revenue-Critical Moments</h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-10 max-w-2xl mx-auto">
            Don't let infrastructure failures destroy your marketing campaigns and conversion windows. 
            Experience intelligent reliability that thinks in business context, not just technical metrics.
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
              "RubixKube was the only thing watching when everyone else was looking elsewhere. 
              It didn't just save our campaign it gave us confidence that our infrastructure could handle anything marketing threw at it."
            </blockquote>
            <div className="text-gray-500 text-sm md:text-base mt-3">— Fleek Engineering Team</div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CaseStudyType3;