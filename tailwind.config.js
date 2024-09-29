const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "minion-yellow": "#ffe347",
        "rich-black": "#073b3a",
        "vivid-blue": "#44ccff",
        "copyright-gray": "#888888",
        "subtext-gray": "#adadad",
      },
      fontFamily: {
        sans: ['"Fira Sans"', ...defaultTheme.fontFamily.sans],
        brand: ['Glegoo', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
