/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  important: true,
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gotham: ['Gotham-Bold', 'Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        scpro: ['SourceCodePro-Regular', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
