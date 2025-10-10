"use client";

import Icon from "@/components/common/Icon";
import navLinks from "@/config/navLinks";
import Link from "next/link";
import { useState } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className="text-dark">
      {/* Mobile toggle button */}
      <div className="lg:hidden">
        <button type="button" onClick={toggleMenu}>
          <Icon name={isOpen ? "close" : "menu"} />
        </button>
      </div>

      {/* Mobile dropdown */}
      <ul
        className={`lg:hidden absolute top-[110%] start-0 w-full flex flex-col py-xl px-regular bg-brand-primary rounded-xl z-50 transition-all duration-slow ease-in-out origin-top ${
          isOpen
            ? "opacity-100 scale-y-100 pointer-events-auto"
            : "opacity-0 scale-y-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <li key={link.id} className="w-full py-1.5 font-bold">
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>

      {/* Desktop nav */}
      <ul className="hidden lg:flex items-center gap-xl font-bold">
        {navLinks.map((link) => (
          <li key={link.id}>
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
