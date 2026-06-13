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
        // Mighty Elders palette
        me: {
          ink: "#15243B",
          primary: "#0F4C5C",
          "primary-dk": "#08323E",
          accent: "#C97B3D",
          paper: "#FBF8F2",
          "paper-alt": "#F3EFE4",
          emerald: "#3F704D",
          ruby: "#A1383A",
        },
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "serif"],
        sans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
