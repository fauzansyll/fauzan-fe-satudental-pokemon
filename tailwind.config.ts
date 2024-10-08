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
        neoviolet: {
          100: "#A5B4FB",
          200: "#A8A6FF",
          300: "#918efa",
          400: "#807dfa",
        },
        neopink: {
          200: "#FFA6F6",
          300: "#fa8cef",
          400: "#fa7fee",
        },
        neored: {
          200: "#FF9F9F",
          300: "#fa7a7a",
          400: "#f76363",
        },
        neoorange: {
          200: "#FFC29F",
          300: "#FF965B",
          400: "#fa8543",
        },
        neoyellow: {
          200: "#FFF59F",
          300: "#FFF066",
          400: "#FFE500",
        },
        neolime: {
          100: "#c6fab4",
          200: "#B8FF9F",
          300: "#9dfc7c",
          400: "#7df752",
        },
        neocyan: {
          200: "#A6FAFF",
          300: "#79F7FF",
          400: "#53f2fc",
        },
      },
      backgroundImage: {
        dot: "url(/light_grey_dots_background.jpg)",
        grid: "url(/finalgrid.png)",
      },
    },
  },
  plugins: [],
};
export default config;
