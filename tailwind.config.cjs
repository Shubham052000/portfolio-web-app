/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0f172a",
        card: "#121e35",
        primary: "#cbd5e1",
        secondary: "#94a3b8",
        light: "#94a3b838",
        "accented-dark": "#0c3a37",
        "accented-low": "#14b8a6",
        "accented-high": "#5eead4",
      },
    },
  },
  plugins: [],
};
