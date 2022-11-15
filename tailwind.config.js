/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(150deg, rgba(14,14,16,1) 45%, rgba(20,50,55,1) 70%, rgba(14,14,16,1) 100%)'
      },
      backgroundColor: {
        'bg-hover': '#161616',
        primary: '#027C91'
      },
      textColor: {
        white: '#FFFFFF',
        primary: '#027C91'
      }
    }
  },
  plugins: []
}
