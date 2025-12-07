"use client";

import Image from "next/image";
import { specials } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import React, { useRef } from "react";
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import { motion, useTransform } from "framer-motion";

export default function SpecialsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScrollProgress(containerRef);

  // This will map the scroll progress (0 to 1) to a horizontal movement.
  // The numbers (-100, 100) can be adjusted to change the scroll distance.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section
      id="specials"
      ref={containerRef}
      className="py-16 sm:py-24 bg-background relative h-[200vh]"
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="container mx-auto px-4 mb-12 text-center animate-fade-in-up absolute top-16 sm:top-24 left-0 right-0 z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-accent">Our Best Sellers</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto text-balance">
            Handpicked by our customers. These are the stars of The Cake Tree.
          </p>
        </div>
        <motion.div style={{ x }} className="flex gap-8 px-4">
          {specials.map((item, index) => {
            const itemImage = PlaceHolderImages.find((p) => p.id === item.imageId);
            return (
              <div
                key={item.id}
                className="relative group overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-stone-300/50 dark:hover:shadow-stone-900/50 w-[80vw] md:w-[60vw] lg:w-[45vw] flex-shrink-0"
              >
                <div className="relative w-full aspect-video">
                  {itemImage && (
                    <Image
                      src={itemImage.imageUrl}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      data-ai-hint={itemImage.imageHint}
                      sizes="(max-width: 768px) 80vw, (max-width: 1024px) 60vw, 45vw"
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
        </motion.div>
      </div>
    </section>
  );
}
