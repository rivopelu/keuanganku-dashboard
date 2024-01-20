/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        primary: {
          main: "#4CA154",
          light: "#5AC564",
          dark: "#38873F",
        },
        system: {
          base_bg: "#F6F8FA",
          body: "#5A6367",
          text_light_gray: "#B8B8B8",
        },
      },
    },
  },
  plugins: [],
};
