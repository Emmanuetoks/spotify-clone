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
          300:'rgba(22, 22, 23, .8)', 
          400:'#282828',
          500:'#242424',
          600:'#181818',
          700:'#3e3e3e',
          800:'#272727',
          900:'#2d2d2d',
          x:'#121212'
        },
        'spotify-gray': {
          100:'#535353',
          200:'#b3b3b3',
          300:'#4f4f4f',
          400:'#252525',
          500:'#121212',
          600:'#a0a0a0',
          700:'#737373',
          800:'#a7a7a7',
          900:'#ffffffb3',
        },

        "spotify-transparent-black": '#08070a'
      }
    },
  },
  //
  //Input outline color #535353
  // #282828
  //#3e3e3e --- input bg
  // #3e3e3e
// #282828--Playlist picture
//Install App #242424
//Navigation btn bg-inactive #2d2d2d
//Card Hover colo #252525
//Plylist card color #181818
  plugins: [],
}
