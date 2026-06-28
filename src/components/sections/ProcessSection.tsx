"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  MessageCircle, Coffee, FileText, CheckCircle, Palette, Sparkles,
  type LucideIcon,
} from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { processSteps } from "@/data/process";

const iconMap: Record<string, LucideIcon> = {
  MessageCircle, Coffee, FileText, CheckCircle, Palette, Sparkles,
};

export default function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="process"
      className="bg-off-white py-[60px] px-5 sm:py-[80px] sm:px-10 lg:py-[120px] lg:px-[100px]"
      aria-label="Our Process"
    >
      <div className="max-w-content mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-10 lg:mb-[72px] gap-6">
          <FadeInSection>
            <SectionHeading
              label="How It Works"
              title={
                <>
                  From enquiry to your{" "}
                  <em className="italic text-accent">perfect day.</em>
                </>
              }
            />
          </FadeInSection>
          <FadeInSection delay={0.1} className="lg:max-w-[320px]">
            <p
              className="font-body font-light leading-[1.9]"
              style={{ fontSize: "14px", color: "#7a7068" }}
            >
              A simple, stress-free process designed entirely around you — from
              first message to final setup.
            </p>
          </FadeInSection>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {processSteps.map((step) => {
            const Icon = iconMap[step.icon] ?? Sparkles;
            return (
              <motion.div
                key={step.step}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as [number,number,number,number] } },
                }}
                className="flex flex-col gap-4"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="flex-shrink-0 flex items-center justify-center"
                    style={{
                      width: "48px",
                      height: "48px",
                      border: "1px solid #e8e4de",
                    }}
                  >
                    <Icon size={18} className="text-accent" strokeWidth={1.2} aria-hidden="true" />
                  </div>
                  <span
                    className="font-display font-light text-stone"
                    style={{ fontSize: "clamp(28px, 6vw, 40px)", lineHeight: "1" }}
                  >
                    0{step.step}
                  </span>
                </div>
                <h3
                  className="font-display font-light text-charcoal"
                  style={{ fontSize: "22px" }}
                >
                  {step.title}
                </h3>
                <p
                  className="font-body font-light text-mid leading-[1.9]"
                  style={{ fontSize: "13px" }}
                >
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <FadeInSection className="mt-16">
          <a href="#contact" className="btn-primary">
            Start Your Enquiry
          </a>
        </FadeInSection>
      </div>
    </section>
  );
}
