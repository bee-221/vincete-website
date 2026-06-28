"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const heroImages = [
  {
    src: "/images/hero/hero-1.webp",
    alt: "Luxury wedding stage decor by Vincete Events",
  },
  {
    src: "/images/hero/hero-2.webp",
    alt: "Elegant floral centrepiece by Vincete Events",
  },
  {
    src: "/images/hero/hero-4.webp",
    alt: "Table styling and centrepieces by Vincete Events",
  },
  {
    src: "/images/hero/hero-3.webp",
    alt: "Wedding backdrop and aisle decor by Vincete Events",
  },
];

export default function HeroSection() {
  const shouldReduce = useReducedMotion();

  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      className="min-h-screen grid grid-cols-1 lg:grid-cols-2 relative overflow-hidden"
      aria-label="Hero"
      id="home"
    >
      {/* Left — text */}
      <div className="flex flex-col justify-center px-5 md:px-16 lg:px-[100px] pt-[100px] pb-[60px] lg:pt-[140px] lg:pb-[100px] relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduce ? 0 : 0.8, delay: 0.3 }}
          className="section-label mb-8 no-line"
          style={{ fontSize: "10px", letterSpacing: "0.35em" }}
        >
          Luxury Wedding Décor · London
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduce ? 0 : 0.9, delay: 0.5 }}
          className="font-display font-light text-charcoal mb-3 leading-[0.95]"
          style={{ fontSize: "clamp(64px, 7vw, 108px)" }}
        >
          Where love<br />
          becomes{" "}
          <em className="italic text-accent not-italic" style={{ fontStyle: "italic" }}>
            art.
          </em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduce ? 0 : 0.9, delay: 0.7 }}
          className="font-display font-light italic text-mid mb-12"
          style={{ fontSize: "clamp(22px, 2.5vw, 36px)" }}
        >
          Crafted with intention.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduce ? 0 : 0.9, delay: 0.9 }}
          className="font-body font-light leading-[2] max-w-full lg:max-w-[380px] mb-14"
          style={{ fontSize: "13px", letterSpacing: "0.05em", color: "#7a7068" }}
        >
          We design immersive event experiences — from florals and tablescapes
          to full venue transformations — that tell your unique story with beauty
          and precision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduce ? 0 : 0.9, delay: 1.1 }}
          className="flex flex-wrap items-center gap-3 sm:gap-6"
        >
          <button
            onClick={() => scrollTo("#contact")}
            className="btn-primary"
          >
            Begin Your Vision
          </button>
          <button
            onClick={() => scrollTo("#services")}
            className="btn-ghost"
          >
            Our Services
          </button>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute bottom-10 left-10 md:left-16 lg:left-[100px] flex items-center gap-4"
        >
          <div className="relative overflow-hidden h-px w-12" style={{ background: "#e8e4de" }}>
            <motion.div
              animate={{ x: ["-100%", "0%", "100%"] }}
              transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.5 }}
              className="absolute inset-0 bg-accent"
            />
          </div>
          <span
            className="font-body font-light text-mid"
            style={{ fontSize: "9px", letterSpacing: "0.3em", textTransform: "uppercase" }}
          >
            Scroll to explore
          </span>
        </motion.div>
      </div>

      {/* Right — 2×2 image grid */}
      <div className="relative overflow-hidden h-[55vw] lg:h-auto">
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-[3px]">
          {heroImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: shouldReduce ? 0 : 0.8,
                delay: 0.6 + i * 0.2,
                ease: "easeOut",
              }}
              className="relative overflow-hidden bg-stone"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
                priority={i < 2}
              />
              {/* Subtle shimmer overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 60%)",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
