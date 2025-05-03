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
      dark: {
        css: {
          color: theme("colors.gray.200"),
          a: { color: theme("colors.blue.400") },
          strong: { color: theme("colors.gray.100") },
          code: { color: theme("colors.purple.300") },
          blockquote: { color: theme("colors.gray.300") },
          h1: { color: theme("colors.white") },
          h2: { color: theme("colors.white") },
          h3: { color: theme("colors.white") },
          h4: { color: theme("colors.white") },
        },
      },
    },
  },
  plugins: [typography], // Use the imported typography plugin
};

export default config;
