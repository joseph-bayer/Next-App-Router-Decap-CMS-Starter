import RemoteVideoPlayer from "@/components/remote-video-player/remote-video-player";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Video Players Demos",
};

interface VideoPlayerDemosPageProps {}

export default function VideoPlayerDemoPage({}: VideoPlayerDemosPageProps) {
  return (
    <main className="topography-pattern flex min-h-screen flex-col items-center gap-12 bg-coffee px-4 py-24 text-white lg:p-24">
      <h1 className="font-josefin-sans text-6xl font-black">
        Video Player Demos
      </h1>
      <section>
        <h2 className="text-2xl font-bold">YouTube Player Demo</h2>
        <RemoteVideoPlayer src="https://www.youtube.com/watch?v=4iTAkRHGbuM" />
      </section>
      <section>
        <h2 className="text-2xl font-bold">Vimeo Player Demo</h2>
        <RemoteVideoPlayer src="https://vimeo.com/280877653" />
      </section>
    </main>
  );
}
