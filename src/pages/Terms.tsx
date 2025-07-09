import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Terms = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#f7faff] to-white font-sans text-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
      <Header />

      <main className="flex-grow w-full py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
            RubixKube™ Terms of Use
          </h1>
          <p className="text-lg text-muted-foreground mb-10">
            Effective Date: <span className="font-medium text-gray-800">25 June 2025</span>
          </p>

          <div className="space-y-12 text-base leading-relaxed max-w-5xl">
            <Section title="1. Eligibility">
              To use RubixKube™, you must be at least 16 years of age and have the authority to enter into binding agreements. 
              If you're using RubixKube on behalf of an organization, you represent that you have the necessary permissions to bind that organization to these Terms.
            </Section>

            <Section title="2. Use of the Services">
              You agree to use RubixKube™ only for lawful purposes. You will not:
              <ul className="list-disc pl-6 mt-2 text-muted-foreground space-y-1">
                <li>Disrupt or interfere with the performance of the Services</li>
                <li>Reverse engineer or attempt to extract the source code</li>
                <li>Use Services to build competing products</li>
                <li>Misuse API access or tokens</li>
                <li>Submit harmful or misleading content</li>
              </ul>
            </Section>

            <Section title="3. Your Data & Responsibilities">
              You retain ownership of your data. We process it according to our Privacy Policy.
              <ul className="list-disc pl-6 mt-2 text-muted-foreground space-y-1">
                <li>Keep your credentials secure</li>
                <li>Ensure compliance of integrated tools (e.g., GitHub, Prometheus)</li>
                <li>Backup critical data</li>
              </ul>
            </Section>

            <Section title="4. Subscription, Billing & Payment">
              All paid Services are billed per our pricing terms. Charges are non-refundable unless required by law. Pricing may be updated with prior notice.
            </Section>

            <Section title="5. Intellectual Property">
              RubixKube™ and all platform content are the exclusive IP of SLOW RABBIT DESIGNS PRIVATE LIMITED.
              <ul className="list-disc pl-6 mt-2 text-muted-foreground space-y-1">
                <li>Do not use trademarks like "RubixKube™", "Agent Mesh" without permission</li>
                <li>Do not copy or distribute platform content without approval</li>
              </ul>
            </Section>

            <Section title="6. Feedback & Contributions">
              Any feedback or contributions you provide (e.g., bug reports, suggestions) grant RubixKube™ a royalty-free, perpetual right to use them to improve the product.
            </Section>

            <Section title="7. Service Availability">
              Services are provided "as-is" and "as-available". We are not liable for downtimes due to maintenance, third-party issues, or upgrades.
            </Section>

            <Section title="8. Termination">
              We may suspend or terminate access for violation of Terms or system integrity threats.
              <ul className="list-disc pl-6 mt-2 text-muted-foreground space-y-1">
                <li>Access will be revoked</li>
                <li>Data may be deleted or retained based on policy</li>
                <li>All RubixKube IP/materials must be discontinued</li>
              </ul>
            </Section>

            <Section title="9. Disclaimers">
              RubixKube™ supports infrastructure management, not a replacement for human oversight. 
              No warranties are expressed or implied, including merchantability or fitness for a particular purpose.
            </Section>

            <Section title="10. Limitation of Liability">
              We are not liable for indirect, incidental, or consequential damages including business interruption, lost profits, or data loss — even if advised of potential issues.
            </Section>

            <Section title="11. Governing Law & Jurisdiction">
              These Terms are governed by Indian law. Disputes will be resolved exclusively in Bengaluru, Karnataka.
            </Section>

            <Section title="12. Updates to These Terms">
              We may update these Terms. Major changes will be announced via email or banners. Continued use indicates acceptance of updates.
            </Section>

            <Section title="13. Contact">
             <p className="text-muted-foreground mt-2">
                For questions, email:{" "}
                <a href="mailto:connect@rubixkube.ai" className="text-blue-600 underline">
                  connect@rubixkube.ai
                </a>
              </p>
            </Section>
          </div>
        </div>
      </main>
      
    </div>
  );
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section>
    <h2 className="text-2xl font-semibold text-blue-900 mb-2">{title}</h2>
    <div className="text-muted-foreground">{children}</div>
  </section>
);

export default Terms;