const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minHeight: {
      0: '0',
      '1/4': '25vh',
      '1/2': '50vh',
      '3/4': '75vh',
      full: '100vh',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.trueGray,
      red: colors.red,
      blue: {
        DEFAULT: '#7FC8F8',
        dark: '#5AA9E6',
      },
      white: {
        DEFAULT: '#F9F9F9',
      },
      yellow: {
        DEFAULT: '#FFE45E',
      },
      pink: {
        DEFAULT: '#FF6392',
      },
    },
    extend: {
      fontFamily: {
        Monoton: ['Monoton', 'cursive'],
      },
    },
  },
  variants: {
    extend: {
      fill: ['hover', 'focus'],
    },
  },
  plugins: [],
};
