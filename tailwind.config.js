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
          red: '#c8102e',
          'red-light': '#dc2626',
          'red-dark': '#991b1b',
          charcoal: '#1f2937',
          stone: '#f5f5f4',
          'stone-dark': '#d6d3d1',
          offwhite: '#fafaf9',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
