/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#0A0F1E",
          secondary: "#0D1530",
          card: "#111827",
        },
        accent: {
          primary: "#1E6FFF",
          secondary: "#00C3FF",
        },
        text: {
          primary: "#FFFFFF",
          muted: "#8892A4",
        },
        border: "rgba(41,121,255,0.25)"
      }
    },
  },
  plugins: [],
}
