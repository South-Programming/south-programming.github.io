/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js,css}"],
  theme: {
    fontFamily: {
      'sans': [
        'Inter',
        'sans-serif'

      ],
      
      'mono': [
        'JetBrains Mono',
        'monospace'
      ]
    },
   
    extend: {
      colors: {
        'mango': '#f3ae23'
      }
    },
  },
  plugins: [],
}

