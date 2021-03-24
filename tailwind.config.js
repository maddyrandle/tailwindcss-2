module.exports = {
  purge: {
    enabled: true,
    content: ['./dist/**/*.html'],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        headline: ["Oswald"],
      },
      colors: {
        mainColor: "#1e293b",
      },
    },
    debugScreens: {
      position: ["top", "left"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-debug-screens")],
};
