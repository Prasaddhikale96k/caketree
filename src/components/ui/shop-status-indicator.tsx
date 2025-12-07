"use client";

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export default function ShopStatusIndicator() {
  const [isOpen, setIsOpen] = useState(false);
  const [statusText, setStatusText] = useState("Checking status...");

  useEffect(() => {
    const checkShopStatus = () => {
      // IST is UTC+5:30
      const now = new Date();
      const utcOffset = now.getTimezoneOffset() * 60000;
      const istOffset = 5.5 * 3600000;
      const istTime = new Date(now.getTime() + utcOffset + istOffset);
      
      const hour = istTime.getUTCHours();

      const openTime = 10;
      const closeTime = 22;

      if (hour >= openTime && hour < closeTime) {
        setIsOpen(true);
        setStatusText("Open Now • Freshly Baking");
      } else {
        setIsOpen(false);
        setStatusText("Closed • Opens 10 AM");
      }
    };

    checkShopStatus();
    // Check every minute
    const interval = setInterval(checkShopStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex items-center gap-2.5 bg-card/60 backdrop-blur-sm py-2 px-4 rounded-full text-sm font-semibold shadow-md mb-5">
      <span className={cn(
        "w-2.5 h-2.5 rounded-full",
        isOpen ? "bg-green-500 pulse-green" : "bg-gray-400"
      )}></span>
      <span>{statusText}</span>
    </div>
  );
}
