import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Refunds = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
          Refund & Cancellation Policy
        </h1>
        <p className="text-foreground/60 mb-8">Last Updated: Nov 14, 2025</p>
        
        <div className="prose prose-invert max-w-none space-y-8 text-foreground/80">
          <p>
            NeuroAds provides non-tangible, service-based work. Because our time, expertise, and resources are allocated immediately upon engagement, <strong>all purchases are final and non-refundable</strong>.
          </p>
          <p>By purchasing any service from NeuroAds, you acknowledge and agree to the following terms.</p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">1. No Refunds</h2>
          <p>
            All payments for retainers, creative services, strategy work, or consulting are <strong>non-refundable</strong> under any circumstances.<br />
            This includes:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Monthly retainers</li>
            <li>One-time service fees</li>
            <li>Strategy or creative work</li>
            <li>Audits or consultations</li>
          </ul>
          <p>Work begins as soon as payment is received, and no refunds are issued for partially used or unused time.</p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">2. Service Postponement (Optional Grace Allowance)</h2>
          <p>
            In rare or unforeseen circumstances where you cannot utilize the service for the current month, you may request to <strong>postpone delivery for up to 30 days</strong> from purchase.
          </p>
          <p>Conditions:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Request must be made within <strong>7 days</strong> of payment</li>
            <li>Postponement can be used <strong>once</strong></li>
            <li>Payment remains non-refundable</li>
          </ul>
          <p>(This grace option is discretionary and provided as a courtesy.)</p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">3. Cancellation of Recurring Monthly Retainers</h2>
          
          <h3 className="text-xl font-semibold text-foreground">15-Day Notice Required</h3>
          <p>
            To cancel a recurring monthly retainer, you must notify us <strong>at least 15 days before the next billing cycle</strong>.
          </p>
          <p>If cancellation occurs <strong>after</strong> a billing cycle has started:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>No refund will be issued</li>
            <li>Any work already completed or in progress for that month remains billable</li>
            <li>Outstanding amounts must be cleared in full</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mt-8">4. Partial Months, Pauses & Unused Time</h2>
          <p>NeuroAds does not provide:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Refunds for partial months</li>
            <li>Credits for unused time</li>
            <li>Pauses mid-cycle (except in approved postponement cases noted above)</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mt-8">5. Payment Failures & Missed Payments</h2>
          <p>
            If a recurring payment fails (insufficient funds, card declined, etc.), services will be paused until payment is received.
          </p>
          <p>
            If payment is not received within <strong>7 days</strong> of the due date, the retainer may be canceled and the engagement terminated.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">6. Chargebacks</h2>
          <p>
            Filing a chargeback without first attempting to resolve an issue through direct communication with NeuroAds constitutes a breach of this agreement.
          </p>
          <p>
            In the event of an illegitimate chargeback, NeuroAds reserves the right to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Immediately suspend all services</li>
            <li>Terminate the contract</li>
            <li>Pursue collection of unpaid fees</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mt-8">7. Early Contract Termination</h2>
          <p>
            If you terminate a multi-month or annual engagement before the commitment period ends, no refund will be provided for remaining months or time.
          </p>
          <p>
            All fees paid up to the point of termination remain non-refundable.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">8. Exceptions</h2>
          <p>
            Refunds are provided <strong>only</strong> in the following cases:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>NeuroAds fails to deliver the agreed-upon service within the contracted timeframe</li>
            <li>A billing error results in duplicate or incorrect charges</li>
          </ul>
          <p>
            In such cases, you must notify us in writing within <strong>7 days</strong> of the issue. Refunds, if approved, will be issued within 14 business days.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">9. Scope Changes & Add-Ons</h2>
          <p>
            If you request changes to the scope of work or additional services mid-engagement, these may be subject to additional charges.
          </p>
          <p>
            Changes and costs will be communicated in writing before proceeding.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8">10. Contact</h2>
          <p>
            For cancellation requests or refund inquiries:<br />
            <strong>Email:</strong> founder@neuroads.agency
          </p>
          <p>
            Cancellations must be submitted via email and will be confirmed in writing.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Refunds;
