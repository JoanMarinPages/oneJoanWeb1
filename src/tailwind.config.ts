
import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        body: ['var(--font-inter)', 'sans-serif'],
        headline: ['var(--font-space-grotesk)', 'sans-serif'],
      },
      colors: {
        'hero-dark': '#030303',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
         "tilt": {
          "0%, 50%, 100%": { "transform": "rotate(0deg)" },
          "25%": { "transform": "rotate(0.5deg)" },
          "75%": { "transform": "rotate(-0.5deg)" }
        },
        'scroll-y': {
            '0%': { transform: 'translateY(0)' },
            '100%': { transform: 'translateY(calc(-100% + 700px))' },
        },
        "shape-float-1": {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "50%": { transform: "translate(20px, 40px) rotate(20deg)" }
        },
        "shape-float-2": {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "50%": { transform: "translate(-30px, 10px) rotate(-15deg)" }
        },
        "shape-float-3": {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "50%": { transform: "translate(10px, -30px) rotate(10deg)" }
        },
        "car-success": {
          "0%": { offsetPath: "path('M 60,11 C 115,11 115,60 95,60 C 75,60 75,80 95,80 C 115,80 115,109 60,109 C 5,109 5,80 25,80 C 45,80 45,60 25,60 C 5,60 5,11 60,11 Z')", motionRotation: "auto" },
        },
        "car-fail-1": {
          "0%": { transform: 'translate(60px, 11px) rotate(0deg)' },
          "20%": { transform: 'translate(100px, 30px) rotate(90deg)' },
          "100%": { transform: 'translate(110px, 20px) rotate(100deg)' },
        },
        "car-fail-2": {
          "0%": { transform: 'translate(60px, 11px) rotate(0deg)' },
          "40%": { transform: 'translate(95px, 80px) rotate(180deg)' },
          "60%": { transform: 'translate(85px, 95px) rotate(220deg)' },
          "100%": { transform: 'translate(80px, 105px) rotate(230deg)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'tilt': 'tilt 10s infinite linear',
        'scroll-y': 'scroll-y 40s linear infinite',
        'shape-float-1': 'shape-float-1 15s ease-in-out infinite',
        'shape-float-2': 'shape-float-2 18s ease-in-out infinite',
        'shape-float-3': 'shape-float-3 12s ease-in-out infinite',
        'car-success': 'car-success 12s linear infinite',
        'car-fail-1': 'car-fail-1 5s ease-in-out infinite',
        'car-fail-2': 'car-fail-2 8s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
