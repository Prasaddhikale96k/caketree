"use client";

import * as React from "react";
import Image from "next/image";
import { testimonials } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card } from "@/components/ui/card";
import { StarRating } from "@/components/ui/star-rating";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function TestimonialsSection() {

  return (
    <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="md:col-span-2 lg:col-span-1">
      <Card id="testimonials" className="p-8 h-full">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground leading-none mb-6">Reviews</h2>
        <div className="flex flex-col gap-6">
            {testimonials.slice(0,2).map((testimonial) => {
              const testimonialImage = PlaceHolderImages.find((p) => p.id === testimonial.imageId);
              return (
                  <div key={testimonial.id} className="flex gap-4 items-start">
                    {testimonialImage && (
                        <Image src={testimonialImage.imageUrl} alt={testimonial.name} data-ai-hint={testimonialImage.imageHint} width={40} height={40} className="rounded-full mt-1" />
                    )}
                    <div className="flex-1">
                        <p className="text-sm leading-relaxed text-muted-foreground">&ldquo;{testimonial.review}&rdquo;</p>
                        <div className="mt-2 flex items-center justify-between">
                            <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                            <div className="flex">
                                <StarRating rating={testimonial.rating} starClassName="w-4 h-4" />
                            </div>
                        </div>
                    </div>
                  </div>
              );
            })}
          </div>
      </Card>
    </motion.div>
  );
}
