"use client";

import * as React from "react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card } from "../ui/card";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function GallerySection() {
  const galleryImages = PlaceHolderImages.filter(p => p.id.startsWith("gallery-")).slice(0, 4);

  return (
    <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="md:col-span-2 lg:col-span-2">
       <Card className="p-8 h-full">
         <h2 className="text-4xl md:text-5xl font-extrabold text-foreground leading-none mb-6">Ambiance</h2>
         <div className="grid grid-cols-2 gap-4 h-full">
          {galleryImages.map((image, index) => (
              <div className="relative aspect-square rounded-lg overflow-hidden group" key={index}>
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                    data-ai-hint={image.imageHint}
                  />
              </div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}
