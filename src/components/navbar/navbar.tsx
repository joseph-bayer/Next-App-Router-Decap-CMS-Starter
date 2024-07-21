import Link from "next/link";
import Logo from "../logo/logo";
import GithubLogo from "../icons/github-logo";
import MainMenuNavItems from "./main-menu-nav-items.tsx/main-menu-nav-items";

interface NavbarProps {}

export default function Navbar({}: NavbarProps) {
  return (
    <nav className="sticky top-0 z-10 bg-superSaiyan shadow-xl">
      <div className="flex flex-row justify-between items-center px-8 py-2 relative">
        {/* Logo Homepage Link */}
        <div className="flex-1">
          <Link href="/" className="block w-fit">
            <Logo spinOnHover={true} />
          </Link>
        </div>

        {/* Links */}
        <div className="flex-1 flex flex-row justify-center">
          <MainMenuNavItems />
        </div>

        {/* Github Logo */}
        <div className="flex flex-1 justify-end">
          <a href="https://github.com/joseph-bayer/Next-App-Router-Decap-CMS-Starter">
            <GithubLogo
              width={60}
              height={60}
              className="fill-[#24292f] hover:fill-dragonBall"
            />
            <span className="sr-only">Link to Github for this project</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
