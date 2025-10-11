import Heading from "@/components/common/Heading";
import { MenuItemT } from "@/data/menu";
import Image from "next/image";

interface MenuItem {
  item: MenuItemT;
}

function MenuItem({ item }: MenuItem) {
  return (
    <article className="flex flex-col lg:flex-row items-center gap-xl p-xl lg:py-xl lg:px-0">
      <div className="w-[95px] h-[95px] rounded-full overflow-hidden">
        <Image
          src={item.image}
          alt={`${item.name} image`}
          className="max-w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col items-center gap-2 text-deep">
        <div className="flex flex-col items-center lg:flex-row lg:justify-between gap-1 w-full">
          <Heading level={4} className="font-bold w-fit text-dark">
            {item.name}
          </Heading>

          <p className="w-fit font-bold">${item.price.toFixed(2)}</p>
        </div>

        <p className="text-center lg:text-start">{item.description}</p>
      </div>
    </article>
  );
}

export default MenuItem;
