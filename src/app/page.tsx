import Hero from "@/components/home/Hero";
import ImagesSection from "@/components/home/ImagesSection";
import ProductsSection from "@/components/common/ProductsSection";
import products from "@/data/products";
import Heading from "@/components/common/Heading";

export default function Home() {
  return (
    <main className="space-y-micro lg:space-y-base">
      <Hero />

      <ImagesSection />

      <section className="p-2 lg:p-base bg-soft rounded-base lg:rounded-xl">
        <div className="flex flex-col items-center pt-5xl lg:pt-10xl px-base pb-3xl lg:pb-6xl">
          <Heading
            level={2}
            className="lg:w-1/2 font-bold text-large lg:text-4xlarge text-dark text-center leading-16"
          >
            Roasted goodness to your doorstep!
          </Heading>
        </div>
        <ProductsSection
          products={products.filter((product) => !product.isPlus)}
        />
      </section>
    </main>
  );
}
