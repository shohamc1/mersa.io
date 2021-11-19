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
        connectDarkBlue: "#007CF0",
        connectLightBlue: "#00DFD8",
        selectPurple: "#7928CA",
        selectRed: "#FF0080",
        collectOrange: "#FF4D4D",
        collectYellow: "#F9CB28",
        borderGreen: "#48C774",
        buttonGray: "#131313",
      },
    },
    letterSpacing: {
      wide: "0.02em",
      wider: "0.04em",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
