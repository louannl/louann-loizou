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
      black: colors.black,
      white: {
        DEFAULT: '#F9F9F9',
      },
      purple: {
        DEFAULT: '#301E67',
        dark: '#03001C'
      },
      themeGrey: '#393E46',
      themeDarkGrey: '#222831',
      themeLightGrey: '#EEEEEE',
      mint: '#00ADB5',
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
        'light-multi-waves': "url('/src/assets/svg/light-multi-layered-waves-haikei.svg')",
        'light-two-waves': "url('/src/assets/svg/light-two-layered-waves-haikei.svg')",
        'dark-multi-waves': "url('/src/assets/svg/dark-multi-layered-waves-haikei.svg')",
        'dark-two-waves': "url('/src/assets/svg/dark-two-layered-waves-haikei.svg')",
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
