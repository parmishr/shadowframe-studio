import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border/50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-serif text-3xl font-light mb-3 tracking-wider">PORTRAIT STUDIO</h3>
            <p className="text-foreground/60 text-sm font-light tracking-wide">
              © 2024 All rights reserved. Crafting timeless portraits.
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-secondary/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-accent/20 hover:text-accent transition-all duration-300 border border-border/30"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-secondary/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-accent/20 hover:text-accent transition-all duration-300 border border-border/30"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-secondary/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-accent/20 hover:text-accent transition-all duration-300 border border-border/30"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
