import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0a0b0d',
        'ink-2': '#131519',
        'ink-3': '#1b1e24',
        ivory: '#f3efe4',
        'ivory-dim': '#c9c4b5',
        gold: '#c8a25c',
        'gold-2': '#e8c987',
        bronze: '#6b4f36',
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
