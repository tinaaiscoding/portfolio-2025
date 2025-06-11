module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // Enables 'dark' mode with the 'dark' class
  theme: {
    borderRadius: {
      sm: 'var(--radius--small)',
      DEFAULT: 'var(--radius--main)',
      full: 'var(--radius--round)',
    },
    borderWidth: {
      DEFAULT: 'var(--border-width--main)',
    },
    colors: {
      brand: {
        main: 'var(--color--brand-main)',
        dark: 'var(--color--brand-dark)',
        light: 'var(--color--brand-light)',
        secondary: 'var(--color--brand-secondary)',
      },
      dark: 'var(--color--dark)',
      'dark-faded': 'var(--color--dark-faded)',
      light: 'var(--color--light)',
      'light-faded': 'var(--color--light-faded)',
      transparent: 'var(--color--transparent)',
    },
    container: {
      center: true,
      padding: 'var(--site--gutter, 1.25rem)',
      screens: {
        sm: '20rem',
        DEFAULT: 'var(--site--width, 90rem)',
      },
    },
    spacing: {
      // Spacing scale - This uses fluid sizes
      0: 'var(--size--0rem)',
      0.125: 'var(--size--0-125rem)',
      0.25: 'var(--size--0-25rem)',
      0.375: 'var(--size--0-375rem)',
      0.5: 'var(--size--0-5rem)',
      0.75: 'var(--size--0-75rem)',
      1: 'var(--size--1rem)',
      1.25: 'var(--size--1-25rem)',
      1.5: 'var(--size--1-5rem)',
      2: 'var(--size--2rem)',
      2.5: 'var(--size--2-5rem)',
      3: 'var(--size--3rem)',
      3.5: 'var(--size--3-5rem)',
      4: 'var(--size--4rem)',
      4.5: 'var(--size--4-5rem)',
      5: 'var(--size--5rem)',
      6: 'var(--size--6rem)',
      7: 'var(--size--7rem)',
      8: 'var(--size--8rem)',
      9: 'var(--size--9rem)',
      10: 'var(--size--10rem)',
      12: 'var(--size--12rem)',
      14: 'var(--size--14rem)',
      16: 'var(--size--16rem)',
    },
    extend: {
      fontFamily: {
        primary: ['var(--_typography---font--primary-family)', 'sans-serif'],
        secondary: [
          'var(--_typography---font--secondary-family)',
          'sans-serif',
        ],
      },
      fontSize: {
        'text-small': [
          'var(--_typography---font-size--text-small)',
          { lineHeight: 'var(--_typography---line-height--text-small)' },
        ],
        'text-main': [
          'var(--_typography---font-size--text-main)',
          { lineHeight: 'var(--_typography---line-height--text-main)' },
        ],
        'text-large': [
          'var(--_typography---font-size--text-large)',
          { lineHeight: 'var(--_typography---line-height--text-large)' },
        ],
        'text-h1': [
          'var(--_typography---font-size--h1)',
          { lineHeight: 'var(--_typography---line-height--h1)' },
        ],
        'text-h2': [
          'var(--_typography---font-size--h2)',
          { lineHeight: 'var(--_typography---line-height--h3)' },
        ],
        'text-h3': [
          'var(--_typography---font-size--h3)',
          { lineHeight: 'var(--_typography---line-height--h2)' },
        ],
        'text-h4': [
          'var(--_typography---font-size--h4)',
          { lineHeight: 'var(--_typography---line-height--h4)' },
        ],
        'text-h5': [
          'var(--_typography---font-size--h5)',
          { lineHeight: 'var(--_typography---line-height--h5)' },
        ],
        'text-h6': [
          'var(--_typography---font-size--h6)',
          { lineHeight: 'var(--_typography---line-height--h6)' },
        ],
        'text-display': [
          'var(--_typography---font-size--display)',
          { lineHeight: 'var(--_typography---line-height--display)' },
        ],
      },
      spacing: {
        // Fluid padding - This uses fluid sizes
        'fl-p-1': 'var(--_spacing---space--1)',
        'fl-p-2': 'var(--_spacing---space--2)',
        'fl-p-3': 'var(--_spacing---space--3)',
        'fl-p-4': 'var(--_spacing---space--4)',
        'fl-p-5': 'var(--_spacing---space--5)',
        'fl-p-6': 'var(--_spacing---space--6)',
        'fl-p-7': 'var(--_spacing---space--7)',
        'fl-p-8': 'var(--_spacing---space--8)',
        // Section spacing - This uses fluid sizes
        'section-none': 'var(--_spacing---section-space--none)',
        'section-small': 'var(--_spacing---section-space--small)',
        'section-main': 'var(--_spacing---section-space--main)',
        'section-large': 'var(--_spacing---section-space--large)',
        'section-page-top': 'var(--_spacing---section-space--page-top)',
      },
      width: {
        // Column widths
        'col-w-1': 'var(--column-width--1)',
        'col-w-2': 'var(--column-width--2)',
        'col-w-3': 'var(--column-width--1)',
        'col-w-4': 'var(--column-width--4)',
        'col-w-5': 'var(--column-width--5)',
        'col-w-6': 'var(--column-width--6)',
        'col-w-7': 'var(--column-width--7)',
        'col-w-8': 'var(--column-width--8)',
        'col-w-9': 'var(--column-width--9)',
        'col-w-10': 'var(--column-width--10)',
        'col-w-11': 'var(--column-width--11)',
        'col-w-12': 'var(--column-width--12)',
        // Column + margin widths
        'col-mar-w-1': 'var(--column-margin--1)',
        'col-mar-w-2': 'var(--column-margin--2)',
        'col-mar-w-3': 'var(--column-margin--3)',
        'col-mar-w-4': 'var(--column-margin--4)',
        'col-mar-w-5': 'var(--column-margin--5)',
        'col-mar-w-6': 'var(--column-margin--6)',
        'col-mar-w-7': 'var(--column-margin--7)',
        'col-mar-w-8': 'var(--column-margin--8)',
        'col-mar-w-9': 'var(--column-margin--9)',
        'col-mar-w-10': 'var(--column-margin--10)',
        'col-mar-w-11': 'var(--column-margin--11)',
        'col-mar-w-12': 'var(--column-margin--12)',
      },
    },
  },
  plugins: [],
};
