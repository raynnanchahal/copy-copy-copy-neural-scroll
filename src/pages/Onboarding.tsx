import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { WistiaPlayer } from "@wistia/wistia-player-react";

const Onboarding = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-6 leading-tight">
            Welcome to <span className="text-gradient">NeuroAds</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-center text-muted-foreground mb-4">
            Ritish — Founder of NeuroAds — here.
          </p>
          
          <p className="text-xl sm:text-2xl text-center text-foreground mb-12">
            Very excited to have you onboard.
          </p>

          {/* Subtext */}
          <div className="bg-card border border-border rounded-lg p-8 mb-12">
            <p className="text-lg text-foreground mb-4">
              In this video we will cover everything you need to know, including common questions about next steps and how we will work together.
            </p>
            <p className="text-lg text-foreground">
              On behalf of the entire team, congratulations. This is going to be one of the best decisions you've made for your brand's success.
            </p>
          </div>

          {/* Video Embed */}
          <div className="mb-12 rounded-lg overflow-hidden bg-card border border-border">
            <WistiaPlayer 
              mediaId="spulusfa6p"
              playerColor="00bbff"
            />
          </div>

          {/* Action Links */}
          <div className="grid sm:grid-cols-2 gap-6 mb-16">
            <a 
              href="https://forms.gle/J19bMkKL5qWYoPsM6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <Button className="w-full h-auto py-6 text-lg" variant="default">
                <ExternalLink className="mr-2 h-5 w-5" />
                Complete Onboarding Survey
              </Button>
            </a>
            
            <a 
              href="https://cal.com/ritish-nanchahal/onboarding-call?overlayCalendar=true" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <Button className="w-full h-auto py-6 text-lg" variant="outline">
                <ExternalLink className="mr-2 h-5 w-5" />
                Schedule Onboarding Call
              </Button>
            </a>
          </div>

          {/* Topics Covered */}
          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Topics Covered in This Video</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Foundations",
                "Prerequisites",
                "Approach Difference",
                "Roles for Best Fit",
                "Communication & Transparency",
                "Custom Plan",
                "Next Steps"
              ].map((topic, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-lg bg-background border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
                    {index + 1}
                  </div>
                  <span className="text-foreground font-medium">{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Onboarding;
