/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "968px",
      xl: "1200px",
    },
    fontFamily: {
      primary: "var(--font-jetbrains-mono)"
    },
    extend: { 
      colors: {
        primary: "#1c1c22",
        accent: {
          DEFAULT: "#a35afd",
          hover: "#cdc3ff",
        },
        stair_transp: "#a35afd6a",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        glow: {
          '0%, 100%': { 'text-shadow': '0 0 15px rgba(163, 90, 253, 0.8), 0 0 30px rgba(163, 90, 253, 0.6)' },
          '50%': { 'text-shadow': '0 0 25px rgba(163, 90, 253, 1), 0 0 50px rgba(163, 90, 253, 0.8)' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        glow: "glow 2s infinite ease-in-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
