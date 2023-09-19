import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        tapBlue: "#3467d4",
        tapYellow: "#ffe43d",
        tapPink: "#db3dff",
        tapGrey: "#eeeeee",
      },
    },
  },
  plugins: [],
};
export default config;
