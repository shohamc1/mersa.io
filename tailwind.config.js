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
        investorsPurple: "#7928CA",
        faqPink: "#FF0080",
        signUpOlive: "#013E41",
        connectDarkBlue: "#007CF0",
        connectLightBlue: "#00DFD8",
        selectPurple: "#7928CA",
        selectRed: "#FF0080",
        collectOrange: "#FF4D4D",
        collectYellow: "#F9CB28",
        borderGreen: "#48C774",
        buttonGray: "#131313",
        paleBlue: "#C4E0E5",
        turquoise: "#4CA1AF",
        paleYellow: "#FF9966",
        paleOrange: "#FF5E62",
        lightWhite: "#FAFAFA",
      },
      transitionProperty: {
        height: "height",
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
