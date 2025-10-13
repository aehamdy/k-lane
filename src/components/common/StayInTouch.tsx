import Heading from "@/components/common/Heading";

function StayInTouch() {
  return (
    <section className="flex justify-center items-center py-9xl px-base bg-brand-primary rounded-lg">
      <div className="flex flex-col gap-xl w-full lg:w-1/2">
        <div className="flex flex-col items-center gap-micro text-dark">
          <Heading level={4} className="font-bold text-3xlarge lg:text-4xlarge">
            Stay in touch!
          </Heading>

          <p className="">Latest offers, news, & goodies to your inbox.</p>
        </div>

        <form action="" className="flex flex-col items-center gap-base">
          <div className="w-full flex items-center gap-xl lg:p-tiny bg-white rounded-pill">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full py-compact px-regular lg:px-0 rounded-pill outline-0"
            />

            <button
              type="button"
              className="hidden lg:flex py-compact px-regular text-light bg-brand-secondary rounded-pill"
            >
              Subscribe
            </button>
          </div>

          <button
            type="button"
            className="lg:hidden w-full py-compact px-regular font-bold text-light hover:text-brand-primary bg-brand-secondary rounded-pill cursor-pointer duration-slow"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

export default StayInTouch;
