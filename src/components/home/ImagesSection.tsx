import Image from "next/image";
import pizzaImage from "@/assets/images-section/images-section-1.webp";
import blackBagImage from "@/assets/images-section/images-section-2.webp";
import dessertImage from "@/assets/images-section/images-section-3.webp";
import Heading from "@/components/common/Heading";
import Icon from "@/components/common/Icon";
import MarqueeText from "@/components/common/MarqueeText";

const dishes = [
  "Mori Salad",
  "Frappe Lane",
  "Choco Wave",
  "Lane Soup",
  "Irish Vibes",
];

function ImagesSection() {
  return (
    <section className="grid grid-cols-1 gap-base">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-micro md:gap-base h-[85dvh] lg:h-[75dvh]">
        <div className="children-1 relative lg:col-span-7 rounded-lg overflow-hidden">
          <Heading
            level={2}
            className="absolute top-1/2 start-1/2 -translate-y-1/2 -translate-x-1/2 font-bold text-4xlarge lg:text-6xlarge text-light"
          >
            Munch!
          </Heading>
          <Image
            src={pizzaImage}
            alt="pizza-image"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="children-2 lg:col-span-5 flex flex-col justify-end items-center md:gap-base lg:pt-8xl bg-brand-primary rounded-lg overflow-hidden">
          <div className="flex flex-col items-center gap-micro text-dark">
            <Heading level={5} className="font-bold text-large lg:text-3xlarge">
              The one&reg; is back
            </Heading>

            <p className="text-dark/70 w-[65%] text-center">
              Selected from the best coffee-growing regions aroudn the world
            </p>
          </div>

          <div className="w-[500px] h-[284px] md:h-[248px] lg:h-[340px] leading-none">
            <Image
              src={blackBagImage}
              alt="bag-image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-micro md:gap-base h-[85dvh] lg:h-[75dvh]">
        <div className="relative lg:col-span-6 rounded-lg overflow-hidden">
          <Image
            src={dessertImage}
            alt="dessert-image"
            className="w-full h-full object-cover"
          />

          <div className="absolute top-1/2 start-1/2 -translate-y-1/2 -translate-x-1/2 w-[207px] h-[207px] p-3 bg-white rounded-full">
            <div className="rounded-text relative text-[#80604a] w-full h-full p-1 animate-spin [animation-duration:10s]">
              <svg
                viewBox="0 0 191 191"
                width="100%"
                height="100%"
                className="block"
                aria-hidden
              >
                <defs>
                  <path
                    id="circlePath"
                    d="M95.5,95.5 m -88,0 a 88,88 0 1,1 176,0 a 88,88 0 1,1 -176,0"
                  />
                </defs>
                <text
                  fill="currentColor"
                  letterSpacing="2"
                  className="font-bold text-base"
                >
                  <textPath
                    href="#circlePath"
                    startOffset="50%"
                    textAnchor="middle"
                    lengthAdjust="spacing"
                    textLength="552"
                  >
                    NY BRANCH . NOW OPEN . NY BRANCH
                  </textPath>
                </text>
              </svg>
            </div>
          </div>

          <div className="absolute top-1/2 start-1/2 -translate-y-1/2 -translate-x-1/2 text-[#80604a]">
            <Icon name="heart" size={36} />
          </div>
        </div>

        <div className="lg:col-span-6 flex justify-center items-center pt-8xl text-large bg-brand-secondary rounded-lg overflow-hidden">
          <div className="-rotate-12">
            <div className="py-xl">
              <MarqueeText>
                <ul className="flex items-center gap-regular py-xl text-brand-secondary bg-accent">
                  <li className="mx-2">
                    <div className="flex items-center font-bold text-2xlarge">
                      New Menu <Icon name="star" />
                    </div>
                  </li>
                </ul>
              </MarqueeText>
            </div>

            <div className="py-xl">
              <MarqueeText>
                <ul className="flex items-center gap-regular">
                  {dishes.map((dish, index) => (
                    <li key={index}>
                      <div className="py-small px-regular font-bold text-2xlarge text-accent bg-[#5938de] whitespace-nowrap border-2 border-accent rounded-pill">
                        {dish}
                      </div>
                    </li>
                  ))}
                </ul>
              </MarqueeText>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImagesSection;
