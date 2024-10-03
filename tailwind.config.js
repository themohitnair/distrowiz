/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#ffff00',
        'secondary': '#000000'
      },
      fontFamily: {
        ubuntu: ['Ubuntu', 'monospace']
      }
    },
  },
  plugins: [],
};