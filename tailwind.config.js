// module.exports = {
//   darkMode: 'class', // Enable dark mode class
//   content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
//   theme: {
//     extend: {},
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// };


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Adjust the paths according to your project structure
    './public/index.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}