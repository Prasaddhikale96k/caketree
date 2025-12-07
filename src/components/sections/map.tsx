import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

export default function MapSection() {
  const mapImage = PlaceHolderImages.find((p) => p.id === "map-image");
  const mapLink = "https://maps.app.goo.gl/M4s5eM3W3qA8Z9jE8"; 

  return (
    <section id="map" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-accent">Find Your Way to Us</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto text-balance">
            We are conveniently located at Shop no.4, Vaishnavi park-A, Behind Jatra Hotel, Nandur Naka Road, Adgaon, Nashik.
          </p>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-stone-200/50 dark:shadow-stone-900/50 animate-soft-zoom-in">
          <a href={mapLink} target="_blank" rel="noopener noreferrer" className="block">
            {mapImage && (
              <Image
                src={mapImage.imageUrl}
                alt={mapImage.description}
                width={1200}
                height={600}
                className="w-full h-auto aspect-[2/1] object-cover"
                data-ai-hint={mapImage.imageHint}
              />
            )}
            <div className="absolute inset-0 bg-black/20 hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <MapPin className="text-destructive w-16 h-16 animate-bounce-in drop-shadow-2xl"/>
            </div>
          </a>
        </div>
        <div className="text-center mt-8">
            <Button size="lg" asChild className="transition-transform hover:scale-105 animate-fade-in-up [animation-delay:0.2s]">
                <a href={mapLink} target="_blank" rel="noopener noreferrer">
                    Open in Google Maps
                </a>
            </Button>
        </div>
      </div>
    </section>
  );
}
