import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-image');

  return (
    <section id="about" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <Card className="overflow-hidden border-none shadow-2xl shadow-stone-200/50 dark:shadow-stone-900/50">
          <div className="grid md:grid-cols-2 items-center">
            <div className="relative h-64 md:h-[500px] overflow-hidden group">
              {aboutImage && (
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  fill
                  className="object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110"
                  data-ai-hint={aboutImage.imageHint}
                />
              )}
               <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
            <div className="p-8 md:p-12 space-y-6 animate-fade-in-up [animation-delay:0.2s]">
              <h2 className="text-3xl md:text-4xl font-bold font-script text-accent">A Story Baked in Every Layer</h2>
              <p className="text-muted-foreground leading-relaxed text-balance">
                It begins in the quiet hours, when golden light first spills into the kitchen. The Cake Tree was born not from a recipe, but a feeling—a love for the slow, handcrafted magic of baking. Here, time is an ingredient. Chocolate is patiently melted, fruits are precisely placed, and every creation is finished by hand, with heart. We believe a cake should be more than just a dessert; it should be the centerpiece of a memory. We invite you to taste the story.
              </p>
              <div className="flex items-center gap-6 pt-4">
                  <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-primary/80"><path d="M16 16.33a2.47 2.47 0 0 0-2.4-2.73h-3.2a2.47 2.47 0 0 0-2.4 2.73c0 1.43.2 2.58.55 3.55.44 1.2.92 2.12 1.35 2.5.42.38 1.12.62 1.85.62s1.43-.24 1.85-.62c.43-.38.9-1.3 1.35-2.5.35-.97.55-2.12.55-3.55Z"/><path d="M17.43 13.63a4.5 4.5 0 0 0-9.86 0"/><path d="M12 2v4"/><path d="m18.36 5.64 1.42-1.42"/><path d="m4.22 4.22 1.42 1.42"/></svg>
                    <span className="font-semibold">Always Fresh</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-primary/80"><path d="M17.5 11c0 2.3-1.4 4-3 4.8V19h-1v-3.2c-1.6-.8-3-2.5-3-4.8c0-2.8 2.2-5 5-5s5 2.2 5 5Z"/><path d="M10 11a2.5 2.5 0 0 1 5 0Z"/><path d="M2 21h20"/></svg>
                    <span className="font-semibold">Handcrafted</span>
                  </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
