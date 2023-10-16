/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      "xsm": "14px",
      "sm": "16px",
      "xmd": "20px",
      "md": "24px",
      "lg": "34px",
      "xl": "60px"
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '575.9px',
        md: '767.9px',
        lg: '991.9px',
        xl: '1200px',
        'xxl': '1400px',
      },
    },
    fontFamily: {
      Inter: ['Inter', "sans-serif"],
      Manrope: ['Manrope', "sans-serif"],
    },
    extend: {
      colors: {
        "dark-gray": "#b7b3bb",
        "light-gray": "#9f9fa0",
        "gray": "#ceccd0",
        "style-bg": "#0f021d",
        "dark-black": "#0c0216",
        "dark": "#ICICIC",
        "black-light": "#969696",
      },
    },
  },
  plugins: [],
}

