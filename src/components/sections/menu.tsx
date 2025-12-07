"use client";

import Image from "next/image";
import { menuItems } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus } from "lucide-react";
import { useCart } from "@/context/cart-context";
import React from 'react';
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function MenuSection() {
  const categories = [...new Set(menuItems.map((item) => item.category))];
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>, item: (typeof menuItems)[0]) => {
    const cardElement = (e.target as HTMLElement).closest('.menu-item-card');
    const imageElement = cardElement?.querySelector('.menu-item-image');
    
    if (imageElement) {
      const rect = imageElement.getBoundingClientRect();
      const clonedImage = imageElement.cloneNode(true) as HTMLImageElement;
      clonedImage.style.position = 'fixed';
      clonedImage.style.left = `${rect.left}px`;
      clonedImage.style.top = `${rect.top}px`;
      clonedImage.style.width = `${rect.width}px`;
      clonedImage.style.height = `${rect.height}px`;
      clonedImage.style.zIndex = '1000';
      clonedImage.style.transition = 'all 0.5s cubic-bezier(0.5, 0, 0.75, 0)';
      clonedImage.style.borderRadius = '0.5rem';

      document.body.appendChild(clonedImage);

      const cartIcon = document.getElementById('cart-icon');
      const cartRect = cartIcon?.getBoundingClientRect();
      
      if (cartRect) {
        requestAnimationFrame(() => {
            clonedImage.style.left = `${cartRect.left + cartRect.width / 2}px`;
            clonedImage.style.top = `${cartRect.top + cartRect.height / 2}px`;
            clonedImage.style.width = '0px';
            clonedImage.style.height = '0px';
            clonedImage.style.opacity = '0';
        });
      }
      
      setTimeout(() => {
        clonedImage.remove();
      }, 500);
    }
    
    addItem({ ...item, quantity: 1 });
  };

  return (
    <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="md:col-span-2 lg:col-span-3">
    <Card id="menu" className="p-8">
      <h2 className="text-4xl md:text-5xl font-extrabold text-foreground leading-none mb-6">Our Menu</h2>
      <Tabs defaultValue={categories[0]} className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5 mb-8 h-auto flex-wrap bg-transparent p-0">
          {categories.map((category) => (
            <TabsTrigger key={category} value={category} className="py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-none">
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {categories.map((category) => (
          <TabsContent key={category} value={category}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {menuItems
                .filter((item) => item.category === category)
                .map((item, index) => {
                  const itemImage = PlaceHolderImages.find((p) => p.id === item.imageId);
                  return (
                    <Card key={item.id} className="menu-item-card overflow-hidden flex flex-col group">
                      <CardHeader className="p-0 relative aspect-[4/3] w-full">
                        {itemImage && (
                          <Image
                            src={itemImage.imageUrl}
                            alt={item.name}
                            fill
                            className="object-cover menu-item-image transition-transform duration-500 group-hover:scale-105"
                            data-ai-hint={itemImage.imageHint}
                          />
                        )}
                      </CardHeader>
                      <CardFooter className="flex justify-between items-center p-4">
                        <div>
                            <p className="font-semibold">{item.name}</p>
                            <p className="text-sm text-muted-foreground">₹{item.price}</p>
                        </div>
                        <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                        <Button size="icon" variant="outline" className="rounded-full" aria-label="Add to cart" onClick={(e) => handleAddToCart(e, item)}>
                          <Plus className="h-4 w-4" />
                        </Button>
                        </motion.div>
                      </CardFooter>
                    </Card>
                  );
                })}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </Card>
    </motion.div>
  );
}
