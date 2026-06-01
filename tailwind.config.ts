import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        void:    "#0A0B0D",
        deep:    "#111318",
        surface: "#181C24",
        raised:  "#1E2433",
        "steel-blue":  "#1E90FF",
        "steel-light": "#4FAEFF",
        "orange-molten": "#FF6B1A",
        "orange-glow":   "#FF8C42",
        "text-primary":  "#F0F4FF",
        "text-muted":    "#8892A4",
        border:  "#1E2433",
      },
      fontFamily: {
        sans:    ["Arial", "Helvetica", "sans-serif"],
        display: ["Arial", "Helvetica", "sans-serif"],
        mono:    ["'Courier New'", "Courier", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
