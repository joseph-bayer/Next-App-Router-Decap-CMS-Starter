"use client";

import { NavItem } from "@/interfaces/NavItems";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { attributes as MainMenuAttributes } from "../../content/site-settings/main-menu.md";

interface MobileMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export default function MobileMenu({
  isMenuOpen,
  setIsMenuOpen,
}: MobileMenuProps) {
  return (
    <Dialog open={isMenuOpen} onClose={setIsMenuOpen} className="lg:hidden">
      <DialogBackdrop className="fixed inset-0 bg-offBlack/80" />
      <DialogPanel className="fixed inset-y-0 right-0 top-[76px] z-10 w-full overflow-y-auto bg-coffee px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex flex-col gap-8">
          {MainMenuAttributes.navItems.map((navItem: NavItem) => (
            <>
              {navItem.type === "link" && (
                <Link
                  key={`mobile-${navItem.title}`}
                  href={navItem.relativeUrl}
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                  className="text-2xl font-bold lowercase text-white hover:text-superSaiyan"
                >
                  {navItem.title}
                </Link>
              )}
              {navItem.type === "dropdown" && (
                <Disclosure
                  as="div"
                  className="-mx-3"
                  key={`mobile-${navItem.title}`}
                >
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg pl-3 pr-3.5 text-2xl font-bold lowercase text-white hover:text-superSaiyan">
                    {navItem.title}
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-6 w-6 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-3">
                    {navItem.links.map((link) => (
                      <DisclosureButton
                        key={link.title}
                        as="a"
                        href={link.relativeUrl}
                        className="block rounded-lg pl-6 pr-3 text-2xl font-bold lowercase text-white hover:text-superSaiyan"
                      >
                        {link.title}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
              )}
            </>
          ))}
        </div>
      </DialogPanel>
    </Dialog>
  );
}
