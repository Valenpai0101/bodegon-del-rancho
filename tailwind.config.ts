import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#EDE0C8",
          dark: "#E3D2A8",
          darker: "#D9C596",
        },
        ink: {
          DEFAULT: "#241608",
          soft: "#3B2415",
        },
        cuero: {
          light: "#8A5A34",
          DEFAULT: "#6B4226",
          dark: "#4A2E19",
          darker: "#3B2415",
        },
        rust: {
          DEFAULT: "#A8461F",
          dark: "#832F12",
        },
        gold: {
          DEFAULT: "#B8863B",
          light: "#D4A857",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "serif"],
        hand: ["var(--font-hand)", "cursive"],
      },
      backgroundImage: {
        "paper-texture": "url('/images/paper-texture.svg')",
      },
      boxShadow: {
        carved: "inset 0 0 0 1px rgba(59,36,21,0.35), inset 0 0 20px rgba(59,36,21,0.12)",
        ribbon: "0 6px 14px rgba(36,22,8,0.35)",
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      keyframes: {
        steam: {
          "0%, 100%": { transform: "translateY(0) scaleY(1)", opacity: "0.5" },
          "50%": { transform: "translateY(-10px) scaleY(1.08)", opacity: "0.9" },
        },
        grain: {
          "0%, 100%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(-1%,-1%)" },
        },
      },
      animation: {
        steam: "steam 3.2s ease-in-out infinite",
        grain: "grain 8s steps(2) infinite",
      },
    },
  },
  plugins: [],
};
export default config;
