/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-yellow': '#FFD700',
        'custom-red': '#FF4136',
        'custom-orange': '#FF851B',
        'custom-blue': '#0074D9',
        'custom-violet': '#B10DC9',
        'custom-green': '#2ECC40',
      }
    },
  },
  plugins: [],
}