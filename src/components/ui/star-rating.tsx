"use client";

import { Star, StarHalf } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  className?: string;
  starClassName?: string;
}

export function StarRating({ rating, maxRating = 5, className, starClassName }: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className={cn('flex items-center gap-1', className)}>
      {Array.from({ length: maxRating }).map((_, i) => {
        if (i < fullStars) {
          return <Star key={i} className={cn('h-5 w-5 text-accent fill-accent', starClassName)} />;
        }
        if (i === fullStars && hasHalfStar) {
          return <StarHalf key={i} className={cn('h-5 w-5 text-accent fill-accent', starClassName)} />;
        }
        return <Star key={i} className={cn('h-5 w-5 text-muted-foreground/30', starClassName)} />;
      })}
    </div>
  );
}
