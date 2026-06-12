import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "wedding-styling",
    title: "Wedding Styling",
    shortDescription:
      "Complete wedding decor from aisle to reception — every detail tailored to your vision and venue.",
    icon: "Heart",
    category: "wedding",
    featured: true,
  },
  {
    id: "nikkah-styling",
    title: "Nikkah Styling",
    shortDescription:
      "Elegant Nikkah setups that honour tradition with a luxurious, personal touch.",
    icon: "Star",
    category: "wedding",
    featured: true,
  },
  {
    id: "walima-decor",
    title: "Walima Decor",
    shortDescription:
      "Stunning Walima receptions dressed in florals, draping, and fine details.",
    icon: "Sparkles",
    category: "wedding",
    featured: false,
  },
  {
    id: "engagement-styling",
    title: "Engagement Styling",
    shortDescription:
      "Romantic engagement setups with bespoke backdrops, florals, and table styling.",
    icon: "Gem",
    category: "wedding",
    featured: false,
  },
  {
    id: "stage-decor",
    title: "Stage Decor",
    shortDescription:
      "Jaw-dropping stage backdrops and seating arrangements — the focal point every event deserves.",
    icon: "Layers",
    category: "wedding",
    featured: true,
  },
  {
    id: "centrepieces",
    title: "Centrepieces",
    shortDescription:
      "Statement table centrepieces in fresh florals, candles, or luxury artificial arrangements.",
    icon: "Flower2",
    category: "wedding",
    featured: true,
  },
  {
    id: "aisle-decor",
    title: "Aisle Decor",
    shortDescription:
      "Floral-lined aisles, petal pathways, and column arrangements for a truly memorable walk.",
    icon: "ArrowRight",
    category: "wedding",
    featured: false,
  },
  {
    id: "backdrops",
    title: "Backdrops",
    shortDescription:
      "Custom floral walls, draping, and printed backdrops for photos, stages, and welcome areas.",
    icon: "Image",
    category: "wedding",
    featured: false,
  },
  {
    id: "floral-installations",
    title: "Floral Installations",
    shortDescription:
      "Large-scale ceiling blooms, arch installations, and immersive floral experiences.",
    icon: "Flower",
    category: "wedding",
    featured: true,
  },
  {
    id: "table-styling",
    title: "Table Styling",
    shortDescription:
      "Full tablescape design — linen, crockery, glassware, and florals in complete harmony.",
    icon: "UtensilsCrossed",
    category: "wedding",
    featured: false,
  },
  {
    id: "welcome-signs",
    title: "Welcome Signs & Entrance",
    shortDescription:
      "Personalised acrylic, mirror, and wooden welcome signs plus entrance styling.",
    icon: "Type",
    category: "wedding",
    featured: false,
  },
  {
    id: "venue-styling",
    title: "Full Venue Styling",
    shortDescription:
      "End-to-end venue transformation — we handle every detail so you can simply celebrate.",
    icon: "Building2",
    category: "wedding",
    featured: true,
  },
  {
    id: "celebrations",
    title: "Birthdays & Celebrations",
    shortDescription:
      "Luxurious birthday, baby shower, and bridal shower setups with personalised, themed styling.",
    icon: "Gift",
    category: "celebration",
    featured: false,
  },
];

export const featuredServices = services.filter((s) => s.featured);
