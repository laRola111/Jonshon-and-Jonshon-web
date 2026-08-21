/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: 'var(--color-black)',
          'black-soft': 'var(--color-black-soft)',
          'black-elevated': 'var(--color-black-elevated)',
          red: 'var(--color-red)',
          'red-dark': 'var(--color-red-dark)',
          'red-light': 'var(--color-red-light)',
          white: 'var(--color-white)',
          'white-soft': 'var(--color-white-soft)',
          gray: 'var(--color-gray)',
          'gray-dark': 'var(--color-gray-dark)',
          gold: 'var(--color-gold)',
          'gold-light': 'var(--color-gold-light)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
