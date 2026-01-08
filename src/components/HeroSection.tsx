import { NeuralButton } from "./ui/neural-button";
import neuralLogo from "@/assets/neural-logo.png";

const HeroSection = () => {

  return (
    <section className="brain-hero-bg relative flex items-center justify-center min-h-screen px-4 sm:px-6">
      <div className="container-flow relative z-10 py-16 sm:py-20 max-w-6xl mx-auto w-full">
        {/* Badge */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="glass-effect border border-flow-cyan/20 rounded-full px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 animate-fade-in">
            <div className="flex items-center gap-2 sm:gap-3">
              <img src={neuralLogo} alt="" className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-[10px] sm:text-xs font-medium uppercase tracking-wider">NEUROSCIENCE MEETS ADVERTISING</span>
            </div>
          </div>
        </div>
        
        {/* Main headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl uppercase tracking-tight text-center mb-6 sm:mb-8 leading-[1.1] font-bold">
          <span className="block mb-2">SCALE TO $500K/MONTH</span>
          <span className="block mb-2">WITHIN 180 DAYS</span>
          <span className="block">USING <span className="text-gradient">NEURO ADS</span>.</span>
        </h1>
        
        {/* Subtext */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mx-auto mb-12 sm:mb-16 max-w-4xl leading-relaxed text-foreground/90 px-4">
            If your ads feel less effective than they used to, it's not your creatives, copy, team — it's the system you're using.
            This short breakdown reveals what's changed in 2026, and how leading brands are adapting.
          </p>

          {/* Video embed */}
          <div id="video-section" className="max-w-4xl mx-auto mb-12 sm:mb-16">
            <div className="relative aspect-video rounded-lg overflow-hidden bg-card/50 border border-border cyber-glow">
              <iframe
                src="https://www.loom.com/embed/0d77b3358400491fa55b71a4adfe7989"
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
                title="Neural Ads Explanation"
              />
            </div>
          </div>
        </div>
        
        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-12 max-w-5xl mx-auto">
          <div className="stat-display">
            <div className="stat-number text-3xl sm:text-4xl md:text-5xl">847%</div>
            <div className="stat-label text-xs sm:text-sm">Average profit increase</div>
          </div>
          <div className="stat-display">
            <div className="stat-number text-3xl sm:text-4xl md:text-5xl">237</div>
            <div className="stat-label text-xs sm:text-sm">Brands served</div>
          </div>
          <div className="stat-display">
            <div className="stat-number text-3xl sm:text-4xl md:text-5xl">$127M+</div>
            <div className="stat-label text-xs sm:text-sm">Revenue generated</div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center">
          <NeuralButton 
            variant="flow" 
            size="lg" 
            className="animate-float-subtle w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8"
            onClick={() => window.open('https://cal.com/ritish-nanchahal/call', '_blank')}
          >
            LET'S TALK
          </NeuralButton>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
