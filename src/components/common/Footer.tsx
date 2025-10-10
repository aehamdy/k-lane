import Logo from "@/components/common/Logo";
import navLinks from "@/config/navLinks";
import Link from "next/link";

function Footer() {
  return (
    <footer className="flex justify-center items-center py-3xl lg:py-10xl bg-brand-secondary rounded-lg">
      <div className="flex flex-col items-center gap-4xl lg:gap-7xl w-full lg:w-fit p-base lg:p-0">
        <div className="flex flex-col items-center gap-small w-full">
          <div className="w-[80px] h-[80px] mb-10">
            <div className="relative w-20 h-20 bg-brand-primary border border-dark rounded-full">
              <div className="absolute top-1/3 start-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-between items-center w-3/5">
                <div className="w-4 h-4 bg-dark rounded-full"></div>
                <div className="w-4 h-4 bg-dark rounded-full"></div>
              </div>

              <div className="absolute bottom-1/10 start-1/2 transform -translate-x-1/2 -translate-y-1/10 w-14 h-14 border-b border-dark rounded-full"></div>
            </div>
          </div>

          <Logo variant="secondary" />
        </div>

        <ul className="flex items-center gap-xl font-bold text-light">
          {navLinks.map((link) => (
            <li key={link.id} className="">
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
