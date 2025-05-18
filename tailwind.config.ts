
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#0032B2",
          dark: "#001F7A",
          light: "#3461FF"
        },
        secondary: {
          DEFAULT: "#1a46c1",
          foreground: "#F8FAFC"
        },
        muted: {
          DEFAULT: "#F1F5F9",
          foreground: "#64748B"
        },
        accent: {
          DEFAULT: "#3461ff",
          foreground: "#FFFFFF"
        }
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" }
        }
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
        "spin-slow": "spin-slow 3s linear infinite",
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

