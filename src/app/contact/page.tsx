import HeaderWrapper from "@/components/common/HeaderWrapper";
import Heading from "@/components/common/Heading";
import HeroSection from "@/components/common/HeroSection";
import Icon from "@/components/common/Icon";
import siteData from "@/config/siteData";
import Link from "next/link";

function page() {
  return (
    <main className="relative page-vertical-gap">
      <HeaderWrapper />

      <HeroSection heading="Contact" subheading="We’d love to hear from you!" />

      <section className="flex flex-col gap-base p-2 lg:p-base bg-soft rounded-base lg:rounded-xl">
        <div className="bg-light rounded-lg">
          <div className="flex flex-col gap-8 lg:w-3/5 mx-auto py-8 px-base">
            <Heading
              level={2}
              className="font-bold text-2xlarge text-dark/70 text-center"
            >
              We’re always here to make your coffee experience better.
            </Heading>

            <form action="" className="flex flex-col gap-4">
              <div className="border border-deep rounded-base">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-base outline-0"
                />
              </div>

              <div className="border border-deep rounded-base">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="w-full p-base outline-0"
                />
              </div>

              <div className="border border-deep rounded-base">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Phone number"
                  className="w-full p-base outline-0"
                />
              </div>

              <div className="h-[150px] border border-deep rounded-base">
                <textarea
                  name=""
                  id=""
                  placeholder="Message"
                  className="w-full p-base outline-0"
                ></textarea>
              </div>

              <button
                type="button"
                className="w-full py-compact px-regular font-bold text-light hover:text-brand-primary bg-brand-secondary rounded-pill duration-slow cursor-pointer"
              >
                Send
              </button>
            </form>
          </div>
        </div>

        <div className="bg-light rounded-lg">
          <div className="flex flex-col gap-xl lg:w-3/5 mx-auto py-3xl lg:py-8 px-base">
            <div className="flex flex-col gap-base text-dark">
              <Heading level={4} className="font-bold text-2xlarge">
                {siteData.office.title}
              </Heading>

              <div className="flex flex-col gap-base">
                <div className="flex items-center gap-2">
                  <div className="">
                    <Icon name="mapPin" />
                  </div>

                  <address className="">{siteData.office.address}</address>
                </div>

                <div className="flex items-center gap-2">
                  <div className="">
                    <Icon name="clock" />
                  </div>

                  <address className="">{siteData.office.hours}</address>
                </div>
                <div className="flex items-center gap-2">
                  <div className="">
                    <Icon name="phone" />
                  </div>

                  <address className="">{siteData.office.phone}</address>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-base">
              {siteData.socials.map((social) => (
                <div key={social.id}>
                  <Link
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                  >
                    <Icon name={social.iconName} size={26} />
                  </Link>
                </div>
              ))}
            </div>

            <div className="border border-deep rounded-pill">
              <Link
                href="https://linkedin.com/aehamdy"
                className="flex justify-center items-center w-full p-base font-semibold"
              >
                View on LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default page;
