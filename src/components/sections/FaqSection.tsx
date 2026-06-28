"use client";

import { useState } from "react";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionHeading from "@/components/ui/SectionHeading";
import FaqAccordionItem from "@/components/ui/FaqAccordionItem";
import { faqs } from "@/data/faqs";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="bg-off-white py-[60px] px-5 sm:py-[80px] sm:px-10 lg:py-[120px] lg:px-[100px]"
      aria-label="Frequently Asked Questions"
    >
      <div className="max-w-content mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left heading */}
          <FadeInSection>
            <SectionHeading
              label="FAQ"
              title={
                <>
                  Questions we{" "}
                  <em className="italic text-accent">often hear.</em>
                </>
              }
              subtitle="Everything you need to know before getting in touch. Still have a question? Just send us a message."
            />
            <div className="mt-10">
              <a href="#contact" className="btn-ghost">
                Get In Touch
              </a>
            </div>
          </FadeInSection>

          {/* Right accordion */}
          <FadeInSection delay={0.1}>
            {faqs.map((faq, index) => (
              <FaqAccordionItem
                key={faq.id}
                item={faq}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
