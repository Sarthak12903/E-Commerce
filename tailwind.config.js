/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { colors: { 
      primary: '#3498DB', // Calm Blue 
       hover:'#2980B9',
      secondary: '#E74C3C', // Vibrant Red 
      accent: '#F1C40F', // Bright Yellow 
      background: '#ECF0F1', // Light Gray 
      text: '#2C3E50',// Deep Navy
      htext:'#fffff' ,
          },
    },
  },
  plugins: [],
}


