import HeroSection from "@/components/common/HeroSection";
import MenuSection from "@/components/menu/MenuSection";
import menu from "@/data/menu";
import menuImage from "@/assets/menu/menu-hero-image.webp";
import HeaderWrapper from "@/components/common/HeaderWrapper";

function page() {
  return (
    <main className="relative page-vertical-gap">
      <HeaderWrapper />

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
