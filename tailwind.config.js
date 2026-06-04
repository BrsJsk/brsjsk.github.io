/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
    `./src/shared/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        link: 'var(--color-link)',
        primary: 'var(--color-primary)',
        accent: 'var(--color-accent)',
        highlight: 'var(--color-highlight)',
        muted: 'var(--color-muted)',
        white: 'var(--color-white)',
      },
    },
  },
  plugins: [],
};
