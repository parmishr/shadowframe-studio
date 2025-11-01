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
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-up">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
          Timeless Portraits
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Capturing authentic moments with artistic vision and elegant style
        </p>
        <Button
          onClick={scrollToContact}
          size="lg"
          className="bg-accent text-accent-foreground hover:bg-accent/90 group"
        >
          Book a Session
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
        </Button>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted rounded-full p-1">
          <div className="w-1.5 h-3 bg-muted rounded-full mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
