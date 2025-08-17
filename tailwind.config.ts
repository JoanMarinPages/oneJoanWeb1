
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
        "gradient-animation": {
          "0%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
          "100%": { "background-position": "0% 50%" }
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
        "rl-speed-bar": {
          "0%, 100%": { width: "20%" },
          "50%": { width: "95%" }
        },
        "rl-abs": {
          "0%, 100%": { fillOpacity: "0.5" },
          "50%": { fillOpacity: "1" }
        },
        "rl-steering": {
          "0%, 100%": { transform: "translateX(500%)" },
          "50%": { transform: "translateX(calc(100% - 500%))" }
        },
        "rl-gyro": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'gradient-animation': 'gradient-animation 5s ease-in-out infinite',
        'tilt': 'tilt 10s infinite linear',
        'scroll-y': 'scroll-y 40s linear infinite',
        'shape-float-1': 'shape-float-1 15s ease-in-out infinite',
        'shape-float-2': 'shape-float-2 18s ease-in-out infinite',
        'shape-float-3': 'shape-float-3 12s ease-in-out infinite',
        'rl-speed-bar': 'rl-speed-bar 3s ease-in-out infinite',
        'rl-abs-1': 'rl-abs 0.5s linear infinite',
        'rl-abs-2': 'rl-abs 0.7s linear infinite reverse',
        'rl-abs-3': 'rl-abs 0.6s linear infinite',
        'rl-abs-4': 'rl-abs 0.4s linear infinite reverse',
        'rl-steering': 'rl-steering 5s ease-in-out infinite',
        'rl-gyro': 'rl-gyro 10s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
