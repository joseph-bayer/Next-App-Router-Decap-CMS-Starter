import { Copyright } from "../copyright/copyright";
import SocialMediaLinks from "../social-media-links/social-media-links";

interface FooterProps {}

export default function Footer() {
  return (
    <footer>
      <div className="bg-superSaiyan p-4">
        <SocialMediaLinks />
      </div>
      <Copyright />
    </footer>
  );
}
