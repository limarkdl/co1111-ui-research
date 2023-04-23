import tailwindConfig from "tailwindcss/stubs/tailwind.config.js";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundApple: '#F2F7F7',
        midnightblue: '#145DA0',
        darkBlue: '#0C2D48',
        blue: '#2E8BC0',
        babyBlue: '#B1D4E0',
        contrastColor: '#FFA500'
      }
    },
  },
  plugins: [],
}

