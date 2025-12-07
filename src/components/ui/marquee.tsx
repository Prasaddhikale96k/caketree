"use client";

import React from 'react';

const Marquee = ({ text }: { text: string }) => {
  const marqueeText = Array(5).fill(text).join(' • ');

  return (
    <div className="relative flex overflow-x-hidden text-foreground/50 mt-4 py-4">
      <div className="whitespace-nowrap animate-marquee">
        <span className="text-lg mx-4">{marqueeText}</span>
      </div>
      <div className="absolute top-0 whitespace-nowrap animate-marquee">
        <span className="text-lg mx-4">{marqueeText}</span>
      </div>
    </div>
  );
};

export default Marquee;
