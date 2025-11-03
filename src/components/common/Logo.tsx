"use client";

import primaryDarkLogo from "@/assets/logo/dark-logo.svg";
import primaryLightLogo from "@/assets/logo/light-logo.svg";
import secondaryLogo from "@/assets/logo/KoffeeLane-logo.svg";
import Image from "next/image";
import ROUTES from "@/config/routes";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface LogoProps {
  variant: "primary" | "secondary";
  isProductPage?: boolean;
}

function Logo({ variant, isProductPage }: LogoProps) {
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = logoRef.current;
    if (!el) return;

    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      el,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%", // start when logo enters near bottom of viewport
          toggleActions: "play none none", // play when entering, reverse when leaving
          once: true,
        },
      }
    );
  }, []);
  if (variant === "secondary") {
    return (
      <div ref={logoRef}>
        <Link
          href={ROUTES.home}
          className="w-[244px] lg:w-[400px] h-[110px] lg:h-[181px]"
        >
          <Image
            src={secondaryLogo}
            alt="Logo"
            className="w-full h-full object-contain"
          />
        </Link>
      </div>
    );
  }

  return (
    <Link
      href={ROUTES.home}
      className="flex w-[50px] lg:w-[60px] h-[19px] lg:h-[22px]"
    >
      <Image
        src={isProductPage ? primaryLightLogo : primaryDarkLogo}
        alt="logo"
        className="w-full h-full object-cover"
      />
    </Link>
  );
}

export default Logo;
