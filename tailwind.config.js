/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        champagne: '#F3E2D9',
        dustyRose: '#C6A69C',
        matteBlack: '#111111',
        antiqueGold: '#B28C49'
      },
      fontFamily: {
        serifHeading: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif']
      },
      boxShadow: {
        glow: '0 20px 60px rgba(178, 140, 73, 0.18)'
      },
      backgroundImage: {
        'gold-wave': 'radial-gradient(circle at top, rgba(178,140,73,0.14), transparent 40%)'
      }
    }
  },
  plugins: []
}
