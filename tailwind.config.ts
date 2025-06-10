import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: false,
  content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        sans: ["var(--font-polysans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
