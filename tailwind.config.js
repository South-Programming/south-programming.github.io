/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js,css}", "./src/**/*.{js, css}"],
  theme: {
    fontFamily: {
      'sans': [
        'Inter',
        'sans-serif'

      ],
      
      'mono': [
        'JetBrains Mono',
        'monospace'
      ],

      'icon': [
        'Material Symbols Outlined'
      ]
    },
   
    extend: {
      colors: {
        'mango': '#f3ae23',
        'mango-2': '#c28b1c',
        'mango-3': '#ae5f05'
      }
    },
    animation: {
      fade: 'fadeIn 1.2s ease-in-out',
    },

    keyframes: {
      fadeIn: {
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
    },
  },
  plugins: [],
}

