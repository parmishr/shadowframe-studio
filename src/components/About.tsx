import { Camera, Award, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Crafting Visual Stories
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            With over a decade of experience in portrait photography, I specialize in creating
            timeless images that capture the essence of each individual. Every session is a
            collaboration, blending artistic vision with authentic emotion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-card-gradient p-8 rounded-lg border border-border text-center animate-scale-in">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary rounded-full mb-4">
              <Camera className="text-foreground" size={28} />
            </div>
            <h3 className="font-serif text-xl font-semibold mb-3">Professional Equipment</h3>
            <p className="text-muted-foreground">
              State-of-the-art cameras and lighting to ensure exceptional quality
            </p>
          </div>

          <div className="bg-card-gradient p-8 rounded-lg border border-border text-center animate-scale-in" style={{ animationDelay: "0.1s" }}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary rounded-full mb-4">
              <Award className="text-foreground" size={28} />
            </div>
            <h3 className="font-serif text-xl font-semibold mb-3">Award-Winning</h3>
            <p className="text-muted-foreground">
              Recognized for excellence in contemporary portrait photography
            </p>
          </div>

          <div className="bg-card-gradient p-8 rounded-lg border border-border text-center animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary rounded-full mb-4">
              <Users className="text-foreground" size={28} />
            </div>
            <h3 className="font-serif text-xl font-semibold mb-3">1000+ Clients</h3>
            <p className="text-muted-foreground">
              Trusted by individuals and families for their most important moments
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
