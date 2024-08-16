/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cust-bg-light-brown-color': '#FFF9F2',
        'cust-blue-color': '#6383BA',
        'cust-very-light-blue-color': '#EBF3F0',
        'cust-red-color': '#F38BA0',
        'cust-brown-color': '#705953',
      }
    },
  },
  plugins: [],
}