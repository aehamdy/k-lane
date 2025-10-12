import HeaderWrapper from "@/components/common/HeaderWrapper";
import HeroSection from "@/components/common/HeroSection";
import ProductsSection from "@/components/common/ProductsSection";
import products from "@/data/products";

function page() {
  return (
    <main className="relative page-vertical-gap">
      <HeaderWrapper />

      <HeroSection heading="Shop" subheading="Goodness to your doorstep." />

      <section className="p-2 lg:p-base bg-soft rounded-base lg:rounded-xl">
        <ProductsSection products={products} />
      </section>
    </main>
  );
}

export default page;
