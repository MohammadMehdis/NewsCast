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
        },
        while: {
          100: "#FFFFFF",
        },
        red: {
          100: "#F65050",
        },
      },
      boxShadow: {
        ShadowBlack: "0px 1px 10px rgba(246, 80, 80, 0.15)",
      },
    },
  },
  plugins: [],
};
