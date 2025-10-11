import classicBlk from "@/assets/menu/coffee/classic-blk.webp";
import chocoWave from "@/assets/menu/coffee/choco-wave.webp";
import latteNight from "@/assets/menu/coffee/latte-night.webp";
import coolBrew from "@/assets/menu/coffee/cool-brew.webp";
import irishVibes from "@/assets/menu/coffee/irish-vibes.webp";
import coldWar from "@/assets/menu/coffee/cold-war.webp";
import frappeLane from "@/assets/menu/coffee/frappe-lane.webp";
import northPole from "@/assets/menu/coffee/north-pole.webp";
import moriSalad from "@/assets/menu/food/mori-salad.webp";
import cabbageNutSalad from "@/assets/menu/food/cabbage-nut-salad.webp";
import sushiBite from "@/assets/menu/food/sushi-bite.webp";
import dominoBerry from "@/assets/menu/food/domino-berry.webp";
import laneSoup from "@/assets/menu/food/lane-soup.webp";
import crackersNCheese from "@/assets/menu/food/crackers-n-cheese.webp";
import houseFries from "@/assets/menu/food/house-fries.webp";
import mangoSalad from "@/assets/menu/food/mango-salad.webp";
import { StaticImageData } from "next/image";

export type MenuItemT = {
  name: string;
  image: StaticImageData;
  price: number;
  description: string;
};

export type MenuSectionT = {
  title: string;
  subtitle: string;
  items: MenuItemT[][];
};

export const menu: MenuSectionT[] = [
  {
    title: "Coffee",
    subtitle: "We have something for everyone",
    items: [
      [
        {
          name: "Classic Blk",
          image: classicBlk,
          price: 12.99,
          description:
            "A bold, rich shot of pure coffee slowly roasted to be perfection.",
        },
        {
          name: "Choco Wave",
          image: chocoWave,
          price: 19.99,
          description:
            "Espresso with a dollop of steamed milk foam for a balanced taste.",
        },
        {
          name: "Latte Night",
          image: latteNight,
          price: 14.99,
          description: "Creamy steamed milk blended with rich espresso.",
        },
        {
          name: "Cool Brew",
          image: coolBrew,
          price: 16.0,
          description:
            "Hand-poured coffee highlighting intricate flavors and aromas.",
        },
      ],
      [
        {
          name: "Irish Vibes",
          image: irishVibes,
          price: 9.99,
          description:
            "Smooth espresso diluted with hot water for a mellow flavor.",
        },
        {
          name: "Cold War",
          image: coldWar,
          price: 5.99,
          description:
            "Espresso topped with equal parts steamed milk and frothy foam.",
        },
        {
          name: "Frappe Lane",
          image: frappeLane,
          price: 4.99,
          description:
            "A delightful mix of espresso, steamed milk, and chocolate.",
        },
        {
          name: "North Pole",
          image: northPole,
          price: 24.99,
          description:
            "Smooth, slow-brewed coffee served chilled for a refreshing experience.",
        },
      ],
    ],
  },
  {
    title: "Food",
    subtitle: "Offensivley addictive nibbles",
    items: [
      [
        {
          name: "Mori Salad",
          image: moriSalad,
          price: 14.99,
          description:
            "A fresh medley of greens and seasonal vegetables with a zesty dressing.",
        },
        {
          name: "Cabbage Nut Salad",
          image: cabbageNutSalad,
          price: 24.0,
          description:
            "Crisp cabbage tossed with crunchy nuts and a tangy vinaigrette.",
        },
        {
          name: "Sushi Bite",
          image: sushiBite,
          price: 4.99,
          description:
            "Bite-sized sushi rolls with fresh fish and vibrant flavors.",
        },
        {
          name: "Domino Berry",
          image: dominoBerry,
          price: 15.0,
          description:
            "A berrylicious treat combining the sweetness of assorted berries.",
        },
      ],
      [
        {
          name: "Lane Soup",
          image: laneSoup,
          price: 18.0,
          description:
            "Hearty and comforting soup made with farm-fresh ingredients.",
        },
        {
          name: "Crackers N Cheese",
          image: crackersNCheese,
          price: 10.99,
          description:
            "A delightful pairing of gourmet cheeses and artisanal crackers.",
        },
        {
          name: "House Fries",
          image: houseFries,
          price: 13.99,
          description:
            "Golden, crispy fries seasoned to perfection. Every bite counts!",
        },
        {
          name: "Mango Salad",
          image: mangoSalad,
          price: 23.0,
          description:
            "Juicy mango slices mixed with fresh greens and a citrusy dressing.",
        },
      ],
    ],
  },
];

export default menu;
