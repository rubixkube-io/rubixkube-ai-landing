import { ArrowLeft, CheckCircle, AlertTriangle, Zap, Brain, Search, TrendingUp, CalendarCheck, Database, Activity, Shield, Lock, Eye, AlertCircle } from "lucide-react";
import { useState } from "react";
import { PopupModal } from "react-calendly";
import React from "react";

const CaseStudyType3 = () => {
  const [activeTimelineItem, setActiveTimelineItem] = useState(0);
  const [isBookDemoFormOpen, setIsBookDemoFormOpen] = useState(false);

  const scrollToSuccessStories = () => {
    window.location.href = '/#testimonials';
  };

  const timelineItems = [
    {
      icon: <Eye />,
      time: "09:42:17 - Detection Phase",
      title: "Observer Agent Detects Suspicious API Activity",
      description: "Observer Agent (On-Prem) identified unusual API access patterns from multiple IP addresses attempting to access user authentication endpoints. Detected 847 failed login attempts in 3 minutes with sophisticated credential stuffing patterns.",
      code: `{
  "anomaly": "security.credential-stuffing-attack",
  "failed_attempts": {
    "count": 847,
    "timeframe": "3_minutes",
    "unique_ips": 23,
    "success_rate": 0.12
  },
  "endpoints_targeted": [
    "/api/auth/login",
    "/api/user/profile",
    "/api/payment/methods"
  ],
  "risk_level": "CRITICAL"
}`,
      status: "SECURITY_BREACH pattern detected",
      statusType: "warning"
    },
    {
      icon: <Brain />,
      time: "09:42:31 - Analysis Phase",
      title: "Planner Agent Identifies Coordinated Attack",
      description: "Planner Agent (SaaS) analyzed attack vectors and identified a coordinated credential stuffing attack using compromised user databases. Predicted account takeover attempts targeting high-value customer accounts with 94.7% confidence.",
      metrics: [
        { label: "Attack Pattern:", value: "94.7% match with known credential stuffing", type: "warning" },
        { label: "Accounts at Risk:", value: "1,247 premium customer accounts", type: "warning" },
        { label: "Data Exposure Risk:", value: "Payment info + PII for 12K users", type: "warning" }
      ],
      status: "Coordinated attack targeting premium accounts",
      statusType: "warning"
    },
    {
      icon: <Shield />,
      time: "09:42:58 - Defense Phase",
      title: "Action Agent Deploys Security Countermeasures",
      description: "Action Agent (On-Prem) immediately deployed multi-layered security response: IP blocking, rate limiting, temporary account locks for targeted users, and enhanced MFA requirements. All defensive measures activated within 27 seconds.",
      code: `# Automated Security Response Deployed
# IP Blocking & Rate Limiting
iptables -A INPUT -s 185.220.101.0/24 -j DROP
nginx rate_limit burst=5 nodelay;

# Account Protection
UPDATE users SET temp_lock=true 
WHERE last_login_attempt > NOW() - INTERVAL 5 MINUTE;

# Enhanced Security
ENABLE mandatory_2fa FOR premium_accounts;
ACTIVATE geo_blocking FOR suspicious_regions;

# Real-time Monitoring
DEPLOY honeypot_endpoints;
INCREASE log_level TO debug;
# Deployed in 27 seconds`,
      status: "Multi-layer security defense activated",
      statusType: "info"
    },
    {
      icon: <Lock />,
      time: "09:43:45 - Containment Verified",
      title: "Threat Neutralized & Security Hardened",
      description: "Memory Agent (SaaS) confirmed attack neutralization and implemented adaptive security policies. Zero successful account compromises achieved, and security posture strengthened with dynamic threat intelligence.",
      metrics: [
        { label: "🛡️ Attack Blocked", value: "0 successful account compromises", type: "success" },
        { label: "🔒 Accounts Protected", value: "1,247 premium accounts secured", type: "success" },
        { label: "📊 Security Enhanced", value: "Dynamic threat rules deployed", type: "info" }
      ],
      status: "Security breach prevented, threat intelligence updated",
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
                How We Stopped a <span className="text-red-600">Credential Stuffing Attack</span> in 88 Seconds
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                A sophisticated credential stuffing attack targeting premium customer accounts, showcasing RubixKube's AI preventing 
                account takeovers and protecting sensitive customer data. 1,247 premium accounts secured with zero successful compromises 
                during a coordinated security breach attempt.
              </p>
              <div className="bg-red-50 p-4 md:p-5 rounded-xl border-l-4 border-red-600">
                <strong className="text-red-800">The Threat:</strong>
                <span className="text-gray-700"> Coordinated credential stuffing attack targeting high-value customer accounts and payment information</span>
              </div>
            </div>
            <div className="bg-gray-50 p-6 md:p-10 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-red-100/30 to-transparent rounded-2xl"></div>
              <div className="grid grid-cols-2 gap-4 md:gap-6 relative z-10">
                <div className="bg-white p-4 md:p-6 rounded-xl border-2 border-gray-200 hover:border-red-600 hover:shadow-lg transition-all text-center">
                  <div className="text-2xl md:text-3xl font-bold text-red-600 mb-2">88s</div>
                  <div className="text-gray-600 font-medium text-sm md:text-base">Threat Neutralized</div>
                </div>
                <div className="bg-white p-4 md:p-6 rounded-xl border-2 border-gray-200 hover:border-red-600 hover:shadow-lg transition-all text-center">
                  <div className="text-2xl md:text-3xl font-bold text-red-600 mb-2">1,247</div>
                  <div className="text-gray-600 font-medium text-sm md:text-base">Accounts Protected</div>
                </div>
                <div className="bg-white p-4 md:p-6 rounded-xl border-2 border-gray-200 hover:border-red-600 hover:shadow-lg transition-all text-center">
                  <div className="text-2xl md:text-3xl font-bold text-red-600 mb-2">0</div>
                  <div className="text-gray-600 font-medium text-sm md:text-base">Compromises</div>
                </div>
                <div className="bg-white p-4 md:p-6 rounded-xl border-2 border-gray-200 hover:border-red-600 hover:shadow-lg transition-all text-center">
                  <div className="text-2xl md:text-3xl font-bold text-red-600 mb-2">847</div>
                  <div className="text-gray-600 font-medium text-sm md:text-base">Attacks Blocked</div>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">🎯 The Coordinated Security Breach</h2>
          <p className="text-lg md:text-xl text-gray-600 text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            A sophisticated credential stuffing attack that could have compromised thousands of customer accounts
          </p>

          <div className="bg-white border-2 border-red-200 rounded-2xl p-6 md:p-10 relative">
            <div className="absolute -top-4 left-4 md:left-8 bg-red-600 text-white px-3 md:px-5 py-2 rounded-full font-semibold text-xs md:text-sm">
              🚨 SECURITY THREAT
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-red-600 mb-4 mt-2">Wednesday 9:42 AM - Coordinated Attack Launch</h3>
            <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
              A coordinated credential stuffing attack was launched against the platform using compromised user credentials 
              from external data breaches. The attackers specifically targeted premium customer accounts with high-value 
              payment information, attempting to gain unauthorized access through sophisticated automated tools across 
              multiple IP addresses and geographic locations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div className="bg-red-50 p-4 md:p-5 rounded-xl border-l-4 border-red-600">
                <strong className="text-red-600 text-base md:text-lg block mb-2">Attack Scale</strong>
                <p className="text-gray-600 text-sm md:text-base">847 attempts from 23 unique IPs</p>
              </div>
              <div className="bg-red-50 p-4 md:p-5 rounded-xl border-l-4 border-red-600">
                <strong className="text-red-600 text-base md:text-lg block mb-2">Targets</strong>
                <p className="text-gray-600 text-sm md:text-base">Premium accounts with payment data</p>
              </div>
              <div className="bg-red-50 p-4 md:p-5 rounded-xl border-l-4 border-red-600">
                <strong className="text-red-600 text-base md:text-lg block mb-2">Risk Level</strong>
                <p className="text-gray-600 text-sm md:text-base">Critical - Account takeover imminent</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="success-stories" className="py-12 md:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">⏱️ 88 Seconds to Threat Neutralization</h2>
          <p className="text-lg md:text-xl text-gray-600 text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            Watch how RubixKube's AI agents detected, analyzed, and neutralized the security threat autonomously
          </p>

          <div className="relative">
            {/* Desktop timeline line - shifted to left */}
            <div className="absolute left-10 w-1 h-full bg-gray-200 hidden md:block"></div>
            
            {/* Mobile timeline line */}
            <div className="absolute left-8 top-0 w-0.5 h-full bg-gray-200 md:hidden"></div>
            
            {timelineItems.map((item, index) => (
              <div key={index} className={`relative mb-16 ${index % 2 === 1 ? 'md:flex md:flex-row-reverse' : 'md:flex'}`}>
                {/* Desktop Timeline badge - positioned on left */}
                <div className="absolute left-2 md:left-2 w-16 h-16 md:w-20 md:h-20 bg-red-600 border-4 border-white rounded-full flex items-center justify-center text-white shadow-lg z-10 hidden md:flex">
                  <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center">
                    {React.cloneElement(item.icon, { className: "w-full h-full" })}
                  </div>
                </div>
                
                {/* Mobile Timeline badge */}
                <div className="absolute left-0 w-16 h-16 bg-red-600 border-4 border-white rounded-full flex items-center justify-center text-white shadow-lg z-10 md:hidden">
                  <div className="w-6 h-6 flex items-center justify-center">
                    {React.cloneElement(item.icon, { className: "w-full h-full" })}
                  </div>
                </div>
                
                {/* Content */}
                <div className={`flex-1 ml-24 md:ml-32 ${index % 2 === 1 ? 'md:mr-0' : 'md:ml-32'} bg-white p-6 md:p-8 rounded-2xl border-2 border-gray-200 hover:border-red-600 hover:shadow-xl transition-all`}>
                  <div className="inline-block bg-red-100 text-red-800 px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-semibold mb-3">
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
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">🏗️ Security-First Architecture</h2>
          <p className="text-lg md:text-xl text-gray-600 text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            AI agents specifically designed for threat detection, analysis, and autonomous security response
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <div className="bg-white p-6 md:p-10 rounded-2xl border-2 border-gray-200 hover:border-red-600 hover:shadow-xl transition-all">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-red-600 text-white rounded-xl flex items-center justify-center text-lg md:text-2xl">🧠</div>
                Threat Intelligence Hub
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base"><strong>Memory Agent:</strong> Global threat pattern recognition and analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base"><strong>Planner Agent:</strong> Attack vector analysis and response planning</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base"><strong>Behavioral Analytics:</strong> User behavior anomaly detection</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base"><strong>Threat Modeling:</strong> Predictive security risk assessment</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 md:p-10 rounded-2xl border-2 border-gray-200 hover:border-red-600 hover:shadow-xl transition-all">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-red-600 text-white rounded-xl flex items-center justify-center text-lg md:text-2xl">🛡️</div>
                Autonomous Defense System
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base"><strong>Observer Agent:</strong> Real-time security monitoring and threat detection</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base"><strong>Action Agent:</strong> Automated threat response and mitigation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base"><strong>Dynamic Blocking:</strong> Intelligent IP and geo-location filtering</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base"><strong>Adaptive Security:</strong> ML-driven security policy updates</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}

      {/* Results */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-red-50 to-red-100 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">Security Response Metrics</h2>
          <p className="text-lg md:text-xl text-gray-600 text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            Measurable impact from autonomous threat detection and response
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="bg-white p-4 md:p-8 rounded-2xl text-center border-2 border-gray-200 hover:border-red-600 hover:shadow-xl transition-all">
              <div className="text-2xl md:text-4xl font-bold text-red-600 mb-2">1,247</div>
              <div className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Accounts Secured</div>
              <div className="text-xs md:text-sm text-gray-600">Premium customers protected</div>
            </div>
            <div className="bg-white p-4 md:p-8 rounded-2xl text-center border-2 border-gray-200 hover:border-red-600 hover:shadow-xl transition-all">
              <div className="text-2xl md:text-4xl font-bold text-red-600 mb-2">88s</div>
              <div className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Response Time</div>
              <div className="text-xs md:text-sm text-gray-600">Detection to neutralization</div>
            </div>
            <div className="bg-white p-4 md:p-8 rounded-2xl text-center border-2 border-gray-200 hover:border-red-600 hover:shadow-xl transition-all">
              <div className="text-2xl md:text-4xl font-bold text-red-600 mb-2">100%</div>
              <div className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Attack Prevention</div>
              <div className="text-xs md:text-sm text-gray-600">Zero successful compromises</div>
            </div>
            <div className="bg-white p-4 md:p-8 rounded-2xl text-center border-2 border-gray-200 hover:border-red-600 hover:shadow-xl transition-all">
              <div className="text-2xl md:text-4xl font-bold text-red-600 mb-2">23</div>
              <div className="font-semibold text-gray-900 mb-2 text-sm md:text-base">IPs Blocked</div>
              <div className="text-xs md:text-sm text-gray-600">Malicious sources neutralized</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 px-6 text-center bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to Strengthen Your Security Posture?</h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-10 max-w-2xl mx-auto">
            See how RubixKube can protect your infrastructure from security threats with autonomous threat detection and response. 
            Schedule a demo to explore our security intelligence capabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <button 
              className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:shadow-lg transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
              onClick={() => setIsBookDemoFormOpen(true)}
            >
              <CalendarCheck className="h-4 w-4" />
              Book a Security Demo
            </button>
            <button 
              className="border-2 border-red-600 text-red-600 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-red-50 transition-all"
              onClick={scrollToSuccessStories}
            >
              View More Security Cases
            </button>
          </div>
        </div>
      </section>

      {/* Learning Callout
      <section className="py-12 md:py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-2 border-red-600 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-red-800 mb-4 flex items-center gap-3">
              💡 Key Security Insight
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Modern credential stuffing attacks are highly sophisticated, using compromised credentials from multiple data breaches 
              and rotating through distributed IP addresses to avoid detection. Traditional security tools often generate alerts 
              only after successful compromises occur, requiring manual incident response that can take hours or days. RubixKube's 
              AI agents provide real-time behavioral analysis and autonomous threat response, stopping attacks before any accounts 
              are compromised. This proactive approach to cybersecurity is essential for protecting customer data and maintaining 
              trust in today's threat landscape.
            </p>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default CaseStudyType3;