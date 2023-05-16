/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        hev: ["Helvetica"],
        rob: ["Roboto"],
        goth: ["League Gothic"],
      },
      rotate: {
        3: "3deg",
        10: "10deg",
      },
    },
  },
  plugins: [],
};
