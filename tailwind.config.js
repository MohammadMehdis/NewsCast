/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      Oswald: "Oswald",
      Sofia: "Sofia Sans",
    },
    extend: {
      colors: {
        black: {
          100: "#393939",
          200: "#2D2D2D",
          300: "rgba(57,57,57,60%)",
        },
        while: {
          100: "#FFFFFF",
        },
        red: {
          100: "#F65050",
          200: "#FE4A51",
        },
        blue: {
          100: "#0088FF",
          200: "#49CFE8",
        },
        gray: {
          100: "#997C00",
        },
        purple: {
          100: "#A56CBD",
          200: "#4C60F5",
        },
        green: {
          100: "#2ECC71",
        },
      },
      boxShadow: {
        ShadowBlack: "0px 1px 10px rgba(246, 80, 80, 0.15)",
      },
    },
  },
  plugins: [],
};
