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
    <section id="services" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tailored photography sessions to meet your unique needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-card-gradient p-8 rounded-lg border border-border hover:shadow-glow transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                    <Icon className="text-accent-foreground" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <p className="text-accent font-semibold">{service.price}</p>
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
