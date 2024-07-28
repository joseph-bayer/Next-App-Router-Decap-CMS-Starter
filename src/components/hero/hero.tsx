import Image from "next/image";
import Desert from "../../assets/images/arizona_bg.jpg";
import MonkeyCowboyImage from "../../assets/images/monkey_cowboy_logo.png";
import styles from "./hero.module.scss";

interface HeroProps {
  homepageAttributes: any;
}

export default function Hero({ homepageAttributes }: HeroProps) {
  return (
    <section className="relative flex w-full flex-col items-center gap-4">
      <div className="relative h-[500px] w-full px-16 py-28">
        {/* BG Image */}
        <Image
          src={Desert}
          alt="Image of the desert at night"
          priority
          width={1920}
          height={500}
          placeholder="blur"
          className="absolute left-0 top-0"
          style={{
            objectFit: "cover",
            objectPosition: "center 80%",
            maxHeight: "500px",
          }}
          quality={20}
          sizes="100vw"
        />

        <div className="relative flex flex-row justify-center gap-x-8">
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
              className={`animate-widen-narrow absolute bottom-[-60px] left-0 right-0 mx-auto h-[50px] w-[50%] rounded-[50%] ${styles.floatingHeadShadow}`}
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
