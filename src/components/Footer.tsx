import neuralLogo from "@/assets/neural-logo.png";
import { Linkedin, Instagram, Mail, MessageCircle, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/20 bg-background py-12 sm:py-16">
      <div className="container-flow max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-12">
          {/* Logo & Tagline */}
          <div className="space-y-3 sm:space-y-4">
            <img src={neuralLogo} alt="Neural Ads" className="h-10 sm:h-12 w-auto" />
            <p className="text-foreground/60 text-xs sm:text-sm leading-relaxed">
              Brain-targeting growth engine for ambitious brands
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground/90 tracking-wide">Resources</h3>
            <div className="flex flex-col space-y-3 text-sm">
              <a 
                href="https://clients.neuroads.agency" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-flow-cyan transition-colors"
              >
                Case Studies
              </a>
              <a 
                href="https://forms.gle/7LidrRwvb2dJRc1j6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-flow-cyan transition-colors"
              >
                We're Hiring
              </a>
            </div>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground/90 tracking-wide">Contact</h3>
            <div className="flex flex-col space-y-3 text-sm">
              <a 
                href="mailto:founder@neuroads.agency"
                className="flex items-center gap-2 text-foreground/60 hover:text-flow-cyan transition-colors"
              >
                <Mail className="w-4 h-4" />
                founder@neuroads.agency
              </a>
              <a 
                href="https://wa.me/919878944263"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground/60 hover:text-flow-cyan transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Chat with an expert
              </a>
              <div className="flex items-center gap-2 text-foreground/60">
                <MapPin className="w-4 h-4" />
                Sushant Lok, Gurugram
              </div>
            </div>
          </div>
          
          {/* Social */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground/90 tracking-wide">Connect</h3>
            <div className="flex flex-col space-y-3 text-sm">
              <a 
                href="https://www.linkedin.com/company/neuro-ads"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground/60 hover:text-flow-cyan transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>

              <a
                href="https://www.linkedin.com/in/ritish/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground/60 hover:text-flow-cyan transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                About Me
              </a>

              <a
                href="https://www.instagram.com/neu.roads/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground/60 hover:text-flow-cyan transition-colors"
              >
                <Instagram className="w-4 h-4" />
                Instagram
              </a>
            </div>
          </div>
        </div>
        
        {/* Legal & Disclaimers */}
        <div className="border-t border-border/20 pt-8 space-y-6">
          <div className="flex flex-wrap justify-center gap-3 text-xs">
            <a href="/privacy" className="text-foreground/50 hover:text-flow-cyan transition-colors">Privacy Policy</a>
            <span className="text-foreground/30">•</span>
            <a href="/terms" className="text-foreground/50 hover:text-flow-cyan transition-colors">Terms & Conditions</a>
            <span className="text-foreground/30">•</span>
            <a href="/gdpr" className="text-foreground/50 hover:text-flow-cyan transition-colors">GDPR</a>
            <span className="text-foreground/30">•</span>
            <a href="/disclaimer" className="text-foreground/50 hover:text-flow-cyan transition-colors">Earning Disclaimer</a>
            <span className="text-foreground/30">•</span>
            <a href="/refunds" className="text-foreground/50 hover:text-flow-cyan transition-colors">Refunds & Cancellation</a>
          </div>
          
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-foreground/40 text-xs leading-relaxed">
              This site is not part of the Facebook website or Facebook Inc. Additionally, this site is not endorsed by Facebook in any way. 
              Facebook is a trademark of Facebook, Inc.
            </p>
          </div>
          
          {/* Copyright */}
          <div className="text-center">
            <p className="text-foreground/50 text-xs tracking-wide">
              © 2026 Neural Ads. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
