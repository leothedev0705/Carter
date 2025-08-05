import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Carter Chaos Modern Streetwear Brand Colors
        primary: {
          orange: '#C46A3E',
          'orange-dark': '#B05A2E',
          'orange-light': '#D47A4E',
        },
        charcoal: {
          DEFAULT: '#2C2C2C',
          light: '#3A3A3A',
          dark: '#1A1A1A',
        },
        beige: {
          DEFAULT: '#F4E9D8',
          secondary: '#E9DFC8',
          tertiary: '#F0E6D0',
        },
        white: {
          DEFAULT: '#FFFFFF',
        },
        gray: {
          50: '#F9F9F9',
          100: '#F1F1F1',
          200: '#E6E6E6',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        // Dark theme colors (keeping for potential dark mode)
        dark: {
          bg: '#000000',
          'bg-secondary': '#111111',
          'bg-tertiary': '#1A1A1A',
          text: '#FFFFFF',
          'text-secondary': '#B3B3B3',
          border: '#333333',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #C46A3E, 0 0 10px #C46A3E, 0 0 15px #C46A3E' },
          '100%': { boxShadow: '0 0 10px #C46A3E, 0 0 20px #C46A3E, 0 0 30px #C46A3E' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'orange-gradient': 'linear-gradient(135deg, #C46A3E 0%, #B05A2E 100%)',
        'beige-gradient': 'linear-gradient(135deg, #F4E9D8 0%, #E9DFC8 100%)',
      },
      boxShadow: {
        'orange': '0 0 20px rgba(196, 106, 62, 0.3)',
        'orange-lg': '0 0 40px rgba(196, 106, 62, 0.4)',
        'button': '0 4px 6px -1px rgba(44, 44, 44, 0.1), 0 2px 4px -1px rgba(44, 44, 44, 0.06)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config 