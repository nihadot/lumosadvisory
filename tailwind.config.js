/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'charter-bold': ['Charter-bold', 'sans-serif'],
        'charter-regular': ['Charter-regular', 'sans-serif'],
      },
      screens:{
        '1300px': '1300px',
        '1200px': '1200px',
        '1400px': '1400px',
        'mac-book':'1440px'
      },
      colors:{
        'primary':'#5F8F93'
      }
    },

  },
  plugins: [],
}

