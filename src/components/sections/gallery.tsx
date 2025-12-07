"use client";

import * as React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    const rotateX = (y / height - 0.5) * -30;
    const rotateY = (x / width - 0.5) * 30;
    ref.current.style.setProperty("--rotateX", `${rotateX}deg`);
    ref.current.style.setProperty("--rotateY", `${rotateY}deg`);
    ref.current.style.setProperty("transform", `perspective(1000px) rotateX(var(--rotateX)) rotateY(var(--rotateY)) scale3d(1.05, 1.05, 1.05)`);
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.setProperty("transform", "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)");
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn("transform-style-3d transition-transform duration-300", className)}
    >
      {children}
    </div>
  );
};


export default function GallerySection() {
  const galleryImages = PlaceHolderImages.filter(p => p.id.startsWith("gallery-"));

  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start", dragFree: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-secondary/50 overflow-hidden">
      <div className="container mx-auto px-4 mb-12 text-center animate-fade-in-up">
        <h2 className="text-3xl md:text-4xl font-bold text-accent">Ambiance Reel</h2>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto text-balance">
          A glimpse into the warm and cozy atmosphere of our café.
        </p>
      </div>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex cursor-grab active:cursor-grabbing">
          {galleryImages.map((image, index) => (
            <div className="embla__slide flex-[0_0_80%] sm:flex-[0_0_40%] md:flex-[0_0_30%] lg:flex-[0_0_25%] min-w-0 pl-4" key={index}>
              <TiltCard>
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl shadow-stone-300/50 dark:shadow-stone-900/50">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 80vw, (max-width: 768px) 40vw, (max-width: 1024px) 30vw, 25vw"
                    data-ai-hint={image.imageHint}
                  />
                </div>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
