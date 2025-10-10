import ProductsSection from "@/components/common/ProductsSection";
import products from "@/data/products";

function page() {
  return (
    <main className="">
      <section className="p-2 lg:p-base bg-soft rounded-base lg:rounded-xl">
        <ProductsSection products={products} />
      </section>
    </main>
  );
}

export default page;
