/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', 
  content: [
    './src/**/*.{html,js,svelte,ts}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#43807A'
      }
    },
  },
  plugins: [
    function({ addBase, theme }) {
      addBase({
        ':root': {
          '--color-bg': '#f7f7f7',
          '--color-text': '#111111',
          '--color-accent': theme('colors.accent'),
        },
        '.dark': {
          '--color-bg': '#1e1e1e',
          '--color-text': '#f1f1f1',
          '--color-accent': '#ff6b6b',
        },
        'body': {
          'background-color': 'var(--color-bg)',
          'color': 'var(--color-text)',
        },
      });
    }
  ],
};