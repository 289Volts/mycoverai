/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        space: ["var(--font-space)"],
      },
      backgroundColor: {
        accent: "#47BFA3",
        gray25: "#FAFBFD",
        gray50: "#F9FAFB",
        gray100: "#F2F4F7",
        gray200: "#EAECF0",
        gray800: "#1D2939",
        gray900: "#101828",
        purple50: "#F4F3FF",
        success50: "#ECFDF3",
        orange50: "#FFF6ED",
        blue50: "#EFF8FF",
        sideNav: "#070707",
      },
      backgroundImage: {
        heading: "linear-gradient(99deg, #000 0%, #47BFA3 94.22%)",
      },
      boxShadow: {
        button: "-0.61698px 0.61698px 7.71222px 0px rgba(0, 0, 0, 0.02)",
        pill: "-2px 2px 25px 0px rgba(0, 0, 0, 0.02)",
        sectors: "0px 4px 6px 0px rgba(0, 0, 0, 0.05)",
        tools: "0px 4px 9px 0px rgba(0, 0, 0, 0.25)",
        accordion: "0px 1px 2px 0px rgba(0, 0, 0, 0.18)",
        timeFilter: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
      },
      colors: {
        accent: "#47BFA3",
        altGray: {
          25: "#FAFBFD",
          40: "#757B8C",
          50: "#F9FAFB",
          100: "#F2F4F7",
          200: "#EAECF0",
          300: "#D0D5DD",
          400: "#98A2B3",
          500: "#667085",
          600: "#475467",
          700: "#344054",
          800: "#1D2939",
          900: "#101828",
        },
        black: "#1E1F20",
        dark: "#141518",
        text1: "#323B4B",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },

  plugins: [require("tailwindcss-animate")],
};
