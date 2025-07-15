import flowbiteReact from "flowbite-react/plugin/tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ".flowbite-react\\class-list.json"
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
  plugins: [flowbiteReact],
}