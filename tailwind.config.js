/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", 
            "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        firaSans: ['"Fira Sans"'],
        workSans: ['"Work Sans"'],
      },
    },
  },
  plugins: [],
};
