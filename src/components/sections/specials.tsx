"use client";

import Image from "next/image";
import { specials } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card } from "../ui/card";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function SpecialsSection() {

  return (
    <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="md:col-span-2 lg:col-span-2">
      <Card id="specials" className="p-8 h-full">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground leading-none mb-6">Our Best Sellers</h2>
        <div className="grid grid-cols-2 gap-4">
          {specials.slice(0,2).map((item) => {
            const itemImage = PlaceHolderImages.find((p) => p.id === item.imageId);
            return (
              <div
                key={item.id}
                className="relative group overflow-hidden rounded-lg"
              >
                 <div className="relative w-full aspect-square">
                  {itemImage && (
                    <Image
                      src={itemImage.imageUrl}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      data-ai-hint={itemImage.imageHint}
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-lg font-bold">{item.name}</h3>
                  <p className="text-sm text-white/80">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Card>
    </motion.div>
  );
}
