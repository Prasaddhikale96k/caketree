"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingBag, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-context";
import { useIsMobile } from "@/hooks/use-mobile";
import MobileNav from "./mobile-nav";
import { useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#footer", label: "Contact" },
];

export default function Header() {
  const isMobile = useIsMobile();
  const { cartCount, setIsCartOpen } = useCart();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  if (isMobile) {
    return (
      <>
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-background/80 backdrop-blur-md border-b">
          <Button variant="ghost" size="icon" onClick={() => setIsMobileNavOpen(true)}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open navigation</span>
          </Button>
          <div className="text-lg font-bold">The Cake Tree</div>
          <Button variant="ghost" size="icon" onClick={() => setIsCartOpen(true)} className="relative">
            <ShoppingBag className="h-6 w-6" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                {cartCount}
              </span>
            )}
            <span className="sr-only">Open cart</span>
          </Button>
        </header>
        <MobileNav isOpen={isMobileNavOpen} onOpenChange={setIsMobileNavOpen} navLinks={navLinks} />
      </>
    );
  }

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
