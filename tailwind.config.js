/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        'medieval': {
          50: '#f8f5f0',
          100: '#e8d6c0',
          800: '#8B4513',
          900: '#5c2c0d',
        },
      },
      keyframes: {
        "rotate": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "rotate": "rotate 1s ease-in-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}