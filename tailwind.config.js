/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    fontFamily: {
      'display': ['Roboto'],
    },
    colors: {
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      darkGray: 'var(--dark-gray)',
      midGray: 'var(--mid-gray)',
      lightGray: 'var(--light-gray)',
      glassmorph: 'var(--card-glassmorph)'
    }
  },
};
export const plugins = [];
