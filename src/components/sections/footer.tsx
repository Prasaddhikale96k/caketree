"use client";

import Image from "next/image";
import { Instagram } from "lucide-react";

export default function Footer() {
  const logoUrl = "https://cognitive-plum-btds6czulo-ezkw5h00vs.edgeone.dev/cake%20tree.jpg";
  const mapUrl = "https://www.google.com/maps/search/?api=1&query=The+Cake+Tree+Nashik";
  const whatsappUrl = "https://wa.me/918698921009?text=Hi,%20I%20saw%20your%20website%20and%20would%20like%20to%20order!";
  const instaUrl = "https://www.instagram.com/thecaketree1009/";

  return (
    <footer id="footer" className="w-full mt-16 mb-8">
      <div className="container mx-auto px-4 py-6 text-center flex flex-col items-center space-y-6">
        <Image src={logoUrl} alt="The Cake Tree Logo" width={60} height={60} className="rounded-full" />
        
        <div className="text-center">
            <div className="font-sans uppercase tracking-widest text-xs text-muted-foreground mb-4">
            ★ Rated 4.7/5 on Google
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-2 text-foreground">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                    +91 86989 21009
                </a>
                <a href={instaUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors flex items-center gap-2">
                    <Instagram className="w-4 h-4" /> @thecaketree1009
                </a>
                <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                    📍 Jatra Hotel, Nashik
                </a>
            </div>
        </div>

        <p className="text-sm text-muted-foreground pt-8">
          © 2025 The Cake Tree | Designed by Prasad Dhikale
        </p>
      </div>
    </footer>
  );
}
