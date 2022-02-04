module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      rotate: {
        '20': '20deg',
      }
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
}
