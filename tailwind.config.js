/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'spotify-green':'#1db954',
        'spotify-black': {
          100: '#212121',
          200:'#121212',
        },
        'spotify-gray': {
          100:'#535353',
          200:'#b3b3b3'
        }
      }
    },
  },
  plugins: [],
}
