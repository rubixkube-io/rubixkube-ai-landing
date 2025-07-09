import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PrivacyPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#f7faff] to-white font-sans text-gray-800 relative overflow-hidden">

      <main className="flex-grow w-full py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
          {/* Page Title */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
            RubixKube™ Privacy & Data Usage Policy
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-muted-foreground mb-10">
            Effective Date: <span className="font-medium text-gray-800">25 June 2025</span>
          </p>

          {/* Intro Paragraph */}
          {/* <p className="text-base text-gray-700 mb-12 max-w-3xl leading-relaxed">
            At RubixKube™, we believe{" "}
            <span className="font-semibold text-blue-600">
              data privacy should be intuitive and secure
            </span>. This policy outlines how your data is collected, used, and protected across our platform.
          </p> */}

          {/* Sections */}
          <div className="space-y-14 text-base leading-relaxed max-w-5xl">
            {/* 1. Introduction */}
            <section>
              <h2 className="text-2xl font-semibold text-blue-900 mb-2">1. Introduction</h2>
              <p>
                This Privacy & Data Usage Policy applies to all users of RubixKube™ services,
                including our website, platform, APIs, and integrations. By using RubixKube™, 
                you agree to the practices described in this document.
              </p>
            </section>

            {/* 2. What Information We Collect */}
            <section>
              <h2 className="text-2xl font-semibold text-blue-900 mb-4">2. What Information We Collect</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div>
                  <h3 className="font-semibold text-blue-900">2.1 Personal Information</h3>
                  <ul className="list-disc ml-5 mt-2 text-muted-foreground">
                    <li>Name, email, job title</li>
                    <li>Organization name</li>
                    <li>Login credentials, preferences</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900">2.2 Usage & Technical Data</h3>
                  <ul className="list-disc ml-5 mt-2 text-muted-foreground">
                    <li>IP address, browser, OS</li>
                    <li>Pages visited, session time</li>
                    <li>Infra metadata (e.g., logs)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900">2.3 Third-Party Integrations</h3>
                  <ul className="list-disc ml-5 mt-2 text-muted-foreground">
                    <li>GitHub tokens</li>
                    <li>Prometheus, CI/CD events</li>
                    <li>System logs & telemetry</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 3. How We Use Your Data */}
            <section>
              <h2 className="text-2xl font-semibold text-blue-900 mb-4">3. How We Use Your Data</h2>
              <table className="w-full text-sm border border-gray-200 rounded-md overflow-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left px-4 py-2 border font-medium text-blue-900">Purpose</th>
                    <th className="text-left px-4 py-2 border font-medium text-blue-900">Description</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  {[
                    ["Service Delivery", "Operate and improve RubixKube™ functionality"],
                    ["Account Management", "Authenticate, notify, and support your usage"],
                    ["AI Operations", "Feed anonymized data to improve agent behavior"],
                    ["Security Monitoring", "Detect unauthorized access or misconfigurations"],
                    ["Analytics & Insights", "Product usage patterns to guide UX & features"],
                    ["Legal & Compliance", "Fulfill legal obligations and audits"],
                  ].map(([purpose, desc], i) => (
                    <tr key={i}>
                      <td className="px-4 py-2 border font-medium text-gray-700">{purpose}</td>
                      <td className="px-4 py-2 border">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>

            {/* 4. Legal Basis */}
            <section>
              <h2 className="text-2xl font-semibold text-blue-900 mb-2">4. Legal Basis for Processing</h2>
              <ul className="list-disc ml-6 mt-2 text-muted-foreground">
                <li>Consent (for optional cookies, marketing)</li>
                <li>Contract (for platform features)</li>
                <li>Legitimate Interest (security, product improvement)</li>
                <li>Legal Obligation (compliance and retention)</li>
              </ul>
            </section>

            {/* 5. Data Retention */}
            <section>
              <h2 className="text-2xl font-semibold text-blue-900 mb-2">5. Data Retention Policy</h2>
              <table className="w-full text-sm border border-gray-200 rounded-md overflow-hidden mt-4">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 border text-left font-medium text-blue-900">Data Type</th>
                    <th className="px-4 py-2 border text-left font-medium text-blue-900">Retention Period</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  {[
                    ["User account data", "Lifetime of account + 12 months"],
                    ["Logs & metrics", "90 days (default)"],
                    ["Billing records", "7 years (as per tax law)"],
                    ["Support tickets", "24 months"],
                  ].map(([type, period], i) => (
                    <tr key={i}>
                      <td className="px-4 py-2 border">{type}</td>
                      <td className="px-4 py-2 border">{period}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-2 text-muted-foreground">
                You may request deletion or anonymization of your data at any time, unless restricted by law.
              </p>
            </section>

            {/* 6. Subprocessors */}
            <section>
              <h2 className="text-2xl font-semibold text-blue-900 mb-2">6. Subprocessors & Third Parties</h2>
              <ul className="list-disc ml-6 mt-2 text-muted-foreground">
                <li>Infrastructure: AWS, GCP</li>
                <li>Analytics: Google Analytics, PostHog</li>
                <li>Payments: Stripe</li>
                <li>Comms: SendGrid, Slack</li>
                <li>AI Services: OpenAI (with masking & logs disabled)</li>
              </ul>
              <p className="mt-2">
                Live list at:{" "}
                <a href="https://rubixkube.ai/subprocessors" className="text-blue-600 underline" target="_blank" rel="noreferrer">
                  rubixkube.ai/subprocessors
                </a>
              </p>
            </section>

            {/* 7. Security */}
            <section>
              <h2 className="text-2xl font-semibold text-blue-900 mb-2">7. Security Practices</h2>
              <ul className="list-disc ml-6 mt-2 text-muted-foreground">
                <li>Encryption in transit and at rest</li>
                <li>Role-based access controls (RBAC)</li>
                <li>Agent-based audit trails</li>
                <li>Vulnerability scanning and monitoring</li>
                <li>Continuous monitoring of all access points</li>
              </ul>
            </section>

            {/* 8. Rights & Controls */}
            <section>
              <h2 className="text-2xl font-semibold text-blue-900 mb-2">8. Your Rights & Controls</h2>
              <ul className="list-disc ml-6 mt-2 text-muted-foreground">
                <li>Request access, correction, or deletion</li>
                <li>Object or restrict processing</li>
                <li>Export your data</li>
                <li>Withdraw consent</li>
              </ul>
              <p className="mt-2">
                Contact us:{" "}
                <a href="mailto:connect@rubixkube.ai" className="text-blue-600 underline">
                  connect@rubixkube.ai
                </a>
              </p>
            </section>

            {/* 9. Children's Privacy */}
            <section>
              <h2 className="text-2xl font-semibold text-blue-900 mb-2">9. Children's Privacy</h2>
              <p className="text-muted-foreground mt-2">
                RubixKube™ is not intended for individuals under 16. We do not knowingly collect data from children.
              </p>
            </section>

            {/* 10. International Transfers */}
            <section>
              <h2 className="text-2xl font-semibold text-blue-900 mb-2">10. International Transfers</h2>
              <p className="text-muted-foreground mt-2">
                Your data may be processed outside India. Protections are enforced via contracts or DPAs.
              </p>
            </section>

            {/* 11. Policy Changes */}
            <section>
              <h2 className="text-2xl font-semibold text-blue-900 mb-2">11. Changes to This Policy</h2>
              <p className="text-muted-foreground mt-2">
                We may update this periodically. Major updates will be communicated via email or banner.
                <br />
                <strong>Last updated:</strong> 25 June 2025
              </p>
            </section>

            {/* 12. Contact */}
            <section>
              <h2 className="text-2xl font-semibold text-blue-900 mb-2">12. Contact Us</h2>
              <p className="text-muted-foreground mt-2">
                For questions, email:{" "}
                <a href="mailto:connect@rubixkube.ai" className="text-blue-600 underline">
                  connect@rubixkube.ai
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
     
    </div>
  );
};

export default PrivacyPage;