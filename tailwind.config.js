/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        firstBlue: "#0b529a",
        secondBlue: "#0574bb",
        thirdBlue: "#078cca",
        fourthBlue: "#06a4cf",
        fivethBlue: "#0acae6",
        sixthBlue: "##0ddff0",
        seventhBlue: "#0ff5fa",
      },
    },
  },
  plugins: [],
};
