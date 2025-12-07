"use client";
import { Card } from "@/components/ui/card";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const textContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const textLineVariants = {
  hidden: { y: '100%', opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function HeroSection() {
  const videoUrl = "https://videos.pexels.com/video-files/3119255/3119255-hd_1920_1080_25fps.mp4";
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <>
      <motion.div ref={heroRef} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="md:col-span-2 lg:col-span-2">
        <Card className="h-full flex flex-col justify-center p-8 overflow-hidden">
          <motion.h1
            variants={textContainerVariants}
            initial="hidden"
            animate="visible"
            className="text-center font-headline font-bold text-foreground text-[clamp(3rem,8vw,6rem)] leading-none tracking-tighter"
            style={{ y }}
          >
            <span className="block overflow-hidden">
                <motion.span variants={textLineVariants} className="block">Good Times,</motion.span>
            </span>
            <span className="block overflow-hidden">
                <motion.span variants={textLineVariants} className="block">Great Tastes</motion.span>
            </span>
          </motion.h1>
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
