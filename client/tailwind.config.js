/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/Store.js",
    "./src/pages/SingleGame.js",
    "./src/components/Nav.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [ ...
    require('@tailwindcss/forms'),
  ]}