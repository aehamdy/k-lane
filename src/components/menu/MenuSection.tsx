import Heading from "@/components/common/Heading";
import MenuItem from "@/components/menu/MenuItem";
import { MenuSectionT } from "@/data/menu";

interface MenuSectionProps {
  menu: MenuSectionT;
}
function MenuSection({ menu }: MenuSectionProps) {
  return (
    <section className="flex flex-col gap-3xl lg:gap-10xl py-3xl lg:py-6xl px-base lg:px-10xl bg-light rounded-xl">
      <div className="flex flex-col items-center gap-small">
        <Heading
          level={3}
          className="font-bold text-3xlarge lg:text-4xlarge text-dark"
        >
          {menu.title}
        </Heading>

        <p className="text-deep">{menu.subtitle}</p>
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-[112px]">
        {menu.items.map((item, index) => (
          <ul key={index} className="">
            {item.map((item) => (
              <li key={item.name}>
                <MenuItem item={item} />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}

export default MenuSection;
