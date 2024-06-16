/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/*.liquid",
    "./layout/*.liquid",
    "./sections/*.liquid",
    "./snippets/*.liquid",
    "./templates/*.liquid",
    "./templates/customers/*.liquid",

  ],
  theme: {
    extend: {
      fontFamily:{
        "tiny":[ "Tiny5", 'sans-serif'],
        "assistant":["Assistant", 'sans-serif']
      }
    },
  },
  plugins: [],
}

