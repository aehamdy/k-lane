import Heading from "@/components/common/Heading";
import { Product } from "@/data/products";
import Image from "next/image";

function ProductCard({ product }: { product: Product }) {
  return (
    <article
      key={product.id}
      className="flex flex-col bg-light rounded-base overflow-hidden"
    >
      <div>
        <Image
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex justify-between items-center p-base text-dark">
        <div className="flex flex-col gap-tiny text-dark">
          <Heading level={3} className="font-archivo font-black text-core">
            {product.title}
          </Heading>

          <p className="font-inter font-medium text-small text-deep">
            {product.subtitle}
          </p>
        </div>

        <div className="p-3 bg-soft rounded-xl">
          <p className="font-semibold text-small">${product.price}</p>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
