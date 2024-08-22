import Image from "next/image";
import CrumpledPaperImg from "../../assets/images/annie-spratt-xvU-X0GV9-o-unsplash_crumpled-paper.jpg";
import NailSVG from "../icons/nail";
import styles from "./team-member.module.scss";

interface TeamMemberProps {
  person: {
    name: string;
    image: {
      src: string;
      alt: string;
    };
    role: string;
  };
}

export default function TeamMember({ person }: TeamMemberProps) {
  return (
    <div className={`${styles.poster}`}>
      {/* <div className={`${styles.nail}`}></div> */}
      <NailSVG className="absolute -top-2 left-0 z-[12] h-6 w-6 -rotate-45 fill-gray-700" />
      <NailSVG className="absolute -top-2 right-0 z-[12] h-6 w-6 rotate-[30deg] fill-gray-700" />

      {/* Top Text */}
      <div className="relative">
        <span className="flex w-full flex-row justify-center font-gomarice-nandaka-western text-5xl">
          WANTED
        </span>
        <span className="flex w-full flex-row justify-center border-y border-coffee font-gomarice-nandaka-western text-2xl">
          {person.name}
        </span>
        <span className="flex w-full flex-row justify-center font-gomarice-nandaka-western text-lg">
          {person.role}
        </span>
      </div>

      {/* Image */}
      <Image
        src={person.image.src}
        alt={person.image.alt}
        width={200}
        height={200}
        className={`${styles.posterImg}`}
      />

      {/* Texture */}
      <Image
        src={CrumpledPaperImg}
        alt="Crumbled Paper Texture"
        width={320}
        height={524}
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 max-h-[524px] min-h-[524px] min-w-[320px] max-w-[320px] opacity-50 sepia-[50%]"
        style={{ objectFit: "cover" }}
      />

      {/* Bottom Text */}
      <span className="flex w-full flex-row items-center justify-center border-y border-coffee px-3 font-gomarice-nandaka-western">
        {/* Star Symbol */}
        <span className="text-3xl">&#9733;</span>

        {/* Reward text */}
        <div className="flex w-full flex-col items-center justify-center uppercase">
          <span className="text-3xl">Reward</span>
          <span className="text-2xl">Free Lunch</span>
        </div>

        {/* Star Symbol */}
        <span className="text-3xl">&#9733;</span>
      </span>
    </div>
  );
}
