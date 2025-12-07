"use client";

import Image from "next/image";
import { menuItems } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus } from "lucide-react";

export default function MenuSection() {
  const categories = [...new Set(menuItems.map((item) => item.category))];

  return (
    <section id="menu" className="py-16 sm:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-accent">Our Menu</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto text-balance">
            Crafted with love and the finest ingredients. Explore our range of delightful treats.
          </p>
        </div>

        <Tabs defaultValue={categories[0]} className="w-full animate-fade-in-up [animation-delay:0.2s]">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5 mb-8 h-auto flex-wrap">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category} className="py-2">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {menuItems
                  .filter((item) => item.category === category)
                  .map((item, index) => {
                    const itemImage = PlaceHolderImages.find((p) => p.id === item.imageId);
                    return (
                      <Card key={item.id} className="overflow-hidden flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-stone-300/50 dark:hover:shadow-stone-900/50 animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                        <CardHeader className="p-0">
                          <div className="relative aspect-square">
                            {itemImage && (
                              <Image
                                src={itemImage.imageUrl}
                                alt={item.name}
                                fill
                                className="object-cover"
                                data-ai-hint={itemImage.imageHint}
                              />
                            )}
                          </div>
                        </CardHeader>
                        <CardContent className="p-4 flex-grow">
                          <CardTitle className="text-lg font-semibold mb-1">{item.name}</CardTitle>
                          <p className="text-sm text-muted-foreground h-10">{item.description}</p>
                        </CardContent>
                        <CardFooter className="flex justify-between items-center p-4 pt-0">
                          <p className="text-lg font-bold text-primary">₹{item.price}</p>
                          <Button size="icon" variant="outline" aria-label="Add to cart">
                            <Plus className="h-4 w-4" />
                          </Button>
                        </CardFooter>
                      </Card>
                    );
                  })}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
