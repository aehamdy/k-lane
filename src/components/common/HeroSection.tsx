import Heading from "@/components/common/Heading";
import Image, { StaticImageData } from "next/image";

interface HeroSectionProps {
  heading: string;
  subheading?: string;
  heroImage?: StaticImageData | undefined;
}
function HeroSection({ heading, subheading, heroImage }: HeroSectionProps) {
  return (
    <section className="relative pt-14 bg-brand-secondary rounded-lg overflow-hidden">
      <div className="flex flex-col lg:justify-center h-[23dvh] lg:h-[60dvh] py-[24px] px-xl">
        <div className="relative flex flex-col items-center gap text-light">
          <Heading
            level={1}
            className="font-archivo font-black text-5xlarge lg:text-giant lg:leading-56 uppercase"
          >
            {heading}
          </Heading>

          <div className="">
            {subheading && (
              <p className="font-bold text-large lg:text-3xlarge">
                {subheading}
              </p>
            )}

            {heroImage && (
              <div className="absolute top-12 lg:top-[35%] start-1/2 -translate-x-1/2 w-[155px] lg:w-[315px] h-[255px] lg:h-[540px]">
                <Image
                  src={heroImage}
                  alt="hero-image"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
