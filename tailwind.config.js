module.exports = {
    purge: ["./src/**/*.js"],
    darkMode: false,
    theme: {
        extend: {
            fontFamily: {
                sans: ["Public Sans", "Arial"],
                header: ["Walkway Black", "Times New Roman"],
                subheader: ["Walkway Expand", "Arial"]
            },
            colors: {
                "backgroundGray": "#1C1C1C",
                "landingBlue": "#007FFF"
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
