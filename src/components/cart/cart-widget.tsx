"use client";

import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { useCart } from "@/context/cart-context";
import CartItem from "./cart-item";
import { Separator } from "../ui/separator";
import { ScrollArea } from "../ui/scroll-area";
import { motion } from "framer-motion";

const WHATSAPP_PHONE_NUMBER = "911234567890"; // Replace with your WhatsApp number

export default function CartWidget() {
  const { cartItems, cartCount, cartTotal } = useCart();

  const handleCheckout = () => {
    let lines = ["Hi CakeTree! I'd like to place an order:", ""];
    
    cartItems.forEach(item => {
        const lineTotal = item.price * item.quantity;
        lines.push(
            `${item.quantity} x ${item.name} – ₹${lineTotal}`
        );
    });

    lines.push("", `Total: ₹${cartTotal}`, "", "Name:", "Address:", "Phone:", "Preferred delivery time:");
    const message = lines.join("%0A"); // URL encode line breaks
    
    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 1 }}
            className="fixed bottom-6 right-6 z-50"
        >
        <Button
          id="cart-icon"
          variant="default"
          size="icon"
          className="rounded-full w-16 h-16 bg-card text-foreground shadow-lg"
        >
          <ShoppingBag />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
              {cartCount}
            </span>
          )}
          <span className="sr-only">Open cart</span>
        </Button>
        </motion.div>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg bg-card">
        <SheetHeader className="px-6">
          <SheetTitle>Cart ({cartCount})</SheetTitle>
        </SheetHeader>
        <Separator />
        {cartCount > 0 ? (
          <>
            <ScrollArea className="flex-grow px-6">
                <div className="flex flex-col gap-4 py-4">
                    {cartItems.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))}
                </div>
            </ScrollArea>
            <Separator />
            <SheetFooter className="px-6 py-4 bg-card">
              <div className="w-full space-y-4">
                <div className="flex justify-between text-lg font-semibold">
                  <span>Subtotal</span>
                  <span>₹{cartTotal}</span>
                </div>
                <Button 
                    onClick={handleCheckout} 
                    className="w-full bg-foreground text-background hover:bg-foreground/80"
                    disabled={cartCount === 0}
                >
                    Checkout via WhatsApp
                </Button>
              </div>
            </SheetFooter>
          </>
        ) : (
          <div className="flex flex-1 items-center justify-center px-6">
            <div className="text-center">
                <ShoppingBag className="mx-auto h-16 w-16 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-medium">Your cart is empty</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                    Add items from the menu to get started.
                </p>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
