/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'intellectia-gray': '#22242C',
        'intellectia-darkgray': "#14161A",
        'intellectia-lightgray': '#38383E',
        'intellectia-blue': '#315DA3',
        'intellectia-lightblue': '#448DFF',
        'portugues': '#FC9245',
        'ingles': '#FF4848',
        'geografia': '#955BDF',
        'historia': '#EAE465',
        'filosofia': '#D9A8A8',
        'arte': '#47E1BC',
      },
      keyframes: {
        blink: {
          '0%': { opacity: 0 },
          '45%': { opacity: 0 },
          '50%': { opacity: 1 },
          '95%': { opacity: 1 },
          '100%': { opacity: 0 }
        }
      },
      animation: {
        blink: 'blink 1s infinite'
      }
    },
  },
  plugins: [],
}
