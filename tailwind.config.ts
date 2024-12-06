import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"], // allows to change the dark / light mode manually
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/tw-elements/js/**/*.js",
  ],
  theme: {
    fontFamily: {
      caption: ["var(--font-caption)"],
      sans: ["var(--font-geist-sans)"],
      mono: ["var(--font-geist-mono)"],
    },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "hsl(var(--primary))",
        secondary: "hsl(var(--secondary))",
        tertiary: "hsl(var(--tertiary))",
        fourth: "hsl(var(--fourth))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        border: "hsl(var(--border))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tw-elements/plugin.cjs"),
    require("@tailwindcss/forms"),
  ],
};
export default config;
