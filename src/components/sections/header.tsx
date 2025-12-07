"use client";

import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const logoUrl = "https://instagram.fisk3-1.fna.fbcdn.net/v/t51.2885-19/65715069_418995875373773_4319162560470319104_n.jpg?cb=8438d1d6-990335f2&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby43MjAuYzIifQ&_nc_ht=instagram.fisk3-1.fna.fbcdn.net&_nc_cat=105&_nc_oc=Q6cZ2QG3mw88IcsXwBG1w_xC-PQ2ynN_glPSuXiWUBofMDpedFyXdoPv5tGaxpu8hZGkmSlZ_Fi1v81XVqRHe7ncbS63&_nc_ohc=SCkqUGA-Gx8Q7kNvwFO8T0e&_nc_gid=IHX42Pg9E5mq1pNMLc_0dA&edm=APoiHPcBAAAA&ccb=7-5&oh=00_Afl-sFaPBYOP19e3wA0dWXvQsw9WBRArPxZ8Ff36_H7Sqg&oe=693B0045&_nc_sid=22de04";

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
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-lg shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/50">
              <Image src={logoUrl} alt="The Cake Tree Logo" layout="fill" objectFit="cover" />
            </div>
            <span className={cn(
              "font-bold text-xl transition-colors", 
              isScrolled ? "text-foreground" : "text-white"
            )}>
              The Cake Tree
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "font-medium transition-colors hover:text-primary",
                  isScrolled ? "text-foreground/80" : "text-white/80 hover:text-white"
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className={cn("transition-colors", isScrolled ? "text-foreground" : "text-white hover:bg-white/10 hover:text-white")}>
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
