/** @type {import('tailwindcss').Config} */

const tailwindForms = require('@tailwindcss/forms');
const tailwindLineClamp = require('@tailwindcss/line-clamp');
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        rose: colors.rose,
        sky: colors.sky,
        teal: colors.teal,
      },
    },
  },
  plugins: [tailwindForms, tailwindLineClamp],
};
