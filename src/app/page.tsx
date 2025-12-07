import AboutSection from "@/components/sections/about";
import ContactSection from "@/components/sections/contact";
import Footer from "@/components/sections/footer";
import GallerySection from "@/components/sections/gallery";
import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero";
import MapSection from "@/components/sections/map";
import MenuSection from "@/components/sections/menu";
import SpecialsSection from "@/components/sections/specials";
import TestimonialsSection from "@/components/sections/testimonials";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <MenuSection />
      <SpecialsSection />
      <TestimonialsSection />
      <MapSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
