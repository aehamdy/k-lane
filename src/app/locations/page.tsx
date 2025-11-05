import HeroSection from "@/components/common/HeroSection";
import LocationCard from "@/components/locations/LocationCard";
import locations from "@/data/locations";
import { Metadata } from "next";
import siteData from "@/config/siteData";

export const metadata: Metadata = {
  title: `Find Us | ${siteData.name} Coffee Locations`,
  description: `Find your nearest ${siteData.name} Coffee location. Visit us to enjoy a cup of specialty coffee in a warm, welcoming space designed for connection and comfort.`,
};

function page() {
  return (
    <main className="relative page-vertical-gap">
      <HeroSection
        heading="Find Us"
        subheading="Come over, you won't regret it!"
      />

      <section className="p-2 lg:p-base bg-soft rounded-base lg:rounded-xl">
        <ul className="grid grid-cols-1 gap-base">
          {locations.map((location) => (
            <li key={location.id}>
              <LocationCard location={location} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default page;
