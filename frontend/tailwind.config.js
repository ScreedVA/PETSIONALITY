// @type {import('tailwindcss').Config}
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontWeight: {
        ultra: "1000",
      },
      backgroundImage: {
        "mint-gradient": "linear-gradient(to bottom, #7CB4AB, #C0DAD6)",
        "beige-gradient": "linear-gradient(to bottom, #FFFFF, #E8DEDB)",
      },
    },
  },
  plugins: [],
};
