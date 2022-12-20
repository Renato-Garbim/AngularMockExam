/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#202225',
        secondary: '#5865f2'
      }
    },
  },
  plugins: [],
}
