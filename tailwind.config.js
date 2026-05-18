/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./app.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  content: ["./src/**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}
