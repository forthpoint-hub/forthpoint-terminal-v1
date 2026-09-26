import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          950: "#0a0b0d",
          900: "#0f1114",
          850: "#14171b",
          800: "#1a1e23",
          700: "#262b32",
          600: "#3a4048",
          500: "#5a626c",
          400: "#848c96",
          300: "#aab0b8",
          100: "#e8eaed",
        },
        signal: {
          up: "#3ba55d",
          down: "#c9524d",
          accent: "#c98a3e",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
        serif: ["var(--font-source-serif)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
