"use client";

import { useScroll } from "framer-motion";
import type { RefObject } from "react";

export function useScrollProgress(ref: RefObject<HTMLElement>) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return { scrollYProgress };
}
