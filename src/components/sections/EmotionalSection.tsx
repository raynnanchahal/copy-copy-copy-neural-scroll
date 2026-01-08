import { Heart, Plane, Home, Coffee } from "lucide-react";
import { NeuralButton } from "../ui/neural-button";

const EmotionalSection = () => {
  const desires = [
    { 
      icon: Coffee, 
      title: "Create time, money, and location freedom",
      desc: "Work from anywhere, anytime"
    },
    { 
      icon: Heart, 
      title: "Build something that matters",
      desc: "Leave a lasting legacy"
    },
    { 
      icon: Home, 
      title: "Give your family a better life",
      desc: "Provide security and opportunities"
    },
    { 
      icon: Plane, 
      title: "Travel, relax, and enjoy the ride",
      desc: "Live life on your own terms"
    }
  ];

  return (
    <section className="section-spacing bg-background border-t border-border/50">
      <div className="container-flow">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="headline-flow mb-8">
              You didn't start your brand to{" "}
              <span className="accent-text">drown in dashboards</span>
            </h2>
            
            <p className="text-xl text-foreground/80 mb-8">
              You started to:
            </p>
          </div>

          {/* Dreams/Desires Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {desires.map((desire, index) => {
              const Icon = desire.icon;
              return (
                <div 
                  key={index}
                  className="flow-card flex items-center space-x-4 p-6 animate-scale-in"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-flow-cyan/20 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-flow-cyan" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{desire.title}</h3>
                    <p className="text-foreground/70 text-sm">{desire.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Reality Check */}
          <div className="text-center mb-12">
            <div className="glass-effect border border-flow-cyan/20 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-flow-cyan mb-4 uppercase tracking-wider">But now?</h3>
              <p className="text-xl text-foreground/80 leading-relaxed">
                You're burned out. Exhausted. Running on empty.{" "}
                <span className="text-flow-cyan font-bold">Let's fix that.</span>
              </p>
            </div>
            
            <div className="glass-effect border border-flow-cyan/30 rounded-lg p-8">
              <h3 className="text-3xl font-bold text-flow-cyan mb-4 uppercase tracking-wider">
                You run the brand, we run the growth.
              </h3>
              <p className="text-lg text-foreground/70">
                It's time to get back to why you started this journey.
              </p>
            </div>
          </div>

          {/* Lifestyle Visualization */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { emoji: "⏰", label: "Your Time Back" },
              { emoji: "💰", label: "Consistent Profits" },
              { emoji: "🌍", label: "Location Freedom" },
              { emoji: "😌", label: "Peace of Mind" }
            ].map((item, index) => (
              <div key={index} className="text-center p-4 rounded-lg glass-effect border border-flow-cyan/20">
                <div className="text-3xl mb-2">{item.emoji}</div>
                <div className="text-sm font-semibold text-flow-cyan uppercase tracking-wider">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Final CTA */}
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
              Your freedom is one strategy call away
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmotionalSection;