import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";
import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const portfolioItems = [
  { id: 1, image: portfolio1, alt: "Professional corporate portrait" },
  { id: 2, image: portfolio2, alt: "Elegant studio portrait" },
  { id: 3, image: portfolio3, alt: "Contemporary artist portrait" },
  { id: 4, image: portfolio4, alt: "Romantic couple portrait" },
  { id: 5, image: portfolio5, alt: "Corporate headshot" },
  { id: 6, image: portfolio6, alt: "Fashion-forward portrait" },
];

const Portfolio = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + portfolioItems.length) % portfolioItems.length);
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % portfolioItems.length);
    }
  };

  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Portfolio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of recent work showcasing diverse styles and subjects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative aspect-[4/5] overflow-hidden rounded-lg animate-scale-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={selectedIndex !== null} onOpenChange={(open) => !open && setSelectedIndex(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95 border-none">
          <DialogClose className="absolute right-4 top-4 z-50 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-6 w-6 text-white" />
            <span className="sr-only">Close</span>
          </DialogClose>
          
          {selectedIndex !== null && (
            <div className="relative flex items-center justify-center w-full h-full min-h-[80vh]">
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 z-50 h-12 w-12 rounded-full bg-black/50 text-white hover:bg-black/70"
                onClick={handlePrevious}
              >
                <ChevronLeft className="h-8 w-8" />
                <span className="sr-only">Previous image</span>
              </Button>

              <img
                src={portfolioItems[selectedIndex].image}
                alt={portfolioItems[selectedIndex].alt}
                className="max-w-full max-h-[85vh] object-contain"
              />

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 z-50 h-12 w-12 rounded-full bg-black/50 text-white hover:bg-black/70"
                onClick={handleNext}
              >
                <ChevronRight className="h-8 w-8" />
                <span className="sr-only">Next image</span>
              </Button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
                {selectedIndex + 1} / {portfolioItems.length}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Portfolio;
