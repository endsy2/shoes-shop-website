/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto", "san-serif"],
      },
      colors: {
        primary: "#128B9E",
        lightGray: "#EEEEEE",
        DarkGreen: "#328D35",
        DarkLightGray: "#D9D9D9",
      },
    },
  },
  plugins: [],
};
