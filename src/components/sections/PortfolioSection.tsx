"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn } from "lucide-react";
import { InstagramIcon } from "@/components/ui/SocialIcons";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeInSection from "@/components/ui/FadeInSection";
import Lightbox from "@/components/ui/Lightbox";
import { portfolioItems } from "@/data/portfolio";
import type { PortfolioCategory } from "@/types";
import { cn } from "@/lib/utils";

const categories: { label: string; value: PortfolioCategory }[] = [
  { label: "All", value: "all" },
  { label: "Weddings", value: "wedding" },
  { label: "Nikkah", value: "nikkah" },
  { label: "Intimate Events", value: "intimate" },
];

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState<PortfolioCategory>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section
      id="portfolio"
      className="bg-cream py-[60px] px-5 sm:py-[80px] sm:px-10 lg:py-[120px] lg:px-[100px]"
      aria-label="Portfolio Gallery"
    >
      <div className="max-w-content mx-auto">
        {/* Header + filter row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-8">
          <FadeInSection>
            <SectionHeading
              label="As Seen On Instagram"
              title={
                <>
                  Our <em className="italic text-accent">Work</em>
                </>
              }
            />
          </FadeInSection>

          {/* Filter tabs */}
          <FadeInSection delay={0.1}>
            <div className="flex overflow-x-auto scrollbar-hide gap-2 pb-1">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveFilter(cat.value)}
                  className={cn(
                    "font-body font-light transition-all duration-300",
                    "border px-4 py-2"
                  )}
                  style={{
                    fontSize: "9px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    background: activeFilter === cat.value ? "#1a1714" : "#ffffff",
                    color: activeFilter === cat.value ? "#ffffff" : "#b8b0a4",
                    borderColor: activeFilter === cat.value ? "#1a1714" : "#e8e4de",
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </FadeInSection>
        </div>

        {/* Gallery grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: "3px" }}>
          <AnimatePresence mode="popLayout">
            {filtered.map((item, index) => (
              <motion.button
                key={item.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative group overflow-hidden"
                style={{ aspectRatio: "4/3" }}
                onClick={() => setLightboxIndex(index)}
                aria-label={`View: ${item.eventType}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div
                  className="absolute inset-0 flex flex-col justify-end p-5 transition-all duration-400"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(26,23,20,0.7) 0%, transparent 60%)",
                    opacity: 0,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.opacity = "1";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.opacity = "0";
                  }}
                >
                  <p
                    className="text-white font-body font-light"
                    style={{ fontSize: "12px", letterSpacing: "0.05em" }}
                  >
                    {item.eventType}
                  </p>
                  <div className="absolute top-4 right-4 text-white/80">
                    <ZoomIn size={18} />
                  </div>
                </div>

                {/* Always-visible subtle overlay on group hover */}
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-all duration-400 pointer-events-none" />
                <div className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <ZoomIn size={18} />
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Instagram CTA */}
        <FadeInSection className="text-center mt-16">
          <p
            className="font-body font-light text-mid mb-4"
            style={{ fontSize: "13px", letterSpacing: "0.15em" }}
          >
            Follow us{" "}
            <a
              href="https://instagram.com/vinceteevents"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              @vinceteevents
            </a>
          </p>
          <a
            href="https://instagram.com/vinceteevents"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-body font-light text-charcoal border-b border-charcoal pb-1 transition-all duration-300 hover:text-accent hover:border-accent"
            style={{
              fontSize: "11px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            <InstagramIcon className="w-4 h-4" />
            View Full Gallery on Instagram
          </a>
        </FadeInSection>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          items={filtered}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() =>
            setLightboxIndex((i) =>
              i !== null ? (i - 1 + filtered.length) % filtered.length : 0
            )
          }
          onNext={() =>
            setLightboxIndex((i) =>
              i !== null ? (i + 1) % filtered.length : 0
            )
          }
        />
      )}
    </section>
  );
}
