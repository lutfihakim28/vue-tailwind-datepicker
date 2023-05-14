/* eslint-disable no-undef */
const colors = require("tailwindcss/colors");
const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./docs/**/*.{js,ts,vue,md}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
        fuchsia: colors.fuchsia,
        lime: colors.lime,
        orange: colors.orange,
        "light-blue": colors.sky,
        "vtd-primary": colors.sky,
        "vtd-secondary": colors.gray,
        background: '#F8F8F8',
        card: '#23262B',
        stroke: '#E8E9EB',
        error: {
          50: '#fff2f1',
          100: '#ffe1df',
          200: '#ffc8c5',
          300: '#ffa29d',
          400: '#ff6b64',
          500: '#ff4c43',
          600: '#ed1f15',
          700: '#c8160d',
          800: '#a5160f',
          900: '#881a14',
          950: '#4b0704',
        },
        success: {
          50: '#ecfdf5',
          100: '#d1fae4',
          200: '#a7f3cf',
          300: '#6ee7b5',
          400: '#2bc48a',
          500: '#10b97f',
          600: '#059667',
          700: '#047855',
          800: '#065f45',
          900: '#064e3a',
          950: '#022c21',
        },
        primary: '#304FFD',
        secondary: {
          50: '#fff4ed',
          100: '#ffe6d4',
          200: '#ffc9a9',
          300: '#ff965d',
          400: '#fe7339',
          500: '#fc4d13',
          600: '#ed3309',
          700: '#c52209',
          800: '#9c1d10',
          900: '#7e1a10',
          950: '#440a06',
        },
        'light-1': '#3F434A',
        'light-2': '#8A9099',
        'light-3': '#595F69',
        'dark-primary': '#0090FF',
        'dark-secondary': '#FF955C',
        'dark-bg': '#1D1E24',
        'dark-stroke': '#33363D',
        'dark-overlay': '#30323B',
        'dark-1': '#FCFCFC',
        'dark-2': '#93959C',
        'dark-3': '#B5B7BF',
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
      spacing: {
        70: '17.5rem'
      },
      opacity: {
        85: "0.85",
      },
      borderRadius: {
        custom: '0.875rem'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
