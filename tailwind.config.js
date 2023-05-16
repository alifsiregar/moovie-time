/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bgGray: {
          100: '#292e36',
          200: '#1E232B',
          300: '#24282f',
          400: '#15191e',
        },
        textWhite: '#E5E5E5',
      }
    }
  },
  plugins: [],
}
