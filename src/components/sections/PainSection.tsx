import { AlertTriangle, Clock, Smartphone, Zap } from "lucide-react";
import { NeuralButton } from "../ui/neural-button";

const PainSection = () => {
  return (
    <section className="section-spacing bg-background border-t border-border/50">
      <div className="container-flow">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Section Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect border border-flow-cyan/30 mb-8">
            <AlertTriangle className="h-5 w-5 text-flow-cyan mr-2" />
            <span className="text-flow-cyan font-medium uppercase tracking-wider">Founder Sh*t Show™</span>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg mx-auto text-foreground/90 mb-12">
            <p className="text-xl leading-relaxed mb-6">
              You're not lazy. You're not broken. You're <span className="text-flow-cyan font-bold">in the trenches.</span>
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 text-left my-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Smartphone className="h-5 w-5 sm:h-6 sm:w-6 text-flow-cyan mt-1 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-foreground/90">Trying to grow a brand while your phone won't stop buzzing, inbox is a crime scene</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-flow-cyan mt-1 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-foreground/90">Sleep like a teething toddler, wake up with 47 tabs open in your brain</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-flow-cyan mt-1 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-foreground/90">The ad that worked yesterday dies today. You hop from strategy to strategy</p>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 sm:h-6 sm:w-6 text-flow-cyan mt-1 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-foreground/90">Feels like momentum. Delivers like Zomato on a rainy day.</p>
                </div>
              </div>
            </div>

            <div className="glass-effect border-l-4 border-flow-cyan p-6 rounded-r-lg text-left">
              <p className="text-lg font-medium text-flow-cyan mb-2 uppercase tracking-wider">The Reality Check:</p>
              <p className="text-foreground/80">
                Juggling logistics, launches, cash flow, and creatives that haven't arrived. 
                Every day feels like you're one step away from breakthrough or breakdown.
              </p>
            </div>
          </div>

          {/* Visual Pain Points */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Burned Budget", color: "text-flow-cyan" },
              { label: "Failed Campaigns", color: "text-flow-cyan" },
              { label: "Sleepless Nights", color: "text-flow-cyan" },
              { label: "Strategy Chaos", color: "text-flow-cyan" }
            ].map((item, index) => (
              <div key={index} className={`p-4 rounded-lg glass-effect border border-flow-cyan/20 ${item.color} font-medium text-center uppercase tracking-wider text-sm`}>
                {item.label}
              </div>
            ))}
          </div>

          {/* CTA */}
          <NeuralButton 
            variant="neural" 
            size="lg"
            onClick={() => window.open('https://cal.com/ritish-nanchahal/call', '_blank')}
          >
            LET'S TALK
          </NeuralButton>
        </div>
      </div>
    </section>
  );
};

export default PainSection;