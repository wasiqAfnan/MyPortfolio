/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'hero-bg': '#191129',
        'about-bg': '#140f1f',
        'primary-btn': '#2a33d3',
        'secondary-btn': '#12c2a6',
        'project-border-1': '#9255f6',
        'project-border-2': '#00ffff',
        'project-border-3': '#12c2a9',
        'react-tag': '#3345ff',
        'js-tag': '#f9cc3d',
        'express-tag': '#34a853',
        'tailwind-tag': "#ff7f11"
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        portfolio: {
          "primary": "#2a33d3",
          "secondary": "#12c2a6",
          "accent": "#9255f6",
          "neutral": "#191129",
          "base-100": "#140f1f",
          "info": "#00ffff",
          "success": "#12c2a6",
          "warning": "#f9cc3d",
          "error": "#ff6b6b",
        },
      },
    ],
  },
} 