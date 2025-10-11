import HeroSection from "@/components/common/HeroSection";
import MenuSection from "@/components/menu/MenuSection";
import menu from "@/data/menu";

function page() {
  return (
    <main className="page-vertical-gap">
      <HeroSection heading="Menu" subheading="Goodness to your doorstep." />
      <section className="space-y-4 p-2 lg:p-base bg-soft rounded-base lg:rounded-xl">
        {menu.map((section) => (
          <MenuSection key={section.title} menu={section} />
        ))}
      </section>
    </main>
  );
}

export default page;
