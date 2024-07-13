import { Lobster } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'custom-gradient': 'linear-gradient(270deg, rgba(0, 0, 0, 0.58) 0%, rgba(0, 0, 0, 0.58) 16.42%, rgba(102, 102, 102, 0.58) 100%)',
          "master-gradient":" linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(217, 217, 217, 0) 100%)"

      },
      
      fontFamily: {
        lobster: ['Lobster', 'cursive'],
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        grey:{
          light:"#f0f0f0",
          DEFAULT:"#aaaaaa",
          dark:"%696969"
        }
      }

    },
  },
  plugins: [],
};
export default config;
