/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Inter', 'sans-serif'],
      'serif': ['Merriweather', 'serif'],
      'mono': ['JetBrains Mono', 'monospace'],
      'poppins': ['Poppins', 'sans-serif'],
      'sourcesanspro': ['Source Sans Pro', 'sans-serif'],
      'opensans': ['Open Sans', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif'],

    }
  },
  plugins: [require("tailwind-scrollbar-hide")],
}

