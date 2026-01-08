import { Brain, Target, Smartphone, Mail, TrendingUp, Palette, Cog, Users } from "lucide-react";
import { NeuralButton } from "../ui/neural-button";

const SolutionSection = () => {
  const services = [
    { icon: Target, title: "Paid Advertising", desc: "Meta, TikTok, Google, Amazon, Pinterest" },
    { icon: Users, title: "Influencer & UGC", desc: "Authentic campaigns that convert" },
    { icon: Cog, title: "Web Development", desc: "Custom sites built for conversion" },
    { icon: Mail, title: "Email & SMS", desc: "Retention campaigns that scale" },
    { icon: TrendingUp, title: "Social Growth", desc: "Organic reach that compounds" },
    { icon: Brain, title: "AI Automation", desc: "Efficiency ops that save hours" },
    { icon: Palette, title: "Brand Identity", desc: "Design that stops the scroll" },
    { icon: Smartphone, title: "Full-Funnel Strategy", desc: "End-to-end growth systems" }
  ];

  return (
    <section className="section-spacing bg-background border-t border-border/50">
      <div className="container-flow">
        <div className="max-w-6xl mx-auto animate-fade-in">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect border border-flow-cyan/30 mb-6">
              <Brain className="h-5 w-5 text-flow-cyan mr-2" />
              <span className="text-flow-cyan font-medium uppercase tracking-wider">The Neural Stack</span>
            </div>
            
            <h2 className="headline-flow mb-6">
              Neural Ads isn't an agency.{" "}
              <span className="accent-text">It's a brain-targeting growth engine.</span>
            </h2>
            
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              We blend behavioral psychology, neuroscience, and performance marketing to 
              stop the scroll, hook the limbic brain, trigger instinctive action, and 
              engineer conversions at scale.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className="flow-card p-3 sm:p-6 transition-all duration-300 hover:scale-105"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="p-2 sm:p-3 rounded-full bg-flow-cyan/10 mb-3 sm:mb-4">
                      <Icon className="h-4 w-4 sm:h-6 sm:w-6 text-flow-cyan" />
                    </div>
                    <h3 className="font-bold text-sm sm:text-lg mb-1 sm:mb-2 uppercase tracking-wider">{service.title}</h3>
                    <p className="text-foreground/80 text-xs sm:text-sm leading-tight">{service.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Neural Methodology */}
          <div className="glass-effect rounded-2xl p-8 md:p-12 mb-12 border border-flow-cyan/20">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-16 h-16 rounded-full bg-flow-cyan/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🧠</span>
                </div>
                <h3 className="font-bold text-xl mb-2 uppercase tracking-wider">Psychology</h3>
                <p className="text-foreground/70">Target subconscious triggers</p>
              </div>
              
              <div>
                <div className="w-16 h-16 rounded-full bg-flow-cyan/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="font-bold text-xl mb-2 uppercase tracking-wider">Neuroscience</h3>
                <p className="text-foreground/70">Hook the limbic brain</p>
              </div>
              
              <div>
                <div className="w-16 h-16 rounded-full bg-flow-cyan/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="font-bold text-xl mb-2 uppercase tracking-wider">Performance</h3>
                <p className="text-foreground/70">Engineer conversions at scale</p>
              </div>
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

export default SolutionSection;