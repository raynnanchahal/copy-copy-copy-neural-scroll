import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Disclaimer = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
          Earnings Disclaimer
        </h1>
        <p className="text-foreground/60 mb-8">Last Updated: Nov 14, 2025</p>
        
        <div className="prose prose-invert max-w-none space-y-8 text-foreground/80">
          <p>
            You acknowledge and agree that NeuroAds has made <strong>no guarantees, promises, projections, or representations</strong> about future results, performance, revenue, or earnings. Nothing on this website, in our communication, or in our services should be interpreted as a guarantee of financial outcomes.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">1. No Earnings or Performance Guarantees</h2>
          <p>
            Any examples of results, ROAS, ad performance, revenue growth, or client outcomes shared by NeuroAds are <strong>illustrative only</strong>. They are <strong>not</strong> assurances that you will achieve similar results.
          </p>
          <p>Your performance depends on variables outside our control, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Your product, market, and positioning</li>
            <li>Ad spend</li>
            <li>Creative quality</li>
            <li>Offer strength</li>
            <li>Industry competition</li>
            <li>External market conditions</li>
            <li>Your internal operations and follow-through</li>
          </ul>
          <p>We cannot and do not guarantee that you will earn money, increase revenue, or achieve any particular performance level.</p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">2. Past Results Are Not Predictive</h2>
          <p>
            Past client performance does <strong>not</strong> indicate or guarantee future outcomes.<br />
            No previous successes, examples, testimonials, or case studies should be interpreted as an average, typical, or expected result.
          </p>
          <p>You accept the full risk of relying on any examples or figures provided.</p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">3. Market & Economic Factors</h2>
          <p>
            External factors—including market shifts, platform changes, economic cycles, and global events—may impact performance. These risks are outside our control.
          </p>
          <p>NeuroAds is not responsible for losses, downturns, or negative changes in performance resulting from such factors.</p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">4. Your Responsibility</h2>
          <p>Your success using any strategies, recommendations, or advertising assets provided by NeuroAds depends on:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Your product quality</li>
            <li>Your pricing</li>
            <li>Your supply chain</li>
            <li>Your operational readiness</li>
            <li>Your team's implementation speed</li>
            <li>Your decision-making</li>
          </ul>
          <p>We do not know your background, work ethic, resources, or business environment. Therefore, we make <strong>no claim</strong> that you will achieve any specific financial result.</p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">5. Forward-Looking Statements</h2>
          <p>
            Some information may refer to potential results or growth. These statements are <strong>forward-looking</strong>, expressing opinions or expectations only.
          </p>
          <p>Forward-looking statements are not guarantees. Actual outcomes may differ significantly due to many variable factors.</p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">6. Do Your Own Due Diligence</h2>
          <p>
            You are encouraged to perform your own due diligence before making decisions based on any information from NeuroAds.<br />
            We do <strong>not</strong> provide legal, financial, tax, or investment advice.
          </p>
          <p>Consult qualified professionals as needed.</p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">7. Testimonials and Client Results</h2>
          <p>Any client results or testimonials shown by NeuroAds:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Are believed to be accurate</li>
            <li>Are not independently verified</li>
            <li>Do not represent average or typical outcomes</li>
          </ul>
          <p>They should not be relied upon as guarantees of future performance.</p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">8. Purchases & Pricing</h2>
          <p>
            You understand that any pricing for NeuroAds services is determined by us and does not correspond to external standards, industry benchmarks, or predetermined valuations.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">9. GDPR Note for EU Users</h2>
          <p>For EU and UK clients:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>We follow GDPR principles</li>
            <li>You retain rights over your data</li>
            <li>You may request access or deletion</li>
            <li>Data is handled according to our Privacy Policy</li>
          </ul>
          <p>This earnings disclaimer does <strong>not</strong> modify or override the data practices described in our Privacy Policy.</p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">10. Contact</h2>
          <p>
            For questions regarding this Earnings Disclaimer:<br />
            <strong>Email:</strong> founder@neuroads.agency
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Disclaimer;
