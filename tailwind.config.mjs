/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    // RIVÂRE design system — see design-system/MASTER.md
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },
    extend: {
      colors: {
        paper: '#FBF8F2',
        ivory: '#F1E9DB',
        sand: '#E6DBC8',
        'sand-deep': '#D8CAB2',
        taupe: '#9C8C79',
        'taupe-deep': '#6E6051',
        espresso: '#2A2018',
        'espresso-soft': '#3B2F24',
        ink: '#1E1712',
        caramel: '#B98B4E',
        'caramel-deep': '#8A5E2A',
      },
      fontFamily: {
        display: ['"Fraunces Variable"', 'Fraunces', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['"Jost Variable"', 'Jost', 'ui-sans-serif', 'system-ui', 'Helvetica', 'Arial', 'sans-serif'],
      },
      fontSize: {
        eyebrow: ['0.75rem', { lineHeight: '1', letterSpacing: '0.28em' }],
        meta: ['0.8125rem', { lineHeight: '1.5', letterSpacing: '0.02em' }],
        'display-sm': ['clamp(1.5rem, 1.2rem + 1.4vw, 2.05rem)', { lineHeight: '1.14' }],
        'display-md': ['clamp(1.9rem, 1.4rem + 2.3vw, 2.9rem)', { lineHeight: '1.1' }],
        'display-lg': ['clamp(2.3rem, 1.55rem + 3.1vw, 3.9rem)', { lineHeight: '1.05' }],
        'display-xl': ['clamp(2.7rem, 1.6rem + 4.6vw, 5.4rem)', { lineHeight: '1.0' }],
      },
      letterSpacing: {
        widest2: '0.32em',
      },
      maxWidth: {
        shell: '1440px',
        readable: '68ch',
      },
      spacing: {
        gutter: 'clamp(1.25rem, 5vw, 4rem)',
        section: 'clamp(4.5rem, 9vw, 9rem)',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      zIndex: {
        header: '40',
        'mobile-nav': '80',
        'drawer-backdrop': '60',
        drawer: '70',
        skip: '100',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 42s linear infinite',
      },
    },
  },
  plugins: [],
};
