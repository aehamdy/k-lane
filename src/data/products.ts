import KozmoImage from "@/assets/products/product-kozmo.webp";
import LunarImage from "@/assets/products/product-lunar.webp";
import TheOneImage from "@/assets/products/product-the-one.webp";
import ArkanImage from "@/assets/products/product-arkan.webp";
import KrishnaImage from "@/assets/products/product-krishna.webp";
import NairoImage from "@/assets/products/product-nairo.webp";
import type { StaticImageData } from "next/image";

const commonDescription =
  "We take pride in every bean we brew. Our coffee is carefully selected from the best coffee-growing regions around the world. Each batch is roasted in-house to highlight its unique flavors and characteristics.";

export type Product = {
  id: number;
  title: string;
  image: StaticImageData | string;
  price: number;
  subtitle: string;
  description: string;
  isPlus?: boolean;
};

const products: Product[] = [
  // Base lineup
  {
    id: 1,
    title: "Kozmo",
    image: KozmoImage,
    price: 19.99,
    subtitle: "Ground coffee, medium roast",
    description: commonDescription,
  },
  {
    id: 2,
    title: "Lunar",
    image: LunarImage,
    price: 24.99,
    subtitle: "Ground coffee, light roast",
    description: commonDescription,
  },
  {
    id: 3,
    title: "The One®",
    image: TheOneImage,
    price: 14.99,
    subtitle: "Ground coffee, medium roast",
    description: commonDescription,
  },
  {
    id: 4,
    title: "Arkan",
    image: ArkanImage,
    price: 19.99,
    subtitle: "Ground coffee, light roast",
    description: commonDescription,
  },
  {
    id: 5,
    title: "Nairo",
    image: NairoImage,
    price: 19.99,
    subtitle: "Ground coffee, medium roast",
    description: commonDescription,
  },
  {
    id: 6,
    title: "Krishna",
    image: KrishnaImage,
    price: 19.99,
    subtitle: "Ground coffee, medium roast",
    description: commonDescription,
  },

  // Plus lineup
  {
    id: 7,
    title: "Kozmo Plus",
    image: KozmoImage,
    price: 34.99,
    subtitle: "Ground coffee, double medium roast",
    description: commonDescription,
    isPlus: true,
  },
  {
    id: 8,
    title: "Lunar Plus",
    image: LunarImage,
    price: 34.99,
    subtitle: "Ground coffee, double light roast",
    description: commonDescription,
    isPlus: true,
  },
  {
    id: 9,
    title: "The One® Plus",
    image: TheOneImage,
    price: 49.99,
    subtitle: "Ground coffee, double medium roast",
    description: commonDescription,
    isPlus: true,
  },
  {
    id: 10,
    title: "Arkan Plus",
    image: ArkanImage,
    price: 34.99,
    subtitle: "Ground coffee, double light roast",
    description: commonDescription,
    isPlus: true,
  },
  {
    id: 11,
    title: "Nairo Plus",
    image: NairoImage,
    price: 34.99,
    subtitle: "Ground coffee, double medium roast",
    description: commonDescription,
    isPlus: true,
  },
  {
    id: 12,
    title: "Krishna Plus",
    image: KrishnaImage,
    price: 34.99,
    subtitle: "Ground coffee, double medium roast",
    description: commonDescription,
    isPlus: true,
  },
];

export default products;
