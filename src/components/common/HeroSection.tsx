import Heading from "@/components/common/Heading";
import Image, { StaticImageData } from "next/image";

interface HeroSectionProps {
  heading: string;
  subheading?: string;
  heroImage?: StaticImageData | undefined;
}
function HeroSection({ heading, subheading, heroImage }: HeroSectionProps) {
  return (
    <section>
      <div className="flex flex-col py-8xl px-xl bg-brand-secondary rounded-lg">
        <div className="flex flex-col items-center gap text-light">
          <Heading
            level={1}
            className="font-archivo font-black text-5xlarge lg:text-giant uppercase"
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
              <div className="">
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
