"use client";

import * as React from "react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card } from "../ui/card";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const ImageRow = ({ images, className }: { images: typeof PlaceHolderImages, className?: string }) => (
    <div className={cn("flex gap-8", className)}>
        {images.map((image, index) => (
            <div className="relative w-72 h-96 shrink-0" key={index}>
                <Image
                    src={image.imageUrl}
                    alt={image.description}
                    fill
                    className="object-cover rounded-lg shadow-2xl"
                    sizes="25vw"
                    data-ai-hint={image.imageHint}
                />
            </div>
        ))}
    </div>
);

export default function GallerySection() {
  const galleryImages = PlaceHolderImages.filter(p => p.id.startsWith("gallery-"));
  const allImages = [...galleryImages, ...galleryImages]; // Duplicate for seamless loop

  return (
    <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="md:col-span-2 lg:col-span-2">
       <Card id="gallery" className="p-8 h-full flex flex-col justify-center bg-transparent border-none shadow-none overflow-hidden">
         <h2 className="text-4xl md:text-5xl font-extrabold text-foreground leading-none text-center mb-8">
            Ambiance
         </h2>
         <div className="w-full overflow-hidden py-8 -rotate-6">
            <div className="flex flex-col gap-8">
                <div className="animate-marquee flex gap-8">
                    <ImageRow images={allImages} />
                </div>
                <div className="animate-marquee flex gap-8" style={{ animationDirection: 'reverse', animationDelay: '-15s' }}>
                    <ImageRow images={allImages} />
                </div>
            </div>
         </div>
      </Card>
    </motion.div>
  );
}
