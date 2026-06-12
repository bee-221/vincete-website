import type { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Submit an Enquiry",
    description:
      "Fill in our enquiry form with your event details. We respond within 24 hours to confirm availability.",
    icon: "MessageCircle",
  },
  {
    step: 2,
    title: "Free Consultation",
    description:
      "A discovery call or in-person meeting to understand your vision, venue, colour palette, and inspiration.",
    icon: "Coffee",
  },
  {
    step: 3,
    title: "Bespoke Proposal",
    description:
      "We create a personalised mood board and itemised proposal tailored precisely to your event and budget.",
    icon: "FileText",
  },
  {
    step: 4,
    title: "Confirm & Secure",
    description:
      "Accept your proposal and pay a deposit to lock in your date. We handle all venue logistics from here.",
    icon: "CheckCircle",
  },
  {
    step: 5,
    title: "Final Design Review",
    description:
      "All florals, colours, and finishing details are confirmed 4–6 weeks before your event for complete peace of mind.",
    icon: "Palette",
  },
  {
    step: 6,
    title: "Setup & Celebrate",
    description:
      "We arrive early, style every detail beautifully, and conduct a final walkthrough — so you simply arrive and celebrate.",
    icon: "Sparkles",
  },
];
