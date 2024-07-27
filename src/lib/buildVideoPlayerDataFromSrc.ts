import {
  RemoteVideoPlatformEnum,
  VideoPlayerData,
} from "@/interfaces/VideoPlayerData";

export default async function BuildVideoPlayerDataFromSrc(
  src: string,
): Promise<VideoPlayerData> {
  let videoPlayerProps: VideoPlayerData = {
    platform: RemoteVideoPlatformEnum.YOUTUBE, // default to YT
    id: "",
  };

  if (src.toLowerCase().includes("youtube.com")) {
    videoPlayerProps.platform = RemoteVideoPlatformEnum.YOUTUBE;
    videoPlayerProps.id = getYouTubeVideoId(src);
  } else if (src.toLowerCase().includes("vimeo.com")) {
    videoPlayerProps.platform = RemoteVideoPlatformEnum.VIMEO;
    videoPlayerProps.id = getVimeoVideoId(src);
    videoPlayerProps.embedSrc = src.replace(
      "vimeo.com",
      "player.vimeo.com/video",
    );
    const videoDataResponse = await fetch(
      `https://vimeo.com/api/v2/video/${videoPlayerProps.id}.json`,
    ).then((r) => r.json());
    videoPlayerProps.thumbnailSrc = videoDataResponse[0].thumbnail_large;
  }

  return videoPlayerProps;
}

function getYouTubeVideoId(input: string): string {
  const matches = input.match(
    /(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/user\/\S+|\/ytscreeningroom\?v=|\/sandalsResorts#\w\/\w\/.*\/))([^\/&]{10,12})/,
  );
  return matches?.[1] ?? "";
}

function getVimeoVideoId(input: string): string {
  const matches = input.match(
    /(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/(?:[^\/]*)\/videos\/|album\/(?:\d+)\/video\/|video\/|)(\d+)(?:[a-zA-Z0-9_\-]+)?/i,
  );
  return matches?.[1] ?? "";
}
