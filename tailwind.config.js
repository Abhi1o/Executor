/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  plugins: [],
  theme: {
    extend: {
      animation: {
        "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
        grid: "grid 15s linear infinite",
        slide: "slide var(--speed) ease-in-out infinite alternate",
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
        // orbit: "orbit calc(var(--duration)*1s) linear infinite",
      },
      keyframes: {
        "shine-pulse": {
          "0%": {
            "background-position": "0% 0%",
          },
          "50%": {
            "background-position": "100% 100%",
          },
          to: {
            "background-position": "0% 0%",
          },
        },
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
        "spin-around": {
          "0%": {
            transform: "translateZ(0) rotate(0)",
          },
          "15%, 35%": {
            transform: "translateZ(0) rotate(90deg)",
          },
          "65%, 85%": {
            transform: "translateZ(0) rotate(270deg)",
          },
          "100%": {
            transform: "translateZ(0) rotate(360deg)",
          },
        },
        slide: {
          to: {
            transform: "translate(calc(100cqw - 100%), 0)",
          },
        },
        grid: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
        // orbit: {
        //     "0%": {
        //         transform: "rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)",
        //     },
        //     "100%": {
        //         transform: "rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)",
        //     },
        // },
      },
    },
  },
};
