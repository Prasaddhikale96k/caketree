"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function SocialLinks() {
  const instaUrl = "https://www.instagram.com/thecaketree1009/";

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 1 }}
      className="hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 flex-col items-center gap-4 z-50"
    >
      <div className="flex flex-col items-center gap-2">
        <p className="text-xs uppercase tracking-widest" style={{ writingMode: 'vertical-rl' }}>Follow us on</p>
        <div className="h-16 w-px bg-foreground/20"></div>
      </div>
      <Link href={instaUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold uppercase tracking-wider -rotate-90 origin-center whitespace-nowrap hover:text-accent transition-colors">
        Instagram
      </Link>
    </motion.div>
  );
}
