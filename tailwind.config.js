/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: '#0d0d0d',
          900: '#111111',
          800: '#1a1a1a',
          700: '#222222',
          600: '#2a2a2a',
        },
        olive: {
          900: '#1f2a21',
          800: '#2B3A2E',
          700: '#364739',
        },
        champagne: {
          50: '#fbf6ec',
          100: '#f3e9d2',
          200: '#e8d4a8',
          300: '#dcc085',
          400: '#d0ac6f',
          500: '#C9A96E',
          600: '#b08f54',
          700: '#8f7041',
          800: '#6e5532',
          900: '#4d3b23',
        },
        cream: {
          50: '#FBF8F2',
          100: '#F5F0E8',
          200: '#EDE6D8',
          300: '#B8B4AC',
          400: '#9a958c',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'serif'],
        sans: ['Inter', '"DM Sans"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        ultra: '0.4em',
      },
      animation: {
        'fade-up': 'fadeUp 1s ease-out forwards',
        'spin-slow': 'spin 200s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
