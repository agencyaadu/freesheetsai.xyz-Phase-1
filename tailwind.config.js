/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '40px': '40px',
      },
      colors:{
        text:{
          DEFAULT:"#2A2400",
          light:"#E8E8E8",
          customGray: '#7f7d7b',
        },
        border:{
          DEFAULT:"#CBD5E1"
        }
      }
    },
  },
  plugins: [],
}

