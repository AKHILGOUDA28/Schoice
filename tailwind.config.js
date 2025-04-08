/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // scans your React components
    "./public/index.html"         // optional, for HTML in public folder
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8',
        secondary: '#9333EA',
        accent: '#F59E0B',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),    // for prose classes
    require('@tailwindcss/forms'),         // for better form styles
    require('@tailwindcss/aspect-ratio'),  // for aspect-ratio utilities
  ],
}
