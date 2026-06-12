"use client";

import { motion } from "framer-motion";
import {
  Heart, Star, Sparkles, Gem, Layers, Flower2, ArrowRight,
  Image, Flower, UtensilsCrossed, Type, Building2, Gift,
  type LucideIcon,
} from "lucide-react";
import type { Service } from "@/types";

const iconMap: Record<string, LucideIcon> = {
  Heart, Star, Sparkles, Gem, Layers, Flower2, ArrowRight,
  Image, Flower, UtensilsCrossed, Type, Building2, Gift,
};

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = iconMap[service.icon] ?? Star;
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      whileHover={{ backgroundColor: "#1a1714" }}
      transition={{ duration: 0.4 }}
      className="bg-white relative overflow-hidden group"
      style={{ padding: "52px 48px", cursor: "default" }}
    >
      {/* Gold underline on hover */}
      <motion.div
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.5 }}
        className="absolute bottom-0 left-0 bg-accent"
        style={{ height: "2px" }}
      />

      {/* Number */}
      <p
        className="font-display text-accent group-hover:text-accent mb-8"
        style={{
          fontSize: "11px",
          letterSpacing: "0.3em",
          transition: "color 0.4s",
        }}
      >
        {num}
      </p>

      {/* Icon */}
      <div
        className="flex items-center justify-center mb-7 group-hover:border-white/15 transition-colors duration-400"
        style={{
          width: "56px",
          height: "56px",
          border: "1px solid #e8e4de",
          transition: "border-color 0.4s",
        }}
      >
        <Icon size={20} className="text-accent" strokeWidth={1.2} aria-hidden="true" />
      </div>

      {/* Name */}
      <h3
        className="font-display font-light text-charcoal group-hover:text-white mb-4"
        style={{
          fontSize: "28px",
          lineHeight: "1.2",
          transition: "color 0.4s",
        }}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p
        className="font-body font-light group-hover:text-white/70 leading-[1.9]"
        style={{
          fontSize: "12px",
          color: "#8a8078",
          transition: "color 0.4s",
        }}
      >
        {service.shortDescription}
      </p>
    </motion.div>
  );
}
