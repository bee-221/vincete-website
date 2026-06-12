"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="testimonials"
      className="bg-white"
      style={{ padding: "120px 100px" }}
      aria-label="Client Reviews"
    >
      <div className="max-w-content mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-[72px] gap-6">
          <FadeInSection>
            <SectionHeading
              label="Kind Words"
              title={
                <>
                  What our clients{" "}
                  <em className="italic text-accent">say.</em>
                </>
              }
            />
          </FadeInSection>
          <FadeInSection delay={0.1} className="lg:max-w-[320px]">
            <p
              className="font-body font-light leading-[1.9]"
              style={{ fontSize: "14px", color: "#7a7068" }}
            >
              Every review represents an event we are proud to have been part of.
            </p>
          </FadeInSection>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ gap: "3px" }}
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as [number,number,number,number] } },
              }}
              className="bg-off-white"
              style={{ padding: "48px 40px" }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-accent" style={{ fontSize: "12px" }} aria-hidden="true">
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p
                className="font-display font-light italic text-charcoal leading-[1.7] mb-8"
                style={{ fontSize: "18px" }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div style={{ borderTop: "1px solid #e8e4de", paddingTop: "24px" }}>
                <p
                  className="font-body font-light text-charcoal"
                  style={{ fontSize: "13px", letterSpacing: "0.05em" }}
                >
                  {t.name}
                </p>
                <p
                  className="font-body font-light text-mid mt-1"
                  style={{ fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase" }}
                >
                  {t.eventType}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <FadeInSection className="mt-14">
          <a href="#contact" className="btn-primary">
            Enquire About Your Event
          </a>
        </FadeInSection>
      </div>
    </section>
  );
}
