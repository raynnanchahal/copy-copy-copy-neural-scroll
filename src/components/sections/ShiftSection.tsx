import { Lightbulb, ArrowRight, Target, Zap } from "lucide-react";
import { NeuralButton } from "../ui/neural-button";

const ShiftSection = () => {
  return (
    <section className="section-spacing bg-background border-t border-border/50">
      <div className="container-flow">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Visual Transformation */}
          <div className="flex items-center justify-center mb-8 space-x-4 sm:space-x-8">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full glass-effect border border-flow-cyan/20 flex items-center justify-center mb-2">
                <span className="text-xl sm:text-2xl">😵</span>
              </div>
              <span className="text-xs sm:text-sm text-foreground/80 font-medium uppercase tracking-wider">Chaos</span>
            </div>
            
            <ArrowRight className="h-6 w-6 sm:h-8 sm:w-8 text-flow-cyan animate-pulse" />
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-flow-cyan/20 flex items-center justify-center mb-2">
                <Lightbulb className="h-6 w-6 sm:h-8 sm:w-8 text-flow-cyan" />
              </div>
              <span className="text-xs sm:text-sm text-foreground/80 font-medium uppercase tracking-wider">Clarity</span>
            </div>
          </div>

          {/* Main Message */}
          <div className="mb-12">
            <h2 className="headline-flow mb-8">
              You weren't born to run a business{" "}
              <span className="accent-text">like this</span>
            </h2>
            
            <div className="prose prose-lg mx-auto">
              <p className="text-xl leading-relaxed mb-6">
                Your job isn't to juggle chaos; it's to make{" "}
                <span className="text-flow-cyan font-bold">high-leverage moves that scale.</span>
              </p>
              
              <p className="text-lg text-foreground/80 mb-8">
                You've felt the fatigue, the endless reset button. Here's the truth: 
                it's not that you're lacking systems. You're lacking{" "}
                <span className="text-flow-cyan font-semibold">systems that still work.</span>
              </p>
            </div>
          </div>

          {/* The Shift Visualization */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="flow-card p-6">
              <Target className="h-8 w-8 text-flow-cyan mb-4 mx-auto" />
              <h3 className="font-bold text-lg mb-2 uppercase tracking-wider">Focus</h3>
              <p className="text-foreground/70 text-sm">Stop the endless strategy switching</p>
            </div>
            
            <div className="flow-card p-6">
              <Zap className="h-8 w-8 text-flow-cyan mb-4 mx-auto" />
              <h3 className="font-bold text-lg mb-2 uppercase tracking-wider">Leverage</h3>
              <p className="text-foreground/70 text-sm">Systems that work while you sleep</p>
            </div>
            
            <div className="flow-card p-6">
              <Lightbulb className="h-8 w-8 text-flow-cyan mb-4 mx-auto" />
              <h3 className="font-bold text-lg mb-2 uppercase tracking-wider">Scale</h3>
              <p className="text-foreground/70 text-sm">Growth that compounds daily</p>
            </div>
          </div>

          {/* Quote/Insight */}
          <div className="glass-effect border border-flow-cyan/30 rounded-lg p-8 mb-8">
            <blockquote className="text-xl font-medium text-flow-cyan mb-4">
              "The difference between a $100K brand and a $10M brand isn't more hustle. 
              It's better systems."
            </blockquote>
            <cite className="text-foreground/60">— Neural Ads Methodology</cite>
          </div>

          {/* CTA */}
          <NeuralButton 
            variant="flow" 
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

export default ShiftSection;