import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: {
            DEFAULT: "#0F4C81",
            dark: "#082440",
            deep: "#0B365D",
            light: "#1861A1",
            soft: "#EAF2FA",
          },
          amber: {
            DEFAULT: "#D9822B",
            hover: "#C36F1C",
            light: "#F59E0B",
            soft: "#FFFBEB",
            subtle: "#FEF3C7",
          },
          terracotta: {
            DEFAULT: "#B84A39",
            hover: "#9E3A2B",
            soft: "#FDEEEB",
          },
          teal: {
            DEFAULT: "#0F766E",
            hover: "#0D655E",
            light: "#14B8A6",
            soft: "#F0FDFA",
          },
          canvas: "#FDFBF7",
          surface: "#FFFFFF",
          muted: "#F7F4EE",
          border: "#E7E2D8",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Plus Jakarta Sans", "Outfit", "sans-serif"],
        body: ["var(--font-body)", "Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        handwriting: ["var(--font-handwriting)", "Caveat", "Kalam", "cursive"],
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "Cambria", "serif"],
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(15, 76, 129, 0.04), 0 1px 2px -1px rgba(15, 76, 129, 0.04)",
        card: "0 4px 20px -2px rgba(15, 76, 129, 0.06), 0 2px 6px -1px rgba(15, 76, 129, 0.04)",
        elevated: "0 12px 32px -4px rgba(15, 76, 129, 0.10), 0 4px 12px -2px rgba(15, 76, 129, 0.06)",
        dropdown: "0 10px 30px -5px rgba(15, 76, 129, 0.12), 0 4px 10px -2px rgba(15, 76, 129, 0.08)",
      },
      maxWidth: {
        "7xl": "80rem",
        reading: "48rem",
      },
      animation: {
        "fade-in": "fadeIn 0.25s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0", transform: "translateY(4px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
