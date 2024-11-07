/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#C0C0A8",
        secundary: "#D8D8D8",
      },
      width: {
        25: "8rem",
      },
    },
  },
  plugins: [],
};