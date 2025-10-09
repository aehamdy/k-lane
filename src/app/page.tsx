import Hero from "@/components/home/Hero";
import ImagesSection from "@/components/home/ImagesSection";

export default function Home() {
  return (
    <main className="space-y-micro lg:space-y-base">
      <Hero />

      <ImagesSection />
    </main>
  );
}
