/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        background: {
          deep: 'rgb(var(--bg-deep) / <alpha-value>)',
          card: 'rgb(var(--bg-card) / <alpha-value>)',
        },
        brand: {
          red: '#E53E3E',
          navy: '#1A365D',
          crimson: '#4A1521',
        },
        text: {
          primary: 'rgb(var(--text-primary) / <alpha-value>)',
          secondary: 'rgb(var(--text-secondary) / <alpha-value>)',
        },
        soft: 'rgb(var(--soft) / <alpha-value>)',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        aura: '0 0 0 1px rgba(229,62,62,0.12), 0 16px 40px -12px rgba(26,54,93,0.18)',
        'aura-lg': '0 0 0 1px rgba(229,62,62,0.18), 0 24px 60px -14px rgba(26,54,93,0.25)',
      },
      backgroundImage: {
        'radial-crimson':
          'radial-gradient(circle at 50% 0%, rgba(229,62,62,0.07) 0%, rgba(255,255,255,0) 60%)',
      },
      scale: {
        103: '1.03',
        105: '1.05',
      },
    },
  },
  plugins: [],
}
