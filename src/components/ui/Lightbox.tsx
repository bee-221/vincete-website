"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { PortfolioItem } from "@/types";

interface LightboxProps {
  items: PortfolioItem[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({
  items,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  const item = items[currentIndex];

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  if (!item) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-[100] bg-deep-brown/95 flex items-center justify-center p-4"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={`Viewing: ${item.alt}`}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 text-ivory/70 hover:text-ivory transition-colors duration-200 z-10"
          aria-label="Close lightbox"
        >
          <X size={28} />
        </button>

        {/* Prev */}
        {items.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-4 md:left-8 text-ivory/70 hover:text-ivory transition-colors duration-200 z-10 p-2"
            aria-label="Previous image"
          >
            <ChevronLeft size={36} />
          </button>
        )}

        {/* Image */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.25 }}
          className="relative max-w-4xl max-h-[80vh] w-full h-full"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={item.src}
            alt={item.alt}
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 95vw, 896px"
          />
        </motion.div>

        {/* Next */}
        {items.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-4 md:right-8 text-ivory/70 hover:text-ivory transition-colors duration-200 z-10 p-2"
            aria-label="Next image"
          >
            <ChevronRight size={36} />
          </button>
        )}

        {/* Caption */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
          <p className="text-ivory/80 text-sm font-body">{item.eventType}</p>
          <p className="text-ivory/40 text-xs mt-1">
            {currentIndex + 1} / {items.length}
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
