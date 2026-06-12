import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        "off-white": "#faf9f7",
        cream: "#f3f0eb",
        stone: "#e8e4de",
        mid: "#b8b0a4",
        dark: "#2a2520",
        charcoal: "#1a1714",
        accent: "#c9a96e",
        "accent-light": "#e8d5b0",
        // keep old names as aliases for components not yet updated
        ivory: "#faf9f7",
        champagne: "#f3f0eb",
        taupe: "#b8b0a4",
        gold: "#c9a96e",
        "deep-brown": "#2a2520",
        blush: "#f0e8e0",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-hero": ["clamp(64px,7vw,108px)", { lineHeight: "0.95" }],
        "display-xl": ["clamp(42px,5vw,72px)", { lineHeight: "1.05" }],
        "display-lg": ["clamp(32px,4vw,52px)", { lineHeight: "1.1" }],
        "display-md": ["clamp(24px,3vw,36px)", { lineHeight: "1.2" }],
      },
      letterSpacing: {
        widest2: "0.35em",
        widest3: "0.4em",
      },
      spacing: {
        section: "120px",
        "section-sm": "80px",
      },
      maxWidth: {
        content: "1280px",
        narrow: "720px",
      },
      boxShadow: {
        "card-luxury": "0 4px 32px rgba(26,23,20,0.06)",
        "card-hover": "0 8px 48px rgba(26,23,20,0.12)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  ],
};
export default config;
