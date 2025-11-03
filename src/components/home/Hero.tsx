"use client";

import Image from "next/image";
import heroImage from "@/assets/heroes/hero-section-image.webp";
import coffeBeansImage from "@/assets/heroes/coffee-beans.webp";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";

function Hero() {
  const mainTitleRef = useRef<HTMLDivElement>(null);
  const coffeeBeansRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const sideLettersRef = useRef<HTMLSpanElement[]>([]);
  const letterMiddleRef = useRef<HTMLSpanElement>(null);
  const stickerRef = useRef<HTMLDivElement>(null);

  // Animate main title
  useEffect(() => {
    const el = mainTitleRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { y: 10 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }
    );
  }, []);

  // Animate side letters
  useEffect(() => {
    if (!sideLettersRef.current.length) return;

    gsap.fromTo(
      sideLettersRef.current,
      { y: 5, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 1,
        ease: "power2.out",
      }
    );
  }, []);

  // Animate middle letter
  useEffect(() => {
    const el = letterMiddleRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { y: 5, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 1.7,
        ease: "power2.out",
      }
    );
  }, []);

  // Animate hero image
  useEffect(() => {
    const el = heroImageRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { y: 100, opacity: 0 },
      {
        y: 50,
        opacity: 1,
        duration: 0.5,
        delay: 0.7,
        ease: "power2.out",
      }
    );
  }, []);

  // Animate coffee beans
  useEffect(() => {
    const el = coffeeBeansRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { y: 0, opacity: 0 },
      {
        y: -200,
        opacity: 1,
        scale: 0.85,
        duration: 1,
        delay: 0.9,
        ease: "power2.out",
      }
    );
  }, []);

  // Animate sticker
  useEffect(() => {
    const el = stickerRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { scale: 0, opacity: 0, rotation: 0 }, // starts slightly rotated
      {
        scale: 1,
        opacity: 1,
        rotation: 50, // rotates into normal position
        duration: 0.7,
        delay: 2,
        ease: "back.out(1.7)",
      }
    );
  }, []);

  return (
    <section className="relative flex justify-center items-center h-[50dvh] lg:h-[105dvh] pt-9xl lg:pt-13xl px-base bg-brand-secondary rounded-lg overflow-hidden">
      <div className="absolute z-40 top-1/2 start-1/2 -translate-y-[40%] -translate-x-1/2 flex flex-col">
        <div className="relative">
          <h1 className="relative flex flex-col items-center font-archivo font-black text-6xl md:text-7xlarge lg:text-giant text-light">
            <div className="relative">
              <div ref={mainTitleRef} className="relative flex">
                <span className="">K</span>
                <span className="relative z-40">O</span>
                <span className="">F</span>
                <span className="relative z-40">F</span>
                <span className="">E</span>
                <span className="">E</span>
              </div>

              <div className="">
                <div
                  ref={coffeeBeansRef}
                  className="absolute top-[60%] translate-y-[12%] lg:translate-y-[15%] start-1/2 -translate-x-[40%] md:-translate-x-[60%]"
                >
                  <Image
                    src={coffeBeansImage}
                    alt="coffe-beans"
                    className="max-w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-7">
              <span
                ref={(el) => {
                  if (el) sideLettersRef.current[0] = el;
                }}
              >
                L
              </span>
              <span ref={letterMiddleRef} className="z-[80]">
                A N
              </span>
              <span
                ref={(el) => {
                  if (el) sideLettersRef.current[1] = el;
                }}
              >
                E
              </span>
            </div>
          </h1>

          <div
            ref={heroImageRef}
            className="absolute top-[22%] translate-y-[12%] lg:translate-y-[15%] start-1/2 -translate-x-[40%] md:-translate-x-[50%] rotate-[-16deg] z-30 "
          >
            <div className="relative w-[220px] lg:w-[470px] h-[386px] lg:max-h-[835px] rotate-6">
              <Image
                src={heroImage}
                alt="hero-image"
                className="max-w-full h-auto object-cover"
              />
              <div
                ref={stickerRef}
                className="absolute top-2/10 lg:top-[13%] start-6/10 lg:start-[110%] flex justify-center items-center w-[111px] lg:w-[162px] h-[111px] lg:h-[162px] p-2.5 lg:p-3.5 bg-accent rounded-full"
              >
                <div className="flex justify-center items-center w-full h-full border-2 border-dashed border-brand-secondary rounded-full">
                  <div className="font-bold text-small lg:text-xlarge text-brand-secondary text-center leading-4 lg:leading-7">
                    Roasted Goodness
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
