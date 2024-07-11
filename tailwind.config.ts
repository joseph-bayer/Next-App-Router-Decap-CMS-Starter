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
        shenron: "#17670C",
        trunks: "#9b5fc0",
        coffee: "#210f04",
        offBlack: "#01080a",
        offWhite: "#e7e5e8",
      },
      fontFamily: {
        "josefin-sans": ["var(--font-josefin-sans)"],
        "indie-flower": ["var(--font-indie-flower)"],
      },
    },
  },
  plugins: [],
};
export default config;
