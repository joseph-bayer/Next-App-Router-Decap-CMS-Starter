"use client";

import { NavItem } from "@/interfaces/NavItems";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { attributes as MainMenuAttributes } from "../../../content/site-settings/main-menu.md";
import styles from "./main-menu-nav-items.module.scss";

interface MainMenuNavItemsProps {}

export default function MainMenuNavItems({}: MainMenuNavItemsProps) {
  return (
    <ul className="flex flex-row gap-x-8 font-josefin-sans">
      {MainMenuAttributes.navItems.map((navItem: NavItem, index: number) => {
        switch (navItem.type) {
          case "link":
            return (
              <li key={`${navItem.type}-${index}`}>
                <Link
                  href={navItem.relativeUrl}
                  className={`text-2xl font-bold lowercase text-vegeta hover:text-dragonBall ${styles.navLink}`}
                >
                  {navItem.title}
                </Link>
              </li>
            );
          case "dropdown":
            return (
              <li key={`${navItem.type}-${index}`}>
                <Menu>
                  <MenuButton className="group flex flex-row items-center gap-x-1 text-2xl font-bold lowercase text-vegeta hover:text-dragonBall">
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
                    className="z-[11] flex flex-col rounded-lg border-l border-t border-vegeta bg-superSaiyan"
                  >
                    {navItem.links.map((link, sublinkIndex) => {
                      return (
                        <MenuItem
                          key={`${navItem.title}-sublink-${sublinkIndex}`}
                        >
                          <Link
                            href={link.relativeUrl}
                            className="group px-8 pb-4 pt-2 text-2xl font-bold lowercase text-vegeta hover:text-offWhite data-[focus]:bg-dragonBall data-[focus]:text-offWhite"
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
