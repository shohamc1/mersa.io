module.exports = {
  purge: ["./src/**/*.js"],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ["Public Sans", "Arial"],
        header: ["Walkway Black", "Times New Roman"],
        subheader: ["Walkway Expand", "Arial"],
      },
      colors: {
        backgroundGray: "#1C1C1C",
        landingBlue: "#007FFF",
        companiesRed: "#FF4D4D",
      },
    },
    letterSpacing: {
      wider: "0.04em",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
