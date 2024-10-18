/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Montserrat', ...defaultTheme.fontFamily.sans],
        artistic: ['Amatic SC', ...defaultTheme.fontFamily.sans],
        handwriting: ['Italianno', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          50: "#EEF6F0",
          100: "#DAECDE",
          200: "#B5D9BE",
          300: "#90C69D",
          400: "#6EB580",
          500: "#4f9a62",
          600: "#407D4F",
          700: "#2F5B3A",
          800: "#1F3D27",
          900: "#101E13",
          950: "#09110B"
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
