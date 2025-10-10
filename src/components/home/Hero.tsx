import Image from "next/image";
import heroImage from "@/assets/heroes/hero-section-image.webp";
import Header from "@/components/common/Header";

function Hero() {
  return (
    <section className="relative flex justify-center items-center h-[50dvh] pt-9xl lg:pt-13xl px-base bg-brand-secondary rounded-lg overflow-hidden">
      <div className="absolute top-7 mx-auto w-[96%]">
        <Header />
      </div>

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
