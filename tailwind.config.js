module.exports = {
  content: ["./src/**/*.{js,jsx}"],
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
        "programming-svg":
          "linear-gradient(rgba(255, 255, 255, 0.8), rgba(243, 244, 246, 1)), url(../public/assets/svg/programming.svg)",
        "varanasi-ghat":
          "radial-gradient(rgba(255, 255, 255, 0.1), rgba(243, 244, 246, 1)), url(../public/assets/imgs/varanasi_ghat.jpg)",
      },
    },
  },
  plugins: [],
};
