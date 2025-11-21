import heroImage from "@/assets/hero-portrait.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-elegant"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-up">
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-light mb-8 tracking-wide leading-tight">
          Timeless<br />
          <span className="font-medium italic">Portraits</span>
        </h1>
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-8"></div>
        <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-xl mx-auto font-light tracking-wide leading-relaxed">
          Capturing authentic moments with artistic vision and elegant style
        </p>
        <Button
          onClick={scrollToContact}
          size="lg"
          className="bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-glow transition-all duration-500 group px-8 py-6 text-base tracking-wide"
        >
          Book a Session
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
        </Button>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-12 border border-accent/30 rounded-full p-1 backdrop-blur-sm">
          <div className="w-1.5 h-4 bg-accent rounded-full mx-auto animate-glow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
