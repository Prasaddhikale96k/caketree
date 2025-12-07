import { Clock, Instagram, MapPin, Phone, MessageCircle } from "lucide-react";
import { Button } from "../ui/button";

const contactInfo = [
  { icon: Phone, text: "+91 12345 67890", href: "tel:+911234567890" },
  { icon: MessageCircle, text: "WhatsApp Us", href: "https://wa.me/911234567890" },
  { icon: MapPin, text: "Shop no.4, Vaishnavi park-A, Adgaon, Nashik", href: "#map" },
  { icon: Instagram, text: "@thecaketree", href: "https://instagram.com" },
];

const openingHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 9:00 PM" },
  { day: "Saturday - Sunday", hours: "10:00 AM - 10:00 PM" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-accent">Get In Touch</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto text-balance">
            We'd love to hear from you. Whether it's for a custom order or just to say hello, feel free to reach out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start">
          <div className="space-y-6 animate-fade-in-up [animation-delay:0.2s]">
            {contactInfo.map((item, index) => (
              <a 
                key={index} 
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <item.icon className="w-8 h-8 text-primary transition-transform group-hover:scale-110" />
                <span className="text-lg text-foreground/80 group-hover:text-primary transition-colors">{item.text}</span>
              </a>
            ))}
          </div>

          <div className="bg-card p-8 rounded-lg shadow-lg animate-fade-in-up [animation-delay:0.4s]">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3"><Clock className="w-6 h-6 text-primary"/> Opening Hours</h3>
            <div className="space-y-2 text-muted-foreground">
              {openingHours.map((item, index) => (
                <div key={index} className="flex justify-between">
                  <span>{item.day}</span>
                  <span className="font-medium text-foreground">{item.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
