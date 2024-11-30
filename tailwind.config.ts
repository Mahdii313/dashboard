import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Varela: "Varela",
        IranSans: "IranSans",
      },
      transitionTimingFunction: {
        switchCubic: "cubic-bezier(0, 0.37, 0, 0.98)",
      },
    },
  },
  plugins: [],
};
export default config;
