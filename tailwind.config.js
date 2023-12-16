/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'longreach': ['longreach','ui-sans-serif', 'system-ui'],
      'evanston': ['evanston','ui-sans-serif', 'system-ui'],
  },
    extend: {},
  },
  plugins: [],
}

