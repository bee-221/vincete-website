import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-off-white flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p
          className="font-body font-light text-accent mb-4"
          style={{ fontSize: "9px", letterSpacing: "0.4em", textTransform: "uppercase" }}
        >
          404
        </p>
        <h1
          className="font-display font-light text-charcoal mb-4"
          style={{ fontSize: "clamp(42px, 5vw, 64px)", lineHeight: "1.05" }}
        >
          Page Not Found
        </h1>
        <p
          className="font-body font-light text-mid mb-10 leading-relaxed"
          style={{ fontSize: "14px" }}
        >
          The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/" className="btn-primary">
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}
