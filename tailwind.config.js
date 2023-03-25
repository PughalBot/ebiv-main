/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'primary': '#A215A5',
      'sup': '#FC77FB',
      'white': '#FFFFFF',
      'black': '#000000',
      'gray': '#808080',
      'off-white': '#F7F7F7'
    },
    fontFamily: {
      bangers: ['Bangers', 'cursive']
    }
  },
  plugins: [],
}