import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          black: '#000000',
          white: '#ffffff',
        },
        secondary: {
          blue: '#1E90FF',
          purple: '#8A2BE2',
        },
      },
      screens: {
        mobile: '415px',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
export default config;
