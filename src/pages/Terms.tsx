import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
          Terms of Service
        </h1>
        <p className="text-foreground/60 mb-8">Last Updated: Nov 14, 2025</p>
        
        <div className="prose prose-invert max-w-none space-y-8 text-foreground/80">
          <p>
            These Terms govern your use of the NeuroAds website and any services provided by NeuroAds ("we," "our," "us"). By accessing this site or working with us, you agree to these Terms and our Privacy Policy.
          </p>
          
          <p>
            For questions, contact:<br />
            <strong>Ritish, Founder — NeuroAds</strong><br />
            <strong>Email:</strong> founder@neuroads.agency<br />
            <strong>Jurisdiction:</strong> Punjab, India
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">1. Use of the Website</h2>
          <p>You may use this website for lawful, legitimate purposes. By accessing any part of the site, you agree not to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Interfere with the site's operation</li>
            <li>Attempt unauthorized access to our systems</li>
            <li>Upload harmful, illegal, or infringing content</li>
            <li>Use the site for spam, solicitation, or abusive behavior</li>
          </ul>
          <p>We may modify these Terms at any time. Continued use of the site means you accept the updated Terms.</p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">2. Intellectual Property</h2>
          
          <h3 className="text-xl font-semibold text-foreground">Our Content</h3>
          <p>
            All content on this site—including text, designs, graphics, strategies, frameworks, and marketing materials—is owned by NeuroAds or licensed to us. You may not copy, reproduce, distribute, or create derivative works without written permission.
          </p>
          <p>You may view and print pages for personal, non-commercial use only.</p>

          <h3 className="text-xl font-semibold text-foreground">Client Work & Ownership</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>You own your accounts and all materials you provide to us.</li>
            <li>NeuroAds owns all strategies, creative work, ad concepts, copy, frameworks, and intellectual property created by us.</li>
            <li>If you stop working with us, we will return the materials you provided. Our created materials remain our property.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mt-8">3. Services & Payments</h2>
          
          <h3 className="text-xl font-semibold text-foreground">3.1 Retainer Model</h3>
          <p>
            Most engagements follow a <strong>flat monthly retainer</strong>, paid <strong>in advance</strong>.<br />
            Work begins only after payment is received.
          </p>

          <h3 className="text-xl font-semibold text-foreground">3.2 Cancellation</h3>
          <p>
            Clients may cancel at any time.<br />
            No refunds are provided for the current billing period.
          </p>
          <p>Upon cancellation:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access to ongoing service delivery stops at the end of the paid period</li>
            <li>Materials you provided can be returned upon request</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mt-8">4. No Guarantees</h2>
          <p>
            Performance marketing results vary and depend on factors outside our control.<br />
            We do <strong>not</strong> guarantee:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Revenue</li>
            <li>ROAS/CPA</li>
            <li>Lead quantity or quality</li>
            <li>Specific performance outcomes</li>
          </ul>
          <p>We operate on a <strong>best-effort</strong> basis.</p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">5. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>NeuroAds is not liable for indirect, incidental, special, or consequential damages.</li>
            <li>Our total liability for any claim is limited to the amount paid by you in the <strong>current billing period only</strong>.</li>
            <li>We are not responsible for losses resulting from platform issues (e.g., Meta Ads, Google Ads, payment processors), third-party delays, or incorrect data provided by clients.</li>
          </ul>
          <p>If you are dissatisfied with the site or services, your sole remedy is to stop using them.</p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">6. Third-Party Tools</h2>
          <p>We use third-party tools such as:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Calendly</li>
            <li>Gmail / Google Workspace</li>
            <li>Stripe / Razorpay / PayU</li>
            <li>Meta Ads Manager</li>
          </ul>
          <p>We are not responsible for:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Their outages</li>
            <li>Their policies</li>
            <li>Data stored on their systems</li>
          </ul>
          <p>Your use of any third-party service is subject to that provider's own terms and policies.</p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">7. Email Communication</h2>
          <p>
            By submitting your email, you consent to receive emails from us regarding services, updates, and marketing. You may unsubscribe at any time.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">8. Confidentiality</h2>
          <p>
            Both parties agree to keep shared business information confidential.<br />
            Confidentiality obligations survive termination.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">9. Termination of Access</h2>
          <p>We may suspend or terminate access to the site or our services without notice if:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>You violate these Terms</li>
            <li>You misuse our content or intellectual property</li>
            <li>You engage in harmful behavior</li>
          </ul>
          <p>Limitations, IP rights, and confidentiality survive termination.</p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">10. Governing Law</h2>
          <p>
            These Terms are governed by the laws of <strong>Punjab, India</strong>.<br />
            Any disputes will be resolved exclusively in the courts of Punjab.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">11. Changes to These Terms</h2>
          <p>
            We may update these Terms at any time.<br />
            Changes take effect when posted on the site.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">12. Contact</h2>
          <p>
            For inquiries about these Terms:<br />
            <strong>founder@neuroads.agency</strong>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
