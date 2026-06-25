"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type FormStatus = "idle" | "submitting" | "success" | "error";

const eventTypes = [
  "Wedding", "Nikkah", "Walima", "Engagement Party",
  "Birthday", "Baby Shower", "Bridal Shower", "Corporate Event", "Other",
];
const serviceOptions = [
  "Wedding Styling", "Nikkah Styling", "Walima Decor", "Stage Decor",
  "Centrepieces", "Aisle Decor", "Floral Installations", "Backdrops",
  "Table Styling", "Welcome Signs", "Full Venue Styling",
  "Birthday / Celebration", "Other",
];
const guestRanges = ["Under 50", "50–100", "100–200", "200–300", "300–500", "500+"];
const budgetRanges = [
  "Under £500", "£500–£1,000", "£1,000–£2,000", "£2,000–£3,500",
  "£3,500–£5,000", "£5,000–£10,000", "£10,000+", "Not sure yet",
];
const referralOptions = [
  "Instagram", "TikTok", "Google Search", "Friend / Family Referral",
  "Venue Recommendation", "Other",
];

interface FormData {
  name: string; email: string; phone: string; eventType: string;
  eventDate: string; venue: string; guestCount: string;
  servicesRequired: string[]; budget: string; colourScheme: string;
  inspirationLink: string; message: string; referral: string;
}

const initial: FormData = {
  name: "", email: "", phone: "", eventType: "", eventDate: "",
  venue: "", guestCount: "", servicesRequired: [], budget: "",
  colourScheme: "", inspirationLink: "", message: "", referral: "",
};

function validate(d: FormData) {
  const e: Record<string, string> = {};
  if (!d.name.trim()) e.name = "Please enter your full name.";
  if (!d.email.trim()) e.email = "Please enter your email.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) e.email = "Please enter a valid email.";
  if (!d.eventType) e.eventType = "Please select an event type.";
  return e;
}

const inputBase =
  "w-full font-body font-light text-white outline-none transition-all duration-300 px-[18px] py-[14px]";
const inputStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.1)",
  fontSize: "13px",
  color: "#fff",
};
const inputFocusStyle: React.CSSProperties = {
  borderColor: "#c9a96e",
  background: "rgba(255,255,255,0.08)",
};

const labelStyle: React.CSSProperties = {
  fontSize: "9px",
  letterSpacing: "0.25em",
  textTransform: "uppercase" as const,
  color: "rgba(255,255,255,0.4)",
  display: "block",
  marginBottom: "10px",
  fontFamily: "var(--font-body)",
  fontWeight: 300,
};

function FormInput({ id, type = "text", placeholder, value, onChange, error, style }: {
  id: string; type?: string; placeholder?: string; value: string;
  onChange: (v: string) => void; error?: string; style?: React.CSSProperties;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={inputBase}
        style={{ ...inputStyle, ...(focused ? inputFocusStyle : {}), ...style }}
        autoComplete={type === "email" ? "email" : type === "tel" ? "tel" : "off"}
      />
      {error && <p style={{ color: "#f87171", fontSize: "11px", marginTop: "4px" }}>{error}</p>}
    </>
  );
}

function FormSelect({ id, children, value, onChange }: {
  id: string; children: React.ReactNode; value: string;
  onChange: (v: string) => void;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <select
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      className={cn(inputBase, "appearance-none")}
      style={{
        ...inputStyle,
        ...(focused ? inputFocusStyle : {}),
        cursor: "default",
      }}
    >
      {children}
    </select>
  );
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  const set = (f: keyof FormData, v: string) => {
    setForm((p) => ({ ...p, [f]: v }));
    if (errors[f]) setErrors((p) => ({ ...p, [f]: "" }));
  };

  const toggleService = (s: string) =>
    setForm((p) => ({
      ...p,
      servicesRequired: p.servicesRequired.includes(s)
        ? p.servicesRequired.filter((x) => x !== s)
        : [...p.servicesRequired, s],
    }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setStatus("submitting");
    try {
      const res = await fetch("https://formspree.io/f/xgobzejb", {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, servicesRequired: form.servicesRequired.join(", ") }),
      });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) setForm(initial);
    } catch { setStatus("error"); }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-16 px-8"
        style={{ border: "1px solid rgba(201,169,110,0.3)" }}
      >
        <div style={{ fontSize: "32px", marginBottom: "16px" }}>✦</div>
        <h3
          className="font-display font-light text-white mb-3"
          style={{ fontSize: "28px" }}
        >
          Thank you for reaching out.
        </h3>
        <p
          className="font-body font-light"
          style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", lineHeight: "1.8" }}
        >
          We&apos;ve received your enquiry and will be in touch within 24 hours.
          <br />We can&apos;t wait to hear more about your vision.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="btn-ghost-light mt-8"
        >
          Send Another Enquiry
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} aria-hidden="true" />

      <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "16px", marginBottom: "24px" }}>
        <div>
          <label htmlFor="name" style={labelStyle}>First Name *</label>
          <FormInput id="name" placeholder="Your first name" value={form.name} onChange={(v) => set("name", v)} error={errors.name} />
        </div>
        <div>
          <label htmlFor="email" style={labelStyle}>Email Address *</label>
          <FormInput id="email" type="email" placeholder="your@email.com" value={form.email} onChange={(v) => set("email", v)} error={errors.email} />
        </div>
      </div>

      <div style={{ marginBottom: "24px" }}>
        <label htmlFor="phone" style={labelStyle}>Phone Number</label>
        <FormInput id="phone" type="tel" placeholder="+44 7700 000000" value={form.phone} onChange={(v) => set("phone", v)} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "16px", marginBottom: "24px" }}>
        <div>
          <label htmlFor="eventDate" style={labelStyle}>Event Date</label>
          <FormInput id="eventDate" type="date" value={form.eventDate} onChange={(v) => set("eventDate", v)} />
        </div>
        <div>
          <label htmlFor="eventType" style={labelStyle}>Event Type *</label>
          <FormSelect id="eventType" value={form.eventType} onChange={(v) => set("eventType", v)}>
            <option value="" style={{ background: "#1a1714" }}>Select event type</option>
            {eventTypes.map((t) => <option key={t} value={t} style={{ background: "#1a1714" }}>{t}</option>)}
          </FormSelect>
          {errors.eventType && <p style={{ color: "#f87171", fontSize: "11px", marginTop: "4px" }}>{errors.eventType}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "16px", marginBottom: "24px" }}>
        <div>
          <label htmlFor="venue" style={labelStyle}>Venue / Location</label>
          <FormInput id="venue" placeholder="Venue name and area" value={form.venue} onChange={(v) => set("venue", v)} />
        </div>
        <div>
          <label htmlFor="guestCount" style={labelStyle}>Guest Count</label>
          <FormSelect id="guestCount" value={form.guestCount} onChange={(v) => set("guestCount", v)}>
            <option value="" style={{ background: "#1a1714" }}>Select a range</option>
            {guestRanges.map((r) => <option key={r} value={r} style={{ background: "#1a1714" }}>{r}</option>)}
          </FormSelect>
        </div>
      </div>

      <div style={{ marginBottom: "24px" }}>
        <label htmlFor="budget" style={labelStyle}>Estimated Budget</label>
        <FormSelect id="budget" value={form.budget} onChange={(v) => set("budget", v)}>
          <option value="" style={{ background: "#1a1714" }}>Select a range</option>
          {budgetRanges.map((b) => <option key={b} value={b} style={{ background: "#1a1714" }}>{b}</option>)}
        </FormSelect>
      </div>

      {/* Services */}
      <div style={{ marginBottom: "24px" }}>
        <p style={labelStyle}>Services Required</p>
        <div className="flex flex-wrap gap-2">
          {serviceOptions.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => toggleService(s)}
              className="font-body font-light transition-all duration-200"
              style={{
                fontSize: "9px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                padding: "7px 14px",
                border: "1px solid",
                borderColor: form.servicesRequired.includes(s)
                  ? "#c9a96e"
                  : "rgba(255,255,255,0.15)",
                background: form.servicesRequired.includes(s)
                  ? "rgba(201,169,110,0.15)"
                  : "transparent",
                color: form.servicesRequired.includes(s)
                  ? "#c9a96e"
                  : "rgba(255,255,255,0.4)",
              }}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: "24px" }}>
        <label htmlFor="colourScheme" style={labelStyle}>Colour Scheme / Theme</label>
        <FormInput id="colourScheme" placeholder="e.g. Ivory, blush & gold" value={form.colourScheme} onChange={(v) => set("colourScheme", v)} />
      </div>

      <div style={{ marginBottom: "24px" }}>
        <label htmlFor="inspirationLink" style={labelStyle}>Pinterest / Instagram Inspiration Link</label>
        <FormInput id="inspirationLink" type="url" placeholder="https://pinterest.com/..." value={form.inspirationLink} onChange={(v) => set("inspirationLink", v)} />
      </div>

      <div style={{ marginBottom: "24px" }}>
        <label htmlFor="message" style={labelStyle}>Tell Us About Your Vision</label>
        <textarea
          id="message"
          rows={4}
          placeholder="Share your ideas, colour palette, inspiration, or anything else…"
          value={form.message}
          onChange={(e) => set("message", e.target.value)}
          className={cn(inputBase, "resize-none")}
          style={{ ...inputStyle, lineHeight: "1.8", minHeight: "120px" }}
        />
      </div>

      <div style={{ marginBottom: "24px" }}>
        <label htmlFor="referral" style={labelStyle}>How Did You Hear About Us?</label>
        <FormSelect id="referral" value={form.referral} onChange={(v) => set("referral", v)}>
          <option value="" style={{ background: "#1a1714" }}>Select an option</option>
          {referralOptions.map((r) => <option key={r} value={r} style={{ background: "#1a1714" }}>{r}</option>)}
        </FormSelect>
      </div>

      <AnimatePresence>
        {status === "error" && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-body font-light mb-4"
            style={{ fontSize: "12px", color: "#f87171" }}
          >
            Something went wrong. Please email us at{" "}
            <a href="mailto:hello@vinceteevents.com" className="underline">
              hello@vinceteevents.com
            </a>
          </motion.p>
        )}
      </AnimatePresence>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full font-body font-light transition-all duration-300 disabled:opacity-60"
        style={{
          background: "#c9a96e",
          color: "#1a1714",
          border: "none",
          padding: "18px",
          fontSize: "10px",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          marginTop: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
        }}
      >
        {status === "submitting" ? (
          <><Loader2 size={14} className="animate-spin" /> Sending…</>
        ) : (
          "Send Enquiry"
        )}
      </button>
      <p
        className="font-body font-light text-center mt-4"
        style={{ fontSize: "10px", color: "rgba(255,255,255,0.25)", letterSpacing: "0.05em" }}
      >
        We respond to all enquiries within 24 hours.
      </p>
    </form>
  );
}
