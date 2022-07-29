/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 10px 15px -3px rgb(0 0 0 / 0.2), 0 4px 6px -4px rgb(0 0 0 / 0.2);',
      },
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    colors: {
      'orange': '#f27405',
      'dark-orange': '#f25c05',
      'green': '#D6F2C9',
      'red': '#a61508',
      'light-gray': '#f2e6df',
      'white': '#ffffff',
      'gray': {
        100: '#F3F4F6',
        200: '#E5E7EB',
        300: '#D1D5DB',
        400: '#9CA3AF'
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
  darkMode: false,
}
