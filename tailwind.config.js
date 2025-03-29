/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
    
      },
      colors: {
        'primary': "#ECEEFF",
        "secondary": "#37538C",
        "slate-gray": "#6D6D6D",
       
      }
    },
  },
  plugins: [],
}