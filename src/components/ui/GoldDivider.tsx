"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface GoldDividerProps {
  className?: string;
  light?: boolean;
}

export default function GoldDivider({ className, light = false }: GoldDividerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const shouldReduce = useReducedMotion();

  return (
    <div
      ref={ref}
      className={cn("flex items-center justify-center gap-3 my-6", className)}
    >
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: shouldReduce ? 0 : 1, ease: "easeInOut" }}
        className={cn(
          "h-px w-16 origin-right",
          light ? "bg-champagne/40" : "bg-gold/40"
        )}
      />
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        className={cn(light ? "text-champagne/60" : "text-gold")}
        aria-hidden="true"
      >
        <path
          d="M8 0L9.5 6.5L16 8L9.5 9.5L8 16L6.5 9.5L0 8L6.5 6.5L8 0Z"
          fill="currentColor"
        />
      </svg>
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: shouldReduce ? 0 : 1, ease: "easeInOut" }}
        className={cn(
          "h-px w-16 origin-left",
          light ? "bg-champagne/40" : "bg-gold/40"
        )}
      />
    </div>
  );
}
