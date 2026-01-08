import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GDPR = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
          Data Protection Policy
        </h1>
        <p className="text-foreground/60 mb-8">Last Updated: Nov 14, 2025</p>
        
        <div className="prose prose-invert max-w-none space-y-8 text-foreground/80">
          <p>
            NeuroAds ("we," "our," "us") is committed to protecting the personal data of our clients, leads, and partners. This policy explains how we collect, use, store, and protect personal information in accordance with applicable law and basic GDPR principles for EU/UK users.
          </p>
          
          <p>
            For all data matters, contact:<br />
            <strong>Email:</strong> founder@neuroads.agency
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">1. Purpose of This Policy</h2>
          <p>This policy ensures that NeuroAds:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Handles personal data responsibly</li>
            <li>Protects individuals' rights</li>
            <li>Stores and processes data securely</li>
            <li>Maintains transparency about how data is used</li>
            <li>Follows GDPR principles when handling data from EU/UK users</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mt-8">2. What Personal Data We Collect</h2>
          <p>We may collect:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Name</li>
            <li>Email address</li>
            <li>Business information</li>
            <li>Communications and messages you send us</li>
            <li>Booking details (via Calendly)</li>
            <li>Payment information (processed by Stripe/Razorpay/PayU)</li>
            <li>Basic device/browser information (IP, logs, cookies)</li>
          </ul>
          <p>
            We do <strong>not</strong> store credit card details.<br />
            All payment data is handled by secure third-party processors.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">3. How We Use Personal Data</h2>
          <p>We use personal data to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Respond to inquiries</li>
            <li>Deliver services</li>
            <li>Communicate about projects, updates, and resources</li>
            <li>Manage billing</li>
            <li>Improve our website and service quality</li>
            <li>Maintain internal records</li>
          </ul>
          <p>We process personal data only when:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>You consent</li>
            <li>It is necessary to perform a contract</li>
            <li>It serves our legitimate business interest (e.g., communication, lead follow-up)</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mt-8">4. GDPR Principles (for EU/UK users)</h2>
          <p>When serving EU/UK individuals, we follow these core GDPR principles:</p>
          <p>Personal data must be:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Processed fairly and lawfully</li>
            <li>Collected for clear purposes</li>
            <li>Adequate and limited to what is necessary</li>
            <li>Accurate and kept up to date</li>
            <li>Retained only as long as required</li>
            <li>Processed securely</li>
            <li>Not transferred outside the EEA without appropriate safeguards</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mt-8">5. Lawful Basis for Processing</h2>
          <p>We process data under one or more of the following lawful bases:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Consent (e.g., newsletter opt-in)</li>
            <li>Contract (e.g., delivering paid services)</li>
            <li>Legitimate interests (e.g., responding to business inquiries)</li>
            <li>Legal obligations (e.g., invoices and tax records)</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mt-8">6. Data Storage & Security</h2>
          <p>We store data in:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Gmail / Google Workspace</li>
            <li>Calendly</li>
            <li>Stripe / Razorpay / PayU</li>
            <li>Internal tools used for service delivery</li>
          </ul>
          <p>We use reasonable organizational and technical measures to protect data, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access controls</li>
            <li>Encrypted systems (where tools support it)</li>
            <li>Secure storage of client materials</li>
          </ul>
          <p>No system is 100% secure, but we minimize risk with standard industry practices.</p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">7. Data Retention</h2>
          <p>
            We keep data indefinitely unless you request deletion.<br />
            If you request deletion, we will comply <strong>subject to system limitations</strong> and legal requirements.
          </p>
          <p>Invoices and financial records are retained as required by law.</p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">8. Data Sharing</h2>
          <p>We share data only with:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Tools used to operate the business (e.g., Calendly, email, payment processors)</li>
            <li>Contractors or partners working on a project (only when necessary)</li>
          </ul>
          <p>We do <strong>not</strong> sell personal data.</p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">9. International Data Transfers</h2>
          <p>
            If you are located outside India (including EU/UK), your data may be transferred to India for processing.<br />
            By interacting with us, you consent to this transfer.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">10. Your Rights (EU/UK Users)</h2>
          <p>You may request:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access to your data</li>
            <li>Correction of your data</li>
            <li>Deletion of your data</li>
            <li>Limitation or objection to processing</li>
            <li>Data portability</li>
            <li>Withdrawal of consent</li>
          </ul>
          <p>
            To exercise these rights:<br />
            <strong>Email:</strong> founder@neuroads.agency
          </p>
          <p>We will respond in a reasonable timeframe.</p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">11. Changes to This Policy</h2>
          <p>
            We may update this policy periodically.<br />
            The latest version will always be posted on this page.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GDPR;
