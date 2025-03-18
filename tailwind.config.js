/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    screens: {
      'sm': '576px',
      'md': '1024px',
      'lg': '1440px',
    },
  },
  plugins: [],
}

