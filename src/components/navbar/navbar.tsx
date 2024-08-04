import Link from "next/link";
import AlgoliaSearch from "../algolia-search/algolia-search";
import GithubLogo from "../icons/github-logo";
import Logo from "../logo/logo";
import NavbarHamburger from "../navbar-hamburger/navbar-hamburger";
import MainMenuNavItems from "./main-menu-nav-items.tsx/main-menu-nav-items";

interface NavbarProps {}

export default function Navbar({}: NavbarProps) {
  return (
    <nav className="sticky top-0 z-10 h-[76px] bg-superSaiyan shadow-xl">
      <div className="relative flex h-full flex-row items-center justify-between px-4 py-2 lg:px-8">
        {/* Logo Homepage Link */}
        <div className="flex-1">
          <Link href="/" className="block w-fit">
            <Logo spinOnHover={true} />
          </Link>
        </div>

        {/* Links */}
        <div className="hidden flex-1 flex-row justify-center lg:flex">
          <MainMenuNavItems />
        </div>

        {/* Search + Github Logo */}
        <div className="hidden flex-1 items-center justify-end lg:flex">
          <div className="flex items-center justify-center gap-8">
            {/* Search */}
            <div>
              <AlgoliaSearch />
            </div>

            {/* Github Link */}
            <a
              href="https://github.com/joseph-bayer/Next-App-Router-Decap-CMS-Starter"
              target="_blank"
            >
              <GithubLogo
                width={60}
                height={60}
                className="fill-charcoal hover:fill-dragonBall"
              />
              <span className="sr-only">Link to Github for this project</span>
            </a>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="flex flex-1 justify-end lg:hidden">
          <NavbarHamburger />
        </div>
      </div>
    </nav>
  );
}
