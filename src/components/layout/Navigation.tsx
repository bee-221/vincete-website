"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useScrolled } from "@/hooks/useScrolled";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Reviews", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const isScrolled = useScrolled(60);
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-400 px-5 md:px-[60px]"
      style={{
        background: isScrolled ? "rgba(250,249,247,0.95)" : "transparent",
        backdropFilter: isScrolled ? "blur(12px)" : "none",
        borderBottom: isScrolled ? "1px solid #e8e4de" : "none",
        paddingTop: isScrolled ? "18px" : "28px",
        paddingBottom: isScrolled ? "18px" : "28px",
        transition: "background 0.4s ease, padding 0.4s ease, border-color 0.4s ease",
      }}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="font-display font-light text-charcoal text-decoration-none"
          style={{
            fontSize: "22px",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            textDecoration: "none",
          }}
        >
          Vincete Events
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center" style={{ gap: "48px" }}>
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className={cn(
                "font-body font-light text-dark hover:text-accent transition-colors duration-300 relative",
                "after:absolute after:bottom-[-3px] after:left-0 after:h-px after:bg-accent after:transition-all after:duration-300",
                "after:w-0 hover:after:w-full"
              )}
              style={{
                fontSize: "11px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                background: "none",
                border: "none",
                cursor: "default",
                padding: 0,
              }}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-charcoal"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          style={{ background: "none", border: "none", cursor: "default" }}
        >
          {mobileOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-500",
          mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div
          className="flex flex-col"
          style={{
            paddingTop: "24px",
            paddingBottom: "32px",
            borderTop: "1px solid #e8e4de",
            marginTop: "18px",
            gap: "20px",
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-left font-body font-light text-dark hover:text-accent transition-colors duration-200"
              style={{
                fontSize: "12px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                background: "none",
                border: "none",
                cursor: "default",
                padding: 0,
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
