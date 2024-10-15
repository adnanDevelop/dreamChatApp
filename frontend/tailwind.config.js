/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6338F6",
        content: "#72767D",
        light: "#D8DFED",
      },
      boxShadow: {
        "custom-light": "0px 0.5px 10px rgba(0, 0, 0, 0.08)",
      },
      fontFamily: {
        poppin: ["Poppins", "sans-serif"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1240px",
        "2xl": "1500px",
        "3xl": "1620px",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#734cf7",
          content: "#72767D",
        },
      },
    ],
  },
};
