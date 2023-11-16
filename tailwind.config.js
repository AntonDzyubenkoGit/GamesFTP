/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    fontSize: {
      xs: ['10px', '100%'],
      sm: ['14px', '100%'],
      base: ['18px', '100%'],
      lg: ['32px', '100%'],
      xl: ['64px', '100%'],
    },
    extend: {
      fontFamily:{
        regular: ['RobotoCondensed-Regular'],
        bold : ['RobotoCondensed-Bold'],
      },
      colors: {
        primary: '#505050',
        light: '#F0F0F0',
        background: '#F1EEF9',
      },
      boxShadow: {
        card: '2px 4px 4px #505050',
        button: '0px 4px 4px #505050',
      },
      backgroundImage: {
        hero: 'url("assets/images/heroBg.png")',
      },
    },
  },
  plugins: [],
};

