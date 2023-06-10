/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/widgets/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/entities/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
    './src/templates/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        md: '2rem',
        xl: '3rem',
      },
      screens: {
        sm: '380px',
        md: '768px',
        xl: '1280px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-exo)'],
      },
    },
    colors: {
      'light-yellow': '#F4ECDF',
      goldenrod: '#FCB302',
      'hot-red': '#F43127',
      'jet-black': '#1A1A1A',
    },
  },
  plugins: [],
};
