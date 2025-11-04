"use client";

import Heading from "@/components/common/Heading";
import MenuItem from "@/components/menu/MenuItem";
import { MenuSectionT } from "@/data/menu";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface MenuSectionProps {
  menu: MenuSectionT;
}

function MenuSection({ menu }: MenuSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingWrapperRef = useRef<HTMLDivElement>(null);
  const listsRef = useRef<HTMLUListElement[]>([]);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl || !headingWrapperRef.current) return;

    // Animate heading + subtitle
    gsap.fromTo(
      headingWrapperRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionEl,
          start: "top 85%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );

    // Animate each UL (menu groups)
    gsap.fromTo(
      listsRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionEl,
          start: "top 75%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col gap-3xl lg:gap-10xl py-3xl lg:py-6xl px-base lg:px-10xl bg-light rounded-xl"
    >
      {/* Heading + Subtitle */}
      <div
        ref={headingWrapperRef}
        className="flex flex-col items-center gap-small"
      >
        <Heading
          level={3}
          className="font-bold text-3xlarge lg:text-4xlarge text-dark"
        >
          {menu.title}
        </Heading>
        <p className="text-deep">{menu.subtitle}</p>
      </div>

      {/* Menu Items */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-[112px]">
        {menu.items.map((itemGroup, index) => (
          <ul
            key={index}
            ref={(el) => {
              if (el) listsRef.current[index] = el;
            }}
          >
            {itemGroup.map((item) => (
              <li key={item.name}>
                <MenuItem item={item} />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}

export default MenuSection;
