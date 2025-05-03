// tailwind.config.ts
import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/posts/**/*.{mdx,md}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "theme-dark-bg": "#1a202c",
        "theme-light-bg": "#ffffff",
      },
    },
  },
  plugins: [typography], // Use the imported typography plugin
};

export default config;
