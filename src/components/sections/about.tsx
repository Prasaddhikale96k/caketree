import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-image');

  return (
    <section id="about" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <Card className="overflow-hidden border-none shadow-2xl shadow-stone-200/50 dark:shadow-stone-900/50">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 items-center">
              <div className="relative h-64 md:h-[500px] animate-fade-in">
                {aboutImage && (
                  <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={aboutImage.imageHint}
                  />
                )}
              </div>
              <div className="p-8 md:p-12 space-y-4 animate-fade-in-up [animation-delay:0.2s]">
                <h2 className="text-3xl md:text-4xl font-bold text-accent">Welcome to The Cake Tree</h2>
                <p className="text-muted-foreground leading-relaxed text-balance">
                  A premium café and bakery located behind Jatra Hotel, loved for fresh cakes, cozy ambiance, and a 4.7-star customer rating. Experience taste, freshness, and creativity in every bite.
                </p>
                <div className="flex items-center gap-2 pt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary h-10 w-10"><path d="M16 16.33a2.47 2.47 0 0 0-2.4-2.73h-3.2a2.47 2.47 0 0 0-2.4 2.73c0 1.43.2 2.58.55 3.55.44 1.2.92 2.12 1.35 2.5.42.38 1.12.62 1.85.62s1.43-.24 1.85-.62c.43-.38.9-1.3 1.35-2.5.35-.97.55-2.12.55-3.55Z"/><path d="M17.43 13.63a4.5 4.5 0 0 0-9.86 0"/><path d="M12 2v4"/><path d="m18.36 5.64 1.42-1.42"/><path d="m4.22 4.22 1.42 1.42"/><path d="M19.07 10.93a2.5 2.5 0 0 1 0 3.54l-.69.69a2.5 2.5 0 0 1-3.54 0l-.69-.69a2.5 2.5 0 0 1 0-3.54l.69-.69a2.5 2.5 0 0 1 3.54 0l.69.69Z"/><path d="M4.93 10.93a2.5 2.5 0 0 0 0 3.54l.69.69a2.5 2.5 0 0 0 3.54 0l.69-.69a2.5 2.5 0 0 0 0-3.54l-.69-.69a2.5 2.5 0 0 0-3.54 0l-.69.69Z"/></svg>
                    <svg xmlns="http://wwws.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary h-10 w-10"><path d="M17.5 11c0 2.3-1.4 4-3 4.8V19h-1v-3.2c-1.6-.8-3-2.5-3-4.8c0-2.8 2.2-5 5-5s5 2.2 5 5Z"/><path d="M10 11a2.5 2.5 0 0 1 5 0Z"/><path d="M2 21h20"/></svg>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
