/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
      },
      colors: {
        cyan: "hsl(193, 38%, 86%)",
        neon_green: "hsl(150, 100%, 66%)",
        grayish_blue: "hsl(217, 19%, 38%)",
        dark_grayish_blue: "hsl(217, 19%, 24%)",
        dark_blue: "hsl(218, 23%, 16%)",
      },
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
    },
  },
  plugins: [],
};
