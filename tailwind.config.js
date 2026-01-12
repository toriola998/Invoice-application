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
         'grey-14': '#F8F8FB',
         'grey-15': '#666F77',
         'grey-16': '#A1B8FF33',
         'dark-grey': '#373B47',
         'green-10': '#E6FFF0',
         'green-11': '#12904333',
         'green-12': '#129043',
         'red-10': '#FFF4F5',
         'red-11': '#FF566333',
         'red-12': '#FF5663',
         'light-grey-10': '#F6F8FA',
         'light-grey-12': '#373B4733',
         'yellow-10': '#FFF8EB',
         'yellow-11': '#D98F0033',
         'yellow-12': '#D98F00'
       }
    },
  },
  plugins: [],
}
