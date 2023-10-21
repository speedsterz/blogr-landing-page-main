/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      borderRadius: {
        large: "70px",
      },
      colors: {
        "light-red": {
          200: "hsl(356, 100%, 66%)",
          100: "hsl(355, 100%, 74%)",
        },
        "dark-blue": "hsl(208, 49%, 24%)",
        "gray-blue": {
          100: "hsl(240, 2%, 79%)",
          200: "hsl(207, 13%, 34%)",
          300: "hsl(240, 10%, 16%)",
        },
        "grad-red": {
          100: "hsl(13, 100%, 72%)",
          200: "hsl(353, 100%, 62%)",
        },
        "grad-blue": {
          100: "hsl(237, 17%, 21%)",
          200: "hsl(237, 23%, 32%)",
        },
      },
    },
    fontFamily: {
      Overpass: ["Overpass", "sans-serif"],
      Ubuntu: ["Ubuntu", "sans-serif"],
    },
  },
  plugins: [],
};
