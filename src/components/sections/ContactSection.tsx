import FadeInSection from "@/components/ui/FadeInSection";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/ui/ContactForm";
import { InstagramIcon } from "@/components/ui/SocialIcons";
import Link from "next/link";

const MailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="1.5" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const PinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="1.5" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const contactItems = [
  {
    icon: <MailIcon />,
    label: "Email",
    value: "hello@houseofballoonsldn.com",
    href: "mailto:hello@houseofballoonsldn.com",
  },
  {
    icon: <InstagramIcon className="w-3.5 h-3.5" />,
    label: "Instagram",
    value: "@vinceteevents",
    href: "https://instagram.com/vinceteevents",
  },
  {
    icon: <PinIcon />,
    label: "Based In",
    value: "London, United Kingdom",
    href: null,
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-charcoal"
      style={{ padding: "120px 100px" }}
      aria-label="Contact and Enquiry"
    >
      <div
        className="max-w-content mx-auto grid grid-cols-1 lg:grid-cols-2"
        style={{ gap: "100px", alignItems: "start" }}
      >
        {/* Left — info */}
        <div>
          <FadeInSection>
            <SectionHeading
              label="Get In Touch"
              title={
                <>
                  Let&apos;s create something{" "}
                  <em className="italic text-accent">beautiful.</em>
                </>
              }
              light
            />
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <p
              className="font-body font-light leading-[2] mt-7 mb-14"
              style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)" }}
            >
              Tell us about your vision, your date, your venue. We&apos;ll take
              it from there. Every enquiry receives a personal response within
              24 hours.
            </p>

            <div className="flex flex-col gap-7">
              {contactItems.map(({ icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-5">
                  <div
                    className="flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{
                      width: "36px",
                      height: "36px",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    {icon}
                  </div>
                  <div>
                    <p
                      className="font-body font-light text-accent mb-1"
                      style={{ fontSize: "9px", letterSpacing: "0.25em", textTransform: "uppercase" }}
                    >
                      {label}
                    </p>
                    {href ? (
                      <Link
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="font-body font-light transition-colors duration-200 hover:text-accent"
                        style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)" }}
                      >
                        {value}
                      </Link>
                    ) : (
                      <p
                        className="font-body font-light"
                        style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)" }}
                      >
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>

        {/* Right — form */}
        <FadeInSection delay={0.15}>
          <ContactForm />
        </FadeInSection>
      </div>
    </section>
  );
}
