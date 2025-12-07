"use client";

import { Clock, Instagram, Phone, MessageCircle } from "lucide-react";
import { Card } from "../ui/card";
import { motion } from "framer-motion";

const contactInfo = [
  { icon: Phone, text: "+91 12345 67890", href: "tel:+911234567890" },
  { icon: MessageCircle, text: "WhatsApp Us", href: "https://wa.me/911234567890" },
  { icon: Instagram, text: "@thecaketree", href: "https://instagram.com" },
];

const openingHours = [
  { day: "Mon - Fri", hours: "9am - 9pm" },
  { day: "Sat - Sun", hours: "10am - 10pm" },
];

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ContactSection() {
  return (
    <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="md:col-span-1 lg:col-span-2">
      <Card className="p-8 h-full">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground leading-none mb-6">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <a 
                  key={index} 
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group text-muted-foreground hover:text-foreground transition-colors"
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.text}</span>
                </a>
              ))}
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold flex items-center gap-2"><Clock className="w-5 h-5"/> Hours</h3>
            <div className="space-y-1 text-muted-foreground">
              {openingHours.map((item, index) => (
                <div key={index} className="flex justify-between">
                  <span>{item.day}</span>
                  <span className="font-medium text-foreground">{item.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
