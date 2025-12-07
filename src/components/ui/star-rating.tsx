"use client";

import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  className?: string;
  starClassName?: string;
}

export function StarRating({ rating, maxRating = 5, className, starClassName }: StarRatingProps) {
  return (
    <div className={cn('flex items-center gap-1', className)}>
      {Array.from({ length: maxRating }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            'h-5 w-5',
            i < Math.floor(rating) ? 'text-accent fill-accent' : i < rating ? 'text-accent' : 'text-muted-foreground/30',
            starClassName
          )}
        />
      ))}
    </div>
  );
}
