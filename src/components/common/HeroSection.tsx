"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Heading from "@/components/common/Heading";
import Image, { StaticImageData } from "next/image";

interface HeroSectionProps {
  heading: string;
  subheading?: string;
  heroImage?: StaticImageData | undefined;
}

function HeroSection({ heading, subheading, heroImage }: HeroSectionProps) {
  const headingWrapperRef = useRef<HTMLDivElement>(null);
  const subheadingWrapperRef = useRef<HTMLParagraphElement>(null);

  // Animate heading
  useEffect(() => {
    const el = headingWrapperRef.current;
    if (!el) return;

    // Animate from slightly below to original position
    gsap.fromTo(
      el,
      { y: 20, opacity: 0 }, // start position
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
      }
    );
  }, []);

  // Animate subheading
  useEffect(() => {
    const el = subheadingWrapperRef.current;
    if (!el) return;

    // Animate from slightly below to original position
    gsap.fromTo(
      el,
      { y: 60, opacity: 0 }, // start position
      {
        y: 0,
        opacity: 1,
        duration: 2,
        delay: 0.5,
        ease: "power4.out",
      }
    );
  }, []);

  return (
    <section className="relative pt-14 bg-brand-secondary rounded-lg overflow-hidden">
      <div className="flex flex-col lg:justify-center h-[23dvh] lg:h-[70dvh] py-[24px] px-xl">
        <div className="relative flex flex-col items-center gap text-light">
          <div ref={headingWrapperRef} className="heading-wrapper">
            <Heading
              level={1}
              className="font-archivo font-black text-5xlarge lg:text-giant lg:leading-56 uppercase"
            >
              {heading}
            </Heading>
          </div>

          <div>
            {subheading && (
              <p
                ref={subheadingWrapperRef}
                className="font-bold text-large lg:text-3xlarge"
              >
                {subheading}
              </p>
            )}

            {heroImage && (
              <div className="absolute top-12 lg:top-[35%] start-1/2 -translate-x-1/2 w-[155px] lg:w-[315px] h-[255px] lg:h-[540px]">
                <Image
                  src={heroImage}
                  alt="hero-image"
                  className="max-w-full h-auto object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
