module.exports = {
  mode:"jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      bc: "#050D21",
      header: "#030c23",
      primary: "#FFFDFB",
      secondary: "#e5f411",
      danger: "#1A67F8",
      lightGrey: "#C9D5EE",
    },
    fontFamily: {
      Dongle: ['Dongle', "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
}