/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0f172a",
        card: "#1e293b",
        primary: "#cbd5e1",
        secondary: "#94a3b8",
        "accented-dark": "#134e4a",
        "accented-low": "#14b8a6",
        "accented-high": "#5eead4",
      },
    },
  },
  plugins: [],
};
