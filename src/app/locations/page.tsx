import HeaderWrapper from "@/components/common/HeaderWrapper";
import HeroSection from "@/components/common/HeroSection";
import LocationCard from "@/components/locations/LocationCard";
import locations from "@/data/locations";

function page() {
  return (
    <main className="relative page-vertical-gap">
      <HeaderWrapper />

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
