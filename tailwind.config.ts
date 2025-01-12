import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "1024px",
      lg: "1440px",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        primary: " #7749EF",
        secondary: " #AF72FF",
        dark: " #5C27E5",

        "input-bg": "#F3F4F6",
        "input-bg-dark": "#E5E7EB",
      },
      textColor: {
        dark: "#111928",
        "input-color": "#6B7280",
      },
    },
  },
  plugins: [],
} satisfies Config;
