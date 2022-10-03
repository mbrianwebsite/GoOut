/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: { poppins: ["Poppins", "sans-serif"] },
      colors: { primary: "#3258E8" },
      dropShadow: { cta: "0 4px 4px rgba(0, 0, 0, 0.25)" },
    },
  },
  plugins: [],
};
