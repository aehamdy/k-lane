import Image from "next/image";
import heroImage from "@/assets/heroes/hero-section-image.webp";

function Hero() {
  return (
    <section className="flex justify-center items-center h-[50dvh] p-base bg-[#7322ff] rounded-lg overflow-hidden">
      <div className="relative flex flex-col">
        <h1 className="flex flex-col items-center font-archivo font-black text-6xl text-light">
          <span className="">KOFFEE</span>
          <span className="">LANE</span>
        </h1>

        <div className="w-[220px] h-[386px] -rotate-12">
          <Image
            src={heroImage}
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
