/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#B8965A',
          light: '#D4B483',
          dark: '#8A6D3B',
          pale: '#F5EDD8',
        },
        cream: {
          DEFAULT: '#FAF8F4',
          2: '#F5F1EA',
        },
        slate: {
          luxury: '#2C2C2A',
          2: '#4A4845',
          dark: '#1a1815',
        },
        muted: '#888780',
        border: '#E8E3D9',
      },
      fontFamily: {
  sans: ['"DM Sans"', 'sans-serif'],
},
    },
  },
  plugins: [],
}
