import type { Metadata } from "next";

export const siteMetadata: Metadata = {
  title: {
    default: "Vincete Events | Luxury Wedding & Event Decor – East London",
    template: "%s | Vincete Events",
  },
  description:
    "East London's premier event decor specialists. Bespoke wedding styling, Nikkah & Walima decor, floral installations, stage setups, and full venue transformations across London.",
  keywords: [
    "wedding decor London",
    "wedding decor East London",
    "event decor London",
    "stage decor London",
    "Nikkah decor London",
    "Walima decor London",
    "wedding centrepieces London",
    "luxury event styling",
    "Asian wedding decor London",
    "Muslim wedding decor London",
    "venue styling London",
    "floral installations wedding",
    "luxury wedding backdrop London",
    "engagement decor London",
  ],
  authors: [{ name: "Vincete Events" }],
  creator: "Vincete Events",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://vinceteevents.com",
    siteName: "Vincete Events",
    title: "Vincete Events | Luxury Wedding & Event Decor – East London",
    description:
      "East London's premier event decor specialists. Bespoke wedding styling, Nikkah & Walima decor, floral installations, stage setups, and full venue transformations.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vincete Events – Luxury Event Decor in East London",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vincete Events | Luxury Wedding & Event Decor – East London",
    description:
      "East London's premier event decor specialists. Bespoke wedding styling, Nikkah & Walima decor, floral installations and full venue transformations.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://vinceteevents.com"),
};
