/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./styles/*.css", "./scripts/*.js", "./pages/*.html", "./*.html"],
  theme: {
    extend: {colors: {'kelp': {
      '50': '#f2f7f3',
      '100': '#e0ebe0',
      '200': '#c3d7c6',
      '300': '#9bbaa1',
      '400': '#6f9878',
      '500': '#4f7a5a',
      '600': '#3b6045',
      '700': '#2f4d37',
      '800': '#273e2d',
      '900': '#223528',
      '950': '#121c16',
  },
  'rust': {
    '50': '#fdf8ed',
    '100': '#f8e9cd',
    '200': '#f0d297',
    '300': '#e9b660',
    '400': '#e39e3c',
    '500': '#db7e25',
    '600': '#ba5b1c',
    '700': '#a1441c',
    '800': '#84361c',
    '900': '#6c2d1b',
    '950': '#3e150a',
}},
    },
    plugins: [],
  }
}
