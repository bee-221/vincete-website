export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  icon: string;
  category: "wedding" | "corporate" | "celebration";
  featured: boolean;
}

export type PortfolioCategory =
  | "all"
  | "wedding"
  | "nikkah"
  | "corporate"
  | "birthday"
  | "backdrop"
  | "floral";

export interface PortfolioItem {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  category: PortfolioCategory;
  eventType: string;
  featured: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  eventType: string;
  quote: string;
  rating: 1 | 2 | 3 | 4 | 5;
  avatarInitials: string;
  avatarSrc?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  venue: string;
  guestCount: string;
  servicesRequired: string[];
  budget: string;
  colourScheme: string;
  inspirationLink: string;
  message: string;
  referral: string;
}
