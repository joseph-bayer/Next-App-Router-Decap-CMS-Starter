import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // TODO: use vars for colors?
  theme: {
    extend: {
      colors: {
        superSaiyan: "#fbbc42",
        dragonBall: "#e76a24",
        vegeta: "#1c4595",
        shenron: "#4DA167",
        oldRose: "#EDC9AF",
        coffee: "#702911",
        cowboyHat: "#B6885A",
        wantedPoster: "#FFDDAD",
        charcoal: "#24292f",
        offBlack: "#01080a",
        offWhite: "#e7e5e8",
      },
      fontFamily: {
        "josefin-sans": ["var(--font-josefin-sans)"],
        "indie-flower": ["var(--font-indie-flower)"],
        "gomarice-nandaka-western": ["var(--font-gomarice-nandaka-western)"],
      },
      height: {
        navHeight: "76px",
      },
    },
  },
  plugins: [],
};
export default config;
