import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PrivacyPage = () => {
  return (
    <div className="flex flex-col min-h-screen text-gray-800">
      <Header />

      {/* Spacer between Header and Page Content */}
      <div className="h-10" />

      <main className="flex-grow max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-2 text-blue-900">RubixKube™ Privacy & Data Usage Policy</h1>
        <p className="text-sm text-gray-500 mb-8">Effective Date: 25 June 2025</p>

        <div className="space-y-10">
           <section>
            <h2 className="text-xl font-semibold text-blue-900 border-b pb-1 border-gray-300">1. Introduction</h2>
            <p className="mt-2">
              This Privacy & Data Usage Policy applies to all users of RubixKube™ services,
              including our website, platform, APIs, and integrations. By using RubixKube™,
              you agree to the practices described in this document.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-900 border-b pb-1 border-gray-300">2. What Information We Collect</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 text-sm">
              <div>
                <h3 className="font-semibold text-blue-900">2.1 Personal Information</h3>
                <ul className="list-disc ml-5 mt-1">
                  <li>Name, email, job title</li>
                  <li>Organization name</li>
                  <li>Login credentials, preferences</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-blue-900">2.2 Usage & Technical Data</h3>
                <ul className="list-disc ml-5 mt-1">
                  <li>IP address, browser, OS</li>
                  <li>Pages visited, session time</li>
                  <li>Infra metadata (e.g., logs)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-blue-900">2.3 Third-Party Integrations</h3>
                <ul className="list-disc ml-5 mt-1">
                  <li>GitHub tokens</li>
                  <li>Prometheus, CI/CD events</li>
                  <li>System logs & telemetry</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-900 border-b pb-1 border-gray-300">3. How We Use Your Data</h2>
            <table className="w-full mt-4 text-sm border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-4 py-2 text-left">Purpose</th>
                  <th className="border px-4 py-2 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Service Delivery", "Operate and improve RubixKube™ functionality"],
                  ["Account Management", "Authenticate, notify, and support your usage"],
                  ["AI Operations", "Feed anonymized data to improve agent behavior"],
                  ["Security Monitoring", "Detect unauthorized access or misconfigurations"],
                  ["Analytics & Insights", "Product usage patterns to guide UX & features"],
                  ["Legal & Compliance", "Fulfill legal obligations and audits"],
                ].map(([purpose, desc], i) => (
                  <tr key={i} className="border-t">
                    <td className="border px-4 py-2 font-medium text-blue-900">{purpose}</td>
                    <td className="border px-4 py-2">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-900 border-b pb-1 border-gray-300">4. Legal Basis for Processing</h2>
            <ul className="list-disc ml-6 mt-2">
              <li>Consent (for optional cookies, marketing)</li>
              <li>Contract (for platform features)</li>
              <li>Legitimate Interest (security, product improvement)</li>
              <li>Legal Obligation (compliance and retention)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-900 border-b pb-1 border-gray-300">5. Data Retention Policy</h2>
            <table className="w-full mt-4 text-sm border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-4 py-2">Data Type</th>
                  <th className="border px-4 py-2">Retention Period</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["User account data", "Lifetime of account + 12 mo"],
                  ["Logs & metrics", "90 days (default)"],
                  ["Billing records", "7 years (as per tax law)"],
                  ["Support tickets", "24 months"],
                ].map(([type, period], i) => (
                  <tr key={i}>
                    <td className="border px-4 py-2">{type}</td>
                    <td className="border px-4 py-2">{period}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-2">
              You may request deletion or anonymization of your data at any time, unless restricted by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-900 border-b pb-1 border-gray-300">6. Subprocessors & Third Parties</h2>
            <ul className="list-disc ml-6 mt-2">
              <li>Infrastructure: AWS, GCP</li>
              <li>Analytics: Google Analytics, PostHog</li>
              <li>Payments: Stripe</li>
              <li>Comms: SendGrid, Slack</li>
              <li>AI services: OpenAI (with masking & logs disabled)</li>
            </ul>
            <p className="mt-2">
              A live list is maintained at: <a className="text-blue-600 underline" href="https://rubixkube.ai/subprocessors">rubixkube.ai/subprocessors</a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-900 border-b pb-1 border-gray-300">7. Security Practices</h2>
            <ul className="list-disc ml-6 mt-2">
              <li>Encryption in transit and at rest</li>
              <li>Role-based access controls (RBAC)</li>
              <li>Agent-based audit trails</li>
              <li>Periodic vulnerability scanning</li>
              <li>Continuous monitoring of all access points</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-900 border-b pb-1 border-gray-300">8. Your Rights & Controls</h2>
            <ul className="list-disc ml-6 mt-2">
              <li>Request access, correction, or deletion</li>
              <li>Object or restrict processing</li>
              <li>Export your data</li>
              <li>Withdraw consent</li>
            </ul>
            <p className="mt-2">
              Contact us at: <a className="text-blue-600 underline" href="mailto:connect@rubixkube.ai">connect@rubixkube.ai</a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-900 border-b pb-1 border-gray-300">9. Children’s Privacy</h2>
            <p className="mt-2">RubixKube™ is not intended for individuals under 16. We do not knowingly collect data from children.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-900 border-b pb-1 border-gray-300">10. International Transfers</h2>
            <p className="mt-2">
              If you're accessing RubixKube™ outside India, your data may be transferred and stored in countries with different privacy laws. We ensure protections via contracts or DPAs.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-900 border-b pb-1 border-gray-300">11. Changes to This Policy</h2>
            <p className="mt-2">
              We may update this policy periodically. You'll be notified via email or platform banners for major changes.
              <br />
              <strong>Last updated:</strong> 25 June 2025
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-900 border-b pb-1 border-gray-300">12. Contact Us</h2>
            <p className="mt-2">
              For questions or concerns, contact: <a className="text-blue-600 underline" href="mailto:connect@rubixkube.ai">connect@rubixkube.ai</a>
            </p>
          </section>
        </div>
      </main>

      <div id="footer">
        <Footer />
      </div>
    </div>
  );
};

export default PrivacyPage;
