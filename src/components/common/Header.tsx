"use client";

import Logo from "@/components/common/Logo";
import Nav from "@/components/common/Nav";
import ROUTES from "@/config/routes";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();

  const isProductPage = pathname.startsWith(`${ROUTES.shop}/`);

  return (
    <header
      className={`${
        isProductPage ? "bg-brand-secondary" : "bg-brand-primary"
      } rounded-pill`}
    >
      <div
        className={`relative flex justify-between items-center py-small lg:py-regular px-regular lg:px-3xl`}
      >
        <Logo variant="primary" isProductPage={isProductPage} />

        <Nav isProductPage={isProductPage} />
      </div>
    </header>
  );
}

export default Header;
