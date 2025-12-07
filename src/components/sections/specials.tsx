import Image from "next/image";
import { specials } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "../ui/button";

export default function SpecialsSection() {
  return (
    <section id="specials" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-accent">Our Best Sellers</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto text-balance">
            Handpicked by our customers. These are the stars of The Cake Tree.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {specials.map((item, index) => {
            const itemImage = PlaceHolderImages.find((p) => p.id === item.imageId);
            return (
              <div
                key={item.id}
                className="relative group overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-stone-300/50 dark:hover:shadow-stone-900/50 animate-fade-in-up"
                style={{animationDelay: `${index * 0.15}s`}}
              >
                <div className="relative w-full aspect-video">
                  {itemImage && (
                    <Image
                      src={itemImage.imageUrl}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      data-ai-hint={itemImage.imageHint}
                    />
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-0 ring-1 ring-inset ring-primary/20 group-hover:ring-primary/80 rounded-2xl transition-all duration-500 group-hover:shadow-[0_0_20px_5px_hsl(var(--primary)/0.3)]" />

                <div className="absolute bottom-0 left-0 p-6 md:p-8 text-white">
                  <h3 className="text-2xl lg:text-3xl font-bold">{item.name}</h3>
                  <p className="text-sm text-white/80 mt-2 max-w-sm">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
