/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./dist/output.css", "./index.html"],
  theme: {
    extend: {
      screens: {
        tablet: "376px",
        desktop: "1440px",
      },
      colors: {
        primaryRed: "hsl(0 78% 62%)",
        primaryCyan: "hsl(180 62% 55%)",
        primaryOrange: "hsl(34 97% 64%)",
        primaryBlue: "hsl(212 86% 64%)",
        veryDarkBlue: "hsl(234 12% 34%)",
        grayishBlue: "hsl(229 6% 66%)",
        veryLightGray: "hsl(0 0% 98%)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      maxWidth: {
        desktop: "1440px",
      },
      fontSize: {
        sm: "15px",
      },
    },
  },
  plugins: [],
};
