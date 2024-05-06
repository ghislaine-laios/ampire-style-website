import { Inter, Noto_Sans_SC } from "next/font/google";
import type { Config } from "tailwindcss";
// @ts-ignore
import preline from "preline/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        body: ["var(--font-inter)", "var(--font-noto)"],
        urbanist: ["var(--font-urbanist)"],
      },
    },
  },
  plugins: [preline],
};
export default config;
