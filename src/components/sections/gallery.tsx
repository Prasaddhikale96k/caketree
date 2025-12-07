"use client";

import * as React from "react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export default function GallerySection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  const galleryImages = PlaceHolderImages.filter(p => p.id.startsWith("gallery-"));

  return (
    <section ref={targetRef} id="gallery" className="relative h-[300vh] bg-background">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
            <motion.div style={{ x }} className="flex gap-8">
            {galleryImages.map((image) => {
                return (
                    <div key={image.id} className="relative w-[50vw] md:w-[25vw] h-[75vh] overflow-hidden rounded-lg shadow-xl">
                         <Image
                            src={image.imageUrl}
                            alt={image.description}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 50vw, 25vw"
                            data-ai-hint={image.imageHint}
                        />
                    </div>
                );
            })}
            </motion.div>
        </div>
    </section>
  );
}