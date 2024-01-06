/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        Green:'#76ad5f',
        // Green:'#2855d1',
      },
      fontFamily:{
        Poppins:"Poppins"
      }
    },
  },
  plugins: [],
}
