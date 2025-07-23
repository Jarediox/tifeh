/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./public/Rectangle 12.png')", // Example
        'footer-texture': "url('/images/footer-texture.png')", // Example
      },
    },
  },
  plugins: [],
};