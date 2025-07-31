import { ArrowLeft, CheckCircle, AlertTriangle, Zap, Brain, Search, TrendingUp, CalendarCheck, Database, Activity, Shield } from "lucide-react";
import { useState } from "react";
import { PopupModal } from "react-calendly";
import React from "react";

const CaseStudyType2 = () => {
  const [activeTimelineItem, setActiveTimelineItem] = useState(0);
  const [isBookDemoFormOpen, setIsBookDemoFormOpen] = useState(false);

  const scrollToSuccessStories = () => {
    window.location.href = '/#testimonials';
  };

  const timelineItems = [
    {
      icon: <Search />,
      time: "14:23:11 - Detection Phase",
      title: "Observer Agent Detects Query Performance Drift",
      description: "Observer Agent (On-Prem) identified unusual query execution patterns in PostgreSQL database. Query response times were degrading slowly but consistently, indicating potential index fragmentation or memory pressure issues.",
      code: `{
  "anomaly": "postgresql.query-performance-drift",
  "avg_response_time": {
    "before": 120,
    "after": 890,
    "change": +641.7
  },
  "connection_pool": {
    "active_connections": 85,
    "max_connections": 100,
    "utilization": "85%"
  }
}`,
      status: "DATABASE_PERFORMANCE pattern detected",
      statusType: "warning"
    },
    {
      icon: <Brain />,
      time: "14:23:18 - Analysis Phase",
      title: "Planner Agent Identifies Memory Leak Pattern",
      description: "Planner Agent (SaaS) cross-referenced with historical database incidents and found 91.3% confidence match with memory leak pattern. Predicted complete service degradation within 20 minutes without intervention.",
      metrics: [
        { label: "Pattern Match:", value: "91.3% confidence with July 2024 incident", type: "info" },
        { label: "Business Risk:", value: "₹2.8Cr order processing at risk", type: "warning" }
      ],
      status: "Root cause: Connection pool exhaustion + memory leak",
      statusType: "info"
    },
    {
      icon: <Zap />,
      time: "14:23:32 - Action Phase",
      title: "Action Agent Executes Remediation",
      description: "Action Agent (On-Prem) executed multi-step remediation: connection pool restart, query optimization deployment, and memory garbage collection. All actions completed through automated runbooks.",
      code: `# Automated Database Recovery Applied
kubectl scale deployment api-service --replicas=6
# Connection Pool Reset
pg_bouncer reload
# Query Optimization
REINDEX INDEX CONCURRENTLY user_orders_idx;
ANALYZE user_orders;
# Memory Management
SELECT pg_stat_reset();
VACUUM (ANALYZE, VERBOSE) user_orders;
# Deployed in 45 seconds`,
      status: "Database optimization completed automatically",
      statusType: "success"
    },
    {
      icon: <TrendingUp />,
      time: "14:24:21 - Recovery Verified",
      title: "Performance Restoration & Learning",
      description: "Memory Agent (SaaS) confirmed full performance restoration and updated incident patterns. Proactive scaling rules adjusted to prevent similar issues in future peak loads.",
      metrics: [
        { label: "✅ DBA Slack", value: "Auto-resolved with performance report", type: "success" },
        { label: "📊 Grafana", value: "Dashboards updated with new baselines", type: "info" }
      ],
      status: "Performance pattern learned and optimized",
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
                How We Prevented a <span className="text-blue-600">Database Crash</span> in 70 Seconds
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                A critical database performance issue showing RubixKube's AI preventing a complete service outage during peak business hours, 
                protecting ₹2.8Cr worth of order processing and maintaining customer experience. Autonomous database optimization in action.
              </p>
              <div className="bg-blue-50 p-4 md:p-5 rounded-xl border-l-4 border-blue-600">
                <strong className="text-blue-800">The Challenge:</strong>
                <span className="text-gray-700"> Progressive database performance degradation threatening complete service failure during peak traffic</span>
              </div>
            </div>
            <div className="bg-gray-50 p-6 md:p-10 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-100/30 to-transparent rounded-2xl"></div>
              <div className="grid grid-cols-2 gap-4 md:gap-6 relative z-10">
                <div className="bg-white p-4 md:p-6 rounded-xl border-2 border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all text-center">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">70s</div>
                  <div className="text-gray-600 font-medium text-sm md:text-base">Resolution Time</div>
                </div>
                <div className="bg-white p-4 md:p-6 rounded-xl border-2 border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all text-center">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">₹2.8Cr</div>
                  <div className="text-gray-600 font-medium text-sm md:text-base">Orders Saved</div>
                </div>
                <div className="bg-white p-4 md:p-6 rounded-xl border-2 border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all text-center">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">100%</div>
                  <div className="text-gray-600 font-medium text-sm md:text-base">Uptime Maintained</div>
                </div>
                <div className="bg-white p-4 md:p-6 rounded-xl border-2 border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all text-center">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">0</div>
                  <div className="text-gray-600 font-medium text-sm md:text-base">Customer Impact</div>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">🎯 The Peak Hour Performance Crisis</h2>
          <p className="text-lg md:text-xl text-gray-600 text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            A silent database degradation that could have brought down the entire e-commerce platform
          </p>

          <div className="bg-white border-2 border-blue-200 rounded-2xl p-6 md:p-10 relative">
            <div className="absolute -top-4 left-4 md:left-8 bg-blue-600 text-white px-3 md:px-5 py-2 rounded-full font-semibold text-xs md:text-sm">
              🚨 PERFORMANCE CRISIS
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-blue-600 mb-4 mt-2">Tuesday 2:23 PM - Peak Shopping Hours</h3>
            <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
              During peak business hours with thousands of concurrent users placing orders, the PostgreSQL database began 
              experiencing progressive performance degradation. What started as slightly slower queries was rapidly escalating 
              toward complete database failure that would have crashed the entire e-commerce platform.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div className="bg-blue-50 p-4 md:p-5 rounded-xl border-l-4 border-blue-600">
                <strong className="text-blue-600 text-base md:text-lg block mb-2">Query Response Time</strong>
                <p className="text-gray-600 text-sm md:text-base">120ms → 890ms (641% increase)</p>
              </div>
              <div className="bg-blue-50 p-4 md:p-5 rounded-xl border-l-4 border-blue-600">
                <strong className="text-blue-600 text-base md:text-lg block mb-2">Connection Pool</strong>
                <p className="text-gray-600 text-sm md:text-base">85/100 connections (85% utilized)</p>
              </div>
              <div className="bg-blue-50 p-4 md:p-5 rounded-xl border-l-4 border-blue-600">
                <strong className="text-blue-600 text-base md:text-lg block mb-2">Risk Assessment</strong>
                <p className="text-gray-600 text-sm md:text-base">Complete service failure in 20 minutes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="success-stories" className="py-12 md:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">⏱️ 70 Seconds to Database Recovery</h2>
          <p className="text-lg md:text-xl text-gray-600 text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            Watch how RubixKube's AI agents collaborated to detect, analyze, and resolve the database crisis autonomously
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
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">🏗️ Database-Optimized Architecture</h2>
          <p className="text-lg md:text-xl text-gray-600 text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            AI agents specifically designed for database performance monitoring and autonomous optimization
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <div className="bg-white p-6 md:p-10 rounded-2xl border-2 border-gray-200 hover:border-blue-600 hover:shadow-xl transition-all">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-lg md:text-2xl">☁️</div>
                Global Performance Intelligence
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base"><strong>Memory Agent:</strong> Cross-database performance pattern recognition</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base"><strong>Planner Agent:</strong> Query optimization and resource planning</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base"><strong>Performance Analytics:</strong> Real-time database metrics analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base"><strong>Predictive Modeling:</strong> Performance degradation forecasting</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 md:p-10 rounded-2xl border-2 border-gray-200 hover:border-blue-600 hover:shadow-xl transition-all">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-lg md:text-2xl">🔧</div>
                Autonomous Optimization
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base"><strong>Observer Agent:</strong> Real-time database performance monitoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base"><strong>Action Agent:</strong> Automated query and resource optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base"><strong>Zero-Downtime Recovery:</strong> Seamless performance restoration</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base"><strong>Smart Scaling:</strong> Dynamic resource allocation and tuning</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}

      {/* Results */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-blue-50 to-blue-100 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">Performance Recovery Metrics</h2>
          <p className="text-lg md:text-xl text-gray-600 text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            Measurable impact from autonomous database optimization
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="bg-white p-4 md:p-8 rounded-2xl text-center border-2 border-gray-200 hover:border-blue-600 hover:shadow-xl transition-all">
              <div className="text-2xl md:text-4xl font-bold text-blue-600 mb-2">₹2.8Cr</div>
              <div className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Orders Protected</div>
              <div className="text-xs md:text-sm text-gray-600">Revenue safeguarded</div>
            </div>
            <div className="bg-white p-4 md:p-8 rounded-2xl text-center border-2 border-gray-200 hover:border-blue-600 hover:shadow-xl transition-all">
              <div className="text-2xl md:text-4xl font-bold text-blue-600 mb-2">70s</div>
              <div className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Recovery Time</div>
              <div className="text-xs md:text-sm text-gray-600">From detection to optimization</div>
            </div>
            <div className="bg-white p-4 md:p-8 rounded-2xl text-center border-2 border-gray-200 hover:border-blue-600 hover:shadow-xl transition-all">
              <div className="text-2xl md:text-4xl font-bold text-blue-600 mb-2">86%</div>
              <div className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Performance Boost</div>
              <div className="text-xs md:text-sm text-gray-600">Query response improvement</div>
            </div>
            <div className="bg-white p-4 md:p-8 rounded-2xl text-center border-2 border-gray-200 hover:border-blue-600 hover:shadow-xl transition-all">
              <div className="text-2xl md:text-4xl font-bold text-blue-600 mb-2">0</div>
              <div className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Downtime</div>
              <div className="text-xs md:text-sm text-gray-600">Zero service interruption</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 px-6 text-center bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to Optimize Your Database Performance?</h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-10 max-w-2xl mx-auto">
            See how RubixKube can protect your database infrastructure from performance issues with autonomous optimization. 
            Schedule a demo to explore our database intelligence capabilities.
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
              Database performance issues often develop gradually and can escalate rapidly during peak load periods. 
              Traditional monitoring tools generate alerts after performance has already degraded significantly, requiring 
              manual diagnosis and intervention that can take hours. RubixKube's AI agents provide predictive performance 
              monitoring and autonomous optimization, preventing service degradation before it impacts customers. This 
              proactive approach to database management is essential for maintaining high-availability services in modern applications.
            </p>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default CaseStudyType2;