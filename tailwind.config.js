const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    minHeight: {
      0: '0',
      '1/4': '25vh',
      '1/2': '50vh',
      '3/4': '75vh',
      full: '100vh',
    },
    extend: {
      colors: {
        themeGrey: 'rgb(var(--color-themeGrey) / <alpha-value>)',
        themeDarkGrey: 'rgb(var(--color-themeDarkGrey) / <alpha-value>)',
        themeLightGrey: 'rgb(var(--color-themeLightGrey) / <alpha-value>)',
        mint: 'rgb(var(--color-mint) / <alpha-value>)',
        githubGrey: 'rgb(var(--color-githubGrey) / <alpha-value>)',
        linkedInBlue: 'rgb(var(--color-linkedInBlue) / <alpha-value>)',
        purple: {
          DEFAULT: 'rgb(var(--color-purple) / <alpha-value>)',
          dark: 'rgb(var(--color-purple-dark) / <alpha-value>)',
        },
      },
      fontFamily: {
        Monoton: ['Major Mono Display', 'cursive'],
      },
      width: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
      },
    },
  },
  variants: {
    extend: {
      fill: ['hover', 'focus'],
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
