"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";

interface NavItemProps {
  link: {
    href: string;
    name: string; // changed from label to name
  };
}

function NavItem({ link }: NavItemProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleEnter = () => {
    const container = containerRef.current;
    if (!container) return;

    const [first, second] = Array.from(container.children) as HTMLElement[];

    const tl = gsap.timeline({
      defaults: { ease: "power2.out", duration: 0.3 },
    });
    tl.to(first, { yPercent: -100 }).to(second, { yPercent: -100 }, "<");
  };

  const handleLeave = () => {
    const container = containerRef.current;
    if (!container) return;

    const [first, second] = Array.from(container.children) as HTMLElement[];

    const tl = gsap.timeline({
      defaults: { ease: "power2.in", duration: 0.3 },
    });
    tl.to(first, { yPercent: 0 }).to(second, { yPercent: 0 }, "<");
  };

  return (
    <Link
      href={link.href}
      className="relative inline-block overflow-hidden leading-none"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div ref={containerRef} className="relative">
        <span className="block">{link.name}</span>
        <span className="block absolute top-full left-0">{link.name}</span>
      </div>
    </Link>
  );
}

export default NavItem;
