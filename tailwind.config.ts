import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '360px',
        smx: '375px',
        smxx: '400px',
        smxxx: '430px',
      },
      colors: {
        background: 'var(--background)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
      },
      animation: {
        'pulse-button': 'pulse-button 1.3s ease-in-out infinite',
        'card-flip': 'card-flip 0.4s ease-in-out forwards', // Virada de carta
        'card-fade': 'card-fade 0.3s ease-in-out forwards', // Fade da carta
      },
      keyframes: {
        'pulse-button': {
          '0%': {
            transform: 'scale(1)',
          },
          '50%': {
            transform: 'scale(1.03)',
          },
          '100%': {
            transform: 'scale(1)',
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
