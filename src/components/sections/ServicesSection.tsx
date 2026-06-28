import ServiceCard from "@/components/ui/ServiceCard";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeInSection from "@/components/ui/FadeInSection";
import { services } from "@/data/services";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-off-white py-[60px] px-5 sm:py-[80px] sm:px-10 lg:py-[120px] lg:px-[100px]"
      aria-label="Our Services"
    >
      <div className="max-w-content mx-auto">
        {/* Header row */}
        <div
          className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-10 lg:mb-[72px]"
          style={{ gap: "24px" }}
        >
          <FadeInSection>
            <SectionHeading
              label="What We Offer"
              title={
                <>
                  Our <em className="italic text-accent">Services</em>
                </>
              }
            />
          </FadeInSection>

          <FadeInSection delay={0.15} className="lg:max-w-[340px]">
            <p
              className="font-body font-light leading-[1.9]"
              style={{ fontSize: "14px", color: "#7a7068", marginTop: "24px" }}
            >
              Each service is a canvas. We bring the craft, the creativity, and
              the care to make your vision real.
            </p>
          </FadeInSection>
        </div>

        {/* 2-column grid with 3px gap */}
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: "3px" }}
        >
          {services.map((service, index) => (
            <FadeInSection key={service.id} delay={0.05 * (index % 4)}>
              <ServiceCard service={service} index={index} />
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
