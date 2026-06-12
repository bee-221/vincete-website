"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;


    const onMove = (e: MouseEvent) => {
      dot.style.left = e.clientX + "px";
      dot.style.top = e.clientY + "px";
      // ring lags behind with setTimeout for the trailing effect
      setTimeout(() => {
        if (ring) {
          ring.style.left = e.clientX + "px";
          ring.style.top = e.clientY + "px";
        }
      }, 60);
    };

    const onEnter = () => {
      ring.style.transform = "translate(-50%,-50%) scale(1.6)";
      ring.style.opacity = "0.3";
      dot.style.transform = "translate(-50%,-50%) scale(0.5)";
    };

    const onLeave = () => {
      ring.style.transform = "translate(-50%,-50%) scale(1)";
      ring.style.opacity = "0.6";
      dot.style.transform = "translate(-50%,-50%) scale(1)";
    };

    document.addEventListener("mousemove", onMove);

    const interactives = document.querySelectorAll(
      "a, button, input, textarea, select, [role='button']"
    );
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[9999] hidden lg:block"
        style={{
          width: "8px",
          height: "8px",
          background: "#c9a96e",
          borderRadius: "50%",
          transform: "translate(-50%,-50%)",
          transition: "transform 0.1s ease",
        }}
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className="fixed pointer-events-none z-[9998] hidden lg:block"
        style={{
          width: "36px",
          height: "36px",
          border: "1px solid #c9a96e",
          borderRadius: "50%",
          transform: "translate(-50%,-50%)",
          transition: "all 0.25s ease",
          opacity: 0.6,
        }}
        aria-hidden="true"
      />
    </>
  );
}
