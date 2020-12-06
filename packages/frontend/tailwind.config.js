module.exports = {
  purge: ['./src/**/*.jsx', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'check-blue': '#57ddff',
        'check-purple': '#c058f3',
      },
      fontFamily: {
        'body': ["Josefin Sans"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
