/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pupleOne: '#3e2a60',
        pupleTwo: '#321061',
        darkPurple: '#191321'
      },
    },
  },
  plugins: [],
}

