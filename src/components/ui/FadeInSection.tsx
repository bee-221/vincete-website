"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FadeInSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "none";
}

export default function FadeInSection({
  children,
  className,
  delay = 0,
  direction = "up",
}: FadeInSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduce = useReducedMotion();

  const variants = {
    hidden: {
      opacity: 0,
      y: shouldReduce || direction === "none" ? 0 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduce ? 0 : 0.7,
        delay: shouldReduce ? 0 : delay,
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
