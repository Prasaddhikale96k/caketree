"use client";

import * as React from "react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const StickyImage = ({ image }: { image: (typeof PlaceHolderImages)[0] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0.5]);

  return (
    <motion.div ref={ref} style={{ scale, opacity }} className="sticky top-0 h-screen flex items-center justify-center">
        <div className={cn("relative w-[40vw] h-[60vh] rounded-lg overflow-hidden shadow-2xl")}>
            <Image
                src={image.imageUrl}
                alt={image.description}
                fill
                className="object-cover"
                sizes="50vw"
                data-ai-hint={image.imageHint}
            />
        </div>
    </motion.div>
  );
};

export default function GallerySection() {
  const galleryImages = PlaceHolderImages.filter(p => p.id.startsWith("gallery-")).slice(0, 4);

  return (
    <div id="gallery" className="md:col-span-2 lg:col-span-3 py-16 relative bg-foreground/90 text-background">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-none">
          Ambiance
        </h2>
      </div>
      {galleryImages.map((image, index) => (
        <StickyImage key={index} image={image} />
      ))}
    </div>
  );
}
