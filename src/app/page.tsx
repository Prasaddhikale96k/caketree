"use client";

import AboutSection from "@/components/sections/about";
import Footer from "@/components/sections/footer";
import GallerySection from "@/components/sections/gallery";
import HeroSection from "@/components/sections/hero";
import MenuSection from "@/components/sections/menu";
import SpecialsSection from "@/components/sections/specials";
import TestimonialsSection from "@/components/sections/testimonials";
import Marquee from "@/components/ui/marquee";

export default function Home() {
  return (
    <div className="p-4">
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <HeroSection />
        <AboutSection />
        <SpecialsSection />
        <MenuSection />
        <GallerySection />
        <TestimonialsSection />
      </main>
      <Marquee text="Freshly Baked • Nature Lover • Organic Ingredients" />
      <Footer />
    </div>
  );
}
