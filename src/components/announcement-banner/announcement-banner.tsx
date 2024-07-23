import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { attributes as AlertBannerAttributes } from "../../content/site-settings/announcement-banner.md";

interface AnnouncementBannerProps {}

export default function AnnouncementBanner({}: AnnouncementBannerProps) {
  return (
    <>
      {AlertBannerAttributes.enabled && (
        <div className="flex h-[76px] w-full flex-row items-center justify-center gap-x-4 bg-red-500">
          <ExclamationTriangleIcon className="h-12 w-12 stroke-2 text-offWhite" />
          <span className="text-xl font-bold text-offWhite">
            {AlertBannerAttributes.text}
          </span>
        </div>
      )}
    </>
  );
}
