export const RemoteVideoPlatformEnum = {
  YOUTUBE: 1,
  VIMEO: 2,
};

export interface VideoPlayerData {
  id: string;
  platform: number;
  thumbnailSrc?: string; // only needed for Vimeo
  embedSrc?: string; // only needed for Vimeo
}
