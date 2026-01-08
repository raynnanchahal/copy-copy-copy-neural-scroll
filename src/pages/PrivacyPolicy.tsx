import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
          Privacy Policy
        </h1>
        <p className="text-foreground/60 mb-8">Last Updated: Nov 14, 2025</p>
        
        <div className="prose prose-invert max-w-none space-y-8 text-foreground/80">
          <p>
            NeuroAds ("we," "our," "us") operates this website and provides digital marketing and e-commerce growth services. We respect your privacy and are committed to protecting your personal information. By using this website, you agree to the terms of this Privacy Policy and our Terms of Service.
          </p>
          
          <p>
            If you have any questions, contact:<br />
            <strong>Ritish, Founder — NeuroAds</strong><br />
            <strong>Email:</strong> founder@neuroads.agency<br />
            <strong>Address:</strong> Sector 43, Gurugram, Haryana, India
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">1. Information We Collect</h2>
          
          <h3 className="text-xl font-semibold text-foreground">1.1 Personal Information</h3>
          <p>We may collect personal information when you:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Submit a form or contact us</li>
            <li>Book a call through Calendly</li>
            <li>Subscribe to emails</li>
            <li>Work with us as a client</li>
          </ul>
          
          <p>This may include:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Name</li>
            <li>Email address</li>
            <li>Business information</li>
            <li>Project details</li>
            <li>Any content you voluntarily share</li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground">1.2 Non-Personal Information</h3>
          <p>
            We may collect non-personal information such as browser type, device, pages visited, and general usage data. This helps us improve the website.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">2. Cookies</h2>
          <p>
            We use cookies and basic tracking technologies to operate the site and improve user experience. These cookies may remember your preferences or help the site load correctly. You can disable cookies in your browser at any time.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">3. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Respond to inquiries</li>
            <li>Provide services you request</li>
            <li>Communicate regarding updates, resources, and marketing emails</li>
            <li>Manage billing and records</li>
            <li>Improve services and internal processes</li>
            <li>Maintain security and prevent misuse</li>
          </ul>
          <p>For EU/UK visitors: <strong>We follow GDPR principles for transparency, fairness, and data minimization.</strong></p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">4. Email Marketing</h2>
          <p>
            If you submit your email, you may receive marketing emails, updates, or resources. You can unsubscribe at any time by clicking the link in the email or contacting us directly.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">5. How We Store Information</h2>
          <p>Your data may be stored in:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Calendly</li>
            <li>Gmail / Google Workspace</li>
            <li>Stripe, Razorpay, PayU (for payments)</li>
            <li>Internal systems used to deliver services</li>
          </ul>
          <p>We do <strong>not</strong> store payment card information. This is handled securely by our payment processors.</p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">6. Data Sharing</h2>
          <p>
            We do <strong>not</strong> sell or trade your personal information. We may share limited information with trusted third-party vendors who help us operate the business (example: scheduling, email services, payment platforms). They are allowed to use your data only to perform those services.
          </p>
          <p>We may disclose information if required by law.</p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">7. Data Retention</h2>
          <p>
            We keep your information indefinitely unless you request deletion. If you ask us to delete your information, we will do so <strong>subject to system limitations</strong> and applicable legal requirements.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">8. Security</h2>
          <p>
            We use reasonable organizational and technical measures to protect your information. No system is 100% secure, but we take appropriate precautions to limit risks.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">9. Client Work & Ownership</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>You own your accounts and assets <strong>you provide</strong> to us.</li>
            <li>NeuroAds owns strategy, creative work, frameworks, and materials <strong>we create</strong>.</li>
            <li>If you stop working with us, your provided materials are returned upon request.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mt-8">10. Children's Privacy</h2>
          <p>This site is not intended for individuals under 16. We do not knowingly collect information from minors.</p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">11. International Users</h2>
          <p>
            If you are outside India, your information may be transferred to and processed in India. By using the site, you consent to this transfer.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">12. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically. Changes will be posted on this page with a new "Last Updated" date.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">13. Contact</h2>
          <p>
            For privacy questions or data requests:<br />
            <strong>founder@neuroads.agency</strong>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
