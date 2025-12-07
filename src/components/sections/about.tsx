"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function AboutSection() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-image');

  return (
    <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="md:col-span-1 lg:col-span-1">
      <Card className="h-full flex flex-col p-8 overflow-hidden group">
          <div className="flex-1 space-y-4">
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground leading-none">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed text-balance">
              It begins in the quiet hours, when golden light first spills into the kitchen. The Cake Tree was born not from a recipe, but a feeling—a love for the slow, handcrafted magic of baking. Here, time is an ingredient. Chocolate is patiently melted, fruits are precisely placed, and every creation is finished by hand, with heart.
            </p>
          </div>
          {aboutImage && (
            <div className="relative h-64 mt-6 rounded-lg overflow-hidden">
                <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    data-ai-hint={aboutImage.imageHint}
                />
            </div>
          )}
      </Card>
    </motion.div>
  );
}
