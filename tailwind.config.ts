import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

export default {
  darkMode: "class",
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background-body)",
        "text-primary": "var(--text-main)",
        "text-secondary": "var(--text-secondary)",
        "d-background": "var(--dark-background-body)",
        "d-text-primary": "var(--dark-text-main)",
        "d-text-secondary": "var(--dark-text-secondary)",
        primary: "var(--primary-color)",
        gray: colors.gray,
      },
    },
    fontFamily: {
      serif: ['Merriweather", "serif'],
      sans: ["Fira Sans", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
