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
        dark: "var(--color-dark)",
        light: "var(--color-light)",
        red: "var(--color-red)",
        redLight: "var(--color-red-light)",
        blue: "var(--color-blue)",
        yellow: "var(--color-yellow)",
        pink: "var(--color-pink)",

        background: "var(--color-background)",
        border: "var(--color-border)",
        heading: "var(--color-heading)",
        text: "var(--color-text)",
      },
      fontFamily: {
        heading: ["Courier", "monospace"],
        body: ["Anaheim", "sans-serif"],
        button: ["Anaheim", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
