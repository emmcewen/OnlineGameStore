const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'gold': '#e4a32f',
        'black': '#000000',
        'pink': '#FBBAF7',
      }
    },
  },
  plugins: [
  ], 
});