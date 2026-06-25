import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions | Vincete Events",
  description: "Terms and Conditions for Vincete Events — booking, payment, cancellation, and liability terms.",
  robots: { index: false, follow: false },
};

export default function TermsPage() {
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
              Terms &amp; <em>Conditions</em>
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
                  1. Agreement
                </h2>
                <p>
                  By booking Vincete Events (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) for event decor and styling services, you
                  (&ldquo;the client&rdquo;) agree to be bound by these Terms and Conditions. These terms form part of
                  any booking contract between us.
                </p>
              </section>

              <section>
                <h2
                  className="font-display font-light text-charcoal"
                  style={{ fontSize: "22px", marginBottom: "16px" }}
                >
                  2. Booking &amp; Confirmation
                </h2>
                <p style={{ marginBottom: "12px" }}>
                  A booking is confirmed only when:
                </p>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                  {[
                    "A written quote has been issued and accepted by the client",
                    "A non-refundable deposit (as stated in the quote) has been received",
                    "These Terms & Conditions have been agreed to",
                  ].map((item) => (
                    <li key={item} style={{ paddingLeft: "20px", position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, color: "#c9a96e" }}>—</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p style={{ marginTop: "16px" }}>
                  Until confirmation is received, your date is not held and may be offered to other clients.
                </p>
              </section>

              <section>
                <h2
                  className="font-display font-light text-charcoal"
                  style={{ fontSize: "22px", marginBottom: "16px" }}
                >
                  3. Payment
                </h2>
                <p style={{ marginBottom: "12px" }}>
                  Payment terms are as follows:
                </p>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                  {[
                    "A deposit is required to secure your date (amount specified in your quote)",
                    "The remaining balance is due no later than 14 days before the event date",
                    "Failure to pay the balance by the due date may result in cancellation of the booking",
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
                  4. Cancellations
                </h2>
                <p style={{ marginBottom: "12px" }}>
                  If you need to cancel your booking:
                </p>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                  {[
                    "Cancellations made more than 60 days before the event: deposit is forfeited",
                    "Cancellations made 30–60 days before the event: 50% of the total contract value is due",
                    "Cancellations made fewer than 30 days before the event: 100% of the total contract value is due",
                  ].map((item) => (
                    <li key={item} style={{ paddingLeft: "20px", position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, color: "#c9a96e" }}>—</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p style={{ marginTop: "16px" }}>
                  All cancellations must be made in writing to{" "}
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
                  5. Changes to Your Booking
                </h2>
                <p>
                  Any changes to the agreed scope of work (venue, date, number of guests, or decor
                  elements) must be requested in writing and are subject to availability and may incur
                  additional charges. Changes requested fewer than 14 days before the event cannot be
                  guaranteed.
                </p>
              </section>

              <section>
                <h2
                  className="font-display font-light text-charcoal"
                  style={{ fontSize: "22px", marginBottom: "16px" }}
                >
                  6. Delivery, Setup &amp; Collection
                </h2>
                <p>
                  We will agree access times with you and/or your venue in advance. The client is
                  responsible for ensuring adequate access is available at the agreed times. Any delays
                  caused by the venue or client that affect our setup may result in adjustments to the
                  agreed decor. All hired items remain the property of Vincete Events and must be
                  accessible for collection at the agreed time.
                </p>
              </section>

              <section>
                <h2
                  className="font-display font-light text-charcoal"
                  style={{ fontSize: "22px", marginBottom: "16px" }}
                >
                  7. Damage to Hired Items
                </h2>
                <p>
                  The client accepts responsibility for any loss or damage to hired items during the event.
                  Damage will be assessed upon collection and the cost of repair or replacement will be
                  charged to the client.
                </p>
              </section>

              <section>
                <h2
                  className="font-display font-light text-charcoal"
                  style={{ fontSize: "22px", marginBottom: "16px" }}
                >
                  8. Liability
                </h2>
                <p>
                  Vincete Events will not be held liable for any failure to provide services due to
                  circumstances beyond our reasonable control, including but not limited to severe weather,
                  venue closures, or other force majeure events. Our total liability to you shall not
                  exceed the total amount paid by you under the booking contract.
                </p>
              </section>

              <section>
                <h2
                  className="font-display font-light text-charcoal"
                  style={{ fontSize: "22px", marginBottom: "16px" }}
                >
                  9. Photography &amp; Marketing
                </h2>
                <p>
                  We may photograph our work at your event for use on our website and social media. If you
                  would prefer we do not use images from your event, please notify us in writing before
                  the event date.
                </p>
              </section>

              <section>
                <h2
                  className="font-display font-light text-charcoal"
                  style={{ fontSize: "22px", marginBottom: "16px" }}
                >
                  10. Governing Law
                </h2>
                <p>
                  These Terms and Conditions are governed by the laws of England and Wales. Any disputes
                  shall be subject to the exclusive jurisdiction of the courts of England and Wales.
                </p>
              </section>

              <section>
                <h2
                  className="font-display font-light text-charcoal"
                  style={{ fontSize: "22px", marginBottom: "16px" }}
                >
                  11. Contact
                </h2>
                <p>
                  For any questions regarding these terms, please contact us at{" "}
                  <a
                    href="mailto:hello@vinceteevents.com"
                    className="text-accent hover:text-charcoal transition-colors duration-200"
                  >
                    hello@vinceteevents.com
                  </a>
                  .
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
