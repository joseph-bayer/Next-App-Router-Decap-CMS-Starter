import { RemoteVideoPlatformEnum } from "@/interfaces/VideoPlayerData";
import BuildVideoPlayerDataFromSrc from "@/lib/buildVideoPlayerDataFromSrc";
import dynamic from "next/dynamic";
import "server-only";
import VideoPlayerSuspenseSkeleton from "./video-player-suspense-skeleton";
const YouTubeEmbed = dynamic(
  () => import("@next/third-parties/google").then((d) => d.YouTubeEmbed),
  {
    loading: () => <VideoPlayerSuspenseSkeleton />,
  },
);
const VimeoPlayer = dynamic(() => import("./vimeo-player"), {
  loading: () => <VideoPlayerSuspenseSkeleton />,
});

interface RemoteVideoPlayerProps {
  src: string;
}

export default async function RemoteVideoPlayer({
  src,
}: RemoteVideoPlayerProps) {
  const videoPlayerData = await BuildVideoPlayerDataFromSrc(src);

  return (
    <div className="flex justify-center">
      {videoPlayerData.platform === RemoteVideoPlatformEnum.YOUTUBE && (
        <YouTubeEmbed videoid={videoPlayerData.id} width={640} height={360} />
      )}
      {videoPlayerData.platform === RemoteVideoPlatformEnum.VIMEO && (
        <VimeoPlayer videoPlayerData={videoPlayerData} />
      )}
    </div>
  );
}
