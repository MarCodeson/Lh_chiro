import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: 'var(--accent)'
      },
      maxWidth: {
        content: '110rem'
      },
      boxShadow: {
        soft: '0 4px 24px rgba(0,0,0,0.06)'
      }
    },
  },
  plugins: [],
} satisfies Config
