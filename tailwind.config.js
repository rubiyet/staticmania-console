/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      gray: "AFB0B9",
      blue: "#503AE7",
      offBlack: "#14142B",
      offWhite: "#F4F2FF",
    },
  },
  plugins: [],
}