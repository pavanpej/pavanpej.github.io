import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
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
  plugins: []
} 