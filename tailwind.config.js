// tailwind.config.ts
import typography from "@tailwindcss/typography";

const config = {
  content: [
    "./src/app/**/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/posts/**/*.{mdx,md}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "theme-light-bg": "#ffffff",
        "theme-light-text": "#1a202c",
        "theme-dark-bg": "#1a202c",
        "theme-dark-text": "#edf2f7",
        "theme-light-hover": "#cce3de",
      },
    },
  },
  plugins: [typography], // Use the imported typography plugin
};

export default config;
