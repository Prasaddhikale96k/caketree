"use client";

import Image from 'next/image';
import { Minus, Plus, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart, CartItem as CartItemType } from '@/context/cart-context';
import { PlaceHolderImages } from '@/lib/placeholder-images';

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();
  const itemImage = PlaceHolderImages.find((p) => p.id === item.imageId);

  return (
    <div className="flex items-center gap-4">
      <div className="relative h-16 w-16 overflow-hidden rounded-md">
        {itemImage && (
            <Image
            src={itemImage.imageUrl}
            alt={item.name}
            fill
            className="object-cover"
            />
        )}
      </div>
      <div className="flex-1 space-y-1">
        <p className="font-medium">{item.name}</p>
        <p className="text-sm text-muted-foreground">₹{item.price}</p>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="h-6 w-6"
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
          >
            <Minus className="h-3 w-3" />
          </Button>
          <span>{item.quantity}</span>
          <Button
            variant="outline"
            size="icon"
            className="h-6 w-6"
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
          >
            <Plus className="h-3 w-3" />
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-end space-y-1">
        <p className="font-semibold">₹{item.price * item.quantity}</p>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-muted-foreground"
          onClick={() => removeItem(item.id)}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
