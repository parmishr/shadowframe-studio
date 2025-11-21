import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          <h2 className="font-serif text-2xl font-light tracking-wider">PORTRAIT STUDIO</h2>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground/60 hover:text-foreground transition-colors duration-300 font-light tracking-wide text-sm"
            >
              HOME
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground/60 hover:text-foreground transition-colors duration-300 font-light tracking-wide text-sm"
            >
              ABOUT
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-foreground/60 hover:text-foreground transition-colors duration-300 font-light tracking-wide text-sm"
            >
              PORTFOLIO
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground/60 hover:text-foreground transition-colors duration-300 font-light tracking-wide text-sm"
            >
              SERVICES
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-glow transition-all duration-300 tracking-wide"
              size="sm"
            >
              CONTACT
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 space-y-4 animate-fade-in">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left py-3 text-foreground/60 hover:text-foreground transition-colors font-light tracking-wide"
            >
              HOME
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left py-3 text-foreground/60 hover:text-foreground transition-colors font-light tracking-wide"
            >
              ABOUT
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="block w-full text-left py-3 text-foreground/60 hover:text-foreground transition-colors font-light tracking-wide"
            >
              PORTFOLIO
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left py-3 text-foreground/60 hover:text-foreground transition-colors font-light tracking-wide"
            >
              SERVICES
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 tracking-wide"
            >
              CONTACT
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
