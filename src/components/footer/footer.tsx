import { Copyright } from "../copyright/copyright";
import Logo from "../logo/logo";
import SocialMediaLinks from "../social-media-links/social-media-links";

interface FooterProps {}

export default function Footer() {
  return (
    <footer>
      <div className="border-charcoal border-t-2 bg-superSaiyan p-4">
        <div className="flex w-full flex-row justify-between">
          {/* Left Side */}
          <div className="flex flex-col justify-center gap-4">
            <Logo spinOnHover={false} />
            <SocialMediaLinks />
          </div>
        </div>
      </div>
      <Copyright />
    </footer>
  );
}
