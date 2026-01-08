import { Check } from "lucide-react";
import { NeuralButton } from "@/components/ui/neural-button";

const PricingSection = () => {
  const pricingTiers = [
    {
      name: "BUILD",
      subtitle: "Install Fit",
      target: "~$20k/month",
      milestone: "Achieve message-to-brain fit → real PMF signal.",
      price: "$2k",
      changes: [
        "People \"get it\" instantly",
        "First profitable demand loop appears",
        "Wasteful testing stops"
      ]
    },
    {
      name: "SCALE",
      subtitle: "install economics",
      target: "~$100k/month",
      milestone: "Achieve cost economics that allow reliable scale.",
      price: "$5k",
      changes: [
        "CAC stabilises",
        "Margin becomes predictable",
        "You can push budget without fear"
      ],
      featured: true
    },
    {
      name: "DOMINATE",
      subtitle: "install exponential scale",
      target: "$500k+/month",
      milestone: "Neuro precision embedded across touchpoints → scale becomes self-sustaining.",
      price: "$10k",
      changes: [
        "Revenue and profit compound",
        "Messaging propagates through brand + channels",
        "Dependency on external partners drops"
      ]
    }
  ];

  return (
    <section className="section-spacing bg-background/50 border-y border-border/30">
      <div className="container-flow px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-foreground">
              Choose Your Growth Path
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
              Precision-engineered packages for every stage of scale
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`relative p-6 sm:p-8 rounded-xl border transition-all duration-300 hover:scale-105 ${
                  tier.featured
                    ? "bg-background border-flow-cyan/50 shadow-cyan"
                    : "bg-background/60 border-border/30 hover:border-flow-cyan/30"
                } backdrop-blur-sm`}
              >
                {tier.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-flow-cyan text-background text-xs font-bold rounded-full uppercase tracking-wider">
                    Most Popular
                  </div>
                )}

                {/* Tier Header */}
                <div className="mb-6">
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground uppercase tracking-wide mb-1">
                    {tier.name}
                  </h3>
                  <p className="text-sm sm:text-base text-foreground/60 mb-4">
                    {tier.subtitle}
                  </p>
                <p className="text-sm sm:text-base text-foreground/60 mb-2">
  Target →{" "}
  <span className="text-flow-cyan font-semibold">
    {tier.target}
  </span>
</p>

<div className="flex items-baseline gap-2">
  <span className="text-xl sm:text-2xl font-semibold text-flow-cyan/80">
    {tier.price}
  </span>
  <span className="text-foreground/50 text-xs">/mo</span>
</div>

                </div>

                {/* Milestone */}
                <div className="mb-6 pb-6 border-b border-border/30">
                  <p className="text-xs sm:text-sm font-semibold text-foreground/70 uppercase tracking-wider mb-2">
                    Milestone
                  </p>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    {tier.milestone}
                  </p>
                </div>

                {/* What Changes */}
                <div className="mb-8">
                  <p className="text-xs sm:text-sm font-semibold text-foreground/70 uppercase tracking-wider mb-4">
                    What Changes
                  </p>
                  <ul className="space-y-3">
                    {tier.changes.map((change, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-flow-cyan flex-shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base text-foreground/80">
                          {change}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <NeuralButton
                  variant={tier.featured ? "flow" : "outline"}
                  className="w-full text-sm sm:text-base"
                  onClick={() => window.open("https://cal.com/ritish-nanchahal/call", "_blank")}
                >
                  Let's Talk
                </NeuralButton>
              </div>
            ))}
          </div>

          {/* Bottom Note */}
          <div className="text-center mt-12 sm:mt-16">
            <p className="text-sm sm:text-base text-foreground/60 max-w-3xl mx-auto">
              All packages include full-spectrum neuro advertising implementation, 
              creative optimization, and strategic guidance tailored to your growth stage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
