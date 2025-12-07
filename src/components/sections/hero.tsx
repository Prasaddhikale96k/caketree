"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Phone, Instagram, MapPin } from "lucide-react";

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function HeroSection() {
  const videoUrl = "https://videos.pexels.com/video-files/3119255/3119255-hd_1920_1080_25fps.mp4";
  const logoUrl = "https://cognitive-plum-btds6czulo-ezkw5h00vs.edgeone.dev/cake%20tree.jpg";

  return (
    <>
      <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="md:col-span-2 lg:col-span-2">
        <Card className="h-full flex flex-col justify-between p-8">
          <div>
            <div className="flex items-center gap-3">
              <Image src={logoUrl} alt="The Cake Tree Logo" width={40} height={40} className="rounded-full" />
              <h1 className="font-bold text-lg">The Cake Tree</h1>
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground mt-4">
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-accent" />
                <span>4.7/5 on Google</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-accent" />
                <span>+91 86989 21009</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Instagram className="w-4 h-4 text-accent" />
                <span>@thecaketree1009</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Jatra Hotel, Nashik</span>
              </div>
            </div>
          </div>
          <div className="flex-1 flex items-center">
            <h2 className="text-6xl md:text-8xl font-extrabold text-foreground leading-none">
              Taste That<br />Blooms!
            </h2>
          </div>
          <p className="text-muted-foreground">
            Fresh Cakes • Café Ambiance • Jatra Hotel, Nashik
          </p>
        </Card>
      </motion.div>
      <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="md:col-span-1 lg:col-span-1">
        <Card className="h-full overflow-hidden group">
            <div className="relative h-full w-full">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={videoUrl}
                />
            </div>
        </Card>
      </motion.div>
    </>
  );
}
