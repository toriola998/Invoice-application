/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // This overrides the default 'sans' font stack
        sans: ['NeueHaas', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
       colors: {
         'black': '#1F1F23',
         'blue-10': '#003EFF',
         'grey-10': '#E3E6EF',
         'grey-11': '#697598',
         'grey-12': '#F5F6FA',
         'grey-13': '#D9D9E0',
       }
    },
  },
  plugins: [],
}
