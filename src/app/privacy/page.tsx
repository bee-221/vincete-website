import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Vincete Events",
  description: "Privacy Policy for Vincete Events — how we collect, use, and protect your personal information.",
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <>
      <div className="bg-off-white min-h-screen">
        {/* Simple top bar */}
        <div
          className="bg-charcoal"
          style={{ padding: "24px 100px" }}
        >
          <div className="max-w-content mx-auto flex items-center justify-between">
            <Link
              href="/"
              className="font-display font-light text-white"
              style={{ fontSize: "18px", letterSpacing: "0.25em", textTransform: "uppercase" }}
            >
              Vincete Events
            </Link>
            <Link
              href="/"
              className="font-body font-light text-white/50 hover:text-white transition-colors duration-200"
              style={{ fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase" }}
            >
              ← Back
            </Link>
          </div>
        </div>

        {/* Content */}
        <main style={{ padding: "80px 100px" }}>
          <div className="max-w-content mx-auto" style={{ maxWidth: "780px" }}>
            <p
              className="font-body font-light text-accent"
              style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "16px" }}
            >
              Legal
            </p>
            <h1
              className="font-display font-light text-charcoal"
              style={{ fontSize: "clamp(36px, 5vw, 52px)", lineHeight: 1.1, marginBottom: "16px" }}
            >
              Privacy <em>Policy</em>
            </h1>
            <p
              className="font-body font-light text-charcoal/50"
              style={{ fontSize: "13px", letterSpacing: "0.05em", marginBottom: "56px" }}
            >
              Last updated: June 2025
            </p>

            <div
              className="font-body font-light text-charcoal/70"
              style={{ fontSize: "15px", lineHeight: 1.8, display: "flex", flexDirection: "column", gap: "40px" }}
            >
              <section>
                <h2
                  className="font-display font-light text-charcoal"
                  style={{ fontSize: "22px", marginBottom: "16px" }}
                >
                  1. Who We Are
                </h2>
                <p>
                  Vincete Events is an event decor and styling company based in East London, United Kingdom.
                  We can be contacted at{" "}
                  <a
                    href="mailto:hello@vinceteevents.com"
                    className="text-accent hover:text-charcoal transition-colors duration-200"
                  >
                    hello@vinceteevents.com
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2
                  className="font-display font-light text-charcoal"
                  style={{ fontSize: "22px", marginBottom: "16px" }}
                >
                  2. Information We Collect
                </h2>
                <p style={{ marginBottom: "12px" }}>
                  When you submit an enquiry through our website, we collect:
                </p>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                  {[
                    "Your name and email address",
                    "Phone number (if provided)",
                    "Event details including date, venue, and type",
                    "Any additional information you choose to share in your message",
                  ].map((item) => (
                    <li key={item} style={{ paddingLeft: "20px", position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, color: "#c9a96e" }}>—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2
                  className="font-display font-light text-charcoal"
                  style={{ fontSize: "22px", marginBottom: "16px" }}
                >
                  3. How We Use Your Information
                </h2>
                <p style={{ marginBottom: "12px" }}>We use the information you provide solely to:</p>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                  {[
                    "Respond to your enquiry and provide a quote",
                    "Communicate with you about your event",
                    "Fulfil a contract or booking you have made with us",
                  ].map((item) => (
                    <li key={item} style={{ paddingLeft: "20px", position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, color: "#c9a96e" }}>—</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p style={{ marginTop: "16px" }}>
                  We do not sell, rent, or share your personal information with third parties for marketing purposes.
                </p>
              </section>

              <section>
                <h2
                  className="font-display font-light text-charcoal"
                  style={{ fontSize: "22px", marginBottom: "16px" }}
                >
                  4. Third-Party Services
                </h2>
                <p>
                  Our contact form is processed by{" "}
                  <a
                    href="https://formspree.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-charcoal transition-colors duration-200"
                  >
                    Formspree
                  </a>
                  , a third-party form handling service. Submissions are transmitted securely and stored in
                  accordance with their privacy policy. Our website is hosted on{" "}
                  <a
                    href="https://vercel.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-charcoal transition-colors duration-200"
                  >
                    Vercel
                  </a>
                  , who may collect standard server logs (IP address, browser type, page visited) for
                  operational purposes.
                </p>
              </section>

              <section>
                <h2
                  className="font-display font-light text-charcoal"
                  style={{ fontSize: "22px", marginBottom: "16px" }}
                >
                  5. Data Retention
                </h2>
                <p>
                  We retain your enquiry details for as long as necessary to manage your booking or for up
                  to two years from the date of your event, after which your data is deleted.
                </p>
              </section>

              <section>
                <h2
                  className="font-display font-light text-charcoal"
                  style={{ fontSize: "22px", marginBottom: "16px" }}
                >
                  6. Your Rights
                </h2>
                <p style={{ marginBottom: "12px" }}>
                  Under UK GDPR you have the right to:
                </p>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                  {[
                    "Access the personal data we hold about you",
                    "Request correction of inaccurate data",
                    "Request deletion of your data",
                    "Object to or restrict how we process your data",
                  ].map((item) => (
                    <li key={item} style={{ paddingLeft: "20px", position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, color: "#c9a96e" }}>—</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p style={{ marginTop: "16px" }}>
                  To exercise any of these rights, please contact us at{" "}
                  <a
                    href="mailto:hello@vinceteevents.com"
                    className="text-accent hover:text-charcoal transition-colors duration-200"
                  >
                    hello@vinceteevents.com
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2
                  className="font-display font-light text-charcoal"
                  style={{ fontSize: "22px", marginBottom: "16px" }}
                >
                  7. Changes to This Policy
                </h2>
                <p>
                  We may update this policy from time to time. Any changes will be reflected on this page
                  with an updated date.
                </p>
              </section>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
