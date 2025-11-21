import { Briefcase, Heart, Baby, Sparkles } from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Corporate Headshots",
    description: "Professional portraits for business professionals, executives, and personal branding",
    price: "From $250",
  },
  {
    icon: Heart,
    title: "Couples & Engagement",
    description: "Romantic portraits celebrating your relationship and milestones",
    price: "From $400",
  },
  {
    icon: Baby,
    title: "Family Portraits",
    description: "Timeless family photographs preserving precious moments together",
    price: "From $350",
  },
  {
    icon: Sparkles,
    title: "Creative Portraits",
    description: "Artistic and fashion-forward photography for unique expressions",
    price: "From $300",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-32 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="font-serif text-5xl md:text-6xl font-light mb-6 tracking-wide">
            Services
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-6"></div>
          <p className="text-base text-foreground/70 max-w-2xl mx-auto font-light tracking-wide leading-relaxed">
            Tailored photography sessions to meet your unique needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-card/50 backdrop-blur-sm p-10 rounded-2xl border border-border/50 hover:border-accent/30 hover:shadow-hover transition-all duration-500 animate-fade-up group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                    <Icon className="text-accent" size={26} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl font-medium mb-3 tracking-wide">
                      {service.title}
                    </h3>
                    <p className="text-foreground/70 mb-5 font-light leading-relaxed">
                      {service.description}
                    </p>
                    <p className="text-accent font-medium tracking-wide">{service.price}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
