import { CheckCircle, Target, TrendingUp, Users, Brain } from "lucide-react";
import { NeuralButton } from "../ui/neural-button";

const OfferSection = () => {
  const benefits = [
    { 
      icon: Target, 
      title: "Your million-dollar angles",
      desc: "Discover the exact messaging that converts your audience"
    },
    { 
      icon: TrendingUp, 
      title: "How to 10X revenue with existing products",
      desc: "Unlock hidden profit centers in your current business"
    },
    { 
      icon: Users, 
      title: "Systems to retain customers for life",
      desc: "Build loyalty that turns buyers into brand evangelists"
    },
    { 
      icon: Brain, 
      title: "Exact $100M+ playbook",
      desc: "The same strategy used by 132+ successful brands"
    }
  ];

  return (
    <section className="section-spacing bg-background border-t border-border/50">
      <div className="container-flow">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect border border-flow-cyan/30 mb-6">
              <CheckCircle className="h-5 w-5 text-flow-cyan mr-2" />
              <span className="text-flow-cyan font-medium uppercase tracking-wider">What You'll Get</span>
            </div>
            
            <h2 className="headline-flow mb-6">
              On your strategy call,{" "}
              <span className="accent-text">walk away with:</span>
            </h2>
          </div>

          {/* Benefits Grid */}
          <div className="space-y-6 mb-12">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={index}
                  className="flow-card flex items-start space-x-4 p-6 transition-all duration-300 hover:scale-105 animate-fade-in"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-flow-cyan/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-flow-cyan" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-foreground/70">{benefit.desc}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-flow-cyan" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Value Proposition */}
          <div className="glass-effect rounded-2xl p-8 mb-12 text-center border border-flow-cyan/20">
            <h3 className="text-2xl font-bold mb-4 uppercase tracking-wider">Free 30-Minute Strategy Session</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div>
                <div className="text-3xl font-bold text-flow-cyan mb-2">$0</div>
                <div className="text-foreground/70 uppercase tracking-wider text-sm">Investment</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-flow-cyan mb-2">30</div>
                <div className="text-foreground/70 uppercase tracking-wider text-sm">Minutes</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-flow-cyan mb-2">∞</div>
                <div className="text-foreground/70 uppercase tracking-wider text-sm">Value</div>
              </div>
            </div>
            <p className="text-foreground/70">
              No pitch, no pressure. Just pure strategy tailored to your business.
            </p>
          </div>

          {/* Social Proof Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-block px-6 py-3 rounded-full glass-effect border border-flow-cyan/30 text-flow-cyan text-lg font-medium uppercase tracking-wider">
              ✅ Used by 132+ Brands Worldwide
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <NeuralButton 
              variant="flow" 
              size="xl"
              onClick={() => window.open('https://cal.com/ritish-nanchahal/call', '_blank')}
              className="mb-4"
            >
              LET'S TALK
            </NeuralButton>
            <p className="text-foreground/60 text-sm uppercase tracking-wider">
              Available slots filling fast • Book within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;