// @type {import('tailwindcss').Config}
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "360px",
      sm: "480px",
      md: "790px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      // Optional custom named aliases
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
    extend: {
      fontWeight: {
        ultra: "1000",
      },
      backgroundImage: {
        "mint-gradient": "linear-gradient(to bottom, #7CB4AB, #C0DAD6)",
        "mint-gradient-light": "linear-gradient(to bottom, #FFFF, #B3DAD5)",
        "beige-gradient": "linear-gradient(to bottom, #FFFFF, #E8DEDB)",
      },
      backgroundColor: {
        "dark-green": "#49978b",
        beige: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
