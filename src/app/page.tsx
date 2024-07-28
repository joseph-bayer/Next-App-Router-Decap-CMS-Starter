import DebugHelper from "@/components/debug-helper/debug-helper";
import Hero from "@/components/hero/hero";
import Image from "next/image";
import ChickenCowboyImage from "../assets/images/chicken_cowboy.png";
import WolfCactusImage from "../assets/images/wolf_by_cactus.png";
import { attributes as HomepageAttributes } from "../content/landing-pages/home.md";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Hero homepageAttributes={HomepageAttributes} />

      <section className="w-full bg-coffee">
        <div className="topography-pattern h-full w-full bg-fixed">
          <div className="mx-auto flex max-w-5xl flex-col justify-between gap-2 px-4 py-32 lg:flex-row">
            <div>
              <h2 className="font-josefin-sans text-6xl font-bold text-superSaiyan">
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

      <section className="relative w-full overflow-hidden bg-shenron">
        {/* Cactus Highlight */}
        <div className="cactus-highlight-2 absolute left-[50%] top-[50px] h-full w-full bg-cover bg-top"></div>

        {/* Content */}
        <div className="relative z-[1] mx-auto flex max-w-5xl flex-col justify-between gap-2 px-4 py-32 lg:flex-row">
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
            <h2 className="font-josefin-sans text-6xl font-bold text-superSaiyan">
              Supporting Technology
            </h2>
            <DebugHelper data={HomepageAttributes} />
          </div>
        </div>
      </section>
    </main>
  );
}
