import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DiscoverySection from "@/components/sections/DiscoverySection";
import PricingSection from "@/components/sections/PricingSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import Footer from "@/components/Footer";

const NeuralAds = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <DiscoverySection />
        <PricingSection />
        <CaseStudiesSection />
      </main>
      <Footer />
    </div>
  );
};

export default NeuralAds;