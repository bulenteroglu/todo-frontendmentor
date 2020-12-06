module.exports = {
  purge: ['./src/**/*.jsx', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'check-blue': 'hsl(192, 100%, 67%)',
        'check-purple': 'hsl(280, 87%, 65%)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
