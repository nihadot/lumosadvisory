/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'charter': ['Charter', 'sans-serif'],
      },
      screens:{
        'mac-book':'1440px'
      }
    },

  },
  plugins: [],
}

