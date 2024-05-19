const autoprefixer = require("autoprefixer");
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
    variants: {
      fill: ['hover', 'focus']
    },
    extend: {
      backgroundImage: {
        "fb-svg": "url(assets/svg/fb.svg)",
        "linear-gradient":
          "linear-gradient(rgba(255, 255, 255, 0.8), rgba(218, 235, 246, 1))",
        "programming-svg":
          "linear-gradient(rgba(255, 255, 255, 0.8), rgba(218, 235, 246, 1)), url(../public/assets/svg/programming.svg)",
        "varanasi-ghat":
          "radial-gradient(rgba(150, 150, 150, 0.5), rgba(30, 30, 30, 1)), url(assets/imgs/varanasi_ghat.jpg)",
        'my-pic': 'url(assets/imgs/my_pic.png)'
      },
      backgroundPositionX: {
        'custom-right': 'max(320px, 90%)'
      },
      colors: {
        'secondary': '#222',
        'secondary-100': '#333',
        'secondary-500': '#111'
      }
    },
  },
  noImplicitAny: false,
  plugins: [autoprefixer, require("tw-elements-react/dist/plugin.cjs")],
  darkMode: "class"
}
