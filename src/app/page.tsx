import { attributes as HomepageAttributes } from "../content/landing-pages/home.md";
import DebugHelper from "@/components/debug-helper/debug-helper";
import Hero from "@/components/hero/hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Hero homepageAttributes={HomepageAttributes} />

      <section className="bg-shenron w-full">
        <div className="max-w-3xl mx-auto py-32">
          <h2 className="text-offWhite font-josefin-sans font-bold text-4xl">
            Print Data Using DebugHelper
          </h2>
          <DebugHelper data={HomepageAttributes} />
        </div>
      </section>
    </main>
  );
}
