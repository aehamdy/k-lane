import { CgMenuMotion } from "react-icons/cg";
import { GoHeartFill } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import { PiStarFourFill } from "react-icons/pi";

type IconName = "menu" | "close" | "star" | "heart";

const iconMap = {
  menu: CgMenuMotion,
  close: IoClose,
  star: PiStarFourFill,
  heart: GoHeartFill,
};

interface IconProps {
  name: IconName;
  size?: number | string;
  className?: string;
}

function Icon({ name, size = 21, className = "flex items-center" }: IconProps) {
  const IconComponent = iconMap[name];

  return <IconComponent size={size} className={className} />;
}

export default Icon;
