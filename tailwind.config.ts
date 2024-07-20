import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        superSaiyan: "#fbbc42",
        dragonBall: "#e76a24",
        vegeta: "#1c4595",
        shenron: "#4DA167",
        trunks: "#5D2E8C",
        coffee: "#702911",
        offBlack: "#01080a",
        offWhite: "#e7e5e8",
      },
      fontFamily: {
        "josefin-sans": ["var(--font-josefin-sans)"],
        "indie-flower": ["var(--font-indie-flower)"],
      },
      height: {
        navHeight: "76px",
      },
    },
  },
  plugins: [],
};
export default config;
