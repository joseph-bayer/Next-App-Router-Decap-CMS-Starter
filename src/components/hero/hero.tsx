import Image from "next/image";
import MonkeyCowboyImage from "../../assets/images/monkey_cowboy_logo.png";
import Desert from "../../assets/images/arizona_bg.avif";
import styles from "./hero.module.scss";

interface HeroProps {
  homepageAttributes: any;
}

export default function Hero({ homepageAttributes }: HeroProps) {
  return (
    <section className="flex flex-col items-center gap-4 relative w-full">
      <div className="relative w-full h-full px-16 py-48">
        {/* BG Image */}
        <Image
          src={Desert}
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
          <div className="relative">
            <Image
              src={MonkeyCowboyImage}
              alt="Image of a Cowboy Monkey"
              height={300}
              width={300}
              placeholder="blur"
              className="animate-bob relative"
            />
            <div
              className={`animate-widen-narrow absolute bottom-[-60px] left-0 right-0 w-[50%] h-[50px] rounded-[50%] mx-auto ${styles.floatingHeadShadow}`}
            ></div>
          </div>

          {/* Speech Bubble */}
          <div className={`${styles.speechBubble}`}>
            <span className={`${styles.speechBubbleText}`}>Howdy!</span>
          </div>
        </div>
      </div>
    </section>
  );
}
