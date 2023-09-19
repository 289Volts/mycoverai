/** @type {import('tailwindcss').Config} */
module.exports = {
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
      fontFamily: {
        space: ["var(--font-space)"],
      },
      backgroundColor: {
        accent: "#47BFA3",
        gray25: "#FAFBFD",
        gray50: "#F9FAFB",
        gray100: "#F2F4F7",
        gray800: "#1D2939",
        gray900: "#101828",
        purple50: "#F4F3FF",
        success50: "#ECFDF3",
        orange50: "#FFF6ED",
        blue50: "#EFF8FF",
      },
      backgroundImage: {
        heading: "linear-gradient(99deg, #000 0%, #47BFA3 94.22%)",
      },
      boxShadow: {
        button: "-0.61698px 0.61698px 7.71222px 0px rgba(0, 0, 0, 0.02)",
        pill: "-2px 2px 25px 0px rgba(0, 0, 0, 0.02)",
        sectors: "0px 4px 6px 0px rgba(0, 0, 0, 0.05)",
        tools: "0px 4px 9px 0px rgba(0, 0, 0, 0.25)",
      },
      colors: {
        accent: "#47BFA3",
        altGray: {
          25: "#FAFBFD",
          50: "#F9FAFB",
          100: "#F2F4F7",
          300: "#D0D5DD",
          600: "#475467",
          700: "#344054",
          800: "#1D2939",
          900: "#101828",
        },
      },
    },
  },
  plugins: [],
};
