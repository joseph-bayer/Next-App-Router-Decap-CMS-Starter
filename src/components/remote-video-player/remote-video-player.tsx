import { RemoteVideoPlatformEnum } from "@/interfaces/VideoPlayerData";
import BuildVideoPlayerDataFromSrc from "@/lib/buildVideoPlayerDataFromSrc";
import { YouTubeEmbed } from "@next/third-parties/google";
import "server-only";
import VimeoPlayer from "./vimeo-player";

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
