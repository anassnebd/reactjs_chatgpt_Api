/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'back-primary': '#101115',
        'gold-primary': '#F6B14A',
        'purple-primary': '#3D469C',
      }
    },
    
  },
  plugins: [],
}