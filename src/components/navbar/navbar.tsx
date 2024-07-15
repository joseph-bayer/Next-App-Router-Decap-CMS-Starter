import Link from "next/link";
import Logo from "../logo/logo";

interface NavbarProps {}

export default function Navbar({}: NavbarProps) {
  // TODO: add link to blog collection page, dropdown for about page/privacy policy
  return (
    <nav className="sticky top-0 z-10 bg-superSaiyan shadow-xl">
      <div className="flex flex-row px-8 py-2 relative">
        {/* Logo Homepage Link */}
        <Link href="/" className="z-[11]">
          <Logo spinOnHover={true} />
        </Link>
      </div>
    </nav>
  );
}
