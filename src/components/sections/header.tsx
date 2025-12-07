"use client";

import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const logoUrl = "https://img.sanishtech.com/u/0052685cea3109388424a100fcf44547.jpg";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#menu", label: "Menu" },
  { href: "#specials", label: "Specials" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

const NavLink = ({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-foreground/80 hover:text-primary transition-colors font-medium"
  >
    {label}
  </a>
);

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/50">
              <Image src={logoUrl} alt="The Cake Tree Logo" layout="fill" objectFit="cover" />
            </div>
            <span className="font-bold text-xl text-foreground">
              The Cake Tree
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-medium transition-colors text-foreground/80 hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground hover:bg-white/10 hover:text-white">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px] bg-background">
                <div className="flex flex-col space-y-6 pt-10">
                  {navLinks.map((link) => (
                    <NavLink key={link.href} href={link.href} label={link.label} onClick={closeMobileMenu} />
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
