import HeroSection from "@/components/common/HeroSection";
import MenuSection from "@/components/menu/MenuSection";
import menu from "@/data/menu";
import menuImage from "@/assets/menu/menu-hero-image.webp";
import { Metadata } from "next";
import siteData from "@/config/siteData";

export const metadata: Metadata = {
  title: `Our Menu | ${siteData.name} Coffee Shop`,
  description: `Explore ${siteData.name} Coffee’s full menu — from rich espresso and creamy lattes to seasonal drinks and fresh pastries. Crafted with care, served with warmth.`,
};

function page() {
  return (
    <main className="relative page-vertical-gap">
      <HeroSection heading="Menu" heroImage={menuImage} />

      <section className="space-y-4 p-2 lg:p-base bg-soft rounded-base lg:rounded-xl">
        {menu.map((section) => (
          <MenuSection key={section.title} menu={section} />
        ))}
      </section>
    </main>
  );
}

export default page;
