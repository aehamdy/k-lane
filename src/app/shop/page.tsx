import HeroSection from "@/components/common/HeroSection";
import ProductsSection from "@/components/common/ProductsSection";
import products from "@/data/products";
import { Metadata } from "next";
import siteData from "@/config/siteData";

export const metadata: Metadata = {
  title: `Shop Coffee Beans & Merch | ${siteData.name} Coffee Shop`,
  description: `Bring ${siteData.name} Coffee home! Browse our curated selection of specialty coffee beans, brewing gear, and merchandise available for online purchase.`,
};

function page() {
  return (
    <main className="relative page-vertical-gap">
      <HeroSection heading="Shop" subheading="Goodness to your doorstep." />

      <section className="p-2 lg:p-base bg-soft rounded-base lg:rounded-xl">
        <ProductsSection products={products} />
      </section>
    </main>
  );
}

export default page;
