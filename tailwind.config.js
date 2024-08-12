/** type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sregular: ["SF-Pro-Regular", "sans-serif"],
        smedium: ["SF-Pro-Medium", "sans-serif"],
        sthinItalic: ["SF-Pro-Thin-Italic", "sans-serif"],
        slightItalic: ["SF-Pro-Light-Italic", "sans-serif"],
        sbold: ["SF-Pro-Bold", "sans-serif"],

        pthin: ["Poppins-Thin", "sans-serif"],
        pextralight: ["Poppins-ExtraLight", "sans-serif"],
        pregular: ["Poppins-Regular", "sans-serif"],
        pmedium: ["Poppins-Medium", "sans-serif"],
        psemibold: ["Poppins-SemiBold", "sans-serif"],
        pbold: ["Poppins-Bold", "sans-serif"],
        pextrabold: ["Poppins-ExtraBold", "sans-serif"],
        pblack: ["Poppins-Black", "sans-serif"],
      },
      colors: {
        primary: "#161622",
        secondary: {
          DEFAULT: "#FF9C01",
          100: "#FF9001",
          200: "#FF8E01",
        },
        black: {
          DEFAULT: "#000",
          100: "#1E1E2D",
          200: "#232533",
        },
        gray: {
          100: "#CDCDE0",
        },
      },
      boxShadow: {
        custom: "0 8px 12px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
