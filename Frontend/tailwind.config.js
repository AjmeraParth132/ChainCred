/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'custom': '0px 4px 4px 0px',
      },
      colors: {
        'custom-bg': '#2D3250',
        
      },
      
    },
  },
  darkMode: "class",
  plugins: [
    require("daisyui"),
  ],
  daisyui: {
    themes: [], // Specify the themes you want to use
  },
}

