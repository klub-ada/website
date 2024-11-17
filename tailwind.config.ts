import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "var(--color-black)",
        white: "var(--color-white)",
        beige: "var(--color-beige)",
        red: "var(--color-red)",
        blue: "var(--color-blue)",
        yellow: "var(--color-yellow)",
        pink: "var(--color-pink)",

        red100: "var(--color-red-100)",
        red200: "var(--color-red-200)",
        red300: "var(--color-red-300)",
        red400: "var(--color-red-400)",
        red500: "var(--color-red-500)",
        red600: "var(--color-red-600)",
        red700: "var(--color-red-700)",
        red800: "var(--color-red-800)",

        gray100: "var(--color-gray-100)",
        gray200: "var(--color-gray-200)",
        gray300: "var(--color-gray-300)",
        gray400: "var(--color-gray-400)",
        gray500: "var(--color-gray-500)",
        gray600: "var(--color-gray-600)",
        gray700: "var(--color-gray-700)",
        gray800: "var(--color-gray-800)",
        gray900: "var(--color-gray-900)",

        background: "var(--color-background)",
        border: "var(--color-border)",
      },
      fontFamily: {
        heading: ["Courier", "monospace"],
        paragraph: ["Anaheim", "sans-serif"],
        button: ["Anaheim", "sans-serif"],
      },
      boxShadow: {
        button: "-4px 4px var(--color-black)",
      },
    },
  },
  plugins: [],
};
export default config;
