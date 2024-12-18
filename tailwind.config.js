/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#C0C0A8",
        secundary: "#D8D8D8",
        fundoproduto: "rgba(216, 216, 216, 0.3)",
        terceira: "#3C3C5F",
        menu: "#E8E8CC",
        blackTrans: "rgba(0, 0, 0, 0.6)",
      },
      fontFamily: {
        sans: ['Roboto Condensed', 'sans-serif'], // substitua 'Inter' pela sua fonte
        serif: ['Merriweather', 'serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
      width: {
        25: "8rem",
        110: "36rem"
      },  
      height: {
        40: "10rem",
        111: "36rem"
      }
    },
  },
  plugins: [],
};
