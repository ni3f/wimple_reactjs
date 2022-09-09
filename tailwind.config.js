/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#04004d",
        secondary: "#00d385",
        subtitle: "#303030",
        offwhite: "#f9f9f9",
        searchbordercolor: "#cfd8e3"
      }
    }
  },
  plugins: []
};
