"use client";

import { NavItem } from "@/interfaces/NavItems";
import { attributes as MainMenuAttributes } from "../../../content/site-settings/main-menu.md";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import styles from "./main-menu-nav-items.module.scss";

interface MainMenuNavItemsProps {}

export default function MainMenuNavItems({}: MainMenuNavItemsProps) {
  return (
    <ul className="font-josefin-sans flex flex-row gap-x-8">
      {MainMenuAttributes.navItems.map((navItem: NavItem, index: number) => {
        switch (navItem.type) {
          case "link":
            return (
              <li key={`${navItem.type}-${index}`}>
                <Link
                  href={navItem.relativeUrl}
                  className={`text-2xl lowercase font-bold text-vegeta hover:text-dragonBall ${styles.navLink}`}
                >
                  {navItem.title}
                </Link>
              </li>
            );
          case "dropdown":
            return (
              <li key={`${navItem.type}-${index}`}>
                <Menu>
                  <MenuButton className="text-2xl lowercase font-bold text-vegeta hover:text-dragonBall flex flex-row gap-x-1 items-center group">
                    {({ active }) => (
                      <>
                        <span>{navItem.title}</span>

                        <ChevronDownIcon
                          width={24}
                          height={24}
                          className={`text-vegeta group-hover:text-dragonBall ${active && "rotate-180"}`}
                        />
                      </>
                    )}
                  </MenuButton>
                  <MenuItems
                    anchor="bottom start"
                    className="z-[11] bg-superSaiyan flex flex-col rounded-lg border-l border-t border-vegeta"
                  >
                    {navItem.links.map((link, sublinkIndex) => {
                      return (
                        <MenuItem
                          key={`${navItem.title}-sublink-${sublinkIndex}`}
                        >
                          <Link
                            href={link.relativeUrl}
                            className="group text-2xl lowercase font-bold px-8 pt-2 pb-4 text-vegeta hover:text-offWhite data-[focus]:text-offWhite data-[focus]:bg-dragonBall"
                          >
                            <span
                              className={`${styles.navLink} ${styles.dropdownNavLink}`}
                            >
                              {link.title}
                            </span>
                          </Link>
                        </MenuItem>
                      );
                    })}
                  </MenuItems>
                </Menu>
              </li>
            );
        }
      })}
    </ul>
  );
}
