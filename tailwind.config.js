/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1.5rem",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "primary-bg": "#F5F6FA",
        "purple-primary": "#5358B6",
        "trash-bin": "#E86261",
        "like-btn-color": "#F5F6FA",
        "gray-primary": "#666A6D",
      },
    },
  },
  plugins: [],
};
