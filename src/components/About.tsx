import { Camera, Award, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-32 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-20 animate-fade-in">
          <h2 className="font-serif text-5xl md:text-6xl font-light mb-8 tracking-wide">
            Crafting Visual Stories
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-8"></div>
          <p className="text-base text-foreground/70 leading-relaxed font-light tracking-wide">
            With over a decade of experience in portrait photography, I specialize in creating
            timeless images that capture the essence of each individual. Every session is a
            collaboration, blending artistic vision with authentic emotion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-card/30 backdrop-blur-sm p-10 rounded-2xl border border-border/50 text-center animate-scale-in hover:border-accent/30 transition-all duration-500 group">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-full mb-6 group-hover:bg-accent/20 transition-colors duration-300">
              <Camera className="text-accent" size={32} />
            </div>
            <h3 className="font-serif text-xl font-medium mb-4 tracking-wide">Professional Equipment</h3>
            <p className="text-foreground/60 font-light leading-relaxed">
              State-of-the-art cameras and lighting to ensure exceptional quality
            </p>
          </div>

          <div className="bg-card/30 backdrop-blur-sm p-10 rounded-2xl border border-border/50 text-center animate-scale-in hover:border-accent/30 transition-all duration-500 group" style={{ animationDelay: "0.15s" }}>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-full mb-6 group-hover:bg-accent/20 transition-colors duration-300">
              <Award className="text-accent" size={32} />
            </div>
            <h3 className="font-serif text-xl font-medium mb-4 tracking-wide">Award-Winning</h3>
            <p className="text-foreground/60 font-light leading-relaxed">
              Recognized for excellence in contemporary portrait photography
            </p>
          </div>

          <div className="bg-card/30 backdrop-blur-sm p-10 rounded-2xl border border-border/50 text-center animate-scale-in hover:border-accent/30 transition-all duration-500 group" style={{ animationDelay: "0.3s" }}>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-full mb-6 group-hover:bg-accent/20 transition-colors duration-300">
              <Users className="text-accent" size={32} />
            </div>
            <h3 className="font-serif text-xl font-medium mb-4 tracking-wide">1000+ Clients</h3>
            <p className="text-foreground/60 font-light leading-relaxed">
              Trusted by individuals and families for their most important moments
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
