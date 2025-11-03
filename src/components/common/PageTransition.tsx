"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { gsap } from "gsap";

export default function PageTransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const isTransitioning = useRef(false);

  // Fade + blur in when new page content mounts
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { opacity: 0.5, scale: 1.02 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        clearProps: "transform",
      }
    );
  }, [pathname]);

  // Handle link clicks for outgoing animation
  useEffect(() => {
    const handleLinkClick = (event: MouseEvent) => {
      const link = (event.target as HTMLElement).closest("a");
      if (!link || isTransitioning.current) return;

      const href = link.getAttribute("href");
      if (
        !href ||
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:")
      )
        return;

      // Only intercept internal links
      if (href.startsWith("http") && !href.includes(window.location.host))
        return;

      event.preventDefault();
      isTransitioning.current = true;

      const el = containerRef.current;
      if (!el) return;

      // Fade and blur out old page before navigating
      gsap.to(el, {
        opacity: 0.5,
        scale: 0.98,
        duration: 0.6,
        ease: "power2.inOut",
      });
    };

    document.addEventListener("click", handleLinkClick);
    return () => document.removeEventListener("click", handleLinkClick);
  }, [router]);

  return (
    <div
      ref={containerRef}
      className="transition-container"
      style={{ overflow: "hidden", willChange: "opacity, transform, filter" }}
    >
      {children}
    </div>
  );
}
