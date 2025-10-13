import primaryLogo from "@/assets/logo/logo.svg";
import secondaryLogo from "@/assets/logo/KoffeeLane-logo.svg";
import Image from "next/image";
import ROUTES from "@/config/routes";
import Link from "next/link";

interface LogoProps {
  variant: "primary" | "secondary";
}

function Logo({ variant }: LogoProps) {
  if (variant === "secondary") {
    return (
      <Link
        href={ROUTES.home}
        className="w-[244px] lg:w-[400px] h-[110px] lg:h-[181px]"
      >
        <Image
          src={secondaryLogo}
          alt="Logo"
          className="w-full h-full object-contain"
        />
      </Link>
    );
  }

  return (
    <Link
      href={ROUTES.home}
      className="flex w-[50px] lg:w-[60px] h-[19px] lg:h-[22px]"
    >
      <Image
        src={primaryLogo}
        alt="logo"
        className="w-full h-full object-cover"
      />
    </Link>
  );
}

export default Logo;
