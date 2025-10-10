import ProductCard from "@/components/common/ProductCard";
import { Product } from "@/data/products";

interface ProductsSectionProps {
  products: Product[];
}

function ProductsSection({ products }: ProductsSectionProps) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-base">
      {products
        .filter((product) => !product.isPlus)
        .map((product) => (
          <li key={product.id} className="">
            <ProductCard product={product} />
          </li>
        ))}
    </ul>
  );
}

export default ProductsSection;
