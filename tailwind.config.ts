import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
      },
      backdropBlur: {
        xs: '2px',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        // Dark mode first design
        background: 'hsl(222.2 84% 4.9%)', // #0f172a
        foreground: 'hsl(210 40% 98%)', // #ffffff
        card: {
          DEFAULT: 'hsl(222.2 84% 4.9%)', // #0f172a
          foreground: 'hsl(210 40% 98%)',
        },
        popover: {
          DEFAULT: 'hsl(222.2 84% 4.9%)',
          foreground: 'hsl(210 40% 98%)',
        },
        primary: {
          DEFAULT: 'hsl(239 84% 67%)', // #4f46e5 (indigo)
          foreground: 'hsl(210 40% 98%)',
        },
        secondary: {
          DEFAULT: 'hsl(215 32% 27%)', // #334155
          foreground: 'hsl(210 40% 98%)',
        },
        muted: {
          DEFAULT: 'hsl(215 32% 27%)',
          foreground: 'hsl(215 20.2% 65.1%)', // #64748b
        },
        accent: {
          DEFAULT: 'hsl(160 84% 39%)', // #10b981 (emerald)
          foreground: 'hsl(210 40% 98%)',
        },
        destructive: {
          DEFAULT: 'hsl(0 84% 60%)',
          foreground: 'hsl(210 40% 98%)',
        },
        warning: {
          DEFAULT: 'hsl(38 92% 50%)', // #f59e0b (amber)
          foreground: 'hsl(210 40% 98%)',
        },
        border: 'hsl(215 27.9% 16.9%)', // #1e293b
        input: 'hsl(215 27.9% 16.9%)',
        ring: 'hsl(239 84% 67%)',
        chart: {
          '1': 'hsl(239 84% 67%)', // primary
          '2': 'hsl(160 84% 39%)', // accent
          '3': 'hsl(38 92% 50%)', // warning
          '4': 'hsl(346 87% 43%)', // red
          '5': 'hsl(262 83% 58%)', // purple
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in': {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.3s ease-out',
        'slide-in': 'slide-in 0.3s ease-out',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
