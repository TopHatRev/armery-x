/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#202020",

          secondary: "#57534e",

          accent: "#FFC800",

          neutral: "#8F857D",

          "base-100": "#DADADA",

          info: "#0284c7",

          success: "#16a34a",

          warning: "#ea580c",

          error: "#b91c1c",
        },
      },
    ],
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
