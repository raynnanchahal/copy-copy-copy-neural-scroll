import { Star, TrendingUp, Globe, Award } from "lucide-react";
import { NeuralButton } from "../ui/neural-button";

const ProofSection = () => {
  const results = [
    { 
      brand: "TechFlow Solutions", 
      before: "₹30L/month", 
      after: "₹1.2Cr/month", 
      timeframe: "6 weeks",
      highlight: "4X Growth" 
    },
    { 
      brand: "Zenith Wellness", 
      before: "High CAC", 
      after: "50% Lower CAC", 
      timeframe: "3 months",
      highlight: "3X Profits" 
    },
    { 
      brand: "Nexus Apparel", 
      before: "₹15L/month", 
      after: "₹75L/month", 
      timeframe: "8 weeks",
      highlight: "5X Revenue" 
    },
    { 
      brand: "Velocity Gaming", 
      before: "2.1% CTR", 
      after: "8.7% CTR", 
      timeframe: "4 weeks",
      highlight: "4X CTR" 
    }
  ];

  const stats = [
    { icon: TrendingUp, number: "$100M+", label: "Revenue Generated" },
    { icon: Award, number: "132", label: "Brands Scaled" },
    { icon: Globe, number: "11", label: "Countries" },
    { icon: Star, number: "23", label: "Niches Mastered" }
  ];

  return (
    <section className="section-spacing bg-background border-t border-border/50">
      <div className="container-flow">
        <div className="max-w-6xl mx-auto animate-fade-in">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect border border-flow-cyan/30 mb-6">
              <Award className="h-5 w-5 text-flow-cyan mr-2" />
              <span className="text-flow-cyan font-medium uppercase tracking-wider">Results That Hit</span>
            </div>
            
            <h2 className="headline-flow mb-8">
              The proof is in the{" "}
              <span className="accent-text">numbers</span>
            </h2>
          </div>

          {/* Case Study Results */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {results.map((result, index) => (
              <div key={index} className="flow-card animate-scale-in" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-0 uppercase tracking-wider">{result.brand}</h3>
                  <div className="inline-block px-3 py-1 rounded-full glass-effect border border-flow-cyan/30 text-flow-cyan text-xs font-medium uppercase tracking-wider">{result.highlight}</div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-foreground/70 text-sm sm:text-base uppercase tracking-wider">Before:</span>
                    <span className="font-semibold text-sm sm:text-base">{result.before}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground/70 text-sm sm:text-base uppercase tracking-wider">After:</span>
                    <span className="font-semibold text-flow-cyan text-sm sm:text-base">{result.after}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground/70 text-sm sm:text-base uppercase tracking-wider">Time:</span>
                    <span className="font-semibold text-sm sm:text-base">{result.timeframe}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 glass-effect rounded-full px-6 py-3 border border-flow-cyan/30">
              <Star className="h-5 w-5 text-flow-cyan fill-current" />
              <span className="font-bold">4.8/5</span>
              <span className="text-foreground/70 uppercase tracking-wider text-sm">Trustpilot Rating</span>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index}
                  className="flow-card text-center p-6 transition-all duration-300 hover:scale-105"
                >
                  <Icon className="h-8 w-8 text-flow-cyan mx-auto mb-3" />
                  <div className="text-2xl md:text-3xl font-bold text-flow-cyan mb-1">
                    {stat.number}
                  </div>
                  <div className="text-foreground/70 text-sm font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Video Testimonial Placeholder */}
          <div className="glass-effect rounded-2xl p-8 text-center border border-flow-cyan/20 mb-12">
            <h3 className="text-2xl font-bold mb-4 uppercase tracking-wider">Client Success Stories</h3>
            <p className="text-foreground/70 mb-6">
              Watch real founders share their transformation stories
            </p>
            <div className="bg-flow-cyan/5 rounded-lg p-8 border border-flow-cyan/20">
              <p className="text-lg mb-4">📹 Video Testimonials Coming Soon</p>
              <p className="text-foreground/60">
                Get early access by booking your strategy call
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <NeuralButton 
              variant="flow" 
              size="xl"
              onClick={() => window.open('https://cal.com/ritish-nanchahal/call', '_blank')}
            >
              LET'S TALK
            </NeuralButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;