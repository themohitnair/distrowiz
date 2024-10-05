/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#ffffff',
        'secondary': '#000000',
        'tertiary': '#ffff00'
      },
      fontFamily: {
        fira: ['Fira', 'monospace']
      }
    },
  },
  plugins: [],
};