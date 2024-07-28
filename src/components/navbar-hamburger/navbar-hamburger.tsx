"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import dynamic from "next/dynamic";
import { useState } from "react";
import FullPageLoadingIndicator from "../full-page-loading-indicator/full-page-loading-indicator";
const MobileMenu = dynamic(() => import("./mobile-menu"), {
  loading: () => <FullPageLoadingIndicator />,
});

interface NavbarHamburgerProps {}

export default function NavbarHamburger({}: NavbarHamburgerProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <button className="group" onClick={() => setIsMenuOpen((prev) => !prev)}>
        {!isMenuOpen && (
          <>
            <span className="sr-only">Open Menu</span>
            <Bars3Icon
              aria-hidden="true"
              className="h-8 w-8 stroke-[3px] text-dragonBall group-hover:text-vegeta"
            />
          </>
        )}
        {isMenuOpen && (
          <>
            <span className="sr-only">Close Menu</span>
            <XMarkIcon
              aria-hidden="true"
              className="h-8 w-8 stroke-[3px] text-dragonBall group-hover:text-vegeta"
            />
          </>
        )}
      </button>
      {isMenuOpen && (
        <MobileMenu
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={(isOpen) => setIsMenuOpen(isOpen)}
        />
      )}
    </>
  );
}
