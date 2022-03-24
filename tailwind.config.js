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
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.neutral,
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
      githubGrey: '#211F1F',
      linkedInBlue: '#0077b5',
    },
    extend: {
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
      backgroundImage: (theme) => ({
        'white-waves': "url('/src/assets/svg/layered-waves-haikei.svg')",
        'pink-waves': "url('/src/assets/svg/layered-pink-waves-haikei.svg')",
      }),
    },
  },
  variants: {
    extend: {
      fill: ['hover', 'focus'],
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
