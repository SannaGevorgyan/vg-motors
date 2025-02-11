/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundSize: {
        '120': '120%',
        '100': '100%',
        '95': '95%',
        '75': '75%',
        '60': '60%',
        '50': '50%',
        '25': '25%',
      },
    },
  },
  plugins: [],
};