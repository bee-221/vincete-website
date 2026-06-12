import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: React.ReactNode;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
  noLine?: boolean;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  centered = false,
  light = false,
  className,
  noLine = false,
}: SectionHeadingProps) {
  return (
    <div className={cn(centered && "text-center", className)}>
      {label && (
        <p
          className={cn(
            "section-label mb-5",
            light && "text-accent",
            centered && "justify-center",
            noLine && "no-line"
          )}
        >
          {label}
        </p>
      )}
      <h2
        className={cn(
          "font-display font-light leading-[1.05] text-balance",
          light ? "text-white" : "text-charcoal"
        )}
        style={{ fontSize: "clamp(42px, 5vw, 72px)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "font-body font-light leading-[1.9] mt-6",
            centered && "mx-auto",
            light ? "text-white/50" : "text-mid",
            "max-w-[340px]"
          )}
          style={{ fontSize: "14px" }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
