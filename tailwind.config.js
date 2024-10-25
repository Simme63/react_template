/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3e8548",

      },
      fontFamily: {
        headings: ["Impact", "Roboto"],
        paragraphs: ["Comic Sans", "Calibri"],
        othertext: ["Urbanist", "sans-serif"]
      }
    },
  },
  plugins: [],
}

