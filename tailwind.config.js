/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#B8965A",
          light: "#F5EDD8",
        },
        navy: {
          DEFAULT: "#1B2B3A",
        },
        cream: "#FAF8F4",
        muted: "#6B6B6B",
        "border-main": "#E2D9C8",
        tier1: "#2E7D52",
        tier2: "#1E5490",
        tier3: "#7B3FA0",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "serif"],
        sans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
