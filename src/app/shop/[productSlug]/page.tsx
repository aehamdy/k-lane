import Heading from "@/components/common/Heading";
import Icon from "@/components/common/Icon";
import products from "@/data/products";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import siteData from "@/config/siteData";

type ProductPageProps = { params: Promise<{ productSlug: string }> };

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { productSlug } = await params;
  const product = products.find((item) => item.slug === productSlug);

  if (!product) {
    return {
      title: `Product Not Found | ${siteData.name} Coffee Shop`,
      description: `The product you are looking for could not be found on ${siteData.name}.`,
    };
  }

  return {
    title: `${product.title} | ${siteData.name} Coffee Shop`,
    description: `Discover ${product.title} — ${product.subtitle}. ${product.description}`,
  };
}

export async function generateStaticParams() {
  return products.map((product) => ({
    productSlug: product.slug,
  }));
}

export default async function Page({ params }: ProductPageProps) {
  const { productSlug } = await params;

  const product = products.find((item) => item.slug === productSlug);
  if (!product) return notFound();

  return (
    <main>
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
            <div className="flex flex-col gap-micro">
              <Heading
                level={5}
                className="text-dark font-bold text-large lg:text-3xlarge"
              >
                {product.title}
              </Heading>
              <div>{product.subtitle}</div>
              <div className="font-bold text-core text-dark">
                ${product.price}
              </div>
            </div>

            <p className="leading-7">{product.description}</p>

            <div className="flex flex-col gap-micro">
              <div className="flex items-center gap-tiny">
                <Icon name="truck" /> <p>Same day delivery</p>
              </div>
              <div className="flex items-center gap-tiny">
                <Icon name="coffee" /> <p>Quality checked</p>
              </div>
            </div>

            <button className="w-full py-compact px-regular font-bold text-core text-dark bg-brand-primary rounded-xl">
              Purchase
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
