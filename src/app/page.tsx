import Image from "next/image";
import MonkeyCowboyImage from "../assets/monkey_cowboy_logo.png";
import { attributes as HomepageAttributes } from "../content/landing-pages/home.md";
import DebugHelper from "@/components/debug-helper/debug-helper";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-y-16">
      <section className="flex flex-col items-center gap-4">
        <Image
          src={MonkeyCowboyImage}
          alt="Image of a Cowboy Monkey"
          height={300}
          width={300}
          placeholder="blur"
        />
        <h1 className="homepage-title">{HomepageAttributes.title}</h1>
      </section>

      <section>
        <h2 className="font-josefin-sans font-bold text-4xl">
          Print Data Using DebugHelper
        </h2>
        <DebugHelper data={HomepageAttributes} />
      </section>
    </main>
  );
}
