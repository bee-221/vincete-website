import Image from "next/image";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionHeading from "@/components/ui/SectionHeading";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-white py-[60px] px-5 sm:py-[80px] sm:px-10 lg:py-[120px] lg:px-[100px]"
      aria-label="About Vincete Events"
    >
      <div
        className="max-w-content mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center"
        style={{ ["--gap" as string]: "80px" }}
      >
        {/* Image column — overlapping layout */}
        <FadeInSection>
        <div className="relative h-[260px] sm:h-[380px] lg:h-[580px]">
          {/* Main image */}
          <div
            className="absolute bg-cream overflow-hidden"
            style={{ top: 0, left: 0, width: "75%", height: "85%" }}
          >
            <Image
              src="/images/about/about.webp"
              alt="Vincete Events — bespoke floral and event decor"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 80vw, 40vw"
            />
          </div>
          {/* Accent card — overlapping bottom-right */}
          <div
            className="absolute bg-charcoal flex items-center justify-center"
            style={{ bottom: 0, right: 0, width: "55%", height: "55%" }}
          >
            <div className="text-center px-6" style={{ lineHeight: "1.8" }}>
              <span
                className="font-display font-light text-accent block"
                style={{ fontSize: "48px", lineHeight: "1" }}
              >
                ∞
              </span>
              <p
                className="font-display font-light italic text-accent-light mt-3"
                style={{ fontSize: "13px" }}
              >
                Every detail,<br />beautifully considered.
              </p>
            </div>
          </div>
        </div>
        </FadeInSection>

        {/* Text column */}
        <div>
          <FadeInSection>
            <SectionHeading
              label="Our Story"
              title={
                <>
                  Elegance is our{" "}
                  <em className="italic text-accent">language.</em>
                </>
              }
            />
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <p
              className="font-body font-light leading-[2.1] mt-8 mb-12"
              style={{ fontSize: "14px", color: "#6b6259" }}
            >
              Vincete Events was born from a passion for transforming spaces into
              living, breathing works of art. We believe your event deserves more
              than decoration — it deserves a world built entirely around you.
              <br /><br />
              From intimate florals and tablescapes to sweeping venue
              transformations, every element we create is intentional, refined,
              and deeply personal. We work closely with each client to translate
              their vision into something truly unforgettable.
            </p>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div
              className="flex gap-5 lg:gap-12 pt-10"
              style={{ borderTop: "1px solid #e8e4de" }}
            >
              {[
                { num: "200+", label: "Events Styled" },
                { num: "100%", label: "Bespoke Designs" },
                { num: "5★", label: "Client Reviews" },
              ].map(({ num, label }) => (
                <div key={label}>
                  <p
                    className="font-display font-light text-charcoal"
                    style={{ fontSize: "clamp(32px, 7vw, 48px)", lineHeight: "1" }}
                  >
                    {num}
                  </p>
                  <p
                    className="font-body font-light text-mid mt-1.5"
                    style={{
                      fontSize: "9px",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                    }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
