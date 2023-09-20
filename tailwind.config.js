/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "rgb(105,105,105)",
      },
      fontFamily: {
        sans: ["Patrick Hand", "cursive"],
      },
    },
  },
  plugins: [],
};
