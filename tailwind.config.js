/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        minota: {
          primary: "#4e56aa",

          secondary: "#262437",

          accent: "#d8d5d6",

          neutral: "#f5f6fb",

          "base-100": "#1d232a",

          info: "#4ade80",

          success: "#22d3ee",

          warning: "#fbbd23",

          error: "#f87272",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
};
