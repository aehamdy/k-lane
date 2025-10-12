import Image from "next/image";
import heroImage from "@/assets/heroes/hero-section-image.webp";
import Header from "@/components/common/Header";

function Hero() {
  return (
    <section className="relative flex justify-center items-center h-[50dvh] lg:h-[105dvh] pt-9xl lg:pt-13xl px-base bg-brand-secondary rounded-lg overflow-hidden">
      <div className="absolute start-1/2 top-base -translate-x-1/2 w-[92%] lg:w-[96%] z-50">
        <Header />
      </div>

      <div className="absolute z-40 top-1/2 start-1/2 -translate-y-[55%] -translate-x-1/2 flex flex-col">
        <div className="relative">
          <h1 className="flex flex-col items-center font-archivo font-black text-6xl md:text-7xlarge lg:text-giant text-light">
            <span className="">KOFFEE</span>
            <span className="">LANE</span>
          </h1>

          <div className="absolute top-[40%] translate-y-[12%] lg:translate-y-[15%] start-1/2 -translate-x-[40%] md:-translate-x-[50%] rotate-[-16deg] z-30 ">
            <div className="relative w-[220px] lg:w-[470px] h-[386px] lg:max-h-[835px]">
              <Image
                src={heroImage}
                alt="Hero"
                className="max-w-full h-auto object-cover"
              />

              <div className="absolute top-2/10 lg:top-[5%] start-6/10 lg:start-[110%] flex justify-center items-center w-[111px] lg:w-[162px] h-[111px] lg:h-[162px] p-2.5 lg:p-3.5 bg-accent rounded-full">
                <div className="flex justify-center items-center w-full h-full border-2 border-dashed border-brand-secondary rounded-full">
                  <div className="font-bold text-small lg:text-xlarge text-brand-secondary text-center leading-4 lg:leading-7 rotate-[40deg]">
                    Roasted Goodness
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
