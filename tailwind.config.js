/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./styles/**.css", "./**{.html,.js,.css}", "./pages/**{.html,.js,.css}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        dgreen: "#2C3333",
        lgreen: "#C4D8C2",
        dpeach: "#A27B5C",
        lpeach: "#C36839",
        lgrey: "#F2F2F2",
        dgrey: "#BDBDBD",
      },
    },
    plugins: [],
  }
}
