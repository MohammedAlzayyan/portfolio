/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './app/features/**/*.{js,jsx}',
    './app/components/**/*.{js,jsx}',
    './app/layouts/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        black: {
          light: '#404652',
          DEFAULT: '#282f3c',
          dark: '#111827',
        },
        gray: {
          dark: '#888b93',
          DEFAULT: '#b7b9be',
          light: '#e7e7e9',
        },
        red: {
          DEFAULT: '#EE404C',
        },
        bright: {
          DEFAULT: '#09EAF2',
        },
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}
