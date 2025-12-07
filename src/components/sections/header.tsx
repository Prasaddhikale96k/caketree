"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#footer", label: "Contact" },
];

export default function Header() {
  return (
    <header className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <motion.nav 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 1 }}
        className="flex items-center gap-4 px-3 py-2 rounded-full border bg-card/50 backdrop-blur-lg shadow-md"
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-medium text-sm transition-colors text-foreground/80 hover:text-foreground px-3 py-1.5 rounded-full"
          >
            {link.label}
          </Link>
        ))}
      </motion.nav>
    </header>
  );
}
