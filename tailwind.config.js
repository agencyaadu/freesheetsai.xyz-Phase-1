/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        text:{
          DEFAULT:"#2A2400",
          light:"#E8E8E8"
        },
        border:{
          DEFAULT:"#CBD5E1"
        }
      }
    },
  },
  plugins: [],
}

