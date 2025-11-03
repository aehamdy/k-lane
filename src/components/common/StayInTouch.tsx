"use client";

import Heading from "@/components/common/Heading";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

function StayInTouch() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      el,
      { y: 100, opacity: 0.4 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none none",
          once: false, // <-- replays every time it enters the viewport
        },
      }
    );
  }, []);

  return (
    <section className="flex justify-center items-center py-[110px] px-base bg-brand-primary rounded-lg">
      <div
        ref={wrapperRef}
        className="flex flex-col items-center gap-xl w-full lg:w-1/2"
      >
        <div className="flex flex-col items-center gap-micro text-dark">
          <Heading level={4} className="font-bold text-4xlarge lg:text-4xlarge">
            Stay in touch!
          </Heading>

          <p className="font-semibold text-muted">
            Latest offers, news, & goodies to your inbox.
          </p>
        </div>

        <form
          action=""
          className="flex flex-col items-center gap-base lg:w-3/4"
        >
          <div className="w-full flex items-center gap-xl lg:p-tiny lg:ps-regular bg-white rounded-pill">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full py-compact px-regular lg:px-0 rounded-pill outline-0"
            />

            <button
              type="button"
              className="hidden lg:flex py-compact px-regular text-light bg-brand-secondary rounded-pill"
            >
              Subscribe
            </button>
          </div>

          <button
            type="button"
            className="lg:hidden w-full py-compact px-regular font-bold text-light hover:text-brand-primary bg-brand-secondary rounded-pill cursor-pointer duration-slow"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

export default StayInTouch;
