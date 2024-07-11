import Image from "next/image";
import MonkeyCowboyImage from "../../assets/monkey_cowboy_logo.png";
import DesertNight from "../../assets/desert_night.jpg";
import styles from "./hero.module.scss";

interface HeroProps {
  homepageAttributes: any;
}

export default function Hero({ homepageAttributes }: HeroProps) {
  return (
    <section className="flex flex-col items-center gap-4 relative w-full">
      <div className="relative w-full h-full px-16 py-32">
        {/* BG Image */}
        <Image
          src={DesertNight}
          alt="Image of the desert at night"
          fill
          placeholder="blur"
          className="absolute top-0 left-0"
          style={{
            objectFit: "cover",
            objectPosition: "center 80%",
          }}
        />

        <div className="flex flex-row gap-x-8 relative justify-center">
          {/* Cowboy Monkey */}
          <Image
            src={MonkeyCowboyImage}
            alt="Image of a Cowboy Monkey"
            height={300}
            width={300}
            placeholder="blur"
            className="animate-bob relative"
          />

          {/* Speech Bubble */}
          <div className={`${styles.speechBubble}`}>
            <span className={`${styles.speechBubbleText}`}>Howdy!</span>
          </div>
        </div>
      </div>
    </section>
  );
}
