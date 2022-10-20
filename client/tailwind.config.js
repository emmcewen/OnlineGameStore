const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      opacity: {
        '60': '0.60'
      },
      colors: {
        'black': '#000000',
        'blue': '#0085AE',
        'grey': '#cfd8dc',
      }
    },
  },
  plugins: [
  ], 
});