"use client";

import { VideoPlayerData } from "@/interfaces/VideoPlayerData";
import { PlayIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useState } from "react";

interface VimeoPlayerProps {
  videoPlayerData: VideoPlayerData;
}

export default function VimeoPlayer({ videoPlayerData }: VimeoPlayerProps) {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="h-[360px]">
      {/* Facade */}
      {!showVideo && (
        <button
          className="group relative h-full w-full"
          onClick={() => setShowVideo(true)}
        >
          {/* Play Icon */}
          <div className="absolute left-0 top-0 flex h-full w-full flex-row items-center justify-center">
            <div className="rounded bg-black/90 px-6 py-1.5 transition-colors duration-100 ease-in-out group-hover:bg-[#00adefff]">
              <PlayIcon className="h-8 w-8 text-white transition-colors duration-100 ease-in-out group-hover:text-black" />
            </div>
          </div>

          {/* Image */}
          <Image
            src={videoPlayerData.thumbnailSrc ?? ""}
            alt={"Video Thumbnail"}
            width={640}
            height={360}
            className="bg-"
            style={{
              objectFit: "cover",
              objectPosition: "center",
              minWidth: "640px",
              maxWidth: "640px",
              minHeight: "360px",
              maxHeight: "360px",
            }}
          />
        </button>
      )}

      {/* Video iframe */}
      {!!showVideo && (
        <iframe
          src={videoPlayerData.embedSrc ?? ""}
          width="640"
          height="360"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
}
