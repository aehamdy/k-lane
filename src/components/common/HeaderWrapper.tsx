"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Header from "@/components/common/Header";

gsap.registerPlugin(ScrollTrigger);

function HeaderWrapper() {
  const stickyHeaderRef = useRef<HTMLDivElement>(null);
  const normalHeaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stickyHeader = stickyHeaderRef.current;
    const normalHeader = normalHeaderRef.current;

    if (!stickyHeader || !normalHeader) return;

    gsap.set(stickyHeader, { y: -100, opacity: 0 });

    ScrollTrigger.create({
      trigger: normalHeader,
      start: "bottom top", // when bottom of normal header hits top of viewport
      end: "top+=100 top", // hide sticky header 100px before normal header enters
      onEnter: () => {
        gsap.to(stickyHeader, {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        });
      },
      onLeaveBack: () => {
        gsap.to(stickyHeader, {
          y: -100,
          opacity: 0,
          duration: 0,
          ease: "power2.in",
        });
      },
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <>
      {/* Normal header */}
      <div
        ref={normalHeaderRef}
        className="absolute start-1/2 top-3xl -translate-x-1/2 w-[92%] lg:w-[96%] z-50"
      >
        <Header />
      </div>

      {/* Sticky header */}
      <div
        ref={stickyHeaderRef}
        className="fixed top-regular start-1/2 -translate-x-1/2 w-[92%] lg:w-[50%] z-[100]"
      >
        <Header />
      </div>
    </>
  );
}

export default HeaderWrapper;
