/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      borderRadius: {
        '4xl': '200px', // Custom large radius
        'custom-small': '5px', // Custom small radius
        'custom-rounded': '50%', // Fully rounded (like for circles)
      }
    },
  },
  plugins: [],
}

