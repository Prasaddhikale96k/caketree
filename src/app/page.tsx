"use client";

import AboutSection from "@/components/sections/about";
import ContactSection from "@/components/sections/contact";
import Footer from "@/components/sections/footer";
import GallerySection from "@/components/sections/gallery";
import GoogleRatingSection from "@/components/sections/google-rating";
import HeroSection from "@/components/sections/hero";
import MapSection from "@/components/sections/map";
import MenuSection from "@/components/sections/menu";
import SpecialsSection from "@/components/sections/specials";
import TestimonialsSection from "@/components/sections/testimonials";
import Marquee from "@/components/ui/marquee";

export default function Home() {
  return (
    <div className="bg-background">
      <div className="p-4 md:p-8 space-y-16">
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <HeroSection />
          <AboutSection />
          <SpecialsSection />
          <MenuSection />
        </main>
      </div>

      <GallerySection />

      <div className="p-4 md:p-8 space-y-16">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialsSection />
            <ContactSection />
            <MapSection />
            <GoogleRatingSection />
         </div>
      </div>

      <Marquee text="Freshly Baked • Nature Lover • Organic Ingredients" />
      <Footer />
    </div>
  );
}
