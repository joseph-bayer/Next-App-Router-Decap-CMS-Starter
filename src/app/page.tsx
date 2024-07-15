import { attributes as HomepageAttributes } from "../content/landing-pages/home.md";
import DebugHelper from "@/components/debug-helper/debug-helper";
import Hero from "@/components/hero/hero";
import Image from "next/image";
import WolfCactusImage from "../assets/wolf_by_cactus.png";
import ChickenCowboyImage from "../assets/chicken_cowboy.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Hero homepageAttributes={HomepageAttributes} />

      <section className="bg-coffee w-full">
        <div className="topography-pattern w-full h-full bg-fixed">
          <div className="max-w-5xl mx-auto py-32 flex flex-row justify-between">
            <div>
              <h2 className="text-superSaiyan font-josefin-sans font-bold text-6xl">
                Main Technology
              </h2>
              <DebugHelper data={HomepageAttributes} />
            </div>
            <Image
              src={WolfCactusImage}
              alt="Image of wolf next to cactus"
              height={400}
              width={400}
              placeholder="blur"
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </section>

      <section className="bg-shenron w-full relative overflow-hidden">
        {/* Cactus Highlight */}
        <div className="absolute top-[50px] left-[50%] cactus-highlight-2 bg-cover bg-top h-full w-full"></div>

        {/* Content */}
        <div className="max-w-5xl mx-auto py-32 flex flex-row justify-between relative z-[1]">
          <Image
            src={ChickenCowboyImage}
            alt="Image of chicken cowboy"
            height={400}
            width={400}
            placeholder="blur"
            className="scale-x-[-1]"
            style={{
              objectFit: "contain",
            }}
          />
          <div>
            <h2 className="text-superSaiyan font-josefin-sans font-bold text-6xl">
              Supporting Technology
            </h2>
            <DebugHelper data={HomepageAttributes} />
          </div>
        </div>
      </section>
    </main>
  );
}
