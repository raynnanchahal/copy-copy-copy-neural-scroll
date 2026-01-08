import { NeuralButton } from "./ui/neural-button";
import neuralLogo from "@/assets/neural-logo.png";

const Header = () => {

  return (
    <>
      {/* Main header */}
      <header className="glass-effect sticky top-0 z-50 border-b border-border/50">
        <div className="container-flow">
          <div className="flex justify-between items-center h-16 sm:h-20 px-4 sm:px-6">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img src={neuralLogo} alt="Neural Ads" className="h-10 sm:h-12 md:h-14 w-auto" />
            </div>
            
            {/* CTA Button - visible on all screens */}
            <div>
              <NeuralButton 
                variant="neural" 
                size="default" 
                className="text-xs sm:text-sm px-3 sm:px-4 h-9 sm:h-10"
                onClick={() => window.open('https://cal.com/ritish-nanchahal/call', '_blank')}
              >
                LET'S TALK
              </NeuralButton>
            </div>
          </div>
        </div>
      </header>

    </>
  );
};

export default Header;