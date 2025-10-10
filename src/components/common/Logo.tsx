import primaryLogo from "@/assets/logo/logo.svg";
import secondaryLogo from "@/assets/logo/KoffeeLane-logo.svg";
import Image from "next/image";

interface LogoProps {
  variant: "primary" | "secondary";
}

function Logo({ variant }: LogoProps) {
  if (variant === "secondary") {
    return (
      <div className="w-[244px] lg:w-[400px] h-[110px] lg:h-[181px]">
        <Image
          src={secondaryLogo}
          alt="Logo"
          className="w-full h-full object-contain"
        />
      </div>
    );
  }

  return (
    <div className="flex w-[50px] lg:w-[60px] h-[19px] lg:h-[22px]">
      <Image
        src={primaryLogo}
        alt="logo"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default Logo;
