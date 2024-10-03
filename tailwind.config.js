/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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

