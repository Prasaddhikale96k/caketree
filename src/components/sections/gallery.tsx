"use client";

import * as React from "react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card } from "../ui/card";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef }from "react";
import { cn } from "@/lib/utils";

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const ImageRow = ({ images, x, className }: { images: typeof PlaceHolderImages, x: any, className?: string }) => (
    <motion.div style={{ x }} className={cn("absolute flex gap-8 -translate-y-1/2 top-1/2", className)}>
        {images.map((image, index) => (
            <div className="relative w-64 h-80 shrink-0" key={index}>
                <Image
                    src={image.imageUrl}
                    alt={image.description}
                    fill
                    className="object-cover rounded-lg shadow-2xl -rotate-6"
                    sizes="25vw"
                    data-ai-hint={image.imageHint}
                />
            </div>
        ))}
    </motion.div>
);

export default function GallerySection() {
  const galleryImages = PlaceHolderImages.filter(p => p.id.startsWith("gallery-"));
  const row1 = galleryImages.slice(0, 5);
  const row2 = galleryImages.slice(5, 10);
  
  const galleryRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
      target: galleryRef,
      offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["25%", "-25%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-25%", "25%"]);
  const y = useTransform(scrollYProgress, [0, 1], ["-300px", "300px"]);


  return (
    <motion.div ref={galleryRef} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="md:col-span-2 lg:col-span-2 h-[150vh] -mx-4">
       <Card className="p-8 h-full sticky top-4 bg-foreground/90 backdrop-blur-sm overflow-hidden">
         <h2 className="text-4xl md:text-5xl font-extrabold text-background/80 leading-none text-center absolute top-16 left-1/2 -translate-x-1/2 z-10">
            Ambiance
         </h2>
         <motion.div style={{ y }} className="relative h-full">
            <ImageRow images={row1} x={x1} />
            <ImageRow images={row2} x={x2} className="top-2/3" />
         </motion.div>
      </Card>
    </motion.div>
  );
}
