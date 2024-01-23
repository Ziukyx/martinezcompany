const formsPlugin = require('@tailwindcss/forms')
const headlessuiPlugin = require('@headlessui/tailwindcss')
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode:"class",
  theme: {
    fontFamily:{
      perfetto: ["Perfetto", "sans-serif"],
      aeonik: ["Aeonik", "sans-serif"],
    },
      extend: {
      screens: {
        'xxs': '300px',
        'xs': '400px',
        'xs2': '427px',
      },
      keyframes: {
        'spin-reverse': {
          to: {
            transform: 'rotate(-360deg)',
          },
        },
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        'gradient-foreground-1': {
          'from, 16.667%, to': {
            opacity: 1,
          },
          '33.333%, 83.333%': {
            opacity: 0,
          },
        },
        'gradient-background-1': {
          'from, 16.667%, to': {
            opacity: 0,
          },
          '25%, 91.667%': {
            opacity: 1,
          },
        },
        'gradient-foreground-2': {
          'from, to': {
            opacity: 0,
          },
          '33.333%, 50%': {
            opacity: 1,
          },
          '16.667%, 66.667%': {
            opacity: 0,
          },
        },
        'gradient-background-2': {
          'from, to': {
            opacity: 1,
          },
          '33.333%, 50%': {
            opacity: 0,
          },
          '25%, 58.333%': {
            opacity: 1,
          },
        },
        'gradient-foreground-3': {
          'from, 50%, to': {
            opacity: 0,
          },
          '66.667%, 83.333%': {
            opacity: 1,
          },
        },
        'gradient-background-3': {
          'from, 58.333%, 91.667%, to': {
            opacity: 1,
          },
          '66.667%, 83.333%': {
            opacity: 0,
          },
        },
        'gradient': {
          to: { 'background-position': '200% center' },
        }
      },
      animation: {
        text: 'text 5s ease infinite',
        spotlight: "spotlight 1s ease .75s 1 forwards",
        'spin-slow': 'spin 5s linear infinite',
        'gradient-background-1': 'gradient-background-1 2s infinite',
        'gradient-foreground-1': 'gradient-foreground-1 2s infinite',
        'gradient-background-2': 'gradient-background-2 2s infinite',
        'gradient-foreground-2': 'gradient-foreground-2 2s infinite',
        'gradient-background-3': 'gradient-background-3 2s infinite',
        'gradient-foreground-3': 'gradient-foreground-3 2s infinite',
        'gradient': 'gradient 5s linear infinite',
        'spin-slow': 'spin 5s linear infinite',
        marquee: 'marquee var(--marquee-duration) linear infinite',
        'spin-slow': 'spin 4s linear infinite',
        'spin-slower': 'spin 6s linear infinite',
        'spin-reverse': 'spin-reverse 1s linear infinite',
        'spin-reverse-slow': 'spin-reverse 4s linear infinite',
        'spin-reverse-slower': 'spin-reverse 6s linear infinite',
      },
      
    
      colors:{
        navbarText: '#567db3',
        navbarTextHover: '#b49cd0',
        lilac: '#462681',
        lightBlue: '#7da7d9',
        boton1: '#93c5fd',
        boton2: '#00B6C4',
        boton3: '#00709C',
        boton4: '#FFA9E0',
        boton5: '#43C0E9',
        lightLilac: '#8d81b8',
        lightestBlue: '#B6C6EA',
        lightestLilac: '#ADAECC',
        darkBlue: '#1c2f59',
        darkLilac: '#3a3d6a',
        fondo: '#111827'
      },
      boxShadow: {
        'custom': '5px 0 15px 2px hsla(2,0%,75%,.3)',
      },
    }
    },
  plugins: [
    require('taos/plugin', '@tailwindcss/aspect-ratio'),
    formsPlugin, headlessuiPlugin],
    addVariablesForColors,
}

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
  
  addBase({
    ":root": newVars,
  });
 }
 