import HeroSection from "@/components/common/HeroSection";
import MenuSection from "@/components/menu/MenuSection";
import menu from "@/data/menu";
import menuImage from "@/assets/menu/menu-hero-image.webp";
import Header from "@/components/common/Header";

function page() {
  return (
    <main className="relative page-vertical-gap">
      <div className="absolute start-1/2 top-base -translate-x-1/2 w-[92%] lg:w-[96%] z-50">
        <Header />
      </div>

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
