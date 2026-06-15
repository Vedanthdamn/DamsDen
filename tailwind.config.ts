import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        void: '#050508',
        silver: '#E8EAF0',
        dim: 'rgba(232,234,240,0.45)',
        ghost: 'rgba(232,234,240,0.08)',
        mist: 'rgba(232,234,240,0.15)',
        surface: '#0C0C10',
        edge: 'rgba(232,234,240,0.1)',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        label: ['Cinzel', 'serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config
