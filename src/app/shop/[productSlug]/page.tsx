import Heading from "@/components/common/Heading";
import Icon from "@/components/common/Icon";
import products from "@/data/products";
import Image from "next/image";
import { notFound } from "next/navigation";

type ProductPageProps = { params: { productSlug: string } };

function page({ params }: ProductPageProps) {
  const { productSlug } = params;

  const product = products.find((product) => product.slug === productSlug);

  if (!product) {
    return notFound();
  }
  return (
    <main className="">
      <div className="pt-8xl lg:pt-11xl px-micro lg:px-base pb-micro lg:pb-base">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-base">
          <div className="lg:col-span-3 overflow-hidden">
            <Image
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="lg:col-span-2 flex flex-col gap-base p-base lg:p-3xl text-small text-deep">
            <div className="">
              <div className="flex flex-col gap-micro">
                <Heading
                  level={5}
                  className="text-dark font-bold text-large lg:text-3xlarge"
                >
                  {product.title}
                </Heading>

                <div className="">{product.subtitle}</div>

                <div className="font-bold text-core text-dark">
                  ${product.price}
                </div>
              </div>
            </div>

            <p className="leading-7">{product.description}</p>

            <div className="flex flex-col gap-micro">
              <div className="flex items-center gap-tiny">
                <Icon name="truck" /> <p className="">Same day delivery</p>
              </div>

              <div className="flex items-center gap-tiny">
                <Icon name="coffee" /> <p className="">Quality checked</p>
              </div>
            </div>

            <div className="">
              <button className="w-full py-compact px-regular font-bold text-core text-dark bg-brand-primary rounded-xl">
                Purchase
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default page;
