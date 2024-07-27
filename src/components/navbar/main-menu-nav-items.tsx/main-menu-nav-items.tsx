import { NavItem } from "@/interfaces/NavItems";

import Link from "next/link";
import { attributes as MainMenuAttributes } from "../../../content/site-settings/main-menu.md";
import MainMenuNavDropdown from "./main-menu-nav-dropdown";
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
                <MainMenuNavDropdown navItem={navItem} />
              </li>
            );
        }
      })}
    </ul>
  );
}
