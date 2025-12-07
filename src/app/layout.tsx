import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { cn } from '@/lib/utils';
import { Poppins, Montserrat, Dancing_Script } from 'next/font/google';
import { CartProvider } from '@/context/cart-context';
import CartWidget from '@/components/cart/cart-widget';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700', '800', '900']
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700', '800']
});

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dancing-script',
  weight: ['400', '700']
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
    <html lang="en" className={cn("scroll-smooth", poppins.variable, montserrat.variable, dancingScript.variable)}>
      <body className="font-body antialiased">
        <CartProvider>
          {children}
          <CartWidget />
        </CartProvider>
        <Toaster />
      </body>
    </html>
  );
}
