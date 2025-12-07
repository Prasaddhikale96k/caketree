import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { cn } from '@/lib/utils';
import { Poppins } from 'next/font/google';
import { CartProvider } from '@/context/cart-context';
import CartWidget from '@/components/cart/cart-widget';
import Header from '@/components/sections/header';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: 'Cake Tree Delights',
  description: 'A premium café and bakery located behind Jatra Hotel, loved for fresh cakes, cozy ambiance, and a 4.7-star customer rating.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("scroll-smooth", poppins.variable)}>
      <body className="font-body antialiased">
        <CartProvider>
          <Header />
          {children}
          <CartWidget />
        </CartProvider>
        <Toaster />
      </body>
    </html>
  );
}
