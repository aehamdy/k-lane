import nycImage from "@/assets/locations/nyc-location.webp";
import dubaiImage from "@/assets/locations/dubai-location.webp";
import tokyoImage from "@/assets/locations/tokyo-location.webp";
import { StaticImageData } from "next/image";

export interface Location {
  id: number;
  image: StaticImageData;
  country: string;
  city: string;
  address: string;
  hours: string;
  phone: string;
  email: string;
  mapLocation: string;
}

const locations: Location[] = [
  {
    id: 1,
    image: nycImage,
    country: "United States",
    city: "NYC",
    address: "123 Coffee Lane, Brewtwon, USA",
    hours: "All week: 7:00 AM - 7:00 PM",
    phone: "(123) 456-7890",
    email: "info@brewhaven.com",
    mapLocation: "https://www.google.com/maps",
  },
  {
    id: 2,
    image: dubaiImage,
    country: "United Arab Emirates",
    city: "Dubai",
    address: "123 Coffee Lane, Brewtwon, UAE",
    hours: "All week: 7:00 AM - 7:00 PM",
    phone: "(123) 456-7890",
    email: "info@brewhaven.com",
    mapLocation: "https://www.google.com/maps",
  },
  {
    id: 3,
    image: tokyoImage,
    country: "Japan",
    city: "Tokyo",
    address: "123 Coffee Lane, Brewtwon, Japan",
    hours: "All week: 7:00 AM - 7:00 PM",
    phone: "(123) 456-7890",
    email: "info@brewhaven.com",
    mapLocation: "https://www.google.com/maps",
  },
];

export default locations;
