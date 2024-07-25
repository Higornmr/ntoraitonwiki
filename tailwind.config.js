/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ninja: ['Ninja Naruto', 'sans-serif']
      },
      boxShadow: {
        'custom-color': '4px 4px 6px -1px rgba(0, 253, 237, 0.2)',
      }
    },
  },
  variants: {
    extend: {
      boxShadow: ['hover'],
    }
  },
  plugins: [],
}

