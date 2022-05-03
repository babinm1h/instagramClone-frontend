module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainGray: "#8e8e8e",
        mainBlue: "#0095f6",
        borderGray: '#dbdbdb'
      },
      zIndex: {
        "1": 1,
        "2": 2,
        "3": 3
      },
      screens: {
        xs: "480px"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'), require('@tailwindcss/line-clamp'),
  ],
}