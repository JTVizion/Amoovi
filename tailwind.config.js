import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#09090F",
        foreground: "#F8FAFC",
        muted: "#1A1A23",
        "muted-foreground": "#9BA3B5",
        surface: "#101019",
        "surface-raised": "#19192A",
        border: "#1F2233",
        primary: "#7C5CFF",
        "primary-foreground": "#A66BFF",
        destructive: "#FF5C77"
      },
      fontFamily: {
        sans: ["'InterVariable'", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glass: "0 20px 60px -24px rgba(124, 92, 255, 0.45)",
        hover: "0 10px 32px -20px rgba(12, 12, 32, 0.6)"
      }
    }
  },
  plugins: []
};

export default config;
