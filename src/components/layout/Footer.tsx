import Link from "next/link";
import { Mail } from "lucide-react";
import { InstagramIcon, TikTokIcon } from "@/components/ui/SocialIcons";

export default function Footer() {
  return (
    <footer
      className="bg-charcoal"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "48px 100px",
      }}
    >
      <div className="max-w-content mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
        {/* Logo */}
        <p
          className="font-display font-light text-white"
          style={{ fontSize: "18px", letterSpacing: "0.25em", textTransform: "uppercase" }}
        >
          Vincete Events
        </p>

        {/* Social links */}
        <div className="flex items-center gap-6">
          <Link
            href="https://instagram.com/vinceteevents"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Vincete Events on Instagram"
            className="transition-colors duration-200 hover:text-accent"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            <InstagramIcon className="w-4 h-4" />
          </Link>
          <Link
            href="https://tiktok.com/@vincete.events"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Vincete Events on TikTok"
            className="transition-colors duration-200 hover:text-accent"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            <TikTokIcon className="w-4 h-4" />
          </Link>
          <Link
            href="mailto:hello@houseofballoonsldn.com"
            aria-label="Email Vincete Events"
            className="transition-colors duration-200 hover:text-accent"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            <Mail size={16} strokeWidth={1.5} />
          </Link>
        </div>

        {/* Copyright */}
        <div className="flex items-center gap-5">
          <p
            className="font-body font-light"
            style={{ fontSize: "10px", letterSpacing: "0.1em", color: "rgba(255,255,255,0.25)" }}
          >
            © {new Date().getFullYear()} Vincete Events
          </p>
          <Link
            href="#"
            className="font-body font-light transition-colors duration-200 hover:text-white/50"
            style={{ fontSize: "10px", letterSpacing: "0.1em", color: "rgba(255,255,255,0.2)" }}
          >
            Privacy
          </Link>
          <Link
            href="#"
            className="font-body font-light transition-colors duration-200 hover:text-white/50"
            style={{ fontSize: "10px", letterSpacing: "0.1em", color: "rgba(255,255,255,0.2)" }}
          >
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
