"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface MarqueeTextProps {
  children: React.ReactNode;
  speed?: number; // pixels per second
  direction?: "left" | "right";
  gap?: number; // px gap between clones
}

export default function MarqueeText({
  children,
  speed = 100,
  direction = "left",
  gap = 40,
}: MarqueeTextProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const content = contentRef.current;
    if (!wrapper || !content) return;

    // Reset wrapper
    wrapper.innerHTML = "";
    const baseContent = content.cloneNode(true) as HTMLElement;
    baseContent.style.marginRight = `${gap}px`;
    wrapper.appendChild(baseContent);

    const contentWidth = baseContent.offsetWidth;
    const wrapperWidth = wrapper.offsetWidth;

    // Clone enough times to fill + overflow
    const minCopies = Math.ceil(wrapperWidth / contentWidth) + 3;
    for (let i = 0; i < minCopies; i++) {
      const clone = content.cloneNode(true) as HTMLElement;
      clone.style.marginRight = `${gap}px`;
      wrapper.appendChild(clone);
    }

    const totalWidth = contentWidth + gap;
    const distance = totalWidth;
    const duration = distance / speed;

    // Initial position
    gsap.set(wrapper, { x: direction === "left" ? 0 : -distance });

    const tween = gsap.to(wrapper, {
      x: direction === "left" ? -distance : 0,
      duration,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: (x) => {
          const current = parseFloat(x);
          if (direction === "left") {
            return (current % -distance) + "px";
          } else {
            // correctly move to the right
            return (current % distance) - distance + "px";
          }
        },
      },
    });

    return () => {
      tween.kill();
    };
  }, [speed, direction, gap]);

  return (
    <div className="overflow-hidden w-full">
      <div
        ref={wrapperRef}
        className="flex whitespace-nowrap will-change-transform"
      >
        <div ref={contentRef} className="flex items-center">
          {children}
        </div>
      </div>
    </div>
  );
}
