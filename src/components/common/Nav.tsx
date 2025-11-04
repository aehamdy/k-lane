"use client";

import Icon from "@/components/common/Icon";
import navLinks from "@/config/navLinks";
import Link from "next/link";
import NavItem from "./NavItem";
import { useState } from "react";

function Nav({ isProductPage }: { isProductPage: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`${
        isProductPage
          ? "text-light bg-brand-secondary"
          : "text-dark bg-brand-primary"
      }`}
    >
      {/* Mobile toggle button */}
      <div className="lg:hidden flex justify-center items-center">
        <button type="button" onClick={toggleMenu} className="cursor-pointer">
          <Icon name={isOpen ? "close" : "menu"} />
        </button>
      </div>

      {/* Mobile dropdown */}
      <ul
        className={`lg:hidden absolute top-[110%] start-0 w-full flex flex-col py-xl px-regular ${
          isProductPage ? "bg-brand-secondary" : "bg-brand-primary"
        } rounded-xl z-50 transition-all duration-slow ease-in-out origin-top ${
          isOpen
            ? "opacity-100 scale-y-100 pointer-events-auto"
            : "opacity-0 scale-y-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <li key={link.id} className="w-full py-1.5 font-bold">
            <Link href={link.href} onClick={closeMenu}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Desktop nav */}
      <ul className="hidden lg:flex items-center gap-xl font-bold lg:text-medium">
        {navLinks.map((link) => (
          <li key={link.id}>
            <NavItem link={link} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
