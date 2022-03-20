module.exports = {
  content: [
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '75%': '75%',
      '50%': '50%',
      '16': '4rem'
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    },
    extend: {
      backgroundImage: {
        "programming-svg": "linear-gradient(rgba(255, 255, 255, 0.9), rgba(135, 80, 156, 0.9)), url(../public/assets/svg/programming.svg)"
      }
    },
  },
  plugins: [],
}
