"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ProductCard from "@/components/common/ProductCard";
import { Product } from "@/data/products";

gsap.registerPlugin(ScrollTrigger);

interface ProductsSectionProps {
  products: Product[];
}

function ProductsSection({ products }: ProductsSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const cards = gsap.utils.toArray<HTMLDivElement>(
      el.querySelectorAll("article")
    );

    cards.forEach((card) => {
      gsap.fromTo(
        card,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reset", // replay when re-entering viewport
          },
        }
      );
    });

    // cleanup to prevent duplicated triggers when React refreshes
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-base"
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}

export default ProductsSection;
