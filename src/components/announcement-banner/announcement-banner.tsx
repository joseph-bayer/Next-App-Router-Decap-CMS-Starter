import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { attributes as AlertBannerAttributes } from "../../content/site-settings/announcement-banner.md";

interface AnnouncementBannerProps {}

export default function AnnouncementBanner({}: AnnouncementBannerProps) {
  return (
    <>
      {AlertBannerAttributes.enabled && (
        <div className="w-full h-[76px] flex flex-row justify-center items-center gap-x-4 bg-red-500">
          <ExclamationTriangleIcon className="h-12 w-12 text-offWhite stroke-2" />
          <span className="font-bold text-xl text-offWhite">
            {AlertBannerAttributes.text}
          </span>
        </div>
      )}
    </>
  );
}
