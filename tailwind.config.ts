import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      keyframes: {
        fadeTopBottom: {
          '0%': {
            transform: 'translateY(0%)',
          },
          '10%': {
            transform: 'translateY(10%)',
          },
          '20%': {
            transform: 'translateY(20%)',
          },
          '30%': {
            transform: 'translateY(30%)',
          },
          '40%': {
            transform: 'translateY(40%)',
          },
          '50%': {
            transform: 'translateY(50%)',
          },
          '60%': {
            transform: 'translateY(60%)',
          },
          '70%': {
            transform: 'translateY(70%)',
          },
          '80%': {
            transform: 'translateY(80%)',
          },
          '90%': {
            transform: 'translateY(90%)',
          },
          '100%': {
            transform: 'translateY(100%)',
          }
        }
      },
      animation: {
        'fade-tb': 'fadeTopBottom 2s infinite'
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}
export default config
