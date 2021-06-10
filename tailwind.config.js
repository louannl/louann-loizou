module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      blue: {
        DEFAULT: '#7FC8F8',
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
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
