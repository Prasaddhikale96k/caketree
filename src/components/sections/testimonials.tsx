"use client";

import * as React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { testimonials } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import { StarRating } from "@/components/ui/star-rating";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function TestimonialsSection() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  ]);

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-accent">Words from Our Guests</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto text-balance">
            We are proud to have a 4.7-star rating. Here's what our happy customers have to say.
          </p>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((testimonial, index) => {
              const testimonialImage = PlaceHolderImages.find((p) => p.id === testimonial.imageId);
              return (
                <div className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0 pl-8" key={index}>
                  <Card className="h-full">
                    <CardContent className="p-8 flex flex-col items-center text-center">
                        <Avatar className="w-20 h-20 mb-4 border-4 border-primary/50">
                            {testimonialImage && <AvatarImage src={testimonialImage.imageUrl} alt={testimonial.name} data-ai-hint={testimonialImage.imageHint} />}
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <p className="text-muted-foreground italic">&ldquo;{testimonial.review}&rdquo;</p>
                        <div className="mt-4">
                            <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                            <div className="flex justify-center mt-1">
                                <StarRating rating={testimonial.rating} />
                            </div>
                        </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
