/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#08D5B2", // Menyesuaikan warna primer
        secondary: "#606060", // Menyesuaikan warna sekunder
      },
      fontFamily: {
        quickSand: ["Quicksand", "sans - serif"],
      },
    },
  },
  plugins: [],
};
