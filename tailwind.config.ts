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
      fontSize: {
        xs:   ["13px",  { lineHeight: "1.6" }],
        sm:   ["15px",  { lineHeight: "1.65" }],
        base: ["17px",  { lineHeight: "1.7" }],
        lg:   ["19px",  { lineHeight: "1.65" }],
        xl:   ["21px",  { lineHeight: "1.55" }],
        "2xl":["24px",  { lineHeight: "1.4" }],
        "3xl":["30px",  { lineHeight: "1.3" }],
        "4xl":["36px",  { lineHeight: "1.2" }],
        "5xl":["44px",  { lineHeight: "1.15" }],
        "6xl":["56px",  { lineHeight: "1.1" }],
      },
    },
  },
  plugins: [],
};

export default config;
