import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette — dark base built on Deep Wine.
        charcoal: {
          DEFAULT: "#3a120b",
          800: "#4a1810",
          700: "#5c1f14",
          600: "#6e2a1c",
        },
        // Accent ramp — Copper into Terracotta.
        ember: {
          50: "#fbf1e9",
          100: "#f5ddca",
          200: "#e9bd9c",
          300: "#dca06f",
          400: "#cf8650",
          500: "#c2703e",
          600: "#a85c30",
          700: "#8b3a2a",
        },
        // Secondary — Terracotta.
        flame: {
          400: "#a8492f",
          500: "#8b3a2a",
          600: "#6e2a1c",
        },
        // Brand named tokens.
        wine: "#5c1f14",
        terracotta: "#8b3a2a",
        copper: "#c2703e",
        sand: "#d4b59e",
        olive: {
          DEFAULT: "#5e6b4a",
          400: "#6f7d57",
          500: "#5e6b4a",
          600: "#4d5a3b",
        },
        cream: "#f7ede3",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease forwards",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin-slow 40s linear infinite",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
