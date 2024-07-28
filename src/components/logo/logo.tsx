"use client";

import Image from "next/image";
import { useState } from "react";
import MonkeyCowboyImage from "../../assets/images/monkey_cowboy_logo.png";

interface LogoProps {
  spinOnHover: boolean;
}

export default function Logo({ spinOnHover }: LogoProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flex flex-row items-center gap-x-0.5 lg:gap-x-1`}
      onMouseOver={() => setIsHovered(true)}
      onAnimationEnd={() => setIsHovered(false)}
    >
      <span
        className="font-indie-flower text-4xl text-dragonBall lg:text-6xl"
        aria-hidden="true"
      >
        H
      </span>
      <Image
        src={MonkeyCowboyImage}
        alt="Monkey Cowboy Logo"
        className={`"w-[40px] h-[40px] max-w-[40px] lg:h-[60px] lg:w-[60px] lg:max-w-[60px] ${spinOnHover && isHovered ? "animate-wind-up-spin" : ""}`}
        placeholder="blur"
        style={{
          objectFit: "contain",
        }}
        aria-hidden={true}
      />
      <span
        className="font-indie-flower text-4xl text-dragonBall lg:text-6xl"
        aria-hidden={true}
      >
        wdy!
      </span>
      <span className="sr-only">Logo for Howdy!</span>
    </div>
  );
}
