/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff69b4', // Ein süßes Pink als Beispiel
        secondary: '#f8bbd0',
      },
    },
  },
  plugins: [],
}