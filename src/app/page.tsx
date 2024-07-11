import { attributes as HomepageAttributes } from "../content/landing-pages/home.md";
import DebugHelper from "@/components/debug-helper/debug-helper";
import Hero from "@/components/hero/hero";
import Image from "next/image";
import WolfCactusImage from "../assets/wolf_by_cactus.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Hero homepageAttributes={HomepageAttributes} />

      <section className="bg-coffee w-full relative">
        <div className="topography-pattern w-full h-full">
          <div className="max-w-5xl mx-auto py-32 flex flex-row justify-between">
            <div>
              <h2 className="text-superSaiyan font-josefin-sans font-bold text-6xl">
                Main Technology
              </h2>
              <DebugHelper data={HomepageAttributes} />
            </div>
            <Image
              src={WolfCactusImage}
              alt="Monkey Cowboy Logo"
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
    </main>
  );
}
