/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'red-tone-500': '#ff416c',
        'red-tone-600': '#ff4b2b',
      },
      fontFamily: {
        vt323: ['var(--font-vt323)'],
        'press-start-2p': ['var(--font-press-start-2p)'],
      },
      keyframes: {
        'move-before': {
          'from': { transform: 'translate(0, 0)' },
          'to': { transform: 'translate(100px, 100px)' },
        },
        'move-after': {
          'from': { transform: 'translate(0, 0)' },
          'to': { transform: 'translate(-100px, -100px)' },
        },
      },
      animation: {
        'move-before': 'move-before 10s infinite alternate',
        'move-after': 'move-after 10s infinite alternate',
      },
    },
  },
  plugins: [],
}
