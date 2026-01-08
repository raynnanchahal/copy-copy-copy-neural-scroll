import { NeuralButton } from "@/components/ui/neural-button";
import businessIcons from "@/assets/business-icons.jpg";

// Import featured logos
import sharkTankLogo from "@/assets/featured-sharktank.png";
import forbesLogo from "@/assets/featured-forbes.png";
import townCountryLogo from "@/assets/featured-townandcountry.png";
import mintLogo from "@/assets/featured-mint.png";
import wsjLogo from "@/assets/featured-wsj.png";
import vogueLogo from "@/assets/featured-vogue.png";
import lakmeLogo from "@/assets/featured-lakme.png";

const CaseStudiesSection = () => {
  const featuredLogos = [
    { name: "Shark Tank", logo: sharkTankLogo },
    { name: "Forbes", logo: forbesLogo },
    { name: "Mint", logo: mintLogo },
    { name: "Wall Street Journal", logo: wsjLogo },
    { name: "Vogue", logo: vogueLogo },
    { name: "Town and Country", logo: townCountryLogo },
    { name: "Lakme Fashion Week", logo: lakmeLogo },
  ];

  return (
    <section className="section-spacing bg-background border-t border-border/50">
      <div className="container-flow text-center px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Headline */}
          <h2 className="headline-flow text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-6 sm:mb-8 md:mb-12 transition-all duration-500 hover:scale-105">
            We've done this — hundreds of times,
            <span className="block mt-2 text-flow-cyan">predictably.</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-foreground/80 mb-10 sm:mb-12 md:mb-14 max-w-2xl mx-auto px-4">
            Real brands. Real results. Real predictability.
          </p>

          {/* Blurred Brand Logos */}
          <div className="mb-10 sm:mb-12 md:mb-14 flex justify-center items-center gap-4 sm:gap-6 md:gap-8 px-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-lg overflow-hidden opacity-30 hover:opacity-50 transition-all duration-300 glass-effect"
                style={{
                  backgroundImage: `url(${businessIcons})`,
                  backgroundSize: "cover",
                  backgroundPosition: `${i * 25}% 50%`,
                  filter: "blur(8px) grayscale(100%)",
                }}
              />
            ))}
          </div>

          {/* Featured In */}
          <div className="mb-12 sm:mb-14 md:mb-16">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-8 sm:mb-10 text-foreground/70 uppercase tracking-wider">
              Clients Featured In
            </h3>
            
            {/* Logo Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 sm:gap-8 items-center justify-items-center max-w-6xl mx-auto">
              {featuredLogos.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center w-full h-16 sm:h-20 md:h-24 opacity-60 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0"
                >
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="max-h-full max-w-full w-auto h-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <NeuralButton
            variant="flow"
            size="lg"
            className="group w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8"
            onClick={() => window.open("https://clients.neuroads.agency", "_blank")}
          >
            Check Case Studies
            <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
          </NeuralButton>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
