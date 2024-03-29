module.exports = {
  content: ["./src/**/*.{js,jsx}", "./node_modules/tw-elements/dist/js/*.js"],
  important: true,
  theme: {
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "75%": "75%",
      "50%": "50%",
      "25%": "25%",
      16: "4rem",
    },
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
      roman: "upper-roman",
    },
    extend: {
      backgroundImage: {
        "fb-svg": "url(assets/svg/fb.svg)",
        "linear-gradient":
          "linear-gradient(rgba(255, 255, 255, 0.8), rgba(218, 235, 246, 1))",
        "programming-svg":
          "linear-gradient(rgba(255, 255, 255, 0.8), rgba(218, 235, 246, 1)), url(../public/assets/svg/programming.svg)",
        "varanasi-ghat":
          "radial-gradient(rgba(255, 255, 255, 0.1), rgba(243, 244, 246, 1)), url(assets/imgs/varanasi_ghat.jpg)",
      },
    },
  },
  noImplicitAny: false,
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class",
};
