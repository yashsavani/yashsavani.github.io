module.exports = {
  purge: ['layouts/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        lustria: ['Lustria', 'serif'],
        lato: ['Lato', 'sans-serif']
      },
      boxShadow: {
        underline: 'inset 0 -0.350em 0 0 #FCA5A5'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
