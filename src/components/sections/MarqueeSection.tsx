"use client";

import { motion } from "framer-motion";

const items = [
  "Floral Design",
  "Tablescapes",
  "Ceremony Arches",
  "Venue Styling",
  "Bespoke Décor",
  "Nikkah Styling",
  "Luxury Events",
  "Stage Decor",
  "Walima Receptions",
  "Centrepieces",
];

const track = [...items, ...items];

export default function MarqueeSection() {
  return (
    <div
      className="bg-charcoal overflow-hidden whitespace-nowrap"
      style={{ padding: "18px 0" }}
      aria-hidden="true"
    >
      <motion.div
        className="inline-flex"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
      >
        {track.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span
              className="font-display font-light italic text-accent-light"
              style={{ fontSize: "16px", letterSpacing: "0.05em", padding: "0 36px" }}
            >
              {item}
            </span>
            <span className="text-accent" style={{ fontSize: "18px" }}>
              ·
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
