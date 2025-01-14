/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'blue-facebook': '#0866FF',
        'gray-facebook': '#F2F4F7',
        'green-facebook': '#36A420',
      },
      spacing: {
        '580': '580px',
        '380': '380px',
      },
    },
  },
  plugins: [],
}

