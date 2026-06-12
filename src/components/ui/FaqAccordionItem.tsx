"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/types";

interface FaqAccordionItemProps {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}

export default function FaqAccordionItem({ item, isOpen, onToggle }: FaqAccordionItemProps) {
  return (
    <div style={{ borderBottom: "1px solid #e8e4de" }} className="last:border-0">
      <button
        onClick={onToggle}
        className="w-full text-left flex items-center justify-between gap-4 py-6 group"
        aria-expanded={isOpen}
      >
        <span
          className="font-body font-light text-dark group-hover:text-charcoal transition-colors duration-200"
          style={{ fontSize: "14px", letterSpacing: "0.02em" }}
        >
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 text-accent"
        >
          <ChevronDown size={16} strokeWidth={1.5} aria-hidden="true" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <p
              className="font-body font-light text-mid leading-[2] pb-6 pr-8"
              style={{ fontSize: "13px" }}
            >
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
