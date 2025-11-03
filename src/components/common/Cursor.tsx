"use client";
import { gsap } from "gsap";
import { useEffect } from "react";

function Cursor() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      gsap.to("#cursor", {
        x: clientX + 5,
        y: clientY + 12,
        duration: 0.6,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      id="cursor"
      className="fixed top-1 start-1 w-3.5 h-3.5 bg-accent rounded-full z-[90]"
    />
  );
}

export default Cursor;
