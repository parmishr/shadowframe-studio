import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="font-serif text-5xl md:text-6xl font-light mb-6 tracking-wide">
            Get In Touch
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-6"></div>
          <p className="text-base text-foreground/70 max-w-2xl mx-auto font-light tracking-wide leading-relaxed">
            Ready to create something beautiful? Let's discuss your vision
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <div className="space-y-10 animate-fade-up">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center">
                <Mail className="text-accent" size={22} />
              </div>
              <div>
                <h3 className="font-medium mb-2 tracking-wide">Email</h3>
                <p className="text-foreground/60 font-light">info@portraitstudio.com</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center">
                <Phone className="text-accent" size={22} />
              </div>
              <div>
                <h3 className="font-medium mb-2 tracking-wide">Phone</h3>
                <p className="text-foreground/60 font-light">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center">
                <MapPin className="text-accent" size={22} />
              </div>
              <div>
                <h3 className="font-medium mb-2 tracking-wide">Studio</h3>
                <p className="text-foreground/60 font-light">
                  123 Photography Lane<br />
                  New York, NY 10001
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div>
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-card/50 border-border/50 backdrop-blur-sm h-12 focus:border-accent/50 transition-colors duration-300"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-card/50 border-border/50 backdrop-blur-sm h-12 focus:border-accent/50 transition-colors duration-300"
              />
            </div>
            <div>
              <Input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="bg-card/50 border-border/50 backdrop-blur-sm h-12 focus:border-accent/50 transition-colors duration-300"
              />
            </div>
            <div>
              <Textarea
                placeholder="Tell me about your photography needs..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="bg-card/50 border-border/50 backdrop-blur-sm resize-none focus:border-accent/50 transition-colors duration-300"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-glow transition-all duration-500 h-12 tracking-wide"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
