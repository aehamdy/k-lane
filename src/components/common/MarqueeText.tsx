"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";

interface MarqueeTextProps {
  children: ReactNode;
  speed?: number; // pixels per second
  direction?: "left" | "right";
  gap?: number; // space between repeats
  className?: string;
}

const MarqueeText: React.FC<MarqueeTextProps> = ({
  children,
  speed = 100,
  direction = "left",
  gap = 40,
  className = "",
}) => {
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;

    const animate = () => {
      const content = el.querySelector<HTMLDivElement>(".marquee__content");
      if (!content) return;

      // Clear existing clone and tween (avoid stacking)
      if (tweenRef.current) tweenRef.current.kill();
      const existingClone = el.querySelector(".marquee__clone");
      if (existingClone) existingClone.remove();

      // Clone the content for seamless looping
      const clone = content.cloneNode(true) as HTMLDivElement;
      clone.classList.add("marquee__clone");
      el.appendChild(clone);

      // Force reflow after clone
      const distance = content.offsetWidth + gap;
      if (!distance || distance < 5) return; // skip if invalid measurement

      const duration = distance / speed;

      // Animate with GSAP
      tweenRef.current = gsap.to(el.children, {
        x: direction === "left" ? -distance : distance,
        duration,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % distance),
        },
      });
    };

    // Run animation after browser paints (prevents measuring 0 widths)
    const id = requestAnimationFrame(animate);

    // Handle resizing (responsive recalculation)
    const handleResize = () => {
      if (tweenRef.current) tweenRef.current.kill();
      animate();
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(id);
      if (tweenRef.current) tweenRef.current.kill();
      const clone = el.querySelector(".marquee__clone");
      if (clone) clone.remove();
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleResize);
    };
  }, [children, speed, direction, gap]);

  return (
    <div
      ref={marqueeRef}
      className={`marquee overflow-hidden whitespace-nowrap flex ${className}`}
      style={{ gap: `${gap}px` }}
    >
      <div className="marquee__content flex-shrink-0 flex items-center">
        {children}
      </div>
    </div>
  );
};

export default MarqueeText;
